import React, { useState } from "react";

const HaveQuestions = () => {
  // Remove useNavigate and navigation handlers
  // Add FAQ state and logic from LoginPage.jsx
  const [activeAccordion, setActiveAccordion] = useState(null);
  const faqItems = [
    {
      question: "Are there any ongoing fees?",
      answer: "No, there are no ongoing fees for basic usage.",
    },
    {
      question: "Where can I get support?",
      answer: "You can get support through our help center or contact form.",
    },
    {
      question: "Do I have being displayed a real contact?",
      answer: "Yes, all contacts displayed are real and verified.",
    },
    {
      question: "Do I need to buy additional plugins to get all the features?",
      answer: "No, all features are included in the base package.",
    },
    {
      question: "Can I list Resume AirBnB listings?",
      answer: "Yes, you can list various types of accommodations.",
    },
    {
      question: "Having multiple locations, how can I add each one?",
      answer: "You can add multiple locations through the dashboard.",
    },
    {
      question:
        "Trial ad I cannot what if at money-back can I online business promotion?",
      answer: "We offer a money-back guarantee within the trial period.",
    },
  ];
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-6 lg:px-16 bg-white">
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

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h4 className="text-base font-medium text-gray-900">
                    {item.question}
                  </h4>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      activeAccordion === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaveQuestions;
