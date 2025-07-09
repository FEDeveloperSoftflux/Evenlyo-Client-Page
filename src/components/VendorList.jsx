import React from 'react'

const VendorList = () => {
  const vendors = [
    {
      id: 1,
      name: 'Pulse Events & Entertainment',
      logo: '/assets/vendor1.svg',
      services: 'DJs, Sound & Lighting, Live Bands, MCs',
      location: 'Los Angeles, CA',
      coverage: 'Greater Los Angeles, Orange County',
      whyChoose: 'With over 500 successful events and 5-star ratings across platforms, we bring professionalism, punctuality...',
      rating: 5,
      phone: '(123) 456-7890',
      email: 'chef@yourbusinessname.com'
    },
    {
      id: 2,
      name: 'Pulse Events & Entertainment',
      logo: '/assets/vendor2.svg',
      services: 'DJs, Sound & Lighting, Live Bands, MCs',
      location: 'Los Angeles, CA',
      coverage: 'Greater Los Angeles, Orange County',
      whyChoose: 'With over 500 successful events and 5-star ratings across platforms, we bring professionalism, punctuality...',
      rating: 5,
      phone: '(123) 456-7890',
      email: 'chef@yourbusinessname.com'
    },
    {
      id: 3,
      name: 'Pulse Events & Entertainment',
      logo: '/assets/vendor3.svg',
      services: 'DJs, Sound & Lighting, Live Bands, MCs',
      location: 'Los Angeles, CA',
      coverage: 'Greater Los Angeles, Orange County',
      whyChoose: 'With over 500 successful events and 5-star ratings across platforms, we bring professionalism, punctuality...',
      rating: 5,
      phone: '(123) 456-7890',
      email: 'chef@yourbusinessname.com'
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-orange-400 text-lg">
        ★
      </span>
    ))
  }

  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Relevant Vendors
        </h2>
        
        <div className="space-y-6">
          {vendors.map((vendor, index) => (
            <div 
              key={vendor.id}
              className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow duration-300 border-gradient-brand"
            >
              {/* Left Section - Logo and Details */}
              <div className="flex items-center space-x-6 flex-1">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img 
                    src={vendor.logo}
                    alt={vendor.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                </div>
                
                {/* Vendor Details */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{vendor.name}</h3>
                    <div className="flex items-center">
                      {renderStars(vendor.rating)}
                    </div>
                  </div>
                  
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><span className="font-medium">Services:</span> {vendor.services}</p>
                    <p><span className="font-medium">Location:</span> {vendor.location}</p>
                    <p className="text-gray-500">{vendor.coverage}</p>
                    <p className="mt-2">
                      <span className="font-medium text-gray-700">Why Choose Us:</span> {vendor.whyChoose}
                      <span className="text-primary-500 ml-1 cursor-pointer hover:underline font-medium">View More</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Section - Contact Information */}
              <div className="text-right text-sm text-gray-600 flex-shrink-0 ml-6">
                <p className="font-bold text-gray-900 mb-3">Contact Information</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-end space-x-1">
                    <span>📞</span>
                    <span className="font-medium">Call:</span>
                    <span>{vendor.phone}</span>
                  </div>
                  <div className="flex items-center justify-end space-x-1">
                    <span>📧</span>
                    <span className="font-medium">Email:</span>
                    <span>{vendor.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VendorList
