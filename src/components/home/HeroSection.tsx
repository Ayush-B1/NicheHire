import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import ResumePreview from './ResumePreview';

const professions = [
  { id: 'nurse', label: 'Nurse' },
  { id: 'developer', label: 'Software Developer' },
  { id: 'teacher', label: 'Teacher' },
  { id: 'construction', label: 'Construction Worker' },
  { id: 'freelancer', label: 'Freelancer' },
  { id: 'designer', label: 'Designer' },
  { id: 'sales', label: 'Sales Professional' },
  { id: 'marketing', label: 'Marketing Specialist' },
];

const HeroSection = () => {
  const [selectedProfession, setSelectedProfession] = useState('');

  return (
    <section className="py-12 md:py-20 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-gray-900 mb-4">
              Get Hired Faster with AI-Tailored Resumes
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Custom resumes for nurses, developers, teachers, and more — built with AI and tailored to your profession.
            </p>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
                  Choose Your Profession
                </label>
                <select
                  id="profession"
                  value={selectedProfession}
                  onChange={(e) => setSelectedProfession(e.target.value)}
                  className="select"
                >
                  <option value="">Select a profession</option>
                  {professions.map((profession) => (
                    <option key={profession.id} value={profession.id}>
                      {profession.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/builder" className="flex-1">
                  <Button variant="primary" fullWidth>
                    Start for Free
                  </Button>
                </Link>
                <Link to="#" className="flex-1">
                  <Button variant="secondary" fullWidth>
                    See Sample Resume
                  </Button>
                </Link>
              </div>
              
              <p className="text-sm text-gray-600 flex items-center">
                <span className="w-5 h-5 rounded-full bg-success-500 text-white flex items-center justify-center text-xs mr-2">✓</span>
                No credit card required. Try the free plan first.
              </p>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-100/30 to-primary-500/30 rounded-xl -z-10"></div>
            <div className="transform rotate-1 transition-transform duration-300 hover:rotate-0">
              <ResumePreview profession={selectedProfession || 'developer'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;