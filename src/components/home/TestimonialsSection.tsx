import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I'd been applying for nursing positions for months with no success. NicheHire helped me create a resume that highlighted my clinical experience and soft skills in exactly the way hospitals are looking for. I got three interview calls within a week!",
    name: "Sarah Johnson",
    title: "Registered Nurse",
    image: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "As a developer, I was struggling to make my resume stand out among hundreds of applicants. The AI-generated content perfectly balanced technical skills with achievements, and the ATS-friendly format ensured it got past the initial screening.",
    name: "David Chen",
    title: "Full Stack Developer",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "The profession-specific approach makes all the difference. My teaching resume now emphasizes classroom management and curriculum development—exactly what principals are looking for. Landed my dream position within a month!",
    name: "Emily Rodriguez",
    title: "High School English Teacher",
    image: "https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    quote: "As a freelance designer, I needed a resume that could showcase both my creative and business skills. NicheHire's template highlighted my portfolio while emphasizing client results. It's the perfect balance!",
    name: "Marcus Williams",
    title: "UX/UI Designer",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-700">
            Success stories from professionals who landed their dream jobs
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="card p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 flex-shrink-0">
                <div className="rounded-full overflow-hidden w-24 h-24 mx-auto border-4 border-primary-100">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/4">
                <blockquote>
                  <p className="text-lg text-gray-700 italic mb-6">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  <footer>
                    <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
                    <p className="text-gray-600">{testimonials[activeIndex].title}</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-primary-50 transition-colors"
            >
              <ChevronLeft size={24} />
              <span className="sr-only">Previous</span>
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-primary-50 transition-colors"
            >
              <ChevronRight size={24} />
              <span className="sr-only">Next</span>
            </button>
          </div>
          
          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${index === activeIndex ? 'bg-primary-600' : 'bg-gray-300'}`}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;