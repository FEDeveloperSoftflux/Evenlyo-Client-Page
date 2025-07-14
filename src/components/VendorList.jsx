import React from "react";

const VendorList = () => {
  const vendors = [
    {
      id: 1,
      name: "Pulse Events & Entertainment",
      logo: "/assets/Vendor1.png",
      services: "DJs, Sound & Lighting, Live Bands, MCs",
      location: "Los Angeles, CA",
      coverage: "Greater Los Angeles, Orange County",
      whyChoose:
        "With over 500 successful events and 5-star ratings across platforms, we bring professionalism, punctuality...",
      rating: 5,
      phone: "(123) 456-7890",
      email: "chef@yourbusinessname.com",
    },
    {
      id: 2,
      name: "Pulse Events & Entertainment",
      logo: "/assets/Vendor2.png",
      services: "DJs, Sound & Lighting, Live Bands, MCs",
      location: "Los Angeles, CA",
      coverage: "Greater Los Angeles, Orange County",
      whyChoose:
        "With over 500 successful events and 5-star ratings across platforms, we bring professionalism, punctuality...",
      rating: 5,
      phone: "(123) 456-7890",
      email: "chef@yourbusinessname.com",
    },
    {
      id: 3,
      name: "Pulse Events & Entertainment",
      logo: "/assets/Vendor3.png",
      services: "DJs, Sound & Lighting, Live Bands, MCs",
      location: "Los Angeles, CA",
      coverage: "Greater Los Angeles, Orange County",
      whyChoose:
        "With over 500 successful events and 5-star ratings across platforms, we bring professionalism, punctuality...",
      rating: 5,
      phone: "(123) 456-7890",
      email: "chef@yourbusinessname.com",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-orange-400 text-lg">
        ★
      </span>
    ));
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
          Relevant Vendors
        </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:block space-y-6">
          {vendors.map((vendor, index) => (
            <div
              key={vendor.id}
              className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow duration-300 border-gradient-brand relative"
            >
              {/* Available Status Pill */}
              <div className="absolute right-4 top-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Available
              </div>
              {/* Left Section - Logo and Details */}
              <div className="flex items-center space-x-6 flex-1">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    className="w-40 h-40 rounded-lg"
                  />
                </div>

                {/* Vendor Details */}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {vendor.name}
                    </h3>
                    <div className="flex items-center">
                      {renderStars(vendor.rating)}
                    </div>
                  </div>

                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Services:</span>{" "}
                      {vendor.services}
                    </p>
                    <p>
                      <span className="font-medium">Location:</span>{" "}
                      {vendor.location}
                    </p>
                    <p className="text-gray-500">{vendor.coverage}</p>
                    <p className="mt-2">
                      <span className="font-medium text-gray-700">
                        Why Choose Us:
                      </span>{" "}
                      {vendor.whyChoose}
                      <span className="text-primary-500 ml-1 cursor-pointer hover:underline font-medium">
                        View More
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Information */}
              <div className="text-right text-sm text-gray-600 flex-shrink-0 ml-6">
                <p className="font-bold text-gray-900 mb-3">
                  Contact Information
                </p>
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

        {/* Mobile & Tablet Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 md:gap-6">
          {vendors.map((vendor, index) => (
            <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col">
              {/* Vendor Image */}
              <img src={vendor.logo} alt={vendor.name} className=" ml-5 mr-5 w-70 h-60 mt-2 mb-2 " />

              <div className="p-4 flex-1 flex flex-col">
                {/* Name & Discount */}
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-lg text-gray-900">{vendor.name}</h3>
                  <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
                    • 20% OFF
                  </span>
                </div>
                {/* Coverage/Location */}
                <div className="text-gray-500 text-sm mb-2">{vendor.coverage}</div>
                {/* Location */}
                <div className="text-xs mb-2"><span className="font-bold">Location:</span> {vendor.location}</div>
                {/* Services */}
                <div className="flex flex-wrap gap-2 mb-2">
                <span className="font-bold text-xs">Services:</span>
                  {vendor.services.split(',').map((service, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{service.trim()}</span>
                  ))}
                  <span className="bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full cursor-pointer">See All</span>
                </div>
                {/* Why Choose Us */}
                <div className="text-xs text-gray-600 mb-2">
                  <span className="font-medium text-gray-700">Why Chose Us :</span>
                  {vendor.whyChoose}
                  <span className="text-pink-500 ml-1 cursor-pointer hover:underline font-medium">View More</span>
                </div>
                {/* Rating & Reviews and CTA Button */}
                <div className="flex items-center justify-between gap- mb-3">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <span className="text-yellow-400">★★★★</span>
                    <span className="font-semibold text-gray-800">4.8</span>
                    <span>(127 reviews)</span>
                  </div>
                  <button className="btn-primary-mobile  text-white font-bold py-2 px-8 rounded-lg whitespace-nowrap">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorList;
