import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import Button from '../components/common/Button';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  
  useEffect(() => {
    document.title = 'Pricing | NicheHire';
  }, []);

  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'Basic resume creation with limited features',
      features: [
        '1 resume with watermark',
        'Basic templates',
        'No editing after 24 hours',
        'Limited ATS optimization',
      ],
      limitations: [
        'No cover letters',
        'No exports to PDF',
        'No advanced templates',
      ],
      buttonText: 'Try Free',
      buttonLink: '/builder',
      highlight: false,
    },
    {
      name: 'Pro',
      price: isYearly ? '$49' : '$19',
      period: isYearly ? 'year' : 'one-time',
      description: 'Everything you need for a successful job search',
      features: [
        'Unlimited resumes',
        'Unlimited cover letters',
        'Export to PDF without watermark',
        'Full template library',
        'Advanced ATS optimization',
        'AI content enhancement',
        'Keyword optimization',
        'Unlimited edits',
      ],
      buttonText: 'Upgrade to Pro',
      buttonLink: '/pricing#checkout',
      highlight: true,
    },
    {
      name: 'Expert',
      price: '$199',
      period: 'one-time',
      description: 'Professional guidance for competitive roles',
      features: [
        'All Pro features',
        '1:1 coaching session (60 min)',
        'Manual expert review',
        'Industry-specific optimization',
        'LinkedIn profile enhancement',
        'Interview preparation guide',
        'Personalized improvement tips',
        'Priority support',
      ],
      buttonText: 'Book Expert Package',
      buttonLink: '/pricing#expert',
      highlight: false,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-700 mb-8">
            Choose the plan that fits your needs, from quick resume creation to comprehensive career support
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg ${!isYearly ? 'font-semibold text-primary-600' : 'text-gray-500'}`}>
              One-time
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                value="" 
                className="sr-only peer" 
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
            </label>
            <span className={`text-lg ${isYearly ? 'font-semibold text-primary-600' : 'text-gray-500'}`}>
              Subscription
              {isYearly && <span className="ml-2 text-sm font-medium bg-success-100 text-success-800 py-0.5 px-2 rounded-full">Save 32%</span>}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden ${
                plan.highlight
                  ? 'border-2 border-primary-600 shadow-xl'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`bg-white p-8 ${plan.highlight ? 'pt-14' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600">/{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <Button
                    variant={plan.highlight ? 'primary' : 'secondary'}
                    fullWidth
                  >
                    {plan.buttonText}
                  </Button>
                </div>
                
                <div>
                  <p className="font-medium text-gray-900 mb-4">What's included:</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={18} className="text-success-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations && (
                    <>
                      <p className="font-medium text-gray-900 mb-4">Limitations:</p>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-gray-400 mr-2">✕</span>
                            <span className="text-gray-500">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between the Pro and Expert plans?</h3>
                <p className="text-gray-700">
                  The Pro plan gives you all the tools to create professional resumes and cover letters yourself, while the Expert plan adds personalized coaching and manual review from industry professionals.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel my subscription?</h3>
                <p className="text-gray-700">
                  Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How does the AI-powered resume generation work?</h3>
                <p className="text-gray-700">
                  Our AI analyzes your input and profession requirements to create tailored content that highlights your strengths and matches industry expectations, while optimizing for ATS systems.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What if I'm not satisfied with my resume?</h3>
                <p className="text-gray-700">
                  We offer a 14-day money-back guarantee for Pro and Expert plans. If you're not happy with the results, contact our support team for a full refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;