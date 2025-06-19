import React from 'react';
import Navbar from './Navbar';

const RudrabhishekJiMantra = ({ language }) => {
  const isHindi = language === "HI";

  const hindiContent = `
🔱 महा रुद्राभिषेक मंत्र 🔱

1. पंचाक्षरी मंत्र:
ॐ नमः शिवाय
अर्थ: शिवजी का मूल बीज मंत्र। रुद्राभिषेक में निरंतर इसका जप अत्यंत फलदायी है।

2. रुद्राष्टाध्यायी (श्री रुद्रम – यजुर्वेद):
उदाहरण मंत्र (प्रथम अनुवाक):
ॐ नमो भगवते रुद्राय।
नमस्ते रुद्र मन्यव उतो तैव सह।
नमस्तस्तु धन्वने बहुभ्यामुत ते नमः॥
अर्थ: "हे रुद्र! आपको बार-बार नमस्कार। आप कृपा और रौद्र रूप दोनों हैं। आपके धनुष और भुजाओं को भी प्रणाम।"

👉 संपूर्ण श्रीरुद्रम (नमकम + चामकम) रुद्राभिषेक का प्रमुख अंग है।

3. महामृत्युंजय मंत्र:
ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।
उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय माऽमृतात्॥
अर्थ: "हम शिव की उपासना करते हैं जो तीन नेत्रों वाले, जीवन पुष्ट करने वाले हैं। हमें मृत्यु से मुक्ति दें, पर अमरत्व से नहीं।"

4. अभिषेक के अनुसार मंत्र:
दुग्धाभिषेक: ॐ सोमाय नमः  
दधिअभिषेक: ॐ चन्द्रमौल्यै नमः  
घृताभिषेक: ॐ सदाशिवाय नमः  
मध्वभिषेक: ॐ शंकराय नमः  
जलाभिषेक: ॐ नमः शिवाय  

5. रुद्र गायत्री और अन्य संक्षिप्त मंत्र:
- ॐ नमो भगवते रुद्राय  
- ॐ ईशानः सर्वविद्यानाम् ईश्वरः सर्वभूतानाम्  
- ॐ तत्पुरुषाय विद्महे महादेवाय धीमहि, तन्नो रुद्रः प्रचोदयात्॥  
- ॐ शिवाय नमः  
- ॐ रुद्राय नमः  

🕯 रुद्राभिषेक जप विधि:
- प्रत्येक अभिषेक सामग्री के साथ उपयुक्त मंत्र बोलें।
- यदि श्रीरुद्रम संभव न हो, तो महामृत्युंजय मंत्र या "ॐ नमः शिवाय" का 108 बार जप करें।
- अंत में आरती और क्षमा प्रार्थना करें।
`;

  const englishContent = `
🔱 Maha Rudrabhishek Mantras 🔱

1. Panchakshari Mantra:
Om Namah Shivaya
Meaning: The core mantra of Lord Shiva. Continuous chanting during Abhishek is considered highly auspicious.

2. Rudrashtadhyayi (Sri Rudram – Yajurveda):
Example from 1st Anuvak:
Om Namo Bhagavate Rudraya।
Namaste Rudra Manyava Uto Taiva Sah।
Namastastu Dhanvane Bahubhyāmuta Te Namah॥
Meaning: "Salutations again and again to Lord Rudra, both wrathful and benevolent. Salute to His bow and arms."

👉 Complete Shri Rudram (Namakam + Chamakam) is the core of Rudrabhishek.

3. Maha Mrityunjaya Mantra:
Om Tryambakam Yajamahe Sugandhim Pushtivardhanam।
Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat॥
Meaning: "We worship the three-eyed Lord Shiva who nourishes all beings. May He liberate us from the bondage of death, not from immortality."

4. Element-wise Abhishek Mantras:
Milk: Om Somaya Namah  
Curd: Om Chandramoulaye Namah  
Ghee: Om Sadashivaya Namah  
Honey: Om Shankaraya Namah  
Water: Om Namah Shivaya  

5. Key Rudra Mantras:
- Om Namo Bhagavate Rudraya  
- Om Ishanah Sarvavidyanam Ishwarah Sarvabhutanam  
- Om Tatpurushaya Vidmahe Mahadevaya Dhimahi Tanno Rudrah Prachodayat॥  
- Om Shivaya Namah  
- Om Rudraya Namah  

🕯 Chanting Suggestions:
- Chant the specific mantra with each abhishek item.
- If full Shri Rudram is not possible, chant "Om Namah Shivaya" or Maha Mrityunjaya 108 times.
- End the ritual with Aarti and Kshama Prarthana (Forgiveness Prayer).
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-purple-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/RudraAbhishekJiMantra.jpg"
          alt="Maha Rudrabhishek - Lord Shiva Ritual"
          className="object-cover w-full h-full brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg
                       bg-black/50 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "महा रुद्राभिषेक मंत्र" : "Maha Rudrabhishek Mantras"}
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-blue-300
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-800">
            {isHindi ? hindiContent : englishContent}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm bg-blue-100">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RudrabhishekJiMantra;
