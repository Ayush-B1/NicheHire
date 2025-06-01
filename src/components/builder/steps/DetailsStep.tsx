type DetailsStepProps = {
  formData: {
    skills: string;
    experience: string;
    achievements: string;
    education: string;
    [key: string]: any;
  };
  updateFormData: (data: {
    skills?: string;
    experience?: string;
    achievements?: string;
    education?: string;
  }) => void;
};

const DetailsStep = ({ formData, updateFormData }: DetailsStepProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Experience & Skills</h2>
      <p className="text-gray-700 mb-8">
        Share your professional experience, skills, and achievements. Our AI will organize and
        highlight the most relevant details for your target role.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
            Skills
          </label>
          <textarea
            id="skills"
            value={formData.skills}
            onChange={(e) => updateFormData({ skills: e.target.value })}
            className="input min-h-[100px]"
            placeholder="List your key skills, separated by commas (e.g., Project Management, JavaScript, Team Leadership)"
          />
          <p className="mt-1 text-sm text-gray-500">
            Include both technical and soft skills relevant to your profession
          </p>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Work Experience
          </label>
          <textarea
            id="experience"
            value={formData.experience}
            onChange={(e) => updateFormData({ experience: e.target.value })}
            className="input min-h-[150px]"
            placeholder="Briefly describe your recent roles and responsibilities. Include company names, job titles, and dates if possible."
          />
        </div>

        <div>
          <label htmlFor="achievements" className="block text-sm font-medium text-gray-700 mb-1">
            Key Achievements
          </label>
          <textarea
            id="achievements"
            value={formData.achievements}
            onChange={(e) => updateFormData({ achievements: e.target.value })}
            className="input min-h-[100px]"
            placeholder="Describe specific accomplishments, awards, or measurable results from your work (e.g., increased sales by 20%, reduced costs, improved efficiency)"
          />
          <p className="mt-1 text-sm text-gray-500">
            Quantify your achievements with numbers and percentages when possible
          </p>
        </div>

        <div>
          <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
            Education
          </label>
          <textarea
            id="education"
            value={formData.education}
            onChange={(e) => updateFormData({ education: e.target.value })}
            className="input min-h-[100px]"
            placeholder="List your degrees, certifications, and relevant training. Include institution names and dates."
          />
        </div>

        <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
          <p className="text-sm text-primary-800">
            <span className="font-semibold">Pro Tip:</span> Our AI works best with specific details. Instead of "Managed a team," try "Managed a team of 5 developers, delivered 3 major product features ahead of schedule."
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsStep;