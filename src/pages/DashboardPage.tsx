import { useState, useEffect } from 'react';
import { Pencil, Download, Trash, Calendar, MessageSquare, Settings, X, Loader2 } from 'lucide-react';
import Button from '../components/common/Button';
import { useAuth } from '../contexts/AuthContext';
import ResumePreview from '../components/home/ResumePreview';
import { AIResumeGenerator } from '../components/ai/AIResumeGenerator';
import { getUserResumes, saveResume, deleteResume, Resume } from '../services/resumeService';

const mockResumes = [
  {
    id: 1,
    title: 'Senior Developer Resume',
    updatedAt: '2 days ago',
    thumbnail: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 2,
    title: 'Frontend Specialist',
    updatedAt: '1 week ago',
    thumbnail: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=300'
  },
  {
    id: 3,
    title: 'Tech Lead Application',
    updatedAt: '3 weeks ago',
    thumbnail: 'https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const mockCoverLetters = [
  {
    id: 1,
    title: 'Application for Google',
    company: 'Google',
    updatedAt: '3 days ago'
  },
  {
    id: 2,
    title: 'Microsoft Application',
    company: 'Microsoft',
    updatedAt: '1 week ago'
  },
  {
    id: 3,
    title: 'Startup Position',
    company: 'TechStartup Inc.',
    updatedAt: '2 weeks ago'
  }
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('resumes');
  const [selectedResume, setSelectedResume] = useState<number | null>(null);
  const [showAIResumeGenerator, setShowAIResumeGenerator] = useState(false);
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  
  useEffect(() => {
    document.title = 'Dashboard | NicheHire';
    if (user) {
      loadResumes();
    }
  }, [user]);

  const loadResumes = async () => {
    try {
      setLoading(true);
      const userResumes = await getUserResumes(user!.uid);
      setResumes(userResumes);
    } catch (error) {
      console.error('Error loading resumes:', error);
      // TODO: Show error message to user
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateResume = async (resumeData: any) => {
    try {
      const newResume: Omit<Resume, 'id'> = {
        userId: user!.uid,
        title: `${resumeData.title} Resume`,
        content: resumeData,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      await saveResume(newResume);
      await loadResumes();
      setShowAIResumeGenerator(false);
    } catch (error) {
      console.error('Error saving generated resume:', error);
      // TODO: Show error message to user
    }
  };

  const handleDeleteResume = async (resumeId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this resume?')) {
      try {
        await deleteResume(resumeId);
        await loadResumes();
      } catch (error) {
        console.error('Error deleting resume:', error);
        // TODO: Show error message to user
      }
    }
  };

  // Get user's initials for the avatar
  const getUserInitials = () => {
    if (!user?.displayName) return 'U';
    return user.displayName
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-700 font-semibold text-lg">{getUserInitials()}</span>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">{user?.displayName || 'User'}</h2>
                  <p className="text-sm text-gray-600">Free Plan</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('resumes')}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'resumes'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileIcon className="h-5 w-5" />
                  <span>My Resumes</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('coverLetters')}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'coverLetters'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <FileText className="h-5 w-5" />
                  <span>Cover Letters</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('coaching')}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'coaching'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Coaching</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </nav>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="bg-primary-50 rounded-lg p-4">
                  <p className="text-sm text-primary-800 font-medium mb-3">
                    Upgrade to Pro
                  </p>
                  <p className="text-xs text-primary-700 mb-3">
                    Get unlimited resumes, cover letters, and advanced features.
                  </p>
                  <Button variant="primary" size="sm" fullWidth>
                    Upgrade Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {activeTab === 'resumes' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">My Resumes</h1>
                  <Button variant="primary" onClick={() => setShowAIResumeGenerator(true)}>
                    Create New Resume
                  </Button>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  {loading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
                    </div>
                  ) : resumes.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {resumes.map((resume) => (
                        <div
                          key={resume.id}
                          className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                          onClick={() => setSelectedResume(Number(resume.id))}
                        >
                          <div className="h-40 overflow-hidden bg-gray-100">
                            <img
                              src={`https://images.pexels.com/photos/${Math.floor(Math.random() * 1000000)}/pexels-photo-${Math.floor(Math.random() * 1000000)}.jpeg?auto=compress&cs=tinysrgb&w=300`}
                              alt={resume.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium text-gray-900 mb-1">
                              {resume.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">
                              Updated {new Date(resume.updatedAt).toLocaleDateString()}
                            </p>
                            <div className="flex space-x-2">
                              <button
                                className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                title="Edit"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle edit
                                }}
                              >
                                <Pencil size={16} />
                              </button>
                              <button
                                className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                title="Download"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle download
                                }}
                              >
                                <Download size={16} />
                              </button>
                              <button
                                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Delete"
                                onClick={(e) => handleDeleteResume(resume.id!, e)}
                              >
                                <Trash size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Create new card */}
                      <div 
                        className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center h-64 hover:border-primary-400 transition-colors cursor-pointer"
                        onClick={() => setShowAIResumeGenerator(true)}
                      >
                        <div className="text-center">
                          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-3">
                            <PlusIcon className="h-6 w-6 text-primary-600" />
                          </div>
                          <p className="font-medium text-gray-900">Create New Resume</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                        <FileIcon className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No resumes yet
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Create your first resume to get started
                      </p>
                      <Button variant="primary" onClick={() => setShowAIResumeGenerator(true)}>
                        Create New Resume
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {activeTab === 'coverLetters' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">My Cover Letters</h1>
                  <Button variant="primary">Create New Cover Letter</Button>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Company
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Updated
                          </th>
                          <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {mockCoverLetters.map((letter) => (
                          <tr key={letter.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{letter.title}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-600">{letter.company}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {letter.updatedAt}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-end space-x-2">
                                <button
                                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                  title="Edit"
                                >
                                  <Pencil size={16} />
                                </button>
                                <button
                                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                  title="Download"
                                >
                                  <Download size={16} />
                                </button>
                                <button
                                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                  title="Delete"
                                >
                                  <Trash size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'coaching' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Coaching Sessions</h1>
                  <div className="flex space-x-3">
                    <Button variant="secondary">Upload Draft for Review</Button>
                    <Button variant="primary">Book Coaching Session</Button>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No coaching sessions scheduled
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Upgrade to our Expert plan to book a 1:1 coaching session with our career professionals
                    </p>
                    <Button variant="primary">Upgrade to Expert</Button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div>
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            className="input"
                            defaultValue="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="input"
                            defaultValue="john.doe@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-lg font-medium text-gray-900 mb-4">Change Password</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            id="currentPassword"
                            className="input"
                          />
                        </div>
                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            id="newPassword"
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-lg font-medium text-gray-900 mb-4">Subscription</h2>
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">Free Plan</p>
                            <p className="text-sm text-gray-600">Limited features and templates</p>
                          </div>
                          <Button variant="primary">Upgrade</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button variant="primary">Save Changes</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Resume Generator Modal */}
      {showAIResumeGenerator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">AI Resume Generator</h2>
              <button
                onClick={() => setShowAIResumeGenerator(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <AIResumeGenerator />
          </div>
        </div>
      )}

      {/* Resume Preview Modal */}
      {selectedResume !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Resume Preview</h2>
              <button
                onClick={() => setSelectedResume(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <ResumePreview profession="developer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Components for the Dashboard
const FileIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const FileText = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

const PlusIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default DashboardPage;