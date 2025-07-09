import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const faqItems = [
    {
      question: "Are there any ongoing fees?",
      answer: "No, there are no ongoing fees for basic usage."
    },
    {
      question: "Where can I get support?",
      answer: "You can get support through our help center or contact form."
    },
    {
      question: "Do I have being displayed a real contact?",
      answer: "Yes, all contacts displayed are real and verified."
    },
    {
      question: "Do I need to buy additional plugins to get all the features?",
      answer: "No, all features are included in the base package."
    },
    {
      question: "Can I list Resume AirBnB listings?",
      answer: "Yes, you can list various types of accommodations."
    },
    {
      question: "Having multiple locations, how can I add each one?",
      answer: "You can add multiple locations through the dashboard."
    },
    {
      question: "Trial ad I cannot what if at money-back can I online business promotion?",
      answer: "We offer a money-back guarantee within the trial period."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Evenlyo</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link>
              <Link to="/properties" className="text-gray-700 hover:text-pink-500">Properties</Link>
              <Link to="/commercial" className="text-gray-700 hover:text-pink-500">Commercial Support</Link>
              <Link to="/blog" className="text-gray-700 hover:text-pink-500">Blog</Link>
              <Link to="/pricing" className="text-gray-700 hover:text-pink-500">Pricing</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Login
              </button>
              <button className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600">
                Submit Listing
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Login Form */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Welcome Text */}
            <div className="text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Welcome to
                <br />
                Evenlyo
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-md">
                Discover amazing places and experiences with our platform. Start your journey today!
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
                  Get Started
                </button>
                <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto w-full">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Login</h2>
                <p className="text-gray-600 text-sm">
                  By signing in you are agreeing to our{' '}
                  <Link to="/terms" className="text-pink-500 hover:text-pink-600">
                    Terms and privacy policy
                  </Link>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-sm text-pink-500 hover:text-pink-600">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 px-4 rounded-lg hover:bg-pink-600 transition duration-200 font-medium"
                >
                  Login
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-pink-500 hover:text-pink-600 font-medium"
                    >
                      {isLogin ? 'Sign up' : 'Sign in'}
                    </button>
                  </p>
                </div>

                {/* Social Login */}
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="ml-2">Google</span>
                    </button>

                    <button type="button" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                      <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="ml-2">LinkedIn</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Help</h2>
            <h3 className="text-2xl font-semibold text-gray-800">Questions? We're Happy to Answer!</h3>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">{item.question}</h4>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="ml-2 text-xl font-bold">Evenlyo</span>
              </div>
              <div className="space-y-2 text-sm text-gray-400">
                <p>About Our Experience</p>
                <p>Help & Support</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Contact Us</p>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Discover</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Miami</p>
                <p>Los Angeles</p>
                <p>Chicago</p>
                <p>New York</p>
                <p>San Francisco</p>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Support Resources</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Help Center</p>
                <p>Trust & Safety</p>
                <p>Selling on Evenlyo</p>
                <p>Buying on Evenlyo</p>
                <p>Professional Tools</p>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Connect with our team</h5>
              <div className="space-y-4">
                <button className="w-full bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition">
                  Submit a request
                </button>
                <button className="w-full border border-gray-600 text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                  Send a message
                </button>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <p>Based on your location, we think you may prefer the Global site. You can use the language selector on the footer to switch to the Global site, or stay on current site.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Evenlyo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LoginPage
