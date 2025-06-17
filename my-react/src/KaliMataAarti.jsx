import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const KaliMataAarti = ({ language }) => {
  const isHindi = language === "HI";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-black to-purple-900 text-gray-100 font-sans">
      <Navbar />

      {/* Banner Section - Optimized for visual impact, allowing top/bottom crop */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/*
            Image for Maa Kali Mata.
            object-cover (default object-position is center) will crop from top and bottom
            as needed to fill the banner while maintaining aspect ratio.
          */}
          <img
            src="./Lord/KaaliAarti.jpg" // **Update this path to your Kali Mata image**
            alt="Maa Kali Mata, the fierce and compassionate Goddess, dispelling darkness."
            className="object-cover w-full h-full filter brightness-70" // Slightly darker for contrast with text
          />
        </div>

        {/* Overlay for text readability - Adjusted for dark theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg
                       bg-black/60 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "जय माँ काली जी की आरती" : "Aarti of Jai Maa Kali Ji"}
        </h1>
      </div>

      {/* Aarti Text Section - Clean, readable, and interactive */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-gray-900 text-gray-100 p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-purple-700
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif">
            {isHindi ? (
`जय काली माता! जय काली माता!
भय हरती संकट टालती,
जय काली माता ॥

तू ही ब्रह्माणी तू ही लक्ष्मी,
तू ही जग की माता।
तेरे चरणों में ही रहता
तीनों लोक का त्राता ॥ जय...

शिव संग तुम्हारा रूप निराला,
कोटि चंद्र की छाया।
रक्त-बीज संहार करी के,
भक्तों पर कृपा लाया ॥ जय...

तू ही आदि शक्ति जगदंबे,
तू ही शक्ति स्वरूपा।
दुष्ट दलन कर भक्तों का,
सत्कर्मों में रूपा ॥ जय...

धूप दीप नैवेद्य अरपें,
आरती हम गाएं।
मन चित्त से जो ध्यान लगाएं,
फल वह पाएं ॥ जय...`
            ) : (
`Hail Mother Kali! Hail Mother Kali!
Dispeller of fear, remover of troubles,
Hail Mother Kali!

You are Brahmani, You are Lakshmi,
You are the Mother of the world.
In Your feet resides
The savior of all three worlds. Jai...

Your form with Shiva is unique,
Shading a million moons.
After slaying Rakta-bija,
You brought grace to devotees. Jai...

You are the primordial power, Jagadambe,
You are the embodiment of Shakti.
Destroying evil for devotees,
You manifest in good deeds. Jai...

We offer incense, lamps, and offerings,
We sing Your Aarti.
Those who meditate with mind and heart,
They receive their fruits. Jai...`
            )}
          </pre>
        </div>
      </div>

      {/* Optional: Add a simple footer */}
      <footer className="text-center py-8 text-gray-400 text-sm">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default KaliMataAarti;