import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const DattatreyaAarti = ({ language }) => {
  const isHindi = language === "HI"; // Assuming "HI" will cover Marathi for Aarti text

  // Marathi Aarti Text
  const marathiAarti = `
जय देव जय देव
दत्त महाराजांनो
स्वामी दत्त महाराजांनो
स्मरण मात्रे संकट निवारी
आपुलकीची ओळख द्या ॥ जय...

त्रिभुवनी धावावे
अशक्य ते शक्य करावे
अवघे दीनांचे रक्षण करावे
मुक्तीचा मार्ग दावावा ॥ जय...

दत्तगुरु दयाळू
कृपेचा सागर विशालू
शरण आले मी दीन भिकारी
माझा उद्धार करावा ॥ जय...

श्रीपाद श्रीवल्लभ
अवधूत चरित्र महान
ज्ञानेश्वरी उपदेश द्यावा
अज्ञानीस मार्ग दाखवावा ॥ जय...

जय देव जय देव
दत्त महाराजांनो
स्मरण मात्रे संकट निवारी
आपुलकीची ओळख द्या ॥ जय...
`;

  // English Translation of the Aarti
  const englishAarti = `
Victory to the Lord, Victory to the Lord,
O Datta Maharaj!
O Swami Datta Maharaj!
Mere remembrance dispels troubles,
Grant us Your familiar presence. || Jai...

You rush to the three worlds,
Making the impossible possible.
You protect all the humble and helpless,
And show the path to liberation. || Jai...

Datta Guru, the compassionate one,
An immense ocean of grace.
I, a humble beggar, have surrendered to You,
Please uplift me. || Jai...

Shripad Shri Vallabh,
The great Avadhuta persona.
Bestow the teachings of Dnyaneshwari,
Show the path to the ignorant. || Jai...

Victory to the Lord, Victory to the Lord,
O Datta Maharaj!
Mere remembrance dispels troubles,
Grant us Your familiar presence. || Jai...
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Engaging and responsive */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/* Ensure this path points to your Dattatreya image */}
          <img
            src="./Lord/Dattatreya Aarti.jpg" // **Update this path to your Dattatreya Ji image**
            alt="Lord Dattatreya, the Trimurti, embodiment of Brahma, Vishnu, and Shiva."
            className="object-cover w-full h-full filter brightness-90"
            // object-cover (default object-position is center) will crop from top and bottom
            // as needed to fill the banner while maintaining aspect ratio.
          />
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-100 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-800 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री दत्त महाराजांची आरती" : "Aarti of Shri Datta Maharaj"}
        </h1>
      </div>

      {/* Aarti Text Section - Clean, readable, and interactive */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-indigo-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-700">
            {isHindi ? marathiAarti : englishAarti}
          </pre>
        </div>
      </div>

      {/* Optional: Add a simple footer */}
      <footer className="text-center py-8 text-gray-600 text-sm">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DattatreyaAarti;