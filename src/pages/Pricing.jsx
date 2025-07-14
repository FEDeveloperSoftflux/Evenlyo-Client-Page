import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Pricing() {
  const [activeTab, setActiveTab] = useState('client');

  const pricingPlans = {
    vendor: [
      {
        id: 'standard',
        name: 'Standard Tier',
        price: 20,
        period: '/ month',
        features: [
          'Everything in Free +',
          'Social Engagement Scores',
          '5 Exchange Listing Options',
          'CEX & DEX Liquidity Volume',
          'Code Base Reddit Link Summary',
          '30 AI Prompt Searches/Month'
        ],
        buttonText: 'Get This Plan',
      },
      {
        id: 'premium1',
        name: 'Premium Tier',
        price: 50,
        period: '/ month',
        features: [
          'Everything in Pro +',
          'Team Analysis',
          'Bot Detection',
          'Developer Activity',
          'AI Whitepaper Analysis',
          'Red Flag Risk Score + AI Concern Report',
          'Unlimited AI Prompt Searches/Month'
        ],
        buttonText: 'Get This Plan',
      },
      {
        id: 'premium2',
        name: 'Premium Tier',
        price: 50,
        period: '/ month',
        features: [
          'Everything in Pro +',
          'Team Analysis',
          'Bot Detection',
          'Developer Activity',
          'AI Whitepaper Analysis',
          'Red Flag Risk Score + AI Concern Report',
          'Unlimited AI Prompt Searches/Month'
        ],
        buttonText: 'Get This Plan',
      }
    ],
    client: [
      {
        id: 'standard',
        name: 'Standard',
        price: 20,
        period: '/ month',
        features: [
          'Everything in Free +',
          'Advanced Analytics',
          'Priority Support',
          'Custom Branding',
          'API Access',
          'Multi-location Support'
        ],
        buttonText: 'Get This Plan',
      },
      {
        id: 'premium',
        name: 'Premium',
        price: 50,
        period: '/ month',
        features: [
          'Everything in Free +',
          'Advanced Analytics',
          'Priority Support',
          'Custom Branding',
          'API Access',
          'Multi-location Support'
        ],
        buttonText: 'Get This Plan',
      }
    ]
  };

  const comparisonFeatures = [
    {
      feature: 'Total Users',
      core: '-',
      standard: '5,000 Users',
      premium: '10,000 Users'
    },
    {
      feature: 'Personal Detail Security',
      core: '-',
      standard: 'Basic',
      premium: 'Advanced'
    },
    {
      feature: 'Bandwidth And Storage',
      core: '-',
      standard: '2 GB File Storage',
      premium: '10 GB File Storage'
    },
    {
      feature: 'Create Rolls',
      core: '-',
      standard: 'No',
      premium: 'Ultimate'
    },
    {
      feature: 'Admin User',
      core: '-',
      standard: '1 Admin',
      premium: '1 Admin'
    }
  ];

  const CheckIcon = () => (
    <img src="/assets/Tick.svg" alt="Tick" className="w-4 h-4 flex-shrink-0 rounded-full" />
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Pricing Section */}
      <div className="py-responsive px-responsive">
        <div className="container-7xl">
          {/* Tab Navigation */}
          <div className="flex justify-center sm:mb-10 lg:mb-20">
            <div className="relative bg-white rounded-2xl p-1 shadow-sm border border-gray-200 flex min-w-0 w-full max-w-md sm:max-w-lg md:max-w-5xl">
              {/* Sliding Indicator */}
              <span
                className={`absolute top-1 left-1 h-[calc(100%-0.5rem)] w-1/2 rounded-xl z-0 transition-all duration-300 ease-in-out ${
                  activeTab === 'client'
                    ? 'translate-x-0 bg-gradient-to-r from-secondary via-primary-500 to-primary-600'
                    : 'translate-x-full bg-gradient-to-r from-secondary via-primary-500 to-primary-600'
                }`}
                style={{
                  transitionProperty: 'transform, background-color',
                }}
              />
              <button
                onClick={() => setActiveTab('client')}
                className={`relative z-10 flex-1 px-2 sm:px-4 md:px-8 py-2 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                  activeTab === 'client'
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Client Pricing Plan
              </button>
              <button
                onClick={() => setActiveTab('vendor')}
                className={`relative z-10 flex-1 px-2 sm:px-4 md:px-8 py-2 rounded-xl font-medium transition-all duration-300 whitespace-nowrap  ${
                  activeTab === 'vendor'
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Vendor Pricing Plan
              </button>
            </div>
          </div>

          {/* Pricing Header */}
          <div className="text-center mb-16">
            <h1 className="text-responsive-h2 font-bold text-gray-900 mb-4">
              Pricing & Plans
            </h1>
            <p className="text-responsive-body text-gray-600 max-w-2xl mx-auto">
              With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
            </p>
          </div>

          {/* Pricing Cards */}
          <div
            className={`grid grid-cols-1 ${pricingPlans[activeTab].length === 2 ? 'md:grid-cols-2 max-w-2xl' : 'md:grid-cols-3 max-w-5xl'} gap-4 mb-16 justify-center items-stretch mx-auto`}
          >
            {pricingPlans[activeTab].map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-12 shadow-sm border transition-all duration-300 hover:shadow-lg h-full flex flex-col ${
                  plan.popular ? 'border-primary-500 shadow-lg' : 'border-gray-200'
                }`}
              >
                <div className="flex-grow flex flex-col">
                  <div className="text-left mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    <div className="flex items-baseline justify-start">
                      <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <div className="space-y-4 mb-20 mt-4">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckIcon />
                        <span className="text-gray-700 text-md">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center w-full mt-auto">
                  <button className="btn-primary-mobile w-full max-w-xs py-2 rounded-xl text-lg font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className={`bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mt-8 mx-auto ${pricingPlans[activeTab].length === 2 ? 'max-w-2xl' : 'max-w-5xl'}`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Core</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Standard Tier</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Premium Tier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-left text-md text-gray-900 font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-left text-md text-gray-700">
                          <span className="inline-flex items-center gap-2 text-black font-medium"><CheckIcon /> {row.standard}</span>
                      </td>
                      <td className="px-6 py-4 text-left text-md text-gray-700">
                          <span className="inline-flex items-center gap-2 text- font-medium"><CheckIcon /> {row.premium}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>


        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Pricing;
