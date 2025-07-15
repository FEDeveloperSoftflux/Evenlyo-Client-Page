import React, { useState } from "react";

function ResponsiveHeader() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState('advance-booking');
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "nl", name: "Dutch" },
  ];

  const navigationItems = [
    { name: "Home", href: "/", active: true },
    { name: "Features", href: "/features" },
    { name: "Customer Support", href: "/support" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(event.target)
      ) {
        setIsFeaturesOpen(false);
      }
    }
    if (isFeaturesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFeaturesOpen]);

  const featuresRef = React.useRef(null);

  return (
    <>
<header className="bg-white border-b border-gray-100 py-3 px-responsive sticky top-0 z-40">
        <div className="flex items-center justify-between container-7xl">
          {/* Left Section - Logo and Rating */}
          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="flex items-center">
              <img
                src="/assets/brand.svg"
                alt="Evenlyo Logo"
                className="h-6 w-auto sm:h-8"
              />
            </div>
            <div className="hidden md:flex items-center">
              <img
                src="/assets/ratings.svg"
                alt="Ratings"
                className="h-12 w-16 lg:h-16 lg:w-20"
              />
            </div>
          </div>

          {/* Center Navigation - Desktop Only */}
          <nav className="nav-desktop flex items-center space-x-6 relative hidden md:flex">
            {navigationItems.map((item) =>
              item.name === "Features" ? (
                <div
                  key={item.name}
                  className="relative"
                  ref={featuresRef}
                >
                  <button
                    type="button"
                    onClick={() => setIsFeaturesOpen((open) => !open)}
                    className={`relative font-medium text-subtitle-6 transition-colors pb-1 group-hover:text-primary-500 ${
                      item.active
                        ? "text-gray-900 hover:text-primary-500"
                        : "text-gray-600 hover:text-primary-500"
                    }`}
                  >
                    {item.name}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full transition-transform duration-300 ${
                      item.active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}></div>
                  </button>
                  {/* Dropdown */}
                  {isFeaturesOpen && (
                    <div className="absolute left-0 mt-3 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 animate-fade-in">
                      <ul className="py-2 px-1">
                        <li>
                          <a
                            href="/#advance-booking"
                            className={`block px-4 py-2 text-sm font-medium rounded-xl transition-colors ${selectedFeature === 'advance-booking' ? 'btn-primary-mobile text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                            onClick={() => { setSelectedFeature('advance-booking'); setIsFeaturesOpen(false); }}
                          >
                            Advance Booking System
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#vendor-feature"
                            className={`block px-6 py-2 text-sm font-medium rounded-xl transition-colors ${selectedFeature === 'vendor-feature' ? 'btn-primary-mobile text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                            onClick={() => { setSelectedFeature('vendor-feature'); setIsFeaturesOpen(false); }}
                          >
                            Vendor feature
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#reviews"
                            className={`block px-6 py-2 text-sm font-medium rounded-xl transition-colors ${selectedFeature === 'reviews' ? 'btn-primary-mobile text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                            onClick={() => { setSelectedFeature('reviews'); setIsFeaturesOpen(false); }}
                          >
                            Reviews
                          </a>
                        </li>
                        <li>
                          <a
                            href="/#faq"
                            className={`block px-6 py-2 text-sm font-medium rounded-xl transition-colors ${selectedFeature === 'faq' ? 'btn-primary-mobile text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                            onClick={() => { setSelectedFeature('faq'); setIsFeaturesOpen(false); }}
                          >
                            FAQ
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium text-subtitle-6 transition-colors pb-1 group ${
                    item.active
                      ? "text-gray-900 hover:text-primary-500"
                      : "text-gray-600 hover:text-primary-500"
                  }`}
                >
                  {item.name}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full transition-transform duration-300 ${
                    item.active
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}></div>
                </a>
              )
            )}
          </nav>

          {/* Right Section - Language, Auth, and Mobile Menu */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Language Selector - Hidden on mobile */}
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

            {/* Sign In Button - Desktop Only */}
            <button
              className="hidden md:flex btn-primary-mobile text-sm lg:text-base py-2 px-3 lg:py-3 lg:px-4 items-center space-x-2"
              onClick={() => (window.location.href = "/login")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 lg:h-5 lg:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <circle cx="12" cy="8" r="4" strokeWidth="2" fill="white" />
                <path
                  d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Sign in / Register</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden touch-target text-gray-600 hover:text-primary-500 transition-colors p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-mobile" onClick={toggleMobileMenu}></div>
          <div className={`fixed top-0 right-0 w-80 h-full bg-white shadow-xl mobile-menu-slide ${
            isMobileMenuOpen ? 'open' : ''
          }`}>
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-primary-50 to-accent-pink">
                <img src="/assets/brand.svg" alt="Evenlyo Logo" className="h-6 w-auto" />
                <button
                  onClick={toggleMobileMenu}
                  className="touch-target text-gray-600 hover:text-primary-500 transition-colors p-2 rounded-lg hover:bg-white hover:bg-opacity-50"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 py-6">
                {navigationItems.map((item, index) =>
                  item.name === "Features" ? (
                    <div key={item.name}>
                      <button
                        className={`mobile-menu-item block w-full text-left px-6 py-4 text-lg font-medium transition-all duration-300 flex items-center justify-between ${
                          item.active
                            ? "text-primary-500 bg-gradient-to-r from-primary-50 to-transparent border-r-4 border-primary-500 font-semibold"
                            : "text-gray-700 hover:text-primary-500 hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent hover:border-r-4 hover:border-primary-200"
                        }`}
                        onClick={() => setIsMobileFeaturesOpen((open) => !open)}
                        aria-expanded={isMobileFeaturesOpen}
                        aria-controls="mobile-features-submenu"
                      >
                        <span className="flex items-center space-x-3">
                          <span className="text-primary-500 opacity-60">•</span>
                          <span>{item.name}</span>
                        </span>
                        <svg
                          className={`w-5 h-5 ml-2 transition-transform ${isMobileFeaturesOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isMobileFeaturesOpen && (
                        <ul id="mobile-features-submenu" className="pl-10 pr-4 py-2 space-y-1">
                          <li>
                            <a
                              href="/#advance-booking"
                              className="block py-2 text-base text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={toggleMobileMenu}
                            >
                              Advance Booking System
                            </a>
                          </li>
                          <li>
                            <a
                              href="/#vendor-feature"
                              className="block py-2 text-base text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={toggleMobileMenu}
                            >
                              Vendor feature
                            </a>
                          </li>
                          <li>
                            <a
                              href="/#reviews"
                              className="block py-2 text-base text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={toggleMobileMenu}
                            >
                              Reviews
                            </a>
                          </li>
                          <li>
                            <a
                              href="/#faq"
                              className="block py-2 text-base text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                              onClick={toggleMobileMenu}
                            >
                              FAQ
                            </a>
                          </li>
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`mobile-menu-item block px-6 py-4 text-lg font-medium transition-all duration-300 ${
                        item.active 
                          ? "text-primary-500 bg-gradient-to-r from-primary-50 to-transparent border-r-4 border-primary-500 font-semibold" 
                          : "text-gray-700 hover:text-primary-500 hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent hover:border-r-4 hover:border-primary-200"
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-primary-500 opacity-60">•</span>
                        <span>{item.name}</span>
                      </div>
                    </a>
                  )
                )}
              </nav>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                {/* Language Selector */}
                <div className="flex items-center space-x-3 px-4 py-3 border border-gray-300 rounded-xl mb-6 bg-white hover:border-primary-300 transition-colors">
                  <img src="/assets/globe.svg" alt="Language" className="h-5 w-5 opacity-70" />
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-gray-700 outline-none font-medium"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.name}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Mobile Sign In Button */}
                <button
                  className="btn-primary-mobile w-full flex items-center justify-center space-x-3 py-4 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    window.location.href = "/login"
                    toggleMobileMenu();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <circle cx="12" cy="8" r="4" strokeWidth="2" fill="white" />
                    <path
                      d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Sign in / Register</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default ResponsiveHeader;
