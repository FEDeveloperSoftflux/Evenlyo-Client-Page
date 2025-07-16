import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Bookings from "./pages/Bookings";
import Support from "./pages/Support";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Register from "./pages/Register";
import ProfileSetting from "./pages/ProfileSetting";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings" element={<ProfileSetting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
