type PersonalInfoStepProps = {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    jobTitle: string;
    location: string;
    [key: string]: any;
  };
  updateFormData: (data: {
    fullName?: string;
    email?: string;
    phone?: string;
    jobTitle?: string;
    location?: string;
  }) => void;
};

const PersonalInfoStep = ({ formData, updateFormData }: PersonalInfoStepProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h2>
      <p className="text-gray-700 mb-8">
        Let's start with your basic contact information and current job title.
      </p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name*
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => updateFormData({ fullName: e.target.value })}
              className="input"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Current/Desired Job Title*
            </label>
            <input
              type="text"
              id="jobTitle"
              value={formData.jobTitle}
              onChange={(e) => updateFormData({ jobTitle: e.target.value })}
              className="input"
              placeholder="Senior Software Engineer"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              className="input"
              placeholder="john.doe@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => updateFormData({ phone: e.target.value })}
              className="input"
              placeholder="(555) 123-4567"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={(e) => updateFormData({ location: e.target.value })}
            className="input"
            placeholder="City, State or Remote"
          />
          <p className="mt-1 text-sm text-gray-500">
            Enter your city and state, or "Remote" if you're looking for remote work
          </p>
        </div>

        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Pro Tip:</span> Use a professional email address, ideally based on your name.
            This creates a better impression than casual or outdated email services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;