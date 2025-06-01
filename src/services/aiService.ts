import { getFunctions, httpsCallable } from 'firebase/functions';

interface ResumeData {
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

export const generateResume = async (data: ResumeData): Promise<GeneratedContent> => {
  try {
    const functions = getFunctions();
    const generateResumeFunction = httpsCallable<ResumeData, { success: boolean; resumeId: string; content: GeneratedContent }>(
      functions,
      'generateResume'
    );

    const result = await generateResumeFunction(data);
    
    if (!result.data.success) {
      throw new Error('Failed to generate resume');
    }

    return result.data.content;
  } catch (error) {
    console.error('Error generating resume:', error);
    throw error;
  }
}; 