import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './auth/AuthModal';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    clsx(
      'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200',
      isActive
        ? 'text-primary-600 bg-primary-50'
        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
    );

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-lg">
              <FileText size={20} />
            </div>
            <span className="text-xl font-bold text-gray-900">NicheHire</span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClasses} end>
              Home
            </NavLink>
            <NavLink to="/builder" className={navLinkClasses}>
              Resume Builder
            </NavLink>
            <NavLink to="/pricing" className={navLinkClasses}>
              Pricing
            </NavLink>
            <NavLink to="/blog" className={navLinkClasses}>
              Blog
            </NavLink>
          </div>

          {/* Right-side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/dashboard\" className="btn btn-secondary py-2 px-4">
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="btn btn-secondary py-2 px-4">
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setAuthModalOpen(true)}
                  className="btn btn-secondary py-2 px-4"
                >
                  Sign In
                </button>
                <Link to="/builder" className="btn btn-primary py-2 px-4">
                  Start Free
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200 mt-4">
            <div className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className={navLinkClasses}
                onClick={toggleMobileMenu}
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/builder"
                className={navLinkClasses}
                onClick={toggleMobileMenu}
              >
                Resume Builder
              </NavLink>
              <NavLink
                to="/pricing"
                className={navLinkClasses}
                onClick={toggleMobileMenu}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/blog"
                className={navLinkClasses}
                onClick={toggleMobileMenu}
              >
                Blog
              </NavLink>
              <div className="flex flex-col space-y-2 pt-2">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="btn btn-secondary w-full"
                      onClick={toggleMobileMenu}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        toggleMobileMenu();
                      }}
                      className="btn btn-secondary w-full"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setAuthModalOpen(true);
                        toggleMobileMenu();
                      }}
                      className="btn btn-secondary w-full"
                    >
                      Sign In
                    </button>
                    <Link
                      to="/builder"
                      className="btn btn-primary w-full"
                      onClick={toggleMobileMenu}
                    >
                      Start Free
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </nav>
  );
};

export default Navbar;