import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AdvancedBookingSystem from "../components/AdvancedBookingSystem";
import RentalTabs from "../components/RentalTabs";
import Categories from "../components/Categories";
import VendorList from "../components/VendorList";
import MultiVendor from "../components/MultiVendor";
import FrontendUserDashboard from "../components/FrontendUserDashboard";
import MapProviders from "../components/MapProviders";
import Ratings from "../components/Ratings";
import CustomerShowcase from "../components/CustomerShowcase";
import SuccessStories from "../components/SuccessStories";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <AdvancedBookingSystem />
      <VendorList />
      <RentalTabs />
      <MultiVendor />
      <FrontendUserDashboard />
      <MapProviders />
      <Ratings />
      <CustomerShowcase />
      <SuccessStories />
      <Footer />
    </div>
  );
}

export default LandingPage;
