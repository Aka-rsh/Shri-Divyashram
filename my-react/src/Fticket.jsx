import React from 'react';
import Navbar from './Navbar';
// Assuming you'll eventually pass the language prop from App.js
// import Footer from './Footer'; // If you have a Footer, consider adding it here too

const Fticket = ({ language }) => { // Accept language prop
  const currentLangKey = language === 'EN' ? 'en' : 'hi'; // Map EN/HI to en/hi keys

  const content = {
    header: {
      en: "Book Flight & Train Tickets",
      hi: "फ़्लाइट और ट्रेन टिकट बुक करें"
    },
    description: {
      en: "Easily book your flight or train tickets with us. Tap a button below to connect via WhatsApp and confirm your journey with divine ease.",
      hi: "हमारे साथ अपनी फ़्लाइट या ट्रेन टिकट आसानी से बुक करें। WhatsApp के माध्यम से जुड़ने और अपनी यात्रा को दिव्य सुगमता से पुष्टि करने के लिए नीचे दिए गए बटन पर टैप करें।"
    },
    bookButton: {
      en: "Book Now via WhatsApp",
      hi: "व्हाट्सएप से अभी बुक करें"
    },
    whatsappMessage: {
      en: "Namaste 🙏, I would like to book a ticket. Please assist me with details.",
      hi: "नमस्ते 🙏, मैं टिकट बुक करना चाहता/चाहती हूँ। कृपया मुझे विवरण के साथ सहायता करें।"
    },
    note: {
      en: "Note: Bookings are subject to seat availability. Please book at least 2 days before your desired journey date.",
      hi: "ध्यान दें: बुकिंग सीटों की उपलब्धता पर निर्भर करती है। कृपया अपनी इच्छित यात्रा तिथि से कम से कम 2 दिन पहले बुक करें।"
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="px-4 py-10">
        <h1 className="text-4xl font-bold text-center underline underline-offset-4 decoration-amber-500 mb-6">
          {content.header[currentLangKey]}
        </h1>
        <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
          {content.description[currentLangKey]}
        </p>

        {/* Call-to-action button */}
        <div className="flex justify-center mb-6"> {/* Added mb-6 for spacing before the note */}
          <a
            href={`https://wa.me/917007094655?text=${encodeURIComponent(content.whatsappMessage[currentLangKey])}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded text-lg font-semibold transition"
          >
            {content.bookButton[currentLangKey]}
          </a>
        </div>

        {/* --- New Note Section --- */}
        <div className="text-center px-4 mt-8">
          <p className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 inline-block rounded shadow-md text-sm sm:text-base max-w-xl mx-auto">
            <strong>{currentLangKey === 'en' ? 'Important Note:' : 'महत्वपूर्ण सूचना:'}</strong>{' '}
            {content.note[currentLangKey]}
          </p>
        </div>
        {/* --- End New Note Section --- */}

      </div>
      {/* If you have a Footer component, add it here */}
      {/* <Footer /> */}
    </div>
  );
};

export default Fticket;