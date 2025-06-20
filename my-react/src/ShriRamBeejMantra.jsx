import React from 'react';
import Navbar from './Navbar';

const ShriRamBeejMantra = ({ language }) => {
  const isHindi = language === 'HI';

  const hindiContent = `
🔱 श्रीराम बीज मंत्र 🔱

1. श्रीराम बीज मंत्र:
ॐ श्री रामाय नमः॥
अर्थ: "मैं भगवान राम को नमन करता हूँ।"
यह सरल, पवित्र और संकटमोचक मंत्र है।

2. श्रीराम मूल मंत्र:
ॐ राम रामाय नमः॥
यह मंत्र दृढ़ भक्ति और विजय की भावना लाता है।

3. राम गायत्री मंत्र:
ॐ दशरथाय विद्महे। सीतावल्लभाय धीमहि।
तन्नो रामः प्रचोदयात्॥
अर्थ: "हम दशरथपुत्र श्रीराम को जानते हैं, जो सीता के प्रिय हैं। वे हमारी बुद्धि को प्रेरणा दें।"

4. तारक मंत्र (मुक्तिदायक राम नाम):
"श्रीराम जय राम जय जय राम"
यह मंत्र आत्मिक शांति और भक्ति की प्राप्ति हेतु जाप करें।

📿 जाप विधि:
- दिन: रामनवमी, नवरात्रि, मंगलवार या रविवार।
- माला: तुलसी की माला।
- स्थान: मंदिर या शांत जगह।
- संख्या: 108 बार या जितना संभव हो प्रेमपूर्वक।
`;

  const englishContent = `
🔱 Shri Ram Beej Mantra 🔱

1. Shri Ram Beej Mantra:
Om Shri Ramaya Namah
Meaning: "I bow to Lord Ram."
A simple, sacred, and protective mantra.

2. Shri Ram Moola Mantra:
Om Ram Ramaya Namah
Invokes strong devotion and victory.

3. Ram Gayatri Mantra:
Om Dasharathaya Vidmahe,
Sitavallabhaya Dhimahi,
Tanno Ramah Prachodayat
Meaning: "We contemplate Lord Ram, son of Dasharatha, beloved of Sita. May He inspire our intellect."

4. Tarak Mantra (Liberation-giving Ram Name):
"Shri Ram Jai Ram Jai Jai Ram"
Chant this for spiritual peace and devotion.

📿 Chanting Tips:
- Days: Ram Navami, Navratri, Tuesday, or Sunday.
- Mala: Tulsi mala preferred.
- Place: Temple or peaceful spot.
- Count: 108 or as much with love.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-red-100 text-gray-900 font-sans">
      <Navbar />

      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/ShriRamjiChalisha.jpg"
          alt="Lord Shri Ram Ji"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-200 via-transparent to-transparent opacity-90"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-900 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्रीराम बीज मंत्र" : "Shri Ram Beej Mantras"}
        </h1>
      </div>

      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-red-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-800">
            {isHindi ? hindiContent : englishContent}
          </pre>
        </div>
      </div>

      <footer className="text-center py-8 text-gray-600 text-sm bg-red-50">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShriRamBeejMantra;
