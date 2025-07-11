import React, { useState } from 'react';

const VendorLogin = ({ onClose, onSwitchToClient }) => {
  const [step, setStep] = useState(1); // 1: Account Type, 2: Personal/Business Info, 3: Category, 4: Upload (for business), 5: Verification, 6: Success
  const [verificationType, setVerificationType] = useState('phone');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [formData, setFormData] = useState({
    accountType: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
    category: '',
    businessName: '',
    businessType: '',
    businessRegistration: null,
    businessLicense: null,
    taxDocument: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files[0] }));
  };

  const handleSubCategoryToggle = (subCategory) => {
    setSelectedSubCategories(prev => {
      if (prev.includes(subCategory)) {
        return prev.filter(item => item !== subCategory);
      } else {
        return [...prev, subCategory];
      }
    });
  };

  const sendOTP = () => {
    setOtpSent(true);
    console.log(`OTP sent to ${verificationType === 'phone' ? formData.phone : formData.email}`);
  };

  const verifyOTP = () => {
    if (otp === '1234') {
      setStep(step + 1);
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalSteps = formData.accountType === 'business' ? 6 : 5;
    
    if (step < totalSteps) {
      // Skip upload step for personal accounts
      if (step === 3 && formData.accountType === 'personal') {
        setStep(5); // Skip to verification
      } else {
        setStep(step + 1);
      }
    } else {
      // Handle final submission
      console.log('Vendor registration:', formData);
    }
  };

  const renderStepIndicator = () => {
    const steps = [
      { num: 1, label: 'Account Type' },
      { num: 2, label: formData.accountType === 'business' ? 'Business Info' : 'Personal Info' },
      { num: 3, label: "Category's" },
      { num: 4, label: 'Verification' }
    ];

    // Only show current step for mobile responsiveness
    const currentStep = steps.find(s => s.num === (step > 4 ? 4 : step));
    const completedSteps = steps.filter(s => s.num < (step > 4 ? 4 : step));

    return (
      <div className="flex items-center justify-between mb-6 sm:mb-8 overflow-x-auto">
        {steps.map((stepItem, index) => (
          <div key={stepItem.num} className="flex items-center flex-shrink-0">
            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center font-semibold text-sm sm:text-base
              ${step >= stepItem.num 
                ? 'bg-primary-600 text-white border-primary-600' 
                : step === stepItem.num
                ? 'bg-white text-primary-600 border-primary-600'
                : 'bg-white text-gray-400 border-gray-300'}
            `}>
              {step > stepItem.num ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                stepItem.num
              )}
            </div>
            <span className={`ml-1 sm:ml-2 text-xs sm:text-sm font-medium ${
              step >= stepItem.num ? 'text-primary-600' : 'text-gray-400'
            } hidden sm:block`}>
              {stepItem.label}
            </span>
            {index < steps.length - 1 && (
              <div className={`w-8 sm:w-12 h-0.5 mx-2 sm:mx-4 ${
                step > stepItem.num ? 'bg-primary-600' : 'bg-gray-300'
              }`} />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderStep1 = () => (
    <div className="space-y-4 sm:space-y-6">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Create Your Vendor Account</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Welcome to <span className="font-semibold">Evenlyo</span> Management. Please Select Your Account Type</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, accountType: 'personal' }))}
          className={`p-4 sm:p-6 border-2 rounded-xl text-center transition-all ${
            formData.accountType === 'personal'
              ? 'border-primary-600 bg-primary-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Personal Account</h3>
        </button>
        
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, accountType: 'business' }))}
          className={`p-4 sm:p-6 border-2 rounded-xl text-center transition-all ${
            formData.accountType === 'business'
              ? 'border-primary-600 bg-primary-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Business Account</h3>
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {formData.accountType === 'business' ? 'Business Information' : 'Personal Information'}
        </h2>
        <p className="text-gray-600">
          {formData.accountType === 'business' ? 'Please provide your business details' : 'Please provide your personal details'}
        </p>
      </div>
      
      {formData.accountType === 'business' ? (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your business name"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            >
              <option value="">Select business type</option>
              <option value="llc">LLC</option>
              <option value="corporation">Corporation</option>
              <option value="partnership">Partnership</option>
              <option value="sole_proprietorship">Sole Proprietorship</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Enter your email"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Enter your phone number"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Create a password"
          required
        />
      </div>
    </div>
  );

  const renderStep3 = () => {
    const subCategories = {
      entertainment: [
        { id: 'dj', name: 'DJ', icon: '🎵', selected: true },
        { id: 'live_band', name: 'Live Band', icon: '🎸', selected: false },
        { id: 'photo_booth', name: 'Photo Booth', icon: '📸', selected: true }
      ],
      decoration: [
        { id: 'led_fairy_lights', name: 'LED Fairy Lights', icon: '💡', selected: true },
        { id: 'table_floral', name: 'Table Floral Centerpieces', icon: '🌸', selected: false },
        { id: 'floral_chandelier', name: 'Floral Chandelier', icon: '🏮', selected: false },
        { id: 'helium_balloon', name: 'Helium Balloon Setup', icon: '🎈', selected: true }
      ]
    };

    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Sub Category's</h2>
          <p className="text-gray-600">Choose your specific services</p>
        </div>
        
        {/* Entertainment & Attractions */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Entertainment & Attractions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subCategories.entertainment.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSubCategoryToggle(item.id)}
                className={`flex items-center p-3 rounded-xl border-2 transition-all ${
                  selectedSubCategories.includes(item.id) || item.selected
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white border-primary-600'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Decoration & Styling */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Decoration & Styling</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {subCategories.decoration.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSubCategoryToggle(item.id)}
                className={`flex items-center p-3 rounded-xl border-2 transition-all ${
                  selectedSubCategories.includes(item.id) || item.selected
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white border-primary-600'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Verification</h2>
        <p className="text-gray-600">Complete your account setup</p>
      </div>
      
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Account Created Successfully!</h3>
        <p className="text-green-600">Your vendor account has been created. You can now start listing your services.</p>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl relative max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {/* Step Indicator */}
          {renderStepIndicator()}

        {/* Form Content */}
        {step === 5 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Upload Business Documents</h2>
              <p className="text-gray-600">Complete your account setup</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Registration</label>
              <input
                type="file"
                name="businessRegistration"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-3 px-4 rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg"
            >
              Complete Registration
            </button>
          </div>
        )}
        
          <form onSubmit={handleSubmit}>
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
            {step === 4 && renderStep4()}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 sm:mt-8">
              <button
                type="button"
                onClick={() => step > 1 ? setStep(step - 1) : onClose()}
                className="px-4 sm:px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors order-2 sm:order-1"
              >
                {step === 1 ? 'Cancel' : 'Back'}
              </button>
              
              <button
                type="submit"
                disabled={step === 1 && !formData.accountType}
                className="px-4 sm:px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2"
              >
                {step === 4 ? 'Complete' : 'Next'}
              </button>
            </div>
          </form>

          {/* Switch to Client Login */}
          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={onSwitchToClient}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Sign in as Client
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
