import { LockIcon, Download, Save } from 'lucide-react';
import Button from '../../common/Button';
import ResumePreview from '../../home/ResumePreview';

type PreviewStepProps = {
  formData: {
    profession: string;
    [key: string]: any;
  };
};

const PreviewStep = ({ formData }: PreviewStepProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Preview Your Resume</h2>
      <p className="text-gray-700 mb-8">
        Here's a preview of how your resume will look. After generating, you'll be able to edit and fine-tune the content.
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold text-lg mb-4">Resume Preview</h3>
            <div className="flex justify-center">
              <div className="relative max-w-sm">
                <div className="absolute inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center z-10 rounded-lg">
                  <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                    <LockIcon size={18} className="text-gray-500 mr-2" />
                    <span className="text-gray-700 font-medium">Generate to unlock</span>
                  </div>
                </div>
                <ResumePreview profession={formData.profession || 'developer'} />
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <Button
              variant="secondary"
              className="flex-1 flex items-center justify-center"
              disabled
            >
              <Download size={18} className="mr-2" />
              Export PDF
            </Button>
            <Button
              variant="secondary"
              className="flex-1 flex items-center justify-center"
              disabled
            >
              <Save size={18} className="mr-2" />
              Save to Dashboard
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold text-lg mb-4">Cover Letter Preview</h3>
            <div className="h-80 flex items-center justify-center border border-gray-300 rounded-lg bg-white p-6">
              <div className="text-center">
                <LockIcon size={24} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-700">
                  A matching cover letter will be generated along with your resume.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <h4 className="font-medium text-primary-800 mb-2">Ready to generate?</h4>
              <p className="text-primary-700 text-sm">
                Click the "Generate Resume & Cover Letter" button below to create your personalized documents.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <div className="w-6 h-6 rounded-full bg-success-100 flex items-center justify-center">
              <span className="text-success-600 text-xs font-bold">✓</span>
            </div>
          </div>
          <div className="ml-3">
            <h3 className="font-medium text-gray-900">Free Features</h3>
            <ul className="mt-1 text-sm text-gray-600 space-y-1">
              <li>• Basic resume with NicheHire watermark</li>
              <li>• Limited template selection</li>
              <li>• 24-hour access to edit</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start mt-4">
          <div className="flex-shrink-0 mt-1">
            <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-primary-600 text-xs font-bold">⭐</span>
            </div>
          </div>
          <div className="ml-3">
            <h3 className="font-medium text-gray-900">Pro Features (Upgrade for $19)</h3>
            <ul className="mt-1 text-sm text-gray-600 space-y-1">
              <li>• Unlimited resume & cover letter exports</li>
              <li>• No watermarks</li>
              <li>• Full template library</li>
              <li>• Advanced ATS optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewStep;