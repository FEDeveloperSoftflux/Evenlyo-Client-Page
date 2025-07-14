import React from "react";

const HaveQuestions = () => {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
          Have
          <span
            className="relative inline-block"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,236,188,0) 85%, #FFECBC 85%)",
              borderRadius: "6px",
              padding: "0 4px",
              display: "inline-block",
            }}
          >
            Questions?
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Check out our comprehensive FAQ section or contact our support team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary-mobile  text-white font-semibold px-6 py-3 rounded-2xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            View FAQ
          </button>
          <button className="border-2 border-pink-500 text-pink-500 font-semibold px-6 py-3 rounded-2xl hover:bg-pink-50 transition-all duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default HaveQuestions;
