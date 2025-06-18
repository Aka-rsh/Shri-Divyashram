import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const ShantadurgaJiAarti = ({ language }) => {
  const isHindi = language === "HI";

  // Hindi Aarti Text for Shantadurga Ji (Example - you'll need to provide the actual Aarti)
  const hindiAarti = `
जय जय शान्तादुर्गा माई, जय जय आदिशक्ति।
भव भय हारिणी, सुख कारिणी, हे त्रिभुवन की मुक्ति॥

जय जय शान्तादुर्गा माई...

मांग सिंदूर सोहे, शीश मुकुट धारे।
नयनो से बरसे अमृत, सब दुख हरन हारे॥

शांत स्वरूपिनी, ममता मयी, भक्तों की प्यारी।
हाथों में खड्ग-चक्र धारी, दुष्टों पे भारी॥

सिंह वाहिनी राजत, अष्टभुजा वाली।
करुणा की देवी तू है, हर विपदा टाली॥

कमल पुष्प बिराजत, चरणों में तेरे।
जो भी शरण में आवे, दुख मिटे उसके॥

आरती गावे जो कोई, मन से ध्यावे।
शांति समृद्धि पावे, परम सुख पावे॥

जय जय शान्तादुर्ga माई...
`;

  // English Translation of the Aarti (Example - for the above Hindi text)
  const englishAarti = `
Victory, victory to Mother Shantadurga, victory to Adishakti.
Remover of worldly fears, bestower of happiness, O salvation of the three worlds.

Victory, victory to Mother Shantadurga...

Sindoor adorns your forehead, a crown rests on your head.
Nectar flows from your eyes, removing all sorrows.

Peaceful in form, full of motherly affection, beloved of devotees.
Holding sword and discus in your hands, formidable to the wicked.

Riding a lion magnificently, with eight arms.
You are the Goddess of compassion, warding off every calamity.

Lotus flowers adorn your feet.
Whoever comes to your refuge, their sorrows vanish.

Whoever sings this Aarti, meditating with a sincere heart,
Attains peace, prosperity, and supreme happiness.

Victory, victory to Mother Shantadurga...
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-teal-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Engaging and responsive */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/* Image for Shantadurga Ji - CROPPING FROM BOTTOM */}
          <img
            src="./Lord/ShantaDurgaMaAarti.jpg" // **UPDATE THIS PATH to your Shantadurga Ji image**
            alt="Goddess Shantadurga, embodying peace and divine power."
            className="object-cover w-full h-full filter brightness-90"
          />
        </div>

        {/* Overlay for text readability - adjusted for Shantadurga colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-100 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated - adjusted for Shantadurga colors */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-teal-800 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "जय जय शान्तादुर्गा माई" : "Jai Jai Shantadurga Mai"}
        </h1>
      </div>

      {/* Aarti Text Section - Clean, readable, and interactive */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-teal-200
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

export default ShantadurgaJiAarti;