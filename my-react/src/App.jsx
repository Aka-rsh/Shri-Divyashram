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
import ContactUs from "./ContactUs";
import Aarti from "./Aarti";
import ShakambhariJiAarti from "./ShakambhariJiAarti";
import VishwakarmaJiAarti from "./VishwakarmajiAarti";
import KartikeyaJiAarti from "./KartikeyaJiAarti";
import KaliMataAarti from "./KaliMataAarti";
import GaneshaJiAarti from "./GaneshJiAarti";
import DattatreyaAarti from "./DattatreyaAarti";
import AnnapurnaMataAarti from "./AnnapurnaMataAarti";
import SuryajiAarti from "./SuryajiAarti";
import HanumanJiAarti from "./HanumanJiAarti";
import VishnuJiAarti from "./VishnuJiAarti";
import ShivJiAarti from "./ShivJiAarti";
import DurgaMaAarti from "./DurgaMaAarti";
import ShaniJiAarti from "./ShaniJiAarti";
import ShantadurgaJiAarti from "./ShantadurgaJiAarti";
import Chalisha from "./Chalisha";
import HanumanChalisha from "./HanumanChalisha";
import DurgaJiChalisha from "./DurgaJiChalisha";
import ShivJiChalisa from "./ShivJiChalisha";
import LakshmiJiChalisha from "./LakshmiJiChalisha";
import GaneshJiChalisha from "./GaneshJiChalisha";
import ShriRamjiChalisha from "./ShriRamjiChalisha";
import KrishnaJiChalisha from "./KrishnaJiChalisha";
import VishnuJiChalisha from "./VishnuJiChalisha";
import ShaniJiChalsiha from "./ShaniJiChalsiha";
import SaraswatiJiChalisha from "./SaraswatiJiChalisha";
import SuryaJiChalisha from "./SuryaJiChalisha";
import RadhaJiChalisha from "./RadhaJiChalisha";
import SaiBabaChalisha from "./SaiBabaChalisha";
import NavgrahJiChalsiha from "./NavgrahJiChalsiha";
import SheetlaJiChalisha from "./SheetlaJiChalisha";
import KaaliJiChalisha from "./KaaliJiChalisha";
import ChamundaJiChalisha from "./ChamundaJiChalisha";
import GangaJiChalisa from "./GangaJiChalisha";
import SantoshiJiChalisha from "./SantoshiJiChalisha";
import Mantra from "./Mantra";
import NarayanJiMantra from "./NarayanJiMantra";
import KaaliJiMantra from "./KaaliJiMantra";
import AgniJiMantra from "./AgniJiMantra";
import RudrabhishekJiMantra from "./RudrabhishekJiMantra";
import ShaktiJiMantras from "./ShaktiJiMantra";
import HanumanJiMoolmantra from "./HanumanJiMoolmantra";
import KrishnaJiMantra from "./KrishnaJiMantra";
import PramukhRudraMantra from "./PramukhRudraMantra";
import BrihaspatiBeejMantra from "./BrihaspatiBeejMantra";
import DhanwantriJiMantra from "./DhanwantriJiMantra";
import SitaBeejMantra from "./SitaBeejMantra";
import ShriRamBeejMantra from "./ShriRamBeejMantra";
import TulsiBeejMantra from "./TulsiBeejMantra";
import AnnapurnaMaBeejMantra from "./AnnapurnaMaBeejMantra";



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
          <Route path="/Aarti" element={<Aarti language={language} />} />
          <Route path="/shakambhari-aarti" element={<ShakambhariJiAarti language={language} />} />
          <Route path="/kartikeya-aarti" element={<KartikeyaJiAarti language={language} />} />
          <Route path="/vishwakarma-aarti" element={<VishwakarmaJiAarti language={language} />} />
          <Route path="/kaali-aarti" element={<KaliMataAarti language={language} />} /> 
          <Route path="/ganesh-aarti" element={<GaneshaJiAarti language={language} />} />
          <Route path="/dattatreya-aarti" element={<DattatreyaAarti language={language} />} />
          <Route path="/annapurna-aarti" element={<AnnapurnaMataAarti language={language} />} />
          <Route path="/surya-aarti" element={<SuryajiAarti language={language} />} />
          <Route path="/hanuman-aarti" element={<HanumanJiAarti language={language} />} />
          <Route path="/shiv-aarti" element={<ShivJiAarti language={language} />} />
          <Route path="/durga-aarti" element={<DurgaMaAarti language={language} />} />
          <Route path="/shani-aarti" element={<ShaniJiAarti language={language} />} />
          <Route path="/shantadurga-aarti" element={<ShantadurgaJiAarti language={language} />} />
          <Route path="/vishnu-aarti" element={<VishnuJiAarti language={language} />} />
          <Route path="/chalisa" element={<Chalisha language={language} />} />
          <Route path="/hanuman-chalisha" element={<HanumanChalisha language={language} />} />
          <Route path="/durga-chalisha" element={<DurgaJiChalisha language={language} />} />
          <Route path="/shiv-chalisha" element={<ShivJiChalisa language={language} />} />
          <Route path="/lakshmi-chalisha" element={<LakshmiJiChalisha language={language} />} />
          <Route path="/ganesh-chalisha" element={<GaneshJiChalisha language={language} />} />
          <Route path="/ram-chalisha" element={<ShriRamjiChalisha language={language} />} />
          <Route path="/krishna-chalisha" element={<KrishnaJiChalisha language={language} />} />
          <Route path="/vishnu-chalisha" element={<VishnuJiChalisha language={language} />} />
          <Route path="/shani-chalisha" element={<ShaniJiChalsiha language={language} />} />
          <Route path="/saraswati-chalisha" element={<SaraswatiJiChalisha language={language} />} />
          <Route path="/ganga-chalisha" element={<GangaJiChalisa language={language} />} />
          <Route path="/surya-chalisha" element={<SuryaJiChalisha language={language} />} />
          <Route path="/radha-chalisha" element={<RadhaJiChalisha language={language} />} />
          <Route path="/sai-chalisha" element={<SaiBabaChalisha language={language} />} />
          <Route path="/navgrah-chalisha" element={<NavgrahJiChalsiha language={language} />} />
          <Route path="/sheetla-chalisha" element={<SheetlaJiChalisha language={language} />} />
          <Route path="/kaali-chalisha" element={<KaaliJiChalisha language={language} />} />
          <Route path="/santoshi-chalisha" element={<SantoshiJiChalisha language={language} />} />
          <Route path="/chamunda-chalisha" element={<ChamundaJiChalisha language={language} />} /> 
          <Route path="/mantra" element={<Mantra language={language} />}  />
          <Route path="/narayana-mantra" element={<NarayanJiMantra language={language} />} /> 
          <Route path="/kaali-mantra" element={<KaaliJiMantra language={language} />} /> 
          <Route path="/agni-mantra" element={<AgniJiMantra language={language} />} /> 
          <Route path="/maha-rudrabhishek-mantra" element={<RudrabhishekJiMantra language={language} />} /> 
          <Route path="/shakti-mantra" element={<ShaktiJiMantras language={language} />} /> 
          <Route path="/agni-mantra" element={<AgniJiMantra language={language} />} /> 
          <Route path="/hanuman-mool-mantra" element={<HanumanJiMoolmantra language={language} />} /> 
          <Route path="/krishna-mantra" element={<KrishnaJiMantra language={language} />} /> 
          <Route path="/pramukh-rudra-mantra" element={<PramukhRudraMantra language={language} />} /> 
          <Route path="/brihaspati-beej-mantra" element={<BrihaspatiBeejMantra language={language} />} /> 
          <Route path="/dhanwantri-mantra" element={<DhanwantriJiMantra language={language} />} />
          <Route path="/sita-ji-beej-mantra" element={<SitaBeejMantra language={language} />} /> 
          <Route path="/shri-ram-ji-beej-mantra" element={<ShriRamBeejMantra language={language} />} />
          <Route path="/tulsi-beej-mantra" element={<TulsiBeejMantra language={language} />} /> 
          <Route path="/annapurna-ma-beej-mantra" element={<AnnapurnaMaBeejMantra language={language} />} /> 

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
