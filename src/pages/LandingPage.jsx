import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AdvancedBookingSystem from "../components/AdvancedBookingSystem";
import RentalTabs from "../components/RentalTabs";
import Categories from "../components/Categories";
import VendorList from "../components/VendorList";
import MultiVendor from "../components/MultiVendor";
import FrontendUserDashboard from "../components/FrontendUserDashboard";
import HaveQuestions from "../components/HaveQuestions";
import MapProviders from "../components/MapProviders";
import Ratings from "../components/Ratings";
import CustomerShowcase from "../components/CustomerShowcase";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer";
import CustomerSupportModal from "../components/CustomerSupportModal";

function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <VendorList />
      <AdvancedBookingSystem />
      <RentalTabs />
      <MultiVendor />
      <FrontendUserDashboard />
      <HaveQuestions />
      <MapProviders />
      <Ratings />
      <CustomerShowcase />
      <SuccessStories />
      <Footer />

      {/* Floating Customer Support Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-secondary via-primary-500 to-primary-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 z-40"
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
    </div>
  );
}

export default LandingPage;
