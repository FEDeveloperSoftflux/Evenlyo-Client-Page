import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import BookingPage from "./pages/BookingPage";
import Bookings from "./pages/Bookings";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Register from "./pages/Register";
import ProfileSetting from "./pages/ProfileSetting";
import AddToCartPage from "./pages/AddToCartPage";
import CustomerSupportModal from "./components/CustomerSupportModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/add-to-cart" element={<AddToCartPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings" element={<ProfileSetting />} />
        </Routes>
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
    </Router>
  );
}

export default App;
