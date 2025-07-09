import React, { useState } from "react";
import AuthModal from "../auth/AuthModal";

function Hero() {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState('client');

  const handleBecomeVendor = () => {
    setAuthType('vendor');
    setAuthModalOpen(true);
  };

  const handleJoinFree = () => {
    setAuthType('client');
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/hero-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-white px-6 lg:px-16">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-h1 font-bold leading-tight mb-2">
            Book DJs, Food Trucks &{" "}
            <span className="text-white">Venues</span>
          </h1>
          <h2 className="text-h2 font-bold leading-tight">
            <span className="text-white">Fast, Easy</span>
            {" & "}
            <span className="text-white">Without Hassle</span>
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button 
            onClick={handleJoinFree}
            className="bg-gradient-to-r from-secondary via-primary-500 to-primary-600 text-white font-bold px-8 py-4 rounded-lg hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl text-btn-1"
          >
            Join Free
          </button>
          <button 
            onClick={handleBecomeVendor}
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-btn-1"
          >
            Become a Vendor
          </button>
        </div>

        {/* Search Form */}
        <div className="w-full max-w-5xl bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Type of Events */}
            <div className="md:col-span-1">
              <label className="block text-gray-800 text-subtitle-4 font-semibold mb-2">
                Type Of Events
              </label>
              <div className="relative">
                <img
                  src="/assets/events.svg"
                  alt="Events"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10"
                />
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full pl-10 pr-10 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700 bg-white/50 backdrop-blur-sm appearance-none text-subtitle-6 shadow-sm"
                >
                  <option value="">Select Events</option>
                  <option value="dj">DJ Services</option>
                  <option value="food-truck">Food Trucks</option>
                  <option value="venue">Venues</option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
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
              </div>
            </div>

            {/* Search Location */}
            <div className="md:col-span-1">
              <label className="block text-gray-800 text-subtitle-4 font-semibold mb-2">
                Search location
              </label>
              <div className="relative">
                <img
                  src="/assets/location.svg"
                  alt="Location"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10"
                />
                <input
                  type="text"
                  placeholder="Search your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700 placeholder-gray-500 bg-white/50 backdrop-blur-sm text-subtitle-6 shadow-sm"
                />
              </div>
            </div>

            {/* Date */}
            <div className="md:col-span-1">
              <label className="block text-gray-800 text-subtitle-4 font-semibold mb-2">
                Date
              </label>
              <div className="relative">
                <img
                  src="/assets/calender.svg"
                  alt="Calendar"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10"
                />
                <input
                  type="text"
                  placeholder="Search your Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700 placeholder-gray-500 bg-white/50 backdrop-blur-sm text-subtitle-6 shadow-sm"
                />
              </div>
            </div>

            {/* Time */}
            <div className="md:col-span-1">
              <label className="block text-gray-800 text-subtitle-4 font-semibold mb-2">
                Time
              </label>
              <div className="relative">
                <img
                  src="/assets/time.svg"
                  alt="Time"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10"
                />
                <input
                  type="text"
                  placeholder="Search your Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700 placeholder-gray-500 bg-white/50 backdrop-blur-sm text-subtitle-6 shadow-sm"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1">
              <button className="w-full bg-gradient-to-r from-secondary via-primary-500 to-primary-600 text-white font-bold py-4 px-6 rounded-xl hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <img
                  src="/assets/search.svg"
                  alt="Search"
                  className="h-5 w-5"
                />
                <span className="text-btn-1 font-bold">Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={closeAuthModal}
        initialType={authType}
      />
    </section>
  );
}

export default Hero;
