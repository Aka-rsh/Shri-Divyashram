import React from 'react';
import Navbar from './Navbar';

const PramukhRudraMantra = ({ language }) => {
  const isHindi = language === 'HI';

  const hindiContent = `
🔱 प्रमुख रूद्र मंत्र संग्रह 🔱

1. प्रमुख रूद्र बीज मंत्र:
ॐ नमः शिवाय रुद्राय नमः॥
👉 यह शक्तिशाली बीज मंत्र भगवान रूद्र (शिव) के असीम रूप की स्तुति हेतु।

2. प्रमुख रूद्र स्तुति (शिव स्तोत्र):
ॐ नमो भगवान महा रूद्राय।
सर्वपाप विनाशकराय।
त्रैलोक्यनाथाय नमः॥
👉 भावार्थ: हे रूद्र, सभी पापों का नाश करने वाले, तीनों लोकों के स्वामी– मैं नमन करता हूँ।

3. प्रमुख रूद्र गायत्री:
ॐ रुद्राय विद्महे शिवाय धीमहि।
तन्नो रुद्रोः प्रचोदयात्॥
👉 उपयोग: ध्यान और तपस्या में शक्ति, ओज, और अंतरदर्शन हेतु।

📿 जप विधि:
- दिन: सोमवार या महाशिवरात्रि को विशेष रूप से सक्षम।
- माला: रुद्राक्ष की माला से 108 बार।
- स्थान: शांत शिवालय या घर में शिव-तल चलाकर।
`;

  const englishContent = `
🔱 Pramukh Rudra Mantra Collection 🔱

1. Pramukh Rudra Beej Mantra:
Om Namah Shivaya Rudraya Namah।
👉 A potent beej mantra to honor Lord Rudra (Shiva) in His supreme aspect.

2. Pramukh Rudra Stuti (Shiva Hymn):
Om Namo Bhagavan Maha Rudraya,
Sarva Papa Vinashakaraaya,
Trailokyanathaaya Namah॥
👉 Meaning: Salutations to Rudra, destroyer of sins, the Lord of the three worlds.

3. Pramukh Rudra Gayatri:
Om Rudraya Vidmahe Shivaaya Dhimahi,
Tanno Rudro Prachodayat॥
👉 Use: Invoke spiritual power, inner strength, and meditation clarity.

📿 Chanting Guide:
- Best Time: Mondays or Maha Shivaratri.
- Mala: Use Rudraksha mala; chant 108 times.
- Place: Offer incense and bilva leaves at a Shiva altar or temple.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-indigo-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/PramukhRudraMantra.jpg"
          alt="Lord Rudra - Maha Shiva"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-200 via-transparent to-transparent opacity-90"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center
                        text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-900 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "प्रमुख रूद्र मंत्र संग्रह" : "Pramukh Rudra Mantras Collection"}
        </h1>
      </div>

      {/* Mantra Content */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-indigo-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-800">
            {isHindi ? hindiContent : englishContent}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm bg-indigo-50">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PramukhRudraMantra;
