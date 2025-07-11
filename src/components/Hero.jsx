import React, { useState } from "react";
import VendorLogin from "../auth/VendorLogin";

function Hero() {
  const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleJoinFree = () => {
    window.location.href = "/login";
  };

  const handleBecomeVendor = () => {
    setIsVendorModalOpen(true);
  };

  return (
    <section
      className="relative min-h-[80vh] bg-cover bg-center bg-no-repeat bg-gray-900"
      style={{
        backgroundImage: `url('/assets/hero-img.png'), linear-gradient(135deg, #1f2937 0%, #374151 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {isVendorModalOpen && (
        <VendorLogin onClose={() => setIsVendorModalOpen(false)} />
      )}
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-white px-6 lg:px-16">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
            Book DJs, Food Trucks & <span className="font-light">Venues</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
            <span className="font-light">Fast, Easy</span>
            {" & "}
            <span className="font-bold">Without Hassle</span>
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-16">
          <button
            onClick={handleJoinFree}
            className="bg-gradient-to-r from-secondary via-primary-500 to-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl text-base transform hover:scale-105"
          >
            Join Free
          </button>
          <button
            onClick={handleBecomeVendor}
            className="border-2 border-white text-white bg-transparent font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-base transform hover:scale-105"
          >
            Become a Vendor
          </button>
        </div>

        {/* Search Form */}
        <div className="w-full max-w-5xl bg-black/20 backdrop-blur-md rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Type of Events */}
            <div className="md:col-span-1">
              <label className="block text-white text-sm font-semibold mb-2">
                Type Of Events
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full pl-10 pr-10 py-4 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-white/70 bg-white/20 backdrop-blur-sm appearance-none text-sm shadow-sm"
                >
                  <option value="" className="text-gray-800">
                    Select Events
                  </option>
                  <option value="dj" className="text-gray-800">
                    DJ Services
                  </option>
                  <option value="food-truck" className="text-gray-800">
                    Food Trucks
                  </option>
                  <option value="venue" className="text-gray-800">
                    Venues
                  </option>
                </select>
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70 pointer-events-none"
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
              <label className="block text-white text-sm font-semibold mb-2">
                Search location
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-12 py-4 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-white/70 bg-white/20 backdrop-blur-sm text-sm shadow-sm"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Date */}
            <div className="md:col-span-1">
              <label className="block text-white text-sm font-semibold mb-2">
                Date
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search your Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 pr-12 py-4 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-white/70 bg-white/20 backdrop-blur-sm text-sm shadow-sm"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Time */}
            <div className="md:col-span-1">
              <label className="block text-white text-sm font-semibold mb-2">
                Time
              </label>
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search your Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full pl-10 pr-12 py-4 border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-white/70 bg-white/20 backdrop-blur-sm text-sm shadow-sm"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 z-10 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1">
              <button className="w-full bg-gradient-to-r from-secondary via-primary-500 to-primary-600 text-white font-bold py-4 px-6 rounded-xl hover:from-primary-500 hover:via-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col items-center justify-center space-y-1">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="text-sm font-bold">Book Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
