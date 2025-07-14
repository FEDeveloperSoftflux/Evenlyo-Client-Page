import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Support() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)
  const [formData, setFormData] = useState({ email: '', message: '' })

  const faqData = [
    { question: "Are there any recurring fees?", answer: "No, there are no recurring fees. You only pay once for the service." },
    { question: "Where can I get support?", answer: "You can get support through our customer service chat, email, or phone support." },
    { question: "On how many domains I can use Listeo?", answer: "You can use Listeo on unlimited domains with your purchase." },
    { question: "Do I need to buy additional plugins to get all the features?", answer: "No, all features are included in the main purchase. No additional plugins needed." },
    { question: "Can I see theme backend options?", answer: "Yes, you can access all theme backend options through your admin dashboard." },
    { question: "I have pre-sale questions, how can I contact you?", answer: "You can contact us through the contact form or our live chat support." },
    { question: "Tired of themes that drain every last coin from your pocket?", answer: "Our theme offers great value with no hidden costs or recurring fees." }
  ]

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setIsModalOpen(false)
    setFormData({ email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">FAQ</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">Questions? We're Happy to Answer!</h1>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-800 font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Customer Support Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 z-40"
      >
        <img 
          src="/assets/customer-icon.svg" 
          alt="Customer Support" 
          className="w-8 h-8 filter brightness-0 invert"
        />
      </button>

      {/* Customer Support Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">Questions? We're Happy to Answer!</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">Please fill out form for any queries.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="support@evenlyo.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white/70"
                    required
                  />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message"
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none bg-white/70"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute bottom-3 right-3 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Support
