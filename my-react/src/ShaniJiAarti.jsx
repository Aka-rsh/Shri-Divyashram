import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const ShaniDevAarti = ({ language }) => {
  const isHindi = language === "HI";

  // Hindi Aarti Text for Shani Dev
  const hindiAarti = `
जय जय श्री शनिदेव भक्तन हितकारी।
सूर्य पुत्र प्रभु, जय जय अंधियारी॥

जय जय श्री शनिदेव...

श्याम अंग वक्र-दृष्टि चतुर्भुज।
कपाल माला गले शोभित, मुकुट भारी॥

नेत्र भयावह, शरीर विकराल।
लोह गदा हाथ में, भक्तों को पाल॥

शनि कोप से जग डरता,
शनि कृपा से सब संवरता।

विद्या, बुद्धि, धन-धान्य देहु,
दुख दरिद्र हरहु, सुख संपत्ति देहु॥

जो जन मन से ध्यावे,
सब दुख दूर भगावे।

आरती श्री शनिदेव की गावे,
सुख संपत्ति घर आवे।
`;

  // English Translation of the Aarti
  const englishAarti = `
Victory, victory to Shri Shanidev, the benefactor of devotees.
Son of Surya, O Lord, victory to the dispeller of darkness.

Victory, victory to Shri Shanidev...

Dark-bodied, with a crooked gaze, four-armed.
A garland of skulls adorns your neck, and a heavy crown.

Terrifying eyes, a formidable body.
An iron mace in hand, You protect devotees.

The world fears Shani's wrath,
But by Shani's grace, everything improves.

Grant knowledge, wisdom, wealth, and grains,
Remove sorrow and poverty, bestow happiness and prosperity.

Whoever meditates on You with a sincere heart,
All their sorrows are driven away.

Whoever sings the Aarti of Shri Shanidev,
Happiness and prosperity come to their home.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-700 via-gray-900 to-blue-900 text-gray-100 font-sans">
      <Navbar />

      {/* Banner Section - Engaging and responsive */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/* Image for Shani Dev - CROPPING FROM BOTTOM */}
          <img
            src="./Lord/ShaniJiAarti.jpg" // **UPDATE THIS PATH to your Shani Dev image**
            alt="Lord Shani Dev, the dispenser of justice."
            className="object-cover w-full h-full filter brightness-70" // Slightly darker for intense look
          />
        </div>

        {/* Overlay for text readability - adjusted for Shani colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated - adjusted for Shani colors */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-300 drop-shadow-lg
                       bg-gray-800/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "जय जय श्री शनिदेव भक्तन हितकारी" : "Jai Jai Shri Shanidev Bhaktan Hitkari"}
        </h1>
      </div>

      {/* Aarti Text Section - Clean, readable, and interactive */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-blue-700
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-200">
            {isHindi ? hindiAarti : englishAarti}
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

export default ShaniDevAarti;