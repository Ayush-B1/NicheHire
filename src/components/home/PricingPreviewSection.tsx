import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for trying out the platform',
    features: [
      '1 resume with watermark',
      'Basic ATS optimization',
      'Limited template selection',
      '24-hour access to edits'
    ],
    cta: 'Try Free',
    link: '/builder',
    highlight: false
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'one-time',
    description: 'Everything you need for your job search',
    features: [
      'Unlimited resumes & cover letters',
      'Export to PDF without watermark',
      'Full template library',
      'Advanced ATS optimization',
      'AI content enhancement'
    ],
    cta: 'Upgrade to Pro',
    link: '/pricing',
    highlight: true
  },
  {
    name: 'Expert',
    price: '$199',
    period: 'one-time',
    description: 'Professional guidance and review',
    features: [
      'All Pro features',
      '1:1 coaching session',
      'Manual expert review',
      'Industry-specific optimization',
      'LinkedIn profile enhancement',
      'Interview preparation guide'
    ],
    cta: 'Book Expert Package',
    link: '/pricing',
    highlight: false
  }
];

const PricingPreviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-gray-900 mb-4">Affordable Plans for Every Stage</h2>
          <p className="text-lg text-gray-700">
            From free resume creation to professional coaching, we have a plan that fits your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`card border transition-all duration-300 ${
                plan.highlight 
                  ? 'border-primary-600 ring-2 ring-primary-200 scale-105 relative z-10' 
                  : 'border-gray-200 hover:border-primary-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-1">{plan.period}</span>}
                </div>
                <p className="text-gray-700 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={plan.link}>
                  <Button 
                    variant={plan.highlight ? 'primary' : 'secondary'}
                    fullWidth
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/pricing" className="text-primary-600 font-medium hover:text-primary-700 flex items-center justify-center">
            View full pricing details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;