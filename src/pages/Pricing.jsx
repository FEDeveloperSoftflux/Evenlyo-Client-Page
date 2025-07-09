import React from 'react'
import Header from '../components/Header'

function Pricing() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-custom shadow-lg p-8">
          <h1 className="text-h3 font-bold text-center mb-8">Pricing</h1>
          <p className="text-center text-gray-dark">
            Pricing information will be displayed here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pricing
