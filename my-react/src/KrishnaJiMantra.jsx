import React from 'react';
import Navbar from './Navbar';

const KrishnaJiMantra = ({ language }) => {
  const isHindi = language === 'HI';

  const hindiContent = `
🌼 श्रीकृष्ण मंत्र संग्रह 🌼

1. कृष्ण बीज मंत्र:
ॐ श्रीं क्लीं कृष्णाय नमः॥
👉 अर्थ: भगवान श्रीकृष्ण को नमस्कार, जो प्रेम, सौंदर्य और करुणा के प्रतीक हैं।
👉 उपयोग: प्रेम, भक्ति, आकर्षण, और जीवन में संतुलन हेतु।

2. कृष्ण मूल मंत्र:
ॐ कृष्णाय नमः॥
👉 अर्थ: श्रीकृष्ण को नमस्कार।
👉 यह मंत्र छोटा, सरल और अत्यधिक प्रभावशाली है।

3. कृष्ण गायत्री मंत्र:
ॐ देवकीनंदनाय विद्महे वासुदेवाय धीमहि।
तन्नः कृष्णः प्रचोदयात्॥
👉 उपयोग: ध्यान, साधना, और ज्ञान प्राप्ति के लिए।

4. राधे कृष्ण मंत्र:
राधे कृष्ण राधे कृष्ण, कृष्ण कृष्ण राधे राधे॥
👉 यह मंत्र मन को भक्ति रस में डुबो देता है। वृंदावन में हर गली में गूंजता है।

5. श्रीकृष्ण प्रेम मंत्र:
ॐ नमो भगवते वासुदेवाय॥
👉 यह मंत्र विष्णु और श्रीकृष्ण दोनों की आराधना के लिए उपयोग होता है।
👉 उपयोग: शांति, मोक्ष, प्रेम, और जीवन की दिशा के लिए।

🕉 जप विधि सुझाव:
- तुलसी माला से 108 बार जप करें।
- श्रीकृष्ण की मूर्ति/चित्र के सामने घी का दीपक जलाएं।
- "राधे कृष्ण", "जय श्रीकृष्ण" का नामस्मरण करें।
- सुबह या संध्या वेला में जप विशेष फलदायक होता है।
`;

  const englishContent = `
🌼 Krishna Mantra Collection 🌼

1. Krishna Beej Mantra:
Om Shreem Kleem Krishnaya Namah॥
👉 Meaning: I bow to Lord Krishna, embodiment of love, beauty, and compassion.
👉 Use: For love, devotion, attraction, and inner harmony.

2. Krishna Moola Mantra:
Om Krishnaya Namah॥
👉 Meaning: Salutations to Lord Krishna.
👉 A short, simple yet powerful mantra.

3. Krishna Gayatri Mantra:
Om Devakinandanaya Vidmahe,
Vasudevaya Dhimahi,
Tannah Krishnah Prachodayat॥
👉 Use: For meditation, spiritual practice, and divine knowledge.

4. Radhe Krishna Mantra:
Radhe Krishna Radhe Krishna, Krishna Krishna Radhe Radhe॥
👉 Immerses the mind in devotion. Echoes through every lane of Vrindavan.

5. Krishna Love Mantra:
Om Namo Bhagavate Vasudevaya॥
👉 Used for worshiping both Vishnu and Krishna.
👉 Purpose: Peace, liberation, divine love, and life guidance.

🕉 Chanting Tips:
- Chant 108 times with Tulsi mala.
- Light a ghee lamp in front of Krishna's image/idol.
- Recite names like “Radhe Krishna” or “Jai Shri Krishna.”
- Ideal time: Early morning or evening.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/Krishnaji.jpg"
          alt="Lord Krishna - Divine Love and Wisdom"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-200 via-transparent to-transparent opacity-90"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-900 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्रीकृष्ण मंत्र संग्रह" : "Krishna Mantras Collection"}
        </h1>
      </div>

      {/* Mantra Content */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-purple-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-800">
            {isHindi ? hindiContent : englishContent}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm bg-purple-100">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default KrishnaJiMantra;
