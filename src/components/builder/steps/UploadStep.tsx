import { useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';
import Button from '../../common/Button';

type UploadStepProps = {
  formData: {
    resumeFile: File | null;
    [key: string]: any;
  };
  updateFormData: (data: { resumeFile: File | null }) => void;
};

const UploadStep = ({ formData, updateFormData }: UploadStepProps) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      handleFile(file);
    }
  };

  const handleFile = (file: File) => {
    // Check if file is PDF or Word document
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (validTypes.includes(file.type)) {
      updateFormData({ resumeFile: file });
    } else {
      alert('Please upload a PDF or Word document.');
    }
  };

  const removeFile = () => {
    updateFormData({ resumeFile: null });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Upload Existing Resume (Optional)</h2>
      <p className="text-gray-700 mb-8">
        Have an existing resume? Upload it to let our AI extract information and enhance it.
      </p>

      {!formData.resumeFile ? (
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            dragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="resume-upload"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
              <Upload size={24} className="text-primary-600" />
            </div>
            
            <p className="text-lg font-medium text-gray-900 mb-2">
              Drag & drop your resume here
            </p>
            
            <p className="text-gray-600 mb-6">
              Supported formats: PDF, DOC, or DOCX
            </p>
            
            <label htmlFor="resume-upload">
              <Button variant="secondary" type="button">
                Browse Files
              </Button>
            </label>
          </div>
        </div>
      ) : (
        <div className="p-6 border rounded-lg bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <FileText size={24} className="text-primary-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{formData.resumeFile.name}</p>
                <p className="text-sm text-gray-500">
                  {(formData.resumeFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            
            <button
              onClick={removeFile}
              className="text-gray-500 hover:text-red-500 transition-colors"
            >
              <X size={20} />
              <span className="sr-only">Remove file</span>
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Note:</span> This step is completely optional. If you don't have an existing resume or prefer to start fresh, simply click "Continue" to proceed to the next step.
        </p>
      </div>
    </div>
  );
};

export default UploadStep;