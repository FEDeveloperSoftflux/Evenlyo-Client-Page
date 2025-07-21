import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import VendorProfile from "./pages/VendorProfile";
import ChatPage from "./pages/ChatPage";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/vendor/:id" element={<VendorProfile />} />
          <Route path="/chat/:vendorId" element={<ChatPage />} />
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
