import React from 'react';
import Navbar from './Navbar';

const AnnapurnaMaBeejMantra = ({ language }) => {
  const isHindi = language === 'HI';

  const hindiContent = `
🍚 अन्नपूर्णा बीज मंत्र 🍚

1. अन्नपूर्णा बीज मंत्र:
ॐ अन्नपूर्णायै नमः॥
यह सरल और प्रभावशाली मंत्र है जो माँ अन्नपूर्णा की कृपा प्राप्त करने के लिए प्रतिदिन जपा जाता है।

2. अन्नपूर्णा स्तुति मंत्र:
नित्यानंदकरी वराभयकरी सौंदर्यरत्नाकरी।
निर्धूताखिलघोघसंगसुखकरी नीराजनाराध्यपदा॥
मुक्ताहारलसत्किरीटरुचिरा चंद्रावली चंदिका।
श्रीमत्अन्नपूर्णा शिवाभिनयिनी भावग्रहा मे सदा॥

3. अन्नपूर्णा गायत्री मंत्र:
ॐ अन्नपूर्णायै विद्महे। रिद्धिपूर्णायै धीमहि।
तन्नो अन्नदा प्रचोदयात्॥

📿 जाप विधि:
- समय: प्रतिदिन सुबह अथवा रसोई पूजन के समय।
- स्थान: रसोईघर, मंदिर या अन्न भंडार के पास।
- माला: 108 बार।
`;

  const englishContent = `
🍚 Annapurna Beej Mantra 🍚

1. Annapurna Beej Mantra:
Om Annapurnaayai Namah
A simple and powerful mantra chanted daily to seek blessings of Mother Annapurna.

2. Annapurna Stuti Mantra:
Nityanandakari Varabhayakari Saundaryaratnakari,
Nirdhutakhilghoghasangasukha kari Neerajanaradhyapada...
(The hymn praising the eternal bliss, beauty, and grace of Annapurna.)

3. Annapurna Gayatri Mantra:
Om Annapurnayai Vidmahe,
Riddhipurnayai Dhimahi,
Tanno Annada Prachodayat

📿 Chanting Tips:
- Time: Daily morning or during kitchen worship.
- Place: Kitchen, temple or near grain storage.
- Mala: 108 times.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-100 to-orange-200 text-gray-900 font-sans">
      <Navbar />

      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/AnnapurnaMaBeejMantra.jpg"
          alt="Mother Annapurna Ji"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-300 via-transparent to-transparent opacity-90"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-900 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "अन्नपूर्णा बीज मंत्र" : "Annapurna Beej Mantras"}
        </h1>
      </div>

      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-yellow-300
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-800">
            {isHindi ? hindiContent : englishContent}
          </pre>
        </div>
      </div>

      <footer className="text-center py-8 text-gray-600 text-sm bg-yellow-50">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AnnapurnaMaBeejMantra;
