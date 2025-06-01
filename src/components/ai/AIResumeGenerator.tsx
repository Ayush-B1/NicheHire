import React, { useState } from 'react';
import { generateResume } from '../../services/aiService';

interface FormData {
  name: string;
  jobTitle: string;
  experience: string;
  skills: string;
  workHistory: string;
  tone: string;
}

export const AIResumeGenerator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    jobTitle: '',
    experience: '',
    skills: '',
    workHistory: '',
    tone: 'professional'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const content = await generateResume(formData);
      setGeneratedContent(content);
    } catch (err) {
      setError('Failed to generate resume. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">AI Resume Generator</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
            Target Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Software Engineer"
          />
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
            Years of Experience
          </label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="5 years"
          />
        </div>

        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
            Key Skills (comma-separated)
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="JavaScript, React, Node.js"
          />
        </div>

        <div>
          <label htmlFor="workHistory" className="block text-sm font-medium text-gray-700">
            Work History Summary
          </label>
          <textarea
            id="workHistory"
            name="workHistory"
            value={formData.workHistory}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Briefly describe your work history and key achievements..."
          />
        </div>

        <div>
          <label htmlFor="tone" className="block text-sm font-medium text-gray-700">
            Writing Tone
          </label>
          <select
            id="tone"
            name="tone"
            value={formData.tone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="formal">Formal</option>
            <option value="creative">Creative</option>
          </select>
        </div>

        {error && (
          <div className="text-red-600 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Resume'}
        </button>
      </form>

      {generatedContent && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Generated Resume</h3>
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="text-lg font-medium mb-2">{generatedContent.resume.name}</h4>
            <p className="text-gray-600 mb-4">{generatedContent.resume.title}</p>
            
            <div className="mb-4">
              <h5 className="font-medium mb-2">Professional Summary</h5>
              <p className="text-gray-700">{generatedContent.resume.summary}</p>
            </div>

            <div className="mb-4">
              <h5 className="font-medium mb-2">Experience</h5>
              {generatedContent.resume.experience.map((exp: any, index: number) => (
                <div key={index} className="mb-3">
                  <p className="font-medium">{exp.title} at {exp.company}</p>
                  <p className="text-gray-600 text-sm">{exp.period}</p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.highlights.map((highlight: string, i: number) => (
                      <li key={i} className="text-gray-700">{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mb-4">
              <h5 className="font-medium mb-2">Education</h5>
              <p className="font-medium">{generatedContent.resume.education.degree}</p>
              <p className="text-gray-600">{generatedContent.resume.education.school}</p>
              <p className="text-gray-600 text-sm">{generatedContent.resume.education.period}</p>
            </div>

            <div>
              <h5 className="font-medium mb-2">Skills</h5>
              <div className="flex flex-wrap gap-2">
                {generatedContent.resume.skills.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-4">Generated Cover Letter</h3>
          <div className="bg-white shadow rounded-lg p-6">
            <p className="mb-4">Dear {generatedContent.coverLetter.recipient},</p>
            <div className="whitespace-pre-line mb-4">
              {generatedContent.coverLetter.body}
            </div>
            <p>{generatedContent.coverLetter.closing}</p>
          </div>
        </div>
      )}
    </div>
  );
}; 