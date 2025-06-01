import { FileText, User, Code } from 'lucide-react';

const steps = [
  {
    icon: <User size={32} className="text-primary-600" />,
    title: 'Choose Your Profession',
    description: 'Select your specific job field from our curated list of professions with tailored templates.'
  },
  {
    icon: <FileText size={32} className="text-primary-600" />,
    title: 'Enter Your Info',
    description: 'Fill in your experience, skills, and achievements with our guided professional prompts.'
  },
  {
    icon: <Code size={32} className="text-primary-600" />,
    title: 'Generate with AI',
    description: 'Our GPT-4 powered system creates an optimized resume and cover letter for your target role.'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-700">
            Our AI-powered platform makes creating professional, tailored resumes simple and fast.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="card flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-success-500 blur-xl opacity-20 rounded-xl"></div>
            <div className="relative p-8 bg-white rounded-xl shadow-card">
              <p className="text-lg font-medium text-gray-700 mb-6">
                "NicheHire helped me land a senior developer role at my dream company. The AI-tailored resume highlighted exactly what the hiring manager was looking for."
              </p>
              <div>
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-gray-600 text-sm">Senior Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;