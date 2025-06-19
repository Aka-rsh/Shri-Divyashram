import React from 'react';
import Navbar from './Navbar';

const KaaliJiMantra = ({ language }) => {
  const isHindi = language === "HI";

  const hindiContent = `
🔱 काली मंत्र 🔱

1. बीज मंत्र:
ॐ क्रीं कालीकायै नमः
अर्थ: "हे काली माता, आपको प्रणाम। कृपा करें।"
उपयोग: शक्ति प्राप्ति, भय नाश, और आत्म-संरक्षण के लिए।

2. महा काली मंत्र:
ॐ काली महाकालिके कपालिनि।
महा ग्रासायै विद्महे,
स्मशान वासिन्यै धीमहि।
तन्नो काली प्रचोदयात्॥
अर्थ: “हम महाकाली का ध्यान करते हैं जो श्मशान में वास करती हैं। कृपया हमें शक्ति और मार्गदर्शन दें।”

3. दस महाविद्या मंत्र (काली रूप):
ॐ श्री महा कालिकायै च विद्महे
श्मशान वासिन्यै धीमहि
तन्नो काली प्रचोदयात्॥
अर्थ: “हम महाकाली का ध्यान करते हैं जो मृत्यु और पुनर्जन्म से परे हैं। वे हमें तेज़ बुद्धि और साहस प्रदान करें।”

4. पंचाक्षरी मंत्र (साधना हेतु):
ॐ क्रीं कालिकायै नमः
उपयोग: 108 बार जप से तंत्र दोष, शत्रु बाधा और भय समाप्त होता है।

5. काली महामंत्र (सुरक्षा हेतु):
ॐ क्रीं कालिका चण्डिका ऐं ह्रीं ह्रूं फट्॥
यह मंत्र विशेष रूप से तांत्रिक साधनाओं और सुरक्षा के लिए उपयोगी है।

🕯️ **जप विधि**:
- काली माता का जप रात्रि या अमावस्या को विशेष फलदायी होता है।
- काली माँ के चित्र या प्रतिमा के सामने दीपक जलाकर जप करें।
- काली बीज मंत्र (ॐ क्रीं…) का जप तुलसी या रुद्राक्ष की माला से करें।
`;

  const englishContent = `
🔱 Maa Kali Mantras 🔱

1. Beej Mantra:
Om Krīm Kālikāyai Namah
Meaning: "Salutations to Goddess Kalika. Bless me."
Use: For gaining strength, removing fear, and protection.

2. Maha Kali Mantra:
Om Kāli Mahākālīke Kapālini,
Mahā Grāsāyai Vidmahe,
Shmashāna Vāsinyai Dhīmahi,
Tanno Kāli Prachodayāt॥
Meaning: “We meditate on the great Kali who dwells in cremation grounds. May She bless us with power and guidance.”

3. Dasha Mahavidya Mantra (Kali Form):
Om Shri Mahā Kālikāyai Cha Vidmahe,
Shmashāna Vāsinyai Dhīmahi,
Tanno Kāli Prachodayāt॥
Meaning: “We meditate on Maha Kali, beyond life and death. May She grant us sharp intellect and courage.”

4. Panchakshari Mantra (for sadhana):
Om Krīm Kālikāyai Namah
Chanting this 108 times removes black magic, fear, and enemy obstacles.

5. Kali Mahamantra (for protection):
Om Krīm Kālika Chandikā Aim Hrīm Hrum Phat॥
Used for advanced tantric protection and inner power.

🕯️ **Chanting Tips**:
- Best chanted during night or on Amavasya (new moon).
- Light a lamp in front of Maa Kali's image or idol while chanting.
- Use Tulsi or Rudraksha mala for chanting "Om Krīm..." mantra.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      <Navbar />

      {/* Hero Image Banner */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/KaaliAarti.jpg" // Ensure this path exists in public or your image assets
          alt="Maa Kali - Fierce and protective form of Shakti"
          className="object-cover w-full h-full brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-600 drop-shadow-lg
                       bg-white/10 px-6 py-3 rounded-xl animate-fade-in-up">
          {isHindi ? "माँ काली मंत्र" : "Maa Kali Mantras"}
        </h1>
      </div>

      {/* Mantra Text Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-gray-100 text-gray-900 p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-red-300
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif">
            {isHindi ? hindiContent : englishContent}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm bg-gray-900">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default KaaliJiMantra;
