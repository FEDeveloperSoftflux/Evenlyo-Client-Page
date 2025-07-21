import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VendorLogin from "../auth/VendorLogin";

function Hero({ onSearchNow, onReset }) {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vendorModalOpen, setVendorModalOpen] = useState(false);

  const handleJoinFree = () => {
    navigate("/login");
  };

  const handleBecomeVendor = () => {
    setVendorModalOpen(true);
  };

  const closeVendorModal = () => {
    setVendorModalOpen(false);
  };

  const handleBookNow = () => {
    if (onSearchNow) {
      onSearchNow();
    } else {
      const categoriesSection = document.getElementById('categories');
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleReset = () => {
    setSelectedEvent("");
    setLocation("");
    setDate("");
    setTime("");
    if (onReset) onReset();
  };
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-gray-900"
      style={{
        backgroundImage: `url('/assets/hero-img.png'), linear-gradient(135deg, #1f2937 0%, #374151 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-responsive py-responsive">
        {/* Main Heading */}
        <div className="text-center mb-responsive">
          <h1 className="text-responsive-h1 mb-4">
            Book DJs, Food Trucks &{" "}
            <span className="text-white">Venues</span>
          </h1>
          <h2 className="text-responsive-h2">
            <span className="text-white">Fast, Easy</span>
            {" & "}
            <span className="text-white">Without Hassle</span>
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row justify-center gap-4 mb-8 lg:mb-16 w-full max-w-md sm:max-w-none sm:w-auto ">
          <button 
            onClick={handleJoinFree}
            className="btn-primary-mobile touch-button align-middle sm:w-auto text-responsive-body font-bold"
          >
            Join Free
          </button>
          <button 
            onClick={handleBecomeVendor}
            className="btn-secondary-mobile touch-button  sm:w-auto text-responsive-body font-bold border-white text-white hover:bg-white hover:text-gray-900"
          >
            Become a Vendor
          </button>
        </div>

        {/* Search Form */}
        <div className="w-full container-7xl bg-[#D8D8D857]/35 backdrop-blur-sm rounded-xl p-4 sm:p-6 ">
          <div className="flex flex-col md:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:items-end">
            {/* Type of Events */}
            <div className="w-full md:col-span-1">
              <label className="block text-white text-sm font-semibold mb-2">
                Search Event
              </label>
              <div className="relative">
                <img
                  src="/assets/Search2.svg"
                  alt="Event"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10"
                />
                <input
                  type="text"
                  placeholder="Search Event"
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="input-mobile pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm shadow-sm w-full"
                />
                {selectedEvent && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:outline-none"
                    tabIndex={0}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Search Location */}
            <div className="w-full md:col-span-1">
              <label className="block text-white text-sm font-semibold mb-2">
                Search location
              </label>
              <div className="relative">
                <img
                  src="/assets/location.svg"
                  alt="Location"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10"
                />
                <input
                  type="text"
                  placeholder="Search your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input-mobile pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm shadow-sm w-full"
                />
              </div>
            </div>

            {/* Date */}
            <div className="w-full md:col-span-1 5xl:col-span-1">
              <label className="block text-white text-sm font-semibold mb-2">
                Date
              </label>
              <div className="relative">
                <img
                  src="/assets/calender.svg"
                  alt="Calendar"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10"
                />
                <input
                  type="date"
                  placeholder="Search your Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="input-mobile pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm shadow-sm w-full"
                />
              </div>
            </div>

            {/* Time */}
            <div className="w-full md:col-span-1 5xl:col-span-1">
              <label className="block text-white text-sm font-semibold mb-2">
                Time
              </label>
              <div className="relative">
                <img
                  src="/assets/time.svg"
                  alt="Time"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 z-10"
                />
                <input
                  type="time"
                  placeholder="Search your Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="input-mobile pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm shadow-sm w-full"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="w-full md:col-span-2 lg:col-span-1">
              <button 
                onClick={handleBookNow}
                className={`btn-primary-mobile w-full flex items-center justify-center py-2 px-12 ${!selectedEvent ? 'cursor-not-allowed' : ''}`}
                disabled={!selectedEvent}
              >
                <img
                  src="/assets/search.svg"
                  alt="Search"
                  className="h-8 w-6 mb-0 mr-2"
                />
                <span className="font-bold text-lg">Search Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vendor Modal */}
      {vendorModalOpen && (
      <VendorLogin
          onClose={closeVendorModal}
          onSwitchToClient={closeVendorModal}
        />
      )}
    </section>
  );
}

export default Hero;
