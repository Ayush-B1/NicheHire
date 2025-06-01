import { Link } from 'react-router-dom';
import { FileText, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-lg">
                <FileText size={20} />
              </div>
              <span className="text-xl font-bold text-white">NicheHire</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              AI-powered resume and cover letter generator tailored for niche professions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/builder" className="text-gray-400 hover:text-white transition-colors">Resume Builder</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Templates</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Career Tips</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Industry Guides</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} NicheHire. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="#" className="hover:text-white transition-colors">Terms</Link>
              <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="#" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;