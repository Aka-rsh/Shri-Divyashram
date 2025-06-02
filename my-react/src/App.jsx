import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homee from "./Homee";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import KashiDarshan from "./KashiDarshan";
import Mandir from "./Mandir";
import ContactUs from "./ContactUs";

function App() {
  return (
    <Router>
      <div className="min-h-screen font-inter">
        <Routes>
          <Route path="/" element={<Homee />} /> {/* 👈 Default landing page */}
          <Route path="/Homee" element={<Homee />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/KashiDarshan" element={<KashiDarshan />} />
          <Route path="/Mandir" element={<Mandir />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route
            path="*"
            element={
              <div className="text-center px-50 py-50">404 - Page Not Found</div>
            }
          />{" "}
          {/* 👈 Fallback route */}
        </Routes>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/917007094655"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "#25d366",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          <img
            src="/Photos/Whatsapp.png"  // <-- Use forward slashes and ensure this path is correct relative to your public folder
            alt="WhatsApp"
            style={{
              width: "30px",
              height: "30px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </a>
      </div>
    </Router>
  );
}

export default App;
