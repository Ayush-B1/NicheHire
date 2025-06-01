import { useEffect } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const blogPosts = [
  {
    id: 1,
    title: 'Top Resume Tips for Nurses in 2025',
    excerpt: 'Learn how to highlight your clinical experience, certifications, and soft skills to stand out in a competitive healthcare market.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Healthcare',
    date: 'May 15, 2025',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: 'How Developers Can Ace Cover Letters',
    excerpt: 'Discover how to showcase your technical skills, projects, and problem-solving abilities in a compelling developer cover letter.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Technology',
    date: 'May 10, 2025',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'Best ATS Formats for Freelancers',
    excerpt: 'Navigate the unique challenges of freelancer resumes with these ATS-friendly formatting tips and keyword strategies.',
    image: 'https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Freelancing',
    date: 'May 5, 2025',
    readTime: '5 min read'
  },
  {
    id: 4,
    title: 'Showcasing Teaching Achievements Effectively',
    excerpt: 'Learn how to quantify your classroom successes and demonstrate your impact as an educator in your resume.',
    image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Education',
    date: 'April 28, 2025',
    readTime: '7 min read'
  },
  {
    id: 5,
    title: 'Construction Industry Resume Guide',
    excerpt: 'Highlight your hands-on experience, certifications, and safety record with these industry-specific resume strategies.',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Construction',
    date: 'April 22, 2025',
    readTime: '9 min read'
  },
  {
    id: 6,
    title: 'AI Tools Every Job Seeker Should Know',
    excerpt: 'Discover how artificial intelligence can help optimize your resume, prepare for interviews, and find the perfect job opportunities.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Career Tips',
    date: 'April 15, 2025',
    readTime: '10 min read'
  }
];

const categories = [
  { name: 'All Categories', count: 24 },
  { name: 'Healthcare', count: 6 },
  { name: 'Technology', count: 8 },
  { name: 'Education', count: 4 },
  { name: 'Construction', count: 3 },
  { name: 'Freelancing', count: 5 },
  { name: 'Career Tips', count: 10 }
];

const BlogPage = () => {
  useEffect(() => {
    document.title = 'Career Blog | NicheHire';
  }, []);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">NicheHire Career Blog</h1>
          <p className="text-xl text-gray-700">
            Expert advice, industry insights, and resume tips for professionals in every field
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="input pl-10"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Search size={18} />
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex justify-between items-center text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">{category.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Get Career Updates</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Sign up for our newsletter to receive the latest career advice and job search tips.
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="input mb-3"
                />
                <Button variant="primary" fullWidth>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      <Link to="#" className="hover:text-primary-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {post.date}
                      </span>
                      <Link to="#" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="secondary">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;