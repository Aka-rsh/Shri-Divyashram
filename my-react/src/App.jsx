import React, { useState } from "react";
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
import Aarti from "./Aarti";
import ContactUs from "./ContactUs";

function App() {
  const [language, setLanguage] = useState("EN"); // EN or HI

  return (
    <Router>
      <div className="min-h-screen font-inter relative">
        {/* Language Selection Buttons */}
<div className="fixed top-130 left-5 z-50 flex flex-row space-x-2 sm:flex-col sm:space-x-0 sm:space-y-2">
  <button
    onClick={() => setLanguage("EN")}
    className={`px-4 py-2 rounded font-semibold shadow cursor-pointer transition-colors duration-300 ${
      language === "EN"
        ? "bg-yellow-500 text-black"
        : "bg-yellow-300 text-gray-700 hover:bg-yellow-400"
    }`}
  >
    English
  </button>
  <button
    onClick={() => setLanguage("HI")}
    className={`px-4 py-2 rounded font-semibold shadow cursor-pointer transition-colors duration-300 ${
      language === "HI"
        ? "bg-yellow-500 text-black"
        : "bg-yellow-300 text-gray-700 hover:bg-yellow-400"
    }`}
  >
    हिन्दी
  </button>
</div>

        <Routes>
          <Route path="/" element={<Homee language={language} />} />
          <Route path="/Homee" element={<Navigate to="/" />} />
          <Route path="/Prasad" element={<Prasad language={language} />} />
          <Route path="/tours" element={<Tours language={language} />} />
          <Route path="/aboutus" element={<AboutUs language={language} />} />
          <Route path="/OurServices" element={<OurServices language={language} />} />
          <Route path="/HotelBooking" element={<HotelBooking language={language} />} />
          <Route path="/VipTicket" element={<VipTicket language={language} />} />
          <Route path="/Fticket" element={<Fticket language={language} />} />
          <Route path="/KashiDarshan" element={<KashiDarshan language={language} />} />
          <Route path="/BoatBooking" element={<BoatBooking language={language} />} />
          <Route path="/CabBooking" element={<CabBooking language={language} />} />
          <Route path="/Mandir" element={<Mandir language={language} />} />
          <Route path="/aarti" element={<Aarti language={language} />} />

          <Route path="/ContactUs" element={<ContactUs language={language} />} />
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
          className="fixed bottom-5 right-5 w-[60px] h-[60px] rounded-full bg-[#25d366] shadow-lg z-50 flex items-center justify-center"
        >
          <img
            src="./Photos/Whatsapp.png"
            alt="WhatsApp"
            className="w-[30px] h-[30px]"
          />
        </a>
      </div>
    </Router>
  );
}

export default App;
