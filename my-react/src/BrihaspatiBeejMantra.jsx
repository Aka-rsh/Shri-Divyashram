import React from 'react';
import Navbar from './Navbar';

const BrihaspatiBeejMantra = ({ language }) => {
  const isHindi = language === 'HI';

  const hindiContent = `
📿 बृहस्पति मंत्र संग्रह 📿

1. बृहस्पति बीज मंत्र:
ॐ बृं बृहस्पते नमः।
👉 उपयोग: इस मंत्र का 108 बार जाप गुरुवार को करने से गुरु ग्रह की स्थिति मजबूत होती है और ज्ञान, समृद्धि तथा सौभाग्य की प्राप्ति होती है।

2. बृहस्पति वैदिक मंत्र (ऋग्वेद से):
बृहस्पते अति यदरिक्षो अर्हद् दिवो वद इति।
ज्योतिर्नः पथो रुहेद देवानां धूर्तिर्भव॥
👉 भावार्थ: हे बृहस्पति! आप हमारे मार्ग में प्रकाश लाएं, और देवताओं के मार्गदर्शक बनें।

3. बृहस्पति गायत्री मंत्र:
ॐ अंगिरस वंशजाय विद्महे।
वाचस्पतये धीमहि।
तन्नो गुरुः प्रचोदयात्॥
👉 भावार्थ: हम अंगिरा ऋषि के वंशज, वाणी के स्वामी बृहस्पति को जानते हैं; हम उनका ध्यान करते हैं; वे हमारे बुद्धि को प्रज्वलित करें।

4. बृहस्पति ग्रह शांति मंत्र:
ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः।
👉 उपयोग: यह मंत्र गुरु ग्रह के अशुभ प्रभाव को शांत करने के लिए प्रयोग होता है। ज्योतिष में अत्यंत उपयोगी।

🪔 जप विधि सुझाव:
- पीले वस्त्र पहनें और पीले पुष्प अर्पित करें।
- गुरुवार को व्रत और मंत्र जाप का विशेष महत्त्व है।
- हल्दी या चंदन की माला से जप करें।
- जप के बाद केले या पीली मिठाई का प्रसाद चढ़ाएं।
`;

  const englishContent = `
📿 Brihaspati (Jupiter) Mantras 📿

1. Brihaspati Beej Mantra:
Om Brim Brihaspataye Namah
👉 Purpose: Chant this 108 times on Thursdays to strengthen Jupiter's influence and attain wisdom, prosperity, and good fortune.

2. Vedic Brihaspati Mantra (from Rigveda):
Brihaspate Ati Yadaryo Arhat Divo Vadeti
Jyotirnah Patho Ruhet Devanam Dhurtirbhava॥
👉 Meaning: O Brihaspati, illuminate our path and be the guide of the gods.

3. Brihaspati Gayatri Mantra:
Om Angirasa Vanshajaya Vidmahe,
Vachaspatiye Dhimahi,
Tanno Guruh Prachodayat॥
👉 Meaning: We meditate on the descendant of Angiras, the master of speech, may that Guru enlighten our intellect.

4. Jupiter Peace Mantra:
Om Gram Greem Grom Sah Gurave Namah
👉 Use: Used to pacify the negative effects of Jupiter in astrology (Jyotish Shastra).

🪔 Chanting Tips:
- Wear yellow clothes and offer yellow flowers.
- Observe fasts and chant especially on Thursdays.
- Use a Haldi (turmeric) or sandalwood mala.
- Offer banana or yellow sweets as prasad after chanting.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/BrihaspatiBeejMantra.jpg"
          alt="Brihaspati - Guru of the Gods"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-300 via-transparent to-transparent opacity-90"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-900 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "बृहस्पति मंत्र संग्रह" : "Brihaspati (Jupiter) Mantras"}
        </h1>
      </div>

      {/* Mantra Content */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-yellow-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-800">
            {isHindi ? hindiContent : englishContent}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm bg-yellow-100">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BrihaspatiBeejMantra;
