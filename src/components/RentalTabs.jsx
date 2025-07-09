import React, { useState } from 'react'

const RentalTabs = () => {
  const [activeTab, setActiveTab] = useState('rental')

  const tabs = [
    {
      id: 'rental',
      name: 'Rental',
      icon: '/assets/rentalslogo.svg',
      image: '/assets/rentalstab.png'
    },
    {
      id: 'services',
      name: 'Services',
      icon: '/assets/serviceslogo.svg',
      image: '/assets/servicestab.png'
    },
    {
      id: 'events',
      name: 'Events',
      icon: '/assets/eventslogo.svg',
      image: '/assets/eventstab.png'
    },
    {
      id: 'classifieds',
      name: 'Classifieds',
      icon: '/assets/classifiedlogo.svg',
      image: '/assets/classifiedtab.png'
    }
  ]

  const getTabContent = () => {
    switch (activeTab) {
      case 'rental':
        return {
          title: 'Rental',
          subtitle: 'e.g. vehicles, apartments or products',
          description: 'Users can choose check in & out date 📅, number of guests 👥 or extra service 🛎️ and send a request to the host to book a reservation. Once the host accepts request user can be charged for the entire amount at reserved time (payments are processed through WooCommerce).',
          features: [
            'Availability Calendar (single and multi-days)',
            'Hourly Booking (Start / End Time - helpful for renting cars, bikes etc.)',
            'Regular, weekend and custom price per night or hour',
            'Max. guests per reservation and minimum stay',
            'Mandatory Fees (e.g. cleaning service)',
            'Instant Booking (without owner approval)',
            'Extra Paid Services',
            'Children & Animals (custom prices)',
            'QR Code Verification System'
          ]
        }
      case 'services':
        return {
          title: 'Services',
          subtitle: 'e.g. restaurants, barbers, doctors',
          description: 'Users can reserve spots at e.g. restaurants 🍝 barbers 💈 etc. They can choose date and time or specific hour. If time slots are non set - in this case time picker will be displayed in the booking widget instead of time slots and guests will be able to make reservations only in opening hours range.',
          additionalText: 'Everything from rental method plus:',
          features: [
            'Availability Calendar (single day)',
            'Time Slots or Time Picker'
          ],
          link: {
            text: 'Time Slots Video →',
            color: 'text-pink-500'
          }
        }
      case 'events':
        return {
          title: 'Events',
          subtitle: 'e.g. concerts, conferences',
          description: 'Online ticketing system 🎫 for any type of venue or event. Users can add event listings on your website while also sell tickets for those events.',
          features: [
            'Start & End Date',
            'Ticket Price',
            'Max. Available Tickets',
            'Pricing Menu',
            'Extra Services'
          ]
        }
      case 'classifieds':
        return {
          title: 'Classifieds',
          subtitle: 'Let people sell new or used products',
          description: 'Advertising feature that brings buyers and sellers together when someone wants to sell a car, buy new patio furniture, buy new smartphone or find a new babysitter for his kid. 👶'
        }
      default:
        return null
    }
  }

  const content = getTabContent()

  return (
    <section className="py-16 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-transparent border-b border-gray-200 space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center px-6 py-4 transition-all duration-300 text-sm font-medium border-b-2 ${
                  activeTab === tab.id
                    ? 'text-primary-500 border-gradient-underline'
                    : 'text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-300'
                }`}
              >
                <img
                  src={tab.icon}
                  alt={tab.name}
                  className={`w-5 h-5 mr-2 ${
                    activeTab === tab.id ? 'filter brightness-0 saturate-200 hue-rotate-315' : ''
                  }`}
                />
                <span className="font-medium">{tab.name}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left Side - Content */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h2>
              <p className="text-pink-500 font-medium mb-8">
                {content.subtitle}
              </p>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  {content.description}
                </p>

                {content.additionalText && (
                  <div className="bg-gray-900 text-white px-4 py-2 rounded-lg inline-block">
                    <span className="text-sm font-medium">{content.additionalText}</span>
                  </div>
                )}

                {content.features && (
                  <div className="space-y-4">
                    {content.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">
                          {feature.includes('(') ? (
                            <>
                              <strong>{feature.split('(')[0].trim()}</strong>
                              {feature.includes('(') && ` (${feature.split('(')[1]}`}
                            </>
                          ) : (
                            <strong>{feature}</strong>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {content.link && (
                  <div className="mt-6">
                    <button className={`font-medium ${content.link.color} hover:underline`}>
                      {content.link.text}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="bg-gray-100 flex items-center justify-center p-8">
              <div className="w-full h-full max-w-lg">
                <img
                  src={tabs.find(tab => tab.id === activeTab)?.image}
                  alt={tabs.find(tab => tab.id === activeTab)?.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="w-full h-full bg-gray-200 hidden items-center justify-center rounded-lg">
                  <span className="text-gray-500 text-lg font-semibold">
                    {tabs.find(tab => tab.id === activeTab)?.name} Preview
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RentalTabs
