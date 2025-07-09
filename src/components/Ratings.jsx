import React from 'react';

const Ratings = () => {
  return (
    <section className="py-16 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Innovative Rating System
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our rating system offers a comprehensive solution to enhance your
            website's SEO and elevate its credibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Multi Criteria Reviews */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Multi Criteria Reviews</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Allow users to <span className="font-semibold text-gray-900">rate listings based on multiple rating criteria</span>. Rating criteria
              are <span className="font-semibold text-gray-900">easily configurable</span> and you can create them as many as you need.
            </p>
            
            {/* Rating Display */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl font-bold text-gray-900 mr-4">4.2</div>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">146 Reviews</span>
              </div>
              
              {/* Rating Categories */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Service</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-4/5 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">4.0</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Value for Money</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-4/5 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Location</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-3/5 h-2 bg-orange-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">3.5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Cleanliness</span>
                  <div className="flex items-center">
                    <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                      <div className="w-1/2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">3.0</span>
                  </div>
                </div>
              </div>
              
              {/* Sample Review */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium">PS</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="font-medium text-gray-900">Peter Smith</span>
                      <div className="flex space-x-1 ml-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Great service as always! Highly recommend. George was incredibly helpful at...
                    </p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <span>3 months ago</span>
                      <span className="mx-2">•</span>
                      <span>⭐ Helpful Review</span>
                      <span className="mx-2">•</span>
                      <span>❤️ 5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Reviews */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold text-lg">G</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Google Reviews</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              <span className="font-semibold text-gray-900">Add social proof and authenticity!</span> Listeo allows to embed <span className="font-semibold text-gray-900">Google Reviews</span> on listing pages without Google Business API.
            </p>
            
            {/* Google Review Display */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">G</span>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">5.0</div>
                  <div className="text-sm text-gray-600">107 Reviews</div>
                </div>
                <button className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  📝 Add Review
                </button>
              </div>
              
              {/* Google Review Sample */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-medium">SJ</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className="font-medium text-gray-900">Steve Johnson</span>
                      <span className="text-sm text-gray-500 ml-2">3 months ago</span>
                    </div>
                    <div className="flex space-x-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      They gave me a blow dry help with a couple recent mishaps by a quick consultation— just what I was looking for! Highly skilled, definitely recommend. 🙌💯
                    </p>
                    <div className="flex items-center mt-2 text-xs text-gray-500">
                      <span>Great salon forewarning. 💯 Check them out</span>
                    </div>
                    <div className="flex items-center mt-2 text-xs text-blue-600">
                      <span>👍 Read More Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ratings;

