import React, { useState } from "react";

const BookNowModal = ({ isOpen, onClose, onSuccess }) => {
  const [selectedDate, setSelectedDate] = useState("Friday, July 11, 2025");
  const [isMultipleDay, setIsMultipleDay] = useState(false);
  const [startTime, setStartTime] = useState("09:00 AM");
  const [endTime, setEndTime] = useState("05:00 PM");
  const [location, setLocation] = useState("");
  const [instructions, setInstructions] = useState("");
  const [hasSecurityProtection, setHasSecurityProtection] = useState(true);
  const [acceptedTerms, setAcceptedTerms] = useState(true);

  if (!isOpen) return null;

  const duration = 8; // hours
  const hourlyRate = 108;
  const subtotal = duration * hourlyRate;
  const securityFee = 25;
  const kilometerFee = 25;
  const total =
    subtotal + (hasSecurityProtection ? securityFee : 0) + kilometerFee;

  const handleAddToCart = () => {
    console.log("Added to cart");
    onClose(); // Close the modal
  };

  const handleSendBookingRequest = () => {
    // Send booking request logic here
    console.log("Booking request sent");
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div
        className="bg-white/95 backdrop-blur-md rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-white/20 mx-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
          <h2 className="text-xl font-bold text-gray-900">
            Order Mapping - TRK001
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gradient-brand text-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Selected Date & Time */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Selected Date & Time
            </h3>
            <div className="text-gray-600 mb-4">{selectedDate}</div>

            {/* Multiple Day Toggle */}
            <label className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isMultipleDay}
                  onChange={(e) => setIsMultipleDay(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isMultipleDay
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 border-pink-500"
                      : "border-gray-300"
                  }`}
                >
                  {isMultipleDay && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
              </div>
              <span className="text-gray-700">Multiple Day</span>
            </label>

            {/* Time Selection */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Time
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="09:00 AM"
                  />
                  <div className="absolute right-3 top-2.5">
                    <svg
                      className="w-4 h-4 text-gray-400"
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Time
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="05:00 PM"
                  />
                  <div className="absolute right-3 top-2.5">
                    <svg
                      className="w-4 h-4 text-gray-400"
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
              </div>
            </div>
          </div>

          {/* Add Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Add Location"
              />
              <div className="absolute right-3 top-2.5">
                <svg
                  className="w-4 h-4 text-gray-400"
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
              </div>
            </div>
            <div className="text-sm text-gray-500 mt-1">Calculated km</div>
            <div className="text-sm font-medium text-gray-700">10 km</div>
          </div>

          {/* Add Instructions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add Instructions <span className="text-red-500">*</span>
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 h-20 resize-none"
              placeholder="Any special requirements or setup instructions..."
            />
          </div>

          {/* Security Protection */}
          <div className="flex items-center justify-between">
            <span className="text-gray-700">
              Add Security Protection (+$25)
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={hasSecurityProtection}
                onChange={(e) => setHasSecurityProtection(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  hasSecurityProtection
                    ? "bg-gradient-brand border-pink-500"
                    : "border-gray-300"
                }`}
              >
                {hasSecurityProtection && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </label>
          </div>

          {/* Pricing Summary */}
          <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-5 space-y-4 border border-gray-200/30">
            <h4 className="font-semibold text-gray-900 text-lg">Pricing Summary</h4>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Duration: {duration} hours</span>
              <span className="text-gray-900">${hourlyRate}/hr</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-gray-900">${subtotal.toFixed(2)}</span>
            </div>

            {hasSecurityProtection && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Security Fee:</span>
                <span className="text-gray-900">${securityFee.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Kilometer: 10 km</span>
              <span className="text-gray-900">${kilometerFee.toFixed(2)}</span>
            </div>

            <div className="border-t border-gray-200/50 pt-4">
              <div className="flex justify-between text-xl font-bold">
                <span className="text-gray-900">Total:</span>
                <span className="text-gray-900">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center space-x-3">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  acceptedTerms
                    ? "bg-gradient-brand border-pink-500"
                    : "border-gray-300"
                }`}
              >
                {acceptedTerms && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </label>
            <span className="text-gray-700">
              I accept the company's{" "}
              <a href="#" className="text-pink-500 hover:text-pink-600">
                terms & conditions
              </a>
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 py-3 px-6 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all text-sm sm:text-base backdrop-blur-sm"
            >
              Add To Cart
            </button>
            <button
              onClick={handleSendBookingRequest}
              className="flex-1 py-3 px-6 bg-gradient-brand text-white rounded-lg font-medium hover:shadow-lg transition-all text-sm sm:text-base disabled:opacity-50 backdrop-blur-sm"
              disabled={!acceptedTerms || !location || !instructions}
            >
              Send Booking Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNowModal;
