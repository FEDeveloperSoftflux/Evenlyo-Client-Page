import React, { useState } from "react";

function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { code: "en", name: "English" },
    { code: "nl", name: "Dutch" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 py-3 px-6 lg:px-16">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Left Section - Logo and Rating */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <img
              src="/assets/brand.svg"
              alt="Evenlyo Logo"
              className="h-8 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center">
            <img
              src="/assets/ratings.svg"
              alt="Ratings"
              className="h-16 w-auto"
            />
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a
            href="/"
            className="relative text-gray-900 font-medium text-subtitle-6 hover:text-primary-500 transition-colors pb-1"
          >
            Home
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full"></div>
          </a>
          <a
            href="/features"
            className="relative text-gray-600 font-medium text-subtitle-6 hover:text-primary-500 transition-colors pb-1 group"
          >
            Features list
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>
          <a
            href="/support"
            className="relative text-gray-600 font-medium text-subtitle-6 hover:text-primary-500 transition-colors pb-1 group"
          >
            Customer Support
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>
          <a
            href="/blog"
            className="relative text-gray-600 font-medium text-subtitle-6 hover:text-primary-500 transition-colors pb-1 group"
          >
            Blog
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>
          <a
            href="/pricing"
            className="relative text-gray-600 font-medium text-subtitle-6 hover:text-primary-500 transition-colors pb-1 group"
          >
            Pricing
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
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
          <button className="bg-gradient-to-r from-secondary via-primary-500 to-primary-600 text-white font-bold px-6 py-2.5 rounded-lg hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 transition-all duration-200 shadow-sm hover:shadow-md text-btn-2 flex items-center space-x-2">
            <img src="/assets/signin.svg" alt="Sign in" className="h-5 w-5" />
            <span>Sign in / Register</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
