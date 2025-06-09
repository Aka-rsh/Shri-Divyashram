import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homee from "./Homee";
import Prasad from "./Prasad";
import Tours from "./Tours";
import VipTicket from "./VipTicket";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import HotelBooking from "./HotelBooking";
import Fticket from "./Fticket";
import KashiDarshan from "./KashiDarshan";
import BoatBooking from "./BoatBooking";
import CabBooking from "./CabBooking";
import Mandir from "./Mandir";
import Blog from "./Blog";
import ContactUs from "./ContactUs";

function App() {
  return (
    <Router>
      <div className="min-h-screen font-inter">
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/Homee" element={<Navigate to="/" />} />
          <Route path="/Prasad" element={<Prasad />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/HotelBooking" element={<HotelBooking />} />
          <Route path="/VipTicket" element={<VipTicket />} />
          <Route path="/Fticket" element={<Fticket />} />
          <Route path="/KashiDarshan" element={<KashiDarshan />} />
          <Route path="/BoatBooking" element={<BoatBooking />} />
          <Route path="/CabBooking" element={<CabBooking />} />
          <Route path="/Mandir" element={<Mandir />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route
            path="*"
            element={
              <div className="text-center px-6 py-20 text-xl font-semibold">
                404 - Page Not Found
              </div>
            }
          />
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
            src="./Photos/Whatsapp.png"
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
