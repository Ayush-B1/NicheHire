import { FileText, Mail, Phone, Globe, Briefcase, GraduationCap, Award } from 'lucide-react';

type ResumePreviewProps = {
  profession: string;
};

const ResumePreview = ({ profession }: ResumePreviewProps) => {
  // Customize resume content based on profession
  const resumeData = getProfessionData(profession);

  return (
    <div className="w-full max-w-md bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
      <div className="p-6 bg-primary-600 text-white">
        <h2 className="text-2xl font-bold">{resumeData.name}</h2>
        <p className="text-primary-100">{resumeData.title}</p>
        
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center">
            <Mail size={14} className="mr-1" />
            <span>{resumeData.email}</span>
          </div>
          <div className="flex items-center">
            <Phone size={14} className="mr-1" />
            <span>{resumeData.phone}</span>
          </div>
          <div className="flex items-center">
            <Globe size={14} className="mr-1" />
            <span>{resumeData.location}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <Briefcase size={18} className="mr-2 text-primary-600" />
            Work Experience
          </h3>
          <div className="space-y-4">
            {resumeData.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-800">{exp.title}</h4>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <GraduationCap size={18} className="mr-2 text-primary-600" />
            Education
          </h3>
          <div>
            <h4 className="font-medium text-gray-800">{resumeData.education.degree}</h4>
            <p className="text-gray-600">{resumeData.education.school}</p>
            <p className="text-sm text-gray-500">{resumeData.education.period}</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
            <Award size={18} className="mr-2 text-primary-600" />
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get profession-specific data
const getProfessionData = (profession: string) => {
  const data = {
    developer: {
      name: 'Alex Morgan',
      title: 'Senior Software Developer',
      email: 'alex.morgan@example.com',
      phone: '(555) 123-4567',
      location: 'San Francisco, CA',
      experience: [
        {
          title: 'Senior Frontend Developer',
          company: 'TechCorp Inc.',
          period: '2020 - Present',
          highlights: [
            'Led development of React-based dashboard used by 10,000+ users',
            'Improved page load time by 40% through code optimization',
            'Mentored junior developers and conducted code reviews'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'WebSolutions LLC',
          period: '2017 - 2020',
          highlights: [
            'Developed responsive web applications using React and TypeScript',
            'Collaborated with design team to implement UI/UX improvements'
          ]
        }
      ],
      education: {
        degree: 'B.S. Computer Science',
        school: 'University of California, Berkeley',
        period: '2013 - 2017'
      },
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'CI/CD', 'Agile']
    },
    nurse: {
      name: 'Jordan Taylor',
      title: 'Registered Nurse, BSN',
      email: 'jordan.taylor@example.com',
      phone: '(555) 987-6543',
      location: 'Chicago, IL',
      experience: [
        {
          title: 'Critical Care Nurse',
          company: 'Memorial Hospital',
          period: '2019 - Present',
          highlights: [
            'Provide direct care to critically ill patients in 24-bed ICU',
            'Coordinate with interdisciplinary team for patient care planning',
            'Mentor new nursing graduates during orientation'
          ]
        },
        {
          title: 'Medical-Surgical Nurse',
          company: 'Community Health Center',
          period: '2016 - 2019',
          highlights: [
            'Managed care for 5-7 patients per shift on medical-surgical floor',
            'Administered medications and treatments as prescribed'
          ]
        }
      ],
      education: {
        degree: 'Bachelor of Science in Nursing',
        school: 'University of Illinois',
        period: '2012 - 2016'
      },
      skills: ['Critical Care', 'Patient Assessment', 'Medication Administration', 'BLS/ACLS', 'IV Therapy', 'Electronic Health Records']
    },
    teacher: {
      name: 'Sam Reynolds',
      title: 'Secondary Education Teacher',
      email: 'sam.reynolds@example.com',
      phone: '(555) 234-5678',
      location: 'Boston, MA',
      experience: [
        {
          title: 'Science Teacher',
          company: 'Lincoln High School',
          period: '2018 - Present',
          highlights: [
            'Teach biology and chemistry to grades 9-12',
            'Developed innovative curriculum that improved test scores by 22%',
            'Coach science olympiad team that placed 2nd in state competition'
          ]
        },
        {
          title: 'Student Teacher',
          company: 'Washington Middle School',
          period: '2017 - 2018',
          highlights: [
            'Assisted lead teacher with lesson planning and grading',
            'Designed and implemented hands-on science activities'
          ]
        }
      ],
      education: {
        degree: 'M.Ed. in Science Education',
        school: 'Boston University',
        period: '2015 - 2017'
      },
      skills: ['Curriculum Development', 'Classroom Management', 'Differentiated Instruction', 'Educational Technology', 'Student Assessment']
    },
    // Default to developer if no match
    default: {
      name: 'Alex Morgan',
      title: 'Senior Software Developer',
      email: 'alex.morgan@example.com',
      phone: '(555) 123-4567',
      location: 'San Francisco, CA',
      experience: [
        {
          title: 'Senior Frontend Developer',
          company: 'TechCorp Inc.',
          period: '2020 - Present',
          highlights: [
            'Led development of React-based dashboard used by 10,000+ users',
            'Improved page load time by 40% through code optimization',
            'Mentored junior developers and conducted code reviews'
          ]
        },
        {
          title: 'Software Engineer',
          company: 'WebSolutions LLC',
          period: '2017 - 2020',
          highlights: [
            'Developed responsive web applications using React and TypeScript',
            'Collaborated with design team to implement UI/UX improvements'
          ]
        }
      ],
      education: {
        degree: 'B.S. Computer Science',
        school: 'University of California, Berkeley',
        period: '2013 - 2017'
      },
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'CI/CD', 'Agile']
    }
  };
  
  return data[profession as keyof typeof data] || data.default;
};

export default ResumePreview;