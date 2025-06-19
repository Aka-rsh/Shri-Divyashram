import React from 'react';
import Navbar from './Navbar';

const HanumanJiMoolmantra = ({ language }) => {
  const isHindi = language === 'HI';

  const hindiContent = `
🚩 हनुमान मूल मंत्र 🚩

1. हनुमान मूल मंत्र:
ॐ हनुमते नमः॥
👉 उपयोग: बल, बुद्धि, स्वास्थ्य, भय नाश और विजय प्राप्ति।

2. पंचमुखी हनुमान मंत्र:
ॐ नमो भगवते आंजनेयाय महाबलाय स्वाहा॥
👉 उपयोग: शत्रु बाधा निवारण, सुरक्षा कवच।

3. संकटमोचन मंत्र:
ॐ नमो हनुमते रुद्रावताराय संकट नाशाय सुग्रीवसचिवाय रामदूताय स्वाहा॥
👉 उपयोग: संकट नाश, कार्य सिद्धि।

4. हनुमान गायत्री मंत्र:
ॐ आञ्जनेयाय विद्महे वायुपुत्राय धीमहि तन्नो हनुमान् प्रचोदयात्॥
👉 अर्थ: हम पवनपुत्र हनुमान का ध्यान करते हैं, वे हमें शक्ति और मार्गदर्शन दें।

🕯 जप विधि सुझाव:
- मंगलवार या शनिवार को विशेष फलदायी।
- सिंदूर और चमेली का तेल चढ़ाएं।
- लाल वस्त्र धारण करें।
- 108 बार जप रुद्राक्ष माला से करें।
- "संकट मोचन" स्तोत्र का भी पाठ करें।
`;

  const englishContent = `
🚩 Hanuman Mool Mantra Collection 🚩

1. Hanuman Mool Mantra:
Om Hanumate Namah॥
👉 Purpose: Strength, intelligence, health, fearlessness, and victory.

2. Panchamukhi Hanuman Mantra:
Om Namo Bhagavate Anjaneyaya Mahabalaya Swaha॥
👉 Purpose: Protection, enemy destruction, energy shield.

3. Sankatmochan Mantra:
Om Namo Hanumate Rudravataraya Sankat Nashaya Sugreeva Sachivaya Ramdootaya Swaha॥
👉 Purpose: Obstacle removal, divine help in difficulties.

4. Hanuman Gayatri Mantra:
Om Anjaneyaya Vidmahe Vayuputraya Dhimahi Tanno Hanuman Prachodayat॥
👉 Meaning: We meditate on the son of wind, Hanuman. May he inspire and guide us.

🕯 Chanting Suggestions:
- Best results on Tuesdays and Saturdays.
- Offer sindoor and jasmine oil.
- Wear red clothes while chanting.
- Use Rudraksha mala, chant 108 times.
- Reciting “Sankat Mochan” stotra is highly beneficial.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-100 to-red-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/HanumanJiAarti.jpg"
          alt="Lord Hanuman - Symbol of Strength and Devotion"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-90"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-900 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "हनुमान मूल मंत्र" : "Hanuman Mool Mantra"}
        </h1>
      </div>

      {/* Mantra Content */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-orange-200
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

export default HanumanJiMoolmantra;
