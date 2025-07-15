import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomerSupportModal from "../components/CustomerSupportModal";

function Support() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      question: "Are there any recurring fees?",
      answer:
        "No, there are no recurring fees. You only pay once for the service.",
    },
    {
      question: "Where can I get support?",
      answer:
        "You can get support through our customer service chat, email, or phone support.",
    },
    {
      question: "On how many domains I can use Listeo?",
      answer: "You can use Listeo on unlimited domains with your purchase.",
    },
    {
      question: "Do I need to buy additional plugins to get all the features?",
      answer:
        "No, all features are included in the main purchase. No additional plugins needed.",
    },
    {
      question: "Can I see theme backend options?",
      answer:
        "Yes, you can access all theme backend options through your admin dashboard.",
    },
    {
      question: "I have pre-sale questions, how can I contact you?",
      answer:
        "You can contact us through the contact form or our live chat support.",
    },
    {
      question: "Tired of themes that drain every last coin from your pocket?",
      answer:
        "Our theme offers great value with no hidden costs or recurring fees.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="bg-[#FCF6D8] text-[#7E700D] px-3 py-1 rounded-full text-sm font-bold">
            FAQ
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-4">
            Questions? We're Happy to Answer!
          </h1>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-800 font-medium">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openFAQ === index ? "rotate-180" : ""
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
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 z-40"
      >
        <img
          src="/assets/customer-icon.svg"
          alt="Customer Support"
          className="w-8 h-8 filter brightness-0 invert"
        />
      </button>

      {/* Customer Support Modal */}
      <CustomerSupportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Support;
