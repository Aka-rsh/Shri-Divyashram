import React from 'react';
import Navbar from './Navbar'; // Reuse your existing responsive Navbar

const GaneshJiChalisa = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री गणेश चालीसा ॥

|| दोहा ||
जय गणेश गिरिजा सुवन, मंगल मूल सुजान।
कहत अयोध्या दास तुम, देहु अभय वरदान॥

|| चौपाई ||
जय गणपति सद्गुण सदन, कविवर बदन कृपाल।
विघ्न हरण मंगल करण, जय जय गिरिजालाल॥

एकदन्त दयावन्त, चार भुजाधारी।
मस्तक सिंदूर सोहत, दुध से नहाए प्यारी॥

पुस्तक पानि कुठार त्रिशूली, मूषक वाहन सोहत दूली।
मालाकार मणि मुक्तन की, सुंदर पीताम्बर तन की॥

रक्त पुष्प चंदन ले करके, सेवें विप्र सुर नर मुनि करके।
गंध सुवासित अष्ट प्रकारा, पूजन करत अति हितकारा॥

कंचन थार कपूर लौ छाईं, रत्न जटित आरती छाईं।
श्री गणेश जब ध्यान धरें, सफल सिद्धि सुख सब पावें॥

जैसे विधि शंकरहि पूजा, बिन विनती न मिटे दारूजा।
एक बार बिनायस ध्याया, काल मरण ताहि नाया॥

प्रथम पूज्य तुम देव हमारे, तुम रक्षक सुख के दाता प्यारे।
किया महर्षि वेद व्यास सारा, लेखन कार्य विनायक न्यारा॥

दुर्वा पात चढ़ावैं जो कोई, कामना सिद्धि उसके होई।
जो यह चालीसा गावे, विध्न न व्यापै कबहुँ न आवे॥

अयोध्यादास कहे मन माहीं, गणपति कृपा करहु मुझ पाहीं॥
`;

  const englishChalisa = `
॥ Shri Ganesh Chalisa ॥

|| Doha ||
Victory to Lord Ganesh, son of Girija, source of wisdom and auspiciousness.
Says Ayodhya Das: Grant me your protection and fearlessness.

|| Chaupai ||
Victory to you, O Ganesha, abode of virtue and grace, bestower of boons to poets and sages.
Remover of obstacles, creator of auspiciousness—glory to you, son of Girija!

You are the compassionate One-Tusked Lord, with four arms.
Your forehead adorned with vermilion, bathed in milk, you are ever cherished.

Holding scriptures, axe, and trident, riding on your mouse—your divine form delights all.
Garlanded with precious jewels, adorned in beautiful yellow garments.

With fragrant flowers, sandal paste, sages and gods worship you with devotion.
They offer incense, lamps, and many kinds of offerings, earning immense merit.

Golden plates with camphor and gems glow bright with your aarti.
Whoever meditates on you gains success, accomplishment, and joy.

Just as Lord Shankar worshipped you, no obstacle remains for those who plead to you.
Even a brief remembrance of your name can protect one from death.

You are the first deity to be worshipped, beloved giver of happiness and protector.
Sage Vyasa chose you alone to pen the Mahabharata, such is your divine power.

Whoever offers durva grass with devotion, will have their wishes fulfilled.
Whoever recites this Chalisa is freed from obstacles forever.

Says Ayodhya Das in his heart, "O Ganpati, shower your mercy on me."
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-red-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/GaneshJiAarti.jpg" // <-- Update this with the correct image path
            alt="Lord Ganesha - remover of obstacles and giver of wisdom"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-orange-100 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री गणेश चालीसा" : "Shri Ganesh Chalisa"}
        </h1>
      </div>

      {/* Chalisa Text Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-orange-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-700">
            {isHindi ? hindiChalisa : englishChalisa}
          </pre>
        </div>
      </div>

      <footer className="text-center py-8 text-gray-600 text-sm">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GaneshJiChalisa;
