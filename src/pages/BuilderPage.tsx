import { useEffect } from 'react';
import BuilderSteps from '../components/builder/BuilderSteps';

const BuilderPage = () => {
  useEffect(() => {
    document.title = 'Resume Builder | NicheHire';
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Build Your Professional Resume</h1>
          <p className="text-lg text-gray-700">
            Follow these simple steps to create a tailored resume and cover letter for your industry
          </p>
        </div>
        
        <BuilderSteps />
      </div>
    </div>
  );
};

export default BuilderPage;