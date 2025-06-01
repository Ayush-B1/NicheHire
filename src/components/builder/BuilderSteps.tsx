import { useState } from 'react';
import { FileText, Upload, Check, Settings } from 'lucide-react';
import Button from '../common/Button';

// Step components will be imported here
import ProfessionStep from './steps/ProfessionStep';
import PersonalInfoStep from './steps/PersonalInfoStep';
import DetailsStep from './steps/DetailsStep';
import UploadStep from './steps/UploadStep';
import ToneStep from './steps/ToneStep';
import PreviewStep from './steps/PreviewStep';

const steps = [
  { id: 'profession', label: 'Profession', icon: <FileText size={18} /> },
  { id: 'personal', label: 'Personal Info', icon: <FileText size={18} /> },
  { id: 'details', label: 'Experience', icon: <FileText size={18} /> },
  { id: 'upload', label: 'Upload', icon: <Upload size={18} /> },
  { id: 'tone', label: 'Tone', icon: <Settings size={18} /> },
  { id: 'preview', label: 'Preview', icon: <Check size={18} /> },
];

const BuilderSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    profession: '',
    fullName: '',
    email: '',
    phone: '',
    jobTitle: '',
    location: '',
    skills: '',
    experience: '',
    achievements: '',
    education: '',
    resumeFile: null,
    tone: 'professional', // professional, confident, friendly
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ProfessionStep formData={formData} updateFormData={updateFormData} />;
      case 1:
        return <PersonalInfoStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <DetailsStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <UploadStep formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <ToneStep formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <PreviewStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="hidden sm:block">
          <nav className="flex justify-between">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => index < currentStep ? goToStep(index) : null}
                disabled={index > currentStep}
                className={`flex flex-col items-center group ${
                  index > currentStep ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
                }`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    index < currentStep
                      ? 'bg-success-500 text-white'
                      : index === currentStep
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {index < currentStep ? <Check size={18} /> : step.icon}
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`hidden sm:block absolute h-0.5 w-full top-1/2 transform -translate-y-1/2 ${
                      index < currentStep ? 'bg-success-500' : 'bg-gray-200'
                    }`}
                  ></div>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="sm:hidden">
          <div className="text-center mb-4">
            <p className="text-sm font-medium text-gray-500">
              Step {currentStep + 1} of {steps.length}
            </p>
            <h2 className="text-xl font-semibold text-gray-900">
              {steps[currentStep].label}
            </h2>
          </div>
        </div>
      </div>

      <div className="card p-6 md:p-8">{renderStep()}</div>

      <div className="flex justify-between mt-8">
        <Button
          variant="secondary"
          onClick={prevStep}
          disabled={currentStep === 0}
        >
          Back
        </Button>

        {currentStep < steps.length - 1 ? (
          <Button variant="primary" onClick={nextStep}>
            Continue
          </Button>
        ) : (
          <Button variant="success">
            Generate Resume & Cover Letter
          </Button>
        )}
      </div>
    </div>
  );
};

export default BuilderSteps;