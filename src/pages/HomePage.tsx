import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PricingPreviewSection from '../components/home/PricingPreviewSection';
import EmailCaptureSection from '../components/home/EmailCaptureSection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'NicheHire | AI-Powered Resume Builder for Professionals';
  }, []);

  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingPreviewSection />
      <EmailCaptureSection />
    </div>
  );
};

export default HomePage;