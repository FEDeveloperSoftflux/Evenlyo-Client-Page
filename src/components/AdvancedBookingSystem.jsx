import React from "react";

const AdvancedBookingSystem = () => {
  return (
    <section className="px-0 lg:px-0 bg-white border-t border-b border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10 items-center">
          {/* Left Side - Content */}
          <div className="space-y-2 pl-0 pr-0 lg:pl-8 lg:pr-8 break-words">
            {/* Key Features Label */}
            <span className="inline-block px-3 py-1 mb-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium ">
              KEY FEATURES
            </span>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
              Advanced{" "}
              <span
                className="relative inline-block"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,236,188,0) 85%, #FFECBC 85%)",
                  borderRadius: "6px",
                  padding: "0 4px",
                  display: "inline-block",
                }}
              >
                Booking System
              </span>
            </h2>
            <p className="text-base text-gray-600 leading-normal mb-4">
              Listeo includes a{" "}
              <span className="font-bold text-gray-900">
                built-in and free advanced booking system
              </span>{" "}
              that offers complete
              <br /> control over online reservation methods and{" "}
              <span className="font-bold text-gray-900">
                QR code verification system
              </span>
              .
            </p>
            <button
              className="inline-flex items-center px-6 py-2 rounded-full font-medium text-base"
              style={{
                background: "#FFEDF0",
                color: "#F91942",
                transition: "background 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#ffe0e7")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#FFEDF0")}
            >
              Watch Booking Guide Video
              <span className="ml-2 text-lg">&#8594;</span>
            </button>
          </div>

          {/* Right Side - QR Code and Features */}
          <div className="flex justify-end items-center h-full pr-0 lg:pr-8">
            <div className="flex flex-col justify-center items-end w-full h-full bg-white">
              <img
                src="/assets/QR CODE.png"
                alt="QR Code"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling &&
                    (e.target.nextSibling.style.display = "flex");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedBookingSystem;
