import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const DurgaMaAarti = ({ language }) => {
  const isHindi = language === "HI";

  // Hindi Aarti Text for Jai Ambe Gauri (as provided, assuming it's for Durga Ma)
  const hindiAarti = `
जय अम्बे गौरी, मैया जय श्यामा गौरी।
तुमको निशदिन ध्यावत, हरि ब्रह्मा शिवरी॥

जय अम्बे गौरी...

मांग सिंदूर विराजत, टीको मृगमद को।
उज्ज्वल से दो नैना, चंद्र बदन नीको॥

कनक समान कलेवर, रक्ताम्बर राजै।
रत्न जटित मुकुट शोभित, नासे मौक्तिक साजै॥

केहरि वाहन राजत, खड्ग खप्पर धारी।
सुर-नर मुनि जन सेवत, तिनके दुख हारी॥

कंचन थाल विराजत, अगर कपूर बाती।
श्री मलिक करत आरती, भगत करत माती॥

जय अम्बे गौरी...
`;

  // English Translation of the Aarti (as provided, assuming it's for Durga Ma)
  const englishAarti = `
Victory to Mother Ambe Gauri, Mother Shyama Gauri.
You are meditated upon day and night by Hari, Brahma, and Shiva.

Victory to Mother Ambe Gauri...

Sindoor adorns your forehead, a mark of musk.
Your two eyes are bright, your moon-like face is beautiful.

Your body gleams like gold, red garments adorn you.
A jewel-studded crown shines, pearls decorate your nose.

A lion is your magnificent vehicle, you hold a sword and skull-cup.
Gods, humans, and sages serve you, for you remove their sorrows.

A golden plate shines, with incense and camphor wicks.
Shri Malik performs your Aarti, devotees are immersed in devotion.

Victory to Mother Ambe Gauri...
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-100 to-rose-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Engaging and responsive */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/* Image for Durga Ma - CROPPING FROM BOTTOM */}
          <img
            src="./Lord/DurgaMataAarti.jpg" // **UPDATE THIS PATH to your Durga Maa image**
            alt="Goddess Durga Maa, radiating divine grace and power."
            className="object-cover w-full h-full filter brightness-90"
           style={{ objectPosition: 'top' }}
          />
        </div>

        {/* Overlay for text readability - adjusted for Devi colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-100 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated - adjusted for Devi colors */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-800 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "जय अम्बे गौरी, मैया जय श्यामा गौरी" : "Jai Ambe Gauri, Maiya Jai Shyama Gauri"}
        </h1>
      </div>

      {/* Aarti Text Section - Clean, readable, and interactive */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-pink-200
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

export default DurgaMaAarti;