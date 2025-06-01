import { Target, Cpu, CheckCircle, Users } from 'lucide-react';

const features = [
  {
    icon: <Target size={24} className="text-primary-600" />,
    title: 'Tailored to Niche Jobs',
    description: 'Specialized templates and content for over 50 professional fields, highlighting industry-specific skills and achievements.'
  },
  {
    icon: <Cpu size={24} className="text-primary-600" />,
    title: 'GPT-4 Resume Generator',
    description: 'Advanced AI technology transforms your experience into compelling, professionally-written content that stands out.'
  },
  {
    icon: <CheckCircle size={24} className="text-primary-600" />,
    title: 'ATS-Friendly Templates',
    description: 'Designed to pass Applicant Tracking Systems with optimal keyword placement and clean, scannable formatting.'
  },
  {
    icon: <Users size={24} className="text-primary-600" />,
    title: 'Expert Coaching Available',
    description: 'Upgrade for personalized feedback and coaching from industry professionals with hiring experience.'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-gray-900 mb-4">Why NicheHire</h2>
          <p className="text-lg text-gray-700">
            Our specialized approach gives you the edge in today's competitive job market
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card h-full">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;