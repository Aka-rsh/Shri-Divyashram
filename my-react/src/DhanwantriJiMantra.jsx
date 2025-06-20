import React from 'react';
import Navbar from './Navbar';

const DhanwantriJiMantra = ({ language }) => {
  const isHindi = language === 'HI';

  const hindiContent = `
🧴 धन्वंतरि मंत्र संग्रह 🧴

1. श्री धन्वंतरि बीज मंत्र:
ॐ नमो भगवते महासुदर्शनाय वासुदेवाय धन्वंतरये अमृतकलश हस्ताय
सर्वभय विनाशाय सर्वरोग निवारणाय त्रिलोकपथाय त्रिलोकनाथाय
श्री महाविष्णवे नमः॥

👉 भावार्थ:
मैं भगवान धन्वंतरि को नमन करता हूँ, जिनके हाथों में अमृत कलश है, जो रोग और भय का नाश करते हैं, तीनों लोकों के पथ प्रदर्शक और भगवान विष्णु के स्वरूप हैं।

2. धन्वंतरि गायत्री मंत्र:
ॐ धन्वंतरये विद्महे। अमृततत्त्वाय धीमहि।
तन्नो विष्णुः प्रचोदयात्॥

👉 भावार्थ:
हम भगवान धन्वंतरि को जानते हैं, जो अमृत तत्व के रूप हैं। हम उनका ध्यान करते हैं, वे हमें सद्बुद्धि प्रदान करें।

📿 जाप विधि:
- 📅 दिन: प्रतिदिन या विशेष रूप से धनतेरस, गुरुवार, या एकादशी को करें।
- 📿 माला: तुलसी या रुद्राक्ष की माला से 108 बार जाप करें।
- 🧘‍♂️ दिशा: पूर्व या उत्तर दिशा की ओर मुख करके बैठें।
`;

  const englishContent = `
🧴 Dhanvantari Mantra Collection 🧴

1. Shri Dhanvantari Beej Mantra:
Om Namo Bhagavate Mahasudarshanaya Vasudevaya Dhanvantaraye Amritkalasha Hastaya
Sarvabhaya Vinashaya Sarvaroga Nivaranaya Trilokapathaya Trilokanathaya
Shri Mahavishnave Namah॥

👉 Meaning:
I bow to Lord Dhanvantari, who holds the pot of nectar, who destroys all fears and diseases, the guide of the three worlds, and the form of Lord Vishnu.

2. Dhanvantari Gayatri Mantra:
Om Dhanvantaraye Vidmahe, Amrita-Tattvaya Dhimahi,
Tanno Vishnuh Prachodayat॥

👉 Meaning:
We know Lord Dhanvantari as the essence of immortality. We meditate upon Him. May Lord Vishnu inspire and guide us.

📿 Chanting Guide:
- 📅 Best Days: Daily, or especially on Dhanteras, Thursdays, or Ekadashi.
- 📿 Mala: Use Tulsi or Rudraksha mala to chant 108 times.
- 🧘‍♂️ Direction: Sit facing East or North while chanting.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-100 to-teal-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/Annapurnaaarti.jpg"
          alt="Lord Dhanvantari - God of Healing"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-300 via-transparent to-transparent opacity-90"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-green-900 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "धन्वंतरि मंत्र संग्रह" : "Dhanvantari Mantras"}
        </h1>
      </div>

      {/* Mantra Content */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-teal-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-800">
            {isHindi ? hindiContent : englishContent}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm bg-teal-100">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DhanwantriJiMantra;
