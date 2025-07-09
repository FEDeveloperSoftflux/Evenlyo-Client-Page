import React from 'react'

const MultiVendor = () => {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-orange-500 mb-2 tracking-wide uppercase">
                FEATURE EXCLUSIVE TO LISTEO
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Multi-Vendor
                <br />
                <span className="text-gray-900">Directory & Marketplace</span>
              </h2>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6">
              {/* Marketplace Feature */}
              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Marketplace with Independent Stores
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Similar to <span className="font-medium text-blue-600">Etsy</span> each users can create own store with products.
                    <br />
                    On listing pages vendors can display products from their store 
                    and add an advertising widget that links to shop.
                  </p>
                </div>
              </div>

              {/* Earnings Feature */}
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Earn from Each Sale as an Admin
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A <span className="font-medium text-blue-600">flat</span> or <span className="font-medium text-blue-600">percentage commission</span> model allows both parties
                    to share the success of your marketplace!
                  </p>
                </div>
              </div>

              {/* Dashboard Feature */}
              <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-2xl">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Dashboard for Vendors and Customers
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Customers and vendors get access to a rich frontend 
                    dashboard that allows easy management of product inventory 
                    including sales, orders, shipping and more...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Quick Tour with Dummy Scroller */}
          <div className="relative">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Tour</h3>
              <div className="flex justify-center space-x-2 mb-6">
                <button className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Dummy Scroller with Gray Picture */}
            <div className="bg-gray-300 rounded-2xl p-8 flex items-center justify-center" style={{height: '400px'}}>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">Dummy Image Placeholder</p>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>

            {/* Bottom text */}
            <p className="text-center text-xs text-gray-500 mt-4">
              *Dokan is required only for multi-vendor marketplace feature.
              <br />
              Booking functionality is built into theme and does not need Dokan
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MultiVendor
