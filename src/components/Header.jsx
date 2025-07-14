import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const featuresDropdownRef = useRef(null);
  const location = useLocation();

  const languages = [
    { code: "en", name: "English" },
    { code: "nl", name: "Dutch" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        featuresDropdownRef.current &&
        !featuresDropdownRef.current.contains(event.target)
      ) {
        setIsFeaturesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

return (
    <header className="bg-white border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-16">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {/* Left Section - Logo and Rating */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <a href="/" className="cursor-pointer">
              <img
                src="/assets/brand.svg"
                alt="Evenlyo Logo"
                className="h-8 w-auto hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <img
              src="/assets/ratings.svg"
              alt="Ratings"
              className="h-16 w-20"
            />
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a
            href="/"
            className={`relative ${location.pathname === '/' ? 'text-gray-900' : 'text-gray-600'} font-medium text-subtitle-6 hover:text-primary-500 transition-colors pb-1`}
          >
            Home
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full ${location.pathname === '/' ? '' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300`}></div>
          </a>
          <div className="relative">
            <button
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              className="relative text-gray-600 font-medium text-subtitle-6 hover:text-primary-500 transition-colors pb-1 group flex items-center space-x-1"
            >
              <span>Features list</span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform ${
                  isFeaturesOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </button>

            {/* Features Dropdown */}
            {isFeaturesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <a
                    href="/features/marketplace"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-500 transition-colors"
                  >
                    Advance Booking System
                  </a>
                  <a
                    href="/features/vendor-management"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-500 transition-colors"
                  >
                    Vendor feature
                  </a>
                  <a
                    href="/features/payment-processing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-500 transition-colors"
                  >
                    Reviews
                  </a>
                  <a
                    href="/features/analytics"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-500 transition-colors"
                  >
                    FAQ
                  </a>
                </div>
              </div>
            )}
          </div>
          <a
            href="/support"
            className={`relative ${location.pathname === '/support' ? 'text-gray-900' : 'text-gray-600'} font-medium text-subtitle-6 hover:text-primary-500 transition-colors pb-1 group`}
          >
            Customer Support
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full ${location.pathname === '/support' ? '' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300`}></div>
          </a>
          <a
            href="/blog"
            className={`relative ${location.pathname === '/blog' ? 'text-gray-900' : 'text-gray-600'} font-medium text-subtitle-6 hover:text-primary-500 transition-colors pb-1 group`}
          >
            Blog
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full ${location.pathname === '/blog' ? '' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300`}></div>
          </a>
          <a
            href="/pricing"
            className={`relative ${location.pathname === '/pricing' ? 'text-gray-900' : 'text-gray-600'} font-medium text-subtitle-6 hover:text-primary-500 transition-colors pb-1 group`}
          >
            Pricing
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full ${location.pathname === '/pricing' ? '' : 'scale-x-0 group-hover:scale-x-100'} transition-transform duration-300`}></div>
          </a>
        </nav>

        {/* Right Section - Language and Auth */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors relative">
            <img src="/assets/globe.svg" alt="Language" className="h-4 w-4" />
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-2 text-sm text-gray-700 font-medium"
            >
              <span>{selectedLanguage}</span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform ${
                  isLanguageOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Language Dropdown */}
            {isLanguageOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang.name);
                      setIsLanguageOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="hidden lg:flex bg-gradient-to-r from-secondary via-primary-500 to-primary-600 text-white font-medium px-4 py-3 rounded-lg hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 transition-all duration-200 shadow-sm hover:shadow-md text-btn-2 items-center space-x-2"
            onClick={() => (window.location.href = "/login")}
          >
            {/* White user SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <circle
                cx="12"
                cy="8"
                r="4"
                stroke="white"
                strokeWidth="2"
                fill="white"
              />
              <path
                d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Sign in / Register</span>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu bg-white shadow-lg transform transition-transform duration-300 lg:hidden">
          <nav className="px-4 py-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <a href="/" className={`${location.pathname === '/' ? 'text-primary-500' : 'text-gray-700'} block text-lg font-medium py-2 hover:text-primary-500 transition-colors`}>Home</a>
              <a href="/support" className={`${location.pathname === '/support' ? 'text-primary-500' : 'text-gray-700'} block text-lg font-medium py-2 hover:text-primary-500 transition-colors`}>Customer Support</a>
              <a href="/blog" className={`${location.pathname === '/blog' ? 'text-primary-500' : 'text-gray-700'} block text-lg font-medium py-2 hover:text-primary-500 transition-colors`}>Blog</a>
              <a href="/pricing" className={`${location.pathname === '/pricing' ? 'text-primary-500' : 'text-gray-700'} block text-lg font-medium py-2 hover:text-primary-500 transition-colors`}>Pricing</a>
              <button 
                className="w-full mt-6 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 text-white font-medium px-4 py-3 rounded-lg hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center space-x-2" 
                onClick={() => (window.location.href = '/login')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    stroke="white"
                    strokeWidth="2"
                    fill="white"
                  />
                  <path
                    d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Sign in / Register</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
