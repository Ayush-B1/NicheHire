type ToneStepProps = {
  formData: {
    tone: string;
    [key: string]: any;
  };
  updateFormData: (data: { tone: string }) => void;
};

const toneOptions = [
  {
    id: 'professional',
    label: 'Professional',
    description: 'Formal, traditional, and industry-standard language with emphasis on qualifications and experience.'
  },
  {
    id: 'confident',
    label: 'Confident',
    description: 'Bold, achievement-focused language that highlights results and leadership qualities.'
  },
  {
    id: 'friendly',
    label: 'Friendly',
    description: 'Approachable, personable language that emphasizes cultural fit and soft skills.'
  }
];

const ToneStep = ({ formData, updateFormData }: ToneStepProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Choose Your Resume Tone</h2>
      <p className="text-gray-700 mb-8">
        Select the communication style that best represents you and fits your target industry.
      </p>

      <div className="space-y-4">
        {toneOptions.map((tone) => (
          <div key={tone.id}>
            <label
              htmlFor={`tone-${tone.id}`}
              className={`block p-4 border-2 rounded-lg transition-all duration-200 cursor-pointer ${
                formData.tone === tone.id
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              <div className="flex items-start">
                <input
                  type="radio"
                  id={`tone-${tone.id}`}
                  name="tone"
                  value={tone.id}
                  checked={formData.tone === tone.id}
                  onChange={() => updateFormData({ tone: tone.id })}
                  className="mt-1 h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                />
                <div className="ml-3">
                  <span className="block text-lg font-medium text-gray-900">
                    {tone.label}
                  </span>
                  <span className="block text-gray-600 mt-1">
                    {tone.description}
                  </span>
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">Sample sentences in different tones:</h3>
        <ul className="space-y-3">
          <li>
            <span className="font-medium text-primary-700">Professional:</span>
            <span className="text-gray-700"> "Managed a team of five developers to deliver projects on schedule and within budget constraints."</span>
          </li>
          <li>
            <span className="font-medium text-primary-700">Confident:</span>
            <span className="text-gray-700"> "Led an agile development team to deliver 3 major projects ahead of schedule, resulting in a 15% increase in client satisfaction."</span>
          </li>
          <li>
            <span className="font-medium text-primary-700">Friendly:</span>
            <span className="text-gray-700"> "Collaborated with an amazing team of developers, creating innovative solutions while fostering a supportive and productive environment."</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToneStep;