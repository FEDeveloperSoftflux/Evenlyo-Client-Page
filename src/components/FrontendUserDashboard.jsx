import React from 'react'

const FrontendUserDashboard = () => {
  return (
    <section className="py-16 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text and Buttons Aligned Top */}
          <div className="flex flex-col justify-start space-y-8">
            <div>
              <p className="text-sm font-medium text-orange-500 mb-2 tracking-wide uppercase">
                SUPERIOR UX
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Front-End User Dashboard
              </h2>
              <p className="text-gray-600 mt-4">
                Seamless management of listing, bookings, messages, profile audits, payments, reviews - all in one place.
              </p>
            </div>
            
            {/* Action Button */}
            <div className="pt-6">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-300">
                Watch Video Tour ➜
              </button>
            </div>
          </div>

          {/* Right Side - Simple Scroller with Placeholder */}
          <div className="relative">
                  {/* Dashboard Screenshot */}
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
                    <img src="../assets/dashboardoverview.png" alt="Dashboard Overview" className="w-full h-96 object-cover" />
                  </div>

            {/* Dashboard Overview Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <img src="../assets/dashbaordicon.svg" alt="Dashboard Icon" className="w-6 h-6 mr-2" />
                <h4 className="text-sm font-semibold text-gray-900">Dashboard Overview</h4>
              </div>
              <p className="text-xs text-gray-600 mb-4">
                Real-time overview provides the most important information at first glance
              </p>
              <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                <div className="space-y-1">
                  <p>• Bookings</p>
                  <p>• Guest Messages</p>
                  <p>• Wallet</p>
                </div>
                <div className="space-y-1">
                  <p>• Coupons Created</p>
                  <p>• Ads Manager</p>
                  <p>• Statistics</p>
                </div>
                <div className="space-y-1">
                  <p>• Store Settings</p>
                  <p>• Reviews</p>
                  <p>• Bookmarks</p>
                </div>
              </div>
            </div>

            {/* Nifty Graphs Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <img src="../assets/niftyicon.svg" alt="Nifty Icon" className="w-6 h-6 mr-2" />
                <h4 className="text-sm font-semibold text-gray-900">Nifty Graphs and Data</h4>
              </div>
              <p className="text-xs text-gray-600 mb-2">
                Statistics all about views, bookings, listings and lots to help your customers how well each rank amongst set
              </p>
              <p className="text-xs text-blue-600">
                <span className="font-medium">Bookings</span> saved statistics
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
              <img src="../assets/niftsgraphsoverview.png" alt="Nifty Graphs Overview" className="w-full h-96 object-cover" />
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrontendUserDashboard
