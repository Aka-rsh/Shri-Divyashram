import React from 'react';
import Navbar from './Navbar';

const AgniJiMantra = ({ language }) => {
  const isHindi = language === "HI";

  const hindiContent = `
🔥 अग्नि मंत्र 🔥

1. अग्नि बीज मंत्र:
ॐ अग्नये नमः
अर्थ: "अग्नि देव को नमस्कार।"
उपयोग: शुद्धि, ऊर्जा, और हवन की शुरुआत में।

2. ऋग्वेद से अग्नि सूक्त प्रारंभिक मंत्र (ऋग्वेद मण्डल 1, सूक्त 1):
ॐ अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्।
होतारं रत्नधातमम्॥
अर्थ: "मैं अग्नि देव की स्तुति करता हूँ, जो यज्ञ के पुरोहित हैं, देवताओं के याजक हैं, और रत्नों के दाता हैं।"

3. अग्नि स्तुति मंत्र:
त्वं अग्ने प्रथमो देवतानाम्।
त्वं होताश्चेष्टपाः पुरोहितः॥
अर्थ: "हे अग्नि देव! आप देवताओं में प्रथम हैं, यज्ञ के प्रारंभकर्ता, पुरोहित और आहुतियों के धारक हैं।"

4. अग्नि गायत्री मंत्र:
ॐ महाज्वालाय विद्महे अग्निदेवाय धीमहि।
तन्नो अग्निः प्रचोदयात्॥
अर्थ: “हम तेजस्वी अग्नि देव का ध्यान करते हैं, वह हमें सत्य और शक्ति के मार्ग पर प्रेरित करें।”

5. यज्ञ आरंभ का मंत्र (गायत्री मंत्र):
ॐ भूर्भुवः स्वः। तत्सवितुर्वरेण्यं।
भर्गो देवस्य धीमहि। धियो यो नः प्रचोदयात्॥
उपयोग: हवन और अग्निपूजन की शुरुआत और समाप्ति में।

🌟 अग्नि देव की महिमा:
- अग्नि देवताओं तक हमारी प्रार्थनाएँ पहुँचाने वाले दूत हैं।
- यज्ञ और हवन से वातावरण शुद्ध होता है।
- अग्नि माता शुद्धि, ऊर्जा और आत्मिक उन्नति का प्रतीक हैं।

🕯 जप विधि:
- मंत्र जाप के समय शुद्ध स्थान चुनें और दीपक/हवन अग्नि जलाएँ।
- “ॐ अग्नये स्वाहा” के साथ आहुति देने से विशेष फल मिलता है।
`;

  const englishContent = `
🔥 Agni Mantras 🔥

1. Agni Beej Mantra:
Om Agnaye Namah
Meaning: "Salutations to Agni Dev."
Use: For purification, energy, and starting havan/fire rituals.

2. Rigveda Agni Sukt (Mandala 1, Sukta 1):
Om Agnim īḷe purohitaṁ yajñasya devam ṛtvijam।
Hotāraṁ ratnadhātamam॥
Meaning: "I praise Agni, the priest of the sacrifice, the divine priest and bearer of treasures."

3. Agni Stuti Mantra:
Tvam Agne Prathamo Devatānām।
Tvam Hotāśceṣṭapāḥ Purohitaḥ॥
Meaning: "O Agni! You are the first among gods, initiator of rituals, and bearer of oblations."

4. Agni Gayatri Mantra:
Om Mahā-jvālāya Vidmahe Agnidevāya Dhīmahi।
Tanno Agniḥ Prachodayāt॥
Meaning: “We meditate on the great blazing Agni; may He inspire us toward truth and strength.”

5. Havan Starting Mantra (Gayatri Mantra):
Om Bhur Bhuvah Swaha।
Tat Savitur Vareṇyam।
Bhargo Devasya Dhīmahi।
Dhiyo Yo Naḥ Prachodayāt॥
Use: Essential for starting and ending havan or fire offerings.

🌟 Significance of Agni Dev:
- Agni is considered the divine messenger who delivers our offerings to the gods.
- Fire rituals purify the surroundings and energize the soul.
- Agni symbolizes spiritual purity, strength, and ascension.

🕯 Chanting Tips:
- Choose a clean space and light a lamp or havan fire during chanting.
- Offerings with "Om Agnaye Swaha" yield special results.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-100 to-yellow-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Image */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/SuryaDevChalisha.jpg"
          alt="Agni Dev - Vedic God of Fire"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-200 via-transparent to-transparent opacity-90"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-700 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "अग्नि देव मंत्र" : "Agni Dev Mantras"}
        </h1>
      </div>

      {/* Mantra Content */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-orange-300
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-800">
            {isHindi ? hindiContent : englishContent}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm bg-orange-100">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AgniJiMantra;
