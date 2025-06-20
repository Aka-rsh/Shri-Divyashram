import React from 'react';
import Navbar from './Navbar';

const TulsiBeejMantra = ({ language }) => {
  const isHindi = language === 'HI';

  const hindiContent = `
🌿 तुलसी बीज मंत्र 🌿

1. तुलसी बीज मंत्र:
ॐ तुलस्यै नमः॥
यह सरल बीज मंत्र तुलसी माता की कृपा और वातावरण शुद्धि के लिए।

2. तुलसी विवाह मंत्र / श्री तुलसी स्तुति मंत्र:
ॐ वृन्दायै तुलस्यै नमो नमः।
पापं हर हरिप्रिये।
पुण्यं कुरु जगतां वन्द्या माता त्वमेव सदा॥

3. तुलसी बीज स्तुति:
अयं सदा शिवः सदा शुद्धः सदा पुनीतः।
तुलसी कुटुम्बिनी च तस्यै नमः शिवाय॥

📿 जाप विधि:
- दिन: प्रत्येक दिन सुबह।
- माला: तुलसी माला।
- स्थान: तुलसी के पौधे के पास।
- संख्या: 108 बार।
`;

  const englishContent = `
🌿 Tulsi Beej Mantra 🌿

1. Tulsi Beej Mantra:
Om Tulsayai Namah
A simple mantra to invoke the blessings of Mother Tulsi and purify the surroundings.

2. Tulsi Vivah Mantra / Shri Tulsi Stuti Mantra:
Om Vrindayai Tulsayai Namo Namah,
Paapam Hara Haripriye,
Punyam Kuru Jagatam Vandya Mata Tvameva Sada

3. Tulsi Beej Stuti:
He is always Shiva, always pure and holy,
Tulsi is his family; salutations to that Shiva.

📿 Chanting Tips:
- Day: Every morning.
- Mala: Tulsi mala.
- Place: Near Tulsi plant.
- Count: 108 times.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-100 to-emerald-200 text-gray-900 font-sans">
      <Navbar />

      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/TulsiBeejMantra.jpg"
          alt="Mother Tulsi Ji"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-300 via-transparent to-transparent opacity-90"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-900 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "तुलसी बीज मंत्र" : "Tulsi Beej Mantras"}
        </h1>
      </div>

      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-green-300
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-800">
            {isHindi ? hindiContent : englishContent}
          </pre>
        </div>
      </div>

      <footer className="text-center py-8 text-gray-600 text-sm bg-green-50">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TulsiBeejMantra;
