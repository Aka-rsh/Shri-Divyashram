import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const SuryaJiAarti = ({ language }) => {
  const isHindi = language === "HI";

  // Hindi Aarti Text for Surya Dev (Example - you'll want to use the actual Surya Dev Aarti)
  const hindiAarti = `
ॐ जय सूर्य भगवान, जय हो दिनकर भगवान ।
जगत् के नेत्रस्वरूपा, तुम हो तेज महान ॥
॥ ॐ जय सूर्य भगवान... ॥

उषाकाल में दर्शन, करते सब भक्तजन ।
किरणों से जग चमके, हो जीवन सुखमय ॥
॥ ॐ जय सूर्य भगवान... ॥

सप्त अश्व पर बैठे, आओ रथ पर सवार ।
अंधकार को हरते, नवजीवन संचार ॥
॥ ॐ जय सूर्य भगवान... ॥

तुम हो ब्रह्म स्वरूप, तुम ही हो विष्णु महान ।
तुम ही हो शिव शंभु, तुम ही हो जग के प्राण ॥
॥ ॐ जय सूर्य भगवान... ॥

जो नर करे आरती, उसकी सुन लो पुकार ।
रोग-दोष सब मिटते, हो जीवन सुखमय ॥
॥ ॐ जय सूर्य भगवान... ॥
`;

  // English Translation of the Aarti (Example - for the above Hindi text)
  const englishAarti = `
Om Jai Surya Bhagwan, Jai Ho Dinkar Bhagwan.
You are the form of the world's eyes, You are the great radiance.
|| Om Jai Surya Bhagwan... ||

At dawn, all devotees behold You.
The world shines with Your rays, life becomes blissful.
|| Om Jai Surya Bhagwan... ||

Seated on seven horses, You arrive in Your chariot.
Dispelling darkness, You bring new life.
|| Om Jai Surya Bhagwan... ||

You are the form of Brahma, You are the great Vishnu.
You are Shiva Shambhu, You are the life of the world.
|| Om Jai Surya Bhagwan... ||

He who performs this Aarti, listen to his plea.
All diseases and flaws vanish, life becomes blissful.
|| Om Jai Surya Bhagwan... ||
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-amber-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Engaging and responsive */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/* Update this path to your Surya Dev image */}
          <img
            src="./Lord/SuryaJiAarti.jpg" // **UPDATE THIS PATH TO YOUR SURYA DEV IMAGE**
            alt="Lord Surya Dev, the sun god, radiating light and energy."
            className="object-cover w-full h-full filter brightness-90"
          />
        </div>

        {/* Overlay for text readability - adjusted for sun colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-100 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated - adjusted for sun colors */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-700 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "ॐ जय सूर्य भगवान श्री सूर्य आरती" : "Om Jai Surya Bhagwan Shri Surya Aarti"}
        </h1>
      </div>

      {/* Aarti Text Section - Clean, readable, and interactive */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-yellow-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-700">
            {isHindi ? hindiAarti : englishAarti}
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

export default SuryaJiAarti;