import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookNowModal from './BookNowModal';
import OrderSummaryModal from './OrderSummaryModal';
import RequestSuccessModal from './RequestSuccessModal';

const BookingCalendar = () => {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 2)); // March 2025
  const [activeTab, setActiveTab] = useState('details');
  const [isBookNowModalOpen, setIsBookNowModalOpen] = useState(false);
  const [isOrderSummaryModalOpen, setIsOrderSummaryModalOpen] = useState(false);
  const [isRequestSuccessModalOpen, setIsRequestSuccessModalOpen] = useState(false);
  
  const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // March 2025 calendar data
  const calendarData = [
    // Week 1
    [27, 28, 29, 30, 1, 2, 3],
    // Week 2
    [4, 5, 6, 7, 8, 9, 10],
    // Week 3
    [11, 12, 13, 14, 15, 16, 17],
    // Week 4
    [18, 19, 20, 21, 22, 23, 24],
    // Week 5
    [25, 26, 27, 28, 29, 30, 31],
    // Week 6
    [1, 2, 3, 4, 5, 6, 7]
  ];
  
  // Available dates (gray background)
  const availableDates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  const isCurrentMonth = (day, weekIndex) => {
    if (weekIndex === 0 && day < 15) return day >= 1; // First week
    if (weekIndex === 5 && day < 15) return false; // Last week
    return weekIndex > 0 && weekIndex < 5;
  };
  
  const isAvailable = (day, weekIndex) => {
    if (!isCurrentMonth(day, weekIndex)) return false;
    return availableDates.includes(day);
  };
  
  
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };
  
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };
  
  const handleBookNow = () => {
    setIsBookNowModalOpen(true);
  };
  
  const handleAddToCart = () => {
    navigate('/add-to-cart'); // Redirect to Add to Cart page
  };
  
  const handleBookingSuccess = () => {
    setIsBookNowModalOpen(false);
    setIsRequestSuccessModalOpen(true);
  };
  
  const handleTrackBooking = () => {
    setIsRequestSuccessModalOpen(false);
    setIsOrderSummaryModalOpen(true);
  };
  
  const handleDownloadPDF = () => {
    // Implement PDF download logic
    console.log('Downloading PDF...');
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <h3 className="text-xl font-semibold text-gray-900">
              March 2025
            </h3>
            
            <button
              onClick={nextMonth}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarData.map((week, weekIndex) => 
              week.map((day, dayIndex) => {
                const isCurrentMonthDay = isCurrentMonth(day, weekIndex);
                const isAvailableDay = isAvailable(day, weekIndex);
                
                return (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`h-12 w-12 flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-200 ${
                      isCurrentMonthDay
                        ? isAvailableDay
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer'
                          : 'text-gray-700 hover:bg-gray-50 cursor-pointer'
                        : 'text-gray-300'
                    }`}
                  >
                    {day}
                  </div>
                );
              })
            )}
          </div>
        </div>
        
        {/* Details Content Section */}
        <div className="space-y-6">
          {/* User Info */}
          <div className="flex items-center space-x-3">
            <img
              src="/assets/jaydeep.png"
              alt="Jaydeep"
              className="w-8 h-8 rounded-full object-cover border-2 border-blue-200"
            />
            <span className="text-sm text-gray-600">Jaydeep</span>
          </div>
          
          {/* Event Title */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              DJ Abz Wine || DJ Ray Beatz Let the Bass Move You!
            </h1>
            <p className="text-gray-600 text-sm">
              Vendor: <span className="font-medium">Pulse Events & Entertainment</span>
            </p>
          </div>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-gray-600 ml-2">4.8</span>
          </div>
          
          {/* Description */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Description:</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              With over 7 years of event experience, DJ Ray Beatz is known for high-energy dance floors, seamless transitions, and crowd-pleasing remixes. From cleat weddings to corporate raves, he brings the perfect vibe for every crowd.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Contact:</span>
              <span className="text-sm font-medium text-gray-900">+8323344344</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Email:</span>
              <span className="text-sm font-medium text-gray-900">some@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Location:</span>
              <span className="text-sm font-medium text-gray-900">Los Angeles, CA</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Experience:</span>
              <span className="text-sm font-medium text-gray-900">8+ years</span>
            </div>
          </div>
          
          {/* Pricing */}
          <div className="space-y-2">
            <p className="text-xs text-gray-500">USD(incl. of all taxes)</p>
            <div className="flex items-center space-x-4">
              <div>
                <span className="text-2xl font-bold text-gray-900">$300 - $500</span>
                <span className="text-sm text-gray-600 ml-2">PER EVENT</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">$100 - $200</span>
                <span className="text-sm text-gray-600 ml-2">PER HOURS</span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button 
              onClick={handleAddToCart}
              className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Add To Cart
            </button>
            <button 
              onClick={handleBookNow}
              className="px-6 py-3 bg-gradient-brand text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <BookNowModal 
        isOpen={isBookNowModalOpen} 
        onClose={() => setIsBookNowModalOpen(false)}
        onSuccess={handleBookingSuccess}
      />
      
      <OrderSummaryModal 
        isOpen={isOrderSummaryModalOpen} 
        onClose={() => setIsOrderSummaryModalOpen(false)}
        onDownloadPDF={handleDownloadPDF}
      />
      
      <RequestSuccessModal 
        isOpen={isRequestSuccessModalOpen} 
        onClose={() => setIsRequestSuccessModalOpen(false)}
        onTrackBooking={handleTrackBooking}
      />
    </div>
  );
};

export default BookingCalendar;
