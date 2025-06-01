import { FileText, Code, HeartPulse, GraduationCap, Hammer, Palette } from 'lucide-react';

type ProfessionStepProps = {
  formData: {
    profession: string;
    [key: string]: any;
  };
  updateFormData: (data: { profession: string }) => void;
};

const professions = [
  {
    id: 'nurse',
    label: 'Healthcare',
    icon: <HeartPulse size={24} className="text-primary-600" />,
    options: ['Registered Nurse', 'Nurse Practitioner', 'Medical Assistant', 'Physician Assistant', 'Doctor']
  },
  {
    id: 'developer',
    label: 'Technology',
    icon: <Code size={24} className="text-primary-600" />,
    options: ['Software Developer', 'Data Scientist', 'UX Designer', 'Product Manager', 'DevOps Engineer']
  },
  {
    id: 'teacher',
    label: 'Education',
    icon: <GraduationCap size={24} className="text-primary-600" />,
    options: ['Teacher', 'Professor', 'Tutor', 'Education Administrator', 'School Counselor']
  },
  {
    id: 'construction',
    label: 'Trades & Construction',
    icon: <Hammer size={24} className="text-primary-600" />,
    options: ['Construction Worker', 'Electrician', 'Plumber', 'Carpenter', 'Project Manager']
  },
  {
    id: 'designer',
    label: 'Creative',
    icon: <Palette size={24} className="text-primary-600" />,
    options: ['Graphic Designer', 'Content Creator', 'Marketing Specialist', 'Copywriter', 'Photographer']
  },
  {
    id: 'business',
    label: 'Business & Finance',
    icon: <FileText size={24} className="text-primary-600" />,
    options: ['Accountant', 'Financial Analyst', 'Business Consultant', 'Project Manager', 'Sales Representative']
  },
];

const ProfessionStep = ({ formData, updateFormData }: ProfessionStepProps) => {
  const handleProfessionChange = (profession: string) => {
    updateFormData({ profession });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Select Your Professional Field</h2>
      <p className="text-gray-700 mb-8">
        We'll tailor your resume and cover letter to match industry-specific requirements and expectations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {professions.map((profession) => (
          <div key={profession.id}>
            <button
              type="button"
              onClick={() => handleProfessionChange(profession.id)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                formData.profession === profession.id
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  {profession.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{profession.label}</h3>
              </div>
              
              <div className="text-sm text-gray-600">
                <p className="font-medium mb-1">Including:</p>
                <ul className="list-disc list-inside space-y-1">
                  {profession.options.slice(0, 3).map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                  {profession.options.length > 3 && <li>And more...</li>}
                </ul>
              </div>
            </button>
          </div>
        ))}
      </div>

      {formData.profession && (
        <div className="mt-8 p-4 bg-primary-50 border border-primary-200 rounded-lg">
          <p className="text-primary-800 font-medium">
            Great choice! We'll optimize your resume for the {professions.find(p => p.id === formData.profession)?.label.toLowerCase()} industry.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfessionStep;