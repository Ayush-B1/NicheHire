import { useState } from 'react';
import Button from '../common/Button';

const EmailCaptureSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, we would send this to a backend
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the submission state after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be First to Get Hired</h2>
          <p className="text-lg mb-8 text-primary-100">
            Join our newsletter for job search tips, resume trends, and exclusive discounts.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:border-white outline-none"
                required
              />
              <Button
                type="submit"
                variant="success"
                className="whitespace-nowrap"
              >
                {isSubmitted ? 'Thank You!' : 'Get Updates'}
              </Button>
            </div>
            <p className="mt-3 text-sm text-primary-100">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailCaptureSection;