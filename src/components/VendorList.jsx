import React from "react";

const VendorList = () => {
  const vendors = [
    {
      id: 1,
      name: "Pulse Events & Entertainment",
      logo: "/assets/jaydeep-avatar.svg",
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
      logo: "/assets/jaydeep-avatar.svg",
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
      logo: "/assets/jaydeep-avatar.svg",
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
                    className="w-20 h-20 rounded-lg object-cover"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4 sm:gap-6">
          {vendors.map((vendor, index) => (
            <div
              key={vendor.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 relative overflow-hidden"
            >
              {/* Available Status Pill */}
              <div className="absolute right-3 top-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wider z-10">
                Available
              </div>
              
              {/* Card Header */}
              <div className="p-4 pb-3">
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={vendor.logo}
                    alt={vendor.name}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 truncate">
                      {vendor.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      {renderStars(vendor.rating)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="px-4 pb-4">
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p className="truncate">
                    <span className="font-medium">Services:</span>{" "}
                    {vendor.services}
                  </p>
                  <p className="truncate">
                    <span className="font-medium">Location:</span>{" "}
                    {vendor.location}
                  </p>
                  <p className="text-gray-500 text-xs">{vendor.coverage}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    <span className="font-medium text-gray-700">
                      Why Choose Us:
                    </span>{" "}
                    {vendor.whyChoose}
                  </p>
                  <button className="text-primary-500 text-sm font-medium hover:underline mt-1">
                    View More
                  </button>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-100 pt-3">
                  <p className="font-medium text-gray-900 mb-2 text-sm">
                    Contact Information
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <span>📞</span>
                      <span className="font-medium">Call:</span>
                      <span className="truncate">{vendor.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <span>📧</span>
                      <span className="font-medium">Email:</span>
                      <span className="truncate">{vendor.email}</span>
                    </div>
                  </div>
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
