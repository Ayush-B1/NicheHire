/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import fetch from 'node-fetch';

admin.initializeApp();

interface ResumeRequest {
  name: string;
  jobTitle: string;
  experience: string;
  skills: string;
  workHistory: string;
  tone: string;
}

interface GeneratedContent {
  resume: {
    name: string;
    title: string;
    summary: string;
    experience: Array<{
      title: string;
      company: string;
      period: string;
      highlights: string[];
    }>;
    education: {
      degree: string;
      school: string;
      period: string;
    };
    skills: string[];
  };
  coverLetter: {
    recipient: string;
    body: string;
    closing: string;
  };
}

export const generateResume = functions.https.onCall(async (request: functions.https.CallableRequest<ResumeRequest>) => {
  // Check if user is authenticated
  if (!request.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'User must be authenticated to generate resumes'
    );
  }

  const data = request.data;

  try {
    // Check if user has exceeded free tier limit
    const userDoc = await admin.firestore()
      .collection('users')
      .doc(request.auth.uid)
      .get();

    const userData = userDoc.data();
    const isPro = userData?.plan === 'pro';
    const resumeCount = userData?.resumeCount || 0;

    if (!isPro && resumeCount >= 1) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Free tier limit reached. Please upgrade to Pro to generate more resumes.'
      );
    }

    // Prepare the prompt for the AI model
    const prompt = `You're an expert resume writer. Write a job-specific, ATS-friendly resume and matching cover letter.

User Info:
- Name: ${data.name}
- Job Title: ${data.jobTitle}
- Years of Experience: ${data.experience}
- Skills: ${data.skills}
- Past Experience Summary: ${data.workHistory}
- Tone: ${data.tone}

Generate:
1. A clean, 1-page resume in bullet points (include a professional summary)
2. A personalized cover letter that speaks to a hiring manager

Format the response as a JSON object with the following structure:
{
  "resume": {
    "name": "string",
    "title": "string",
    "summary": "string",
    "experience": [
      {
        "title": "string",
        "company": "string",
        "period": "string",
        "highlights": ["string"]
      }
    ],
    "education": {
      "degree": "string",
      "school": "string",
      "period": "string"
    },
    "skills": ["string"]
  },
  "coverLetter": {
    "recipient": "string",
    "body": "string",
    "closing": "string"
  }
}`;

    // Call Hugging Face API
    const response = await fetch(
      "https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-alpha",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${functions.config().huggingface.key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_length: 2000,
            temperature: 0.7,
            top_p: 0.9,
            return_full_text: false,
            do_sample: true
          }
        }),
      }
    );

    if (!response.ok) {
      throw new functions.https.HttpsError(
        'internal',
        'Failed to generate resume'
      );
    }

    const result = await response.json();
    const generatedText = result[0].generated_text;

    // Extract JSON from the response
    const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new functions.https.HttpsError(
        'internal',
        'Invalid response format from AI model'
      );
    }

    // Parse the generated content
    const generatedContent = JSON.parse(jsonMatch[0]) as GeneratedContent;

    // Save to Firestore
    const resumeRef = admin.firestore()
      .collection('users')
      .doc(request.auth.uid)
      .collection('resumes')
      .doc();

    await resumeRef.set({
      userId: request.auth.uid,
      name: data.name,
      jobTitle: data.jobTitle,
      skills: data.skills.split(',').map(s => s.trim()),
      tone: data.tone,
      resumeContent: generatedContent.resume,
      coverLetterContent: generatedContent.coverLetter,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      isPro: isPro
    });

    // Update user's resume count
    await admin.firestore()
      .collection('users')
      .doc(request.auth.uid)
      .update({
        resumeCount: admin.firestore.FieldValue.increment(1)
      });

    return {
      success: true,
      resumeId: resumeRef.id,
      content: generatedContent
    };

  } catch (error) {
    console.error('Error generating resume:', error);
    throw new functions.https.HttpsError(
      'internal',
      'Failed to generate resume'
    );
  }
});
