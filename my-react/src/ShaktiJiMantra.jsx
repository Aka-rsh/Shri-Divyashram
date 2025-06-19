import React from 'react';
import Navbar from './Navbar';

const ShaktiJiMantras = ({ language }) => {
  const isHindi = language === 'HI';

  const hindiContent = `
🌺 शक्ति मंत्र संग्रह 🌺

1. शक्ति बीज मंत्र:
ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे॥
यह चामुंडा देवी का महामंत्र है।
👉 उपयोग: तंत्र दोष निवारण, शक्ति जागरण, भय नाश, साधना सिद्धि।

2. दुर्गा गायत्री मंत्र:
ॐ कात्यायनाय विद्महे, कन्याकुमारि धीमहि, तन्नो दुर्गा प्रचोदयात्॥
👉 अर्थ: हम माँ दुर्गा का ध्यान करते हैं। वह हमें शक्ति और सद्बुद्धि प्रदान करें।

3. काली बीज मंत्र:
ॐ क्रीं कालिकायै नमः॥
👉 उपयोग: डर, कष्ट, तंत्र बाधा से मुक्ति।

4. लक्ष्मी बीज मंत्र:
ॐ श्रीं महालक्ष्म्यै नमः॥
👉 उपयोग: धन, सौभाग्य, वैभव प्राप्ति।

5. सरस्वती बीज मंत्र:
ॐ ऐं सरस्वत्यै नमः॥
👉 उपयोग: विद्या, वाणी, बुद्धि, संगीत की प्राप्ति।

6. चंडी महामंत्र:
ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे॥
👉 सम्पूर्ण देवी उपासना का बीज मंत्र। शक्तिशाली और रक्षक।

7. शक्ति कवच प्रारंभ मंत्र:
ॐ अस्य श्री चण्डी कवचस्य ब्रह्मा ऋषिः। अनुष्टुप् छन्दः। चामुण्डा देवता। अंगन्यासादि विनियोगः॥
👉 चंडी पाठ या दुर्गा सप्तशती आरंभ से पहले आवश्यक।

🕯 जप विधि सुझाव:
- सुबह भोर में, या रात्रि में दीपक जलाकर करें।
- लाल वस्त्र पहनें और लाल पुष्प चढ़ाएं।
- रुद्राक्ष या स्फटिक माला से कम से कम 108 बार जप करें।
- नवरात्रों में यह साधना अत्यंत प्रभावी होती है।
`;

  const englishContent = `
🌺 Shakti Mantras Collection 🌺

1. Shakti Beej Mantra:
Om Aim Hreem Kleem Chamundayai Vichche॥
This is the powerful mantra of Goddess Chamunda.
👉 Purpose: Tantra protection, energy awakening, fear removal, spiritual success.

2. Durga Gayatri Mantra:
Om Katyayanaya Vidmahe, Kanyakumari Dhimahi, Tanno Durga Prachodayat॥
👉 Meaning: We meditate upon Goddess Durga, may She inspire and empower us.

3. Kali Beej Mantra:
Om Kreem Kalikayai Namah॥
👉 Purpose: Removal of fear, sorrow, and dark energies.

4. Lakshmi Beej Mantra:
Om Shreem Mahalakshmyai Namah॥
👉 Purpose: Wealth, prosperity, abundance.

5. Saraswati Beej Mantra:
Om Aim Saraswatyai Namah॥
👉 Purpose: Knowledge, wisdom, speech, and musical talents.

6. Chandi Mantra (Main Devi Beej):
Om Aim Hreem Kleem Chamundayai Vichche॥
👉 Supreme mantra for complete Shakti worship and protection.

7. Start of Shakti Kavach (Devi Kavach Initiation):
Om Asya Shri Chandi Kavachasya Brahma Rishiḥ, Anushtubh Chhandah, Chamunda Devata, Anganyasadi Viniyogah॥
👉 This verse is chanted before starting Durga Saptashati or Chandi Path.

🕯 Chanting Suggestions:
- Best chanted early morning or evening with a lit oil lamp.
- Wear red clothes and offer red flowers to the goddess.
- Use Rudraksha or Sphatik mala, chant at least 108 times daily.
- Navratri is the most powerful time for Shakti mantra sadhana.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-100 to-orange-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/DurgaMataAarti.jpg"
          alt="Goddess Shakti - Divine Feminine Power"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-200 via-transparent to-transparent opacity-90"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-900 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "शक्ति मंत्र संग्रह" : "Shakti Mantras Collection"}
        </h1>
      </div>

      {/* Mantra Content */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-pink-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-800">
            {isHindi ? hindiContent : englishContent}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm bg-red-100">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShaktiJiMantras;
