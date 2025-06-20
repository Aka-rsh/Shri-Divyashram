import React from 'react';
import Navbar from './Navbar';

const SitaBeejMantra = ({ language }) => {
  const isHindi = language === 'HI';

  const hindiContent = `
🌸 सीता बीज मंत्र 🌸

1. सीता बीज मंत्र:
ॐ श्रीं सीतायै नमः॥
यह शक्तिशाली बीज मंत्र माँ सीता की कृपा प्राप्ति और स्त्रीत्व जागरण के लिए है।

2. सीता गायत्री मंत्र:
ॐ जानकी देव्यै च विद्महे। रामप्रियायै धीमहि।
तन्नो सीता प्रचोदयात्॥
भावार्थ: जनकनंदिनी सीता की बुद्धि को प्रेरित करने के लिए।

3. श्री सीता मूल मंत्र:
ॐ जानकी वल्लभायै नमः॥
यह वैवाहिक सुख, शांति और सौहार्द लाने वाला मंत्र है।

📿 जाप विधि:
- दिन: मंगलवार, गुरुवार, नवरात्रि।
- माला: कमलगट्टे या तुलसी माला।
- स्थान: मंदिर या घर के पूजा स्थान।
- संख्या: 108 बार।
`;

  const englishContent = `
🌸 Sita Beej Mantra 🌸

1. Sita Beej Mantra:
Om Shreem Sitaayai Namah
A powerful mantra to invoke the blessings of Mother Sita and awaken divine femininity.

2. Sita Gayatri Mantra:
Om Janaki Devyai Cha Vidmahe,
Ramapriyayai Dhimahi,
Tanno Sita Prachodayat
Meaning: Meditating on Janaki to inspire our intellect.

3. Shri Sita Moola Mantra:
Om Janaki Vallabhayai Namah
Brings marital bliss, peace, and harmony.

📿 Chanting Tips:
- Days: Tuesday, Thursday, Navratri.
- Mala: Lotus seed or Tulsi mala.
- Place: Temple or home altar.
- Count: 108 times.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-red-200 text-gray-900 font-sans">
      <Navbar />

      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/SitaBeejMantra.jpg"
          alt="Mother Sita Ji"
          className="object-cover w-full h-full brightness-90"
          style={{ objectPosition: 'top' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-300 via-transparent to-transparent opacity-90"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-900 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "सीता बीज मंत्र" : "Sita Beej Mantras"}
        </h1>
      </div>

      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-red-300
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

export default SitaBeejMantra;
