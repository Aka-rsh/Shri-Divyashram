import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const HanumanAarti = ({ language }) => {
  const isHindi = language === "HI";

  // Hindi Aarti Text for Hanuman Ji
  const hindiAarti = `
आरती कीजै हनुमान लला की,
दुष्ट दलन रघुनाथ कला की।

जाके बल से गिरिवर काँपे,
रोग दोष जाके निकट न झाँके।
अंजनि पुत्र महा बलदायी,
संतन के प्रभु सदा सहाई।

दे बीरा रघुनाथ पठाए,
लंकाजारि सिया सुध लाए।
लंका सो कोट समुद्र-सी खाई,
जात पवनसुत बार न लाई।

लंका जारि असुर संहारे,
सियारामजी के काज संवारे।
लक्ष्मण मूर्छित पड़े सकारे,
आनि संजीवन प्राण उबारे।

पैठि पताल तोरि जमकारे,
अहिरावण की भुजा उखारे।
बाएं भुजा असुर दल मारे,
दहिने भुजा संतजन तारे।

सुर-नर-मुनि जन आरती उतारे,
जय जय जय हनुमान उचारे।
कंचन थार कपूर लौ छाई,
आरती करत अंजना माई।

जो हनुमान जी की आरती गावे,
बसि बैकुंठ परमपद पावे।
लंकविध्वंस कीन्ह प्रभु थारा,
जय जय जय हनुमंत उदारा।
`;

  // English Translation of the Aarti
  const englishAarti = `
Perform the Aarti of Hanuman Lala,
The destroyer of evil, the art of Lord Rama.

By whose strength even mountains tremble,
Disease and flaws dare not approach him.
Son of Anjani, greatly powerful,
Always the helper of saints.

He was sent by Lord Rama with a message,
He burnt Lanka and brought news of Sita.
Lanka with its fort and sea-like trench,
Pawanputra reached there without delay.

Burning Lanka, he destroyed demons,
He accomplished the tasks of Sita and Rama.
When Lakshman lay unconscious in the morning,
He brought Sanjeevani and saved his life.

Entering Patala, breaking Yama's doors,
He uprooted Ahiravan's arm.
With his left arm, he destroyed demon armies,
With his right arm, he rescued the saints.

Gods, humans, and sages perform his Aarti,
Chanting "Jai Jai Jai Hanuman!"
On a golden plate, camphor flames glow,
Mother Anjana performs the Aarti.

Whoever sings the Aarti of Hanuman Ji,
Attains the supreme abode in Vaikuntha.
He destroyed Lanka, O Lord,
Victory, victory, victory to the generous Hanuman!
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-100 to-red-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Engaging and responsive */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/* Update this path to your Hanuman Ji image */}
          <img
            src="./Lord/HanumanJiAarti.jpg" // **UPDATE THIS PATH TO YOUR HANUMAN JI IMAGE**
            alt="Lord Hanuman, the epitome of strength and devotion."
            style={{ objectPosition: 'top', width: '100%' }}
          />
        </div>

        {/* Overlay for text readability - adjusted for Hanuman colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-100 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated - adjusted for Hanuman colors */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-800 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "आरती कीजै हनुमान लला की" : "Aarti Kije Hanuman Lala Ki"}
        </h1>
      </div>

      {/* Aarti Text Section - Clean, readable, and interactive */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-red-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-700">
            {isHindi ? hindiAarti : englishAarti}
          </pre>
        </div>
      </div>

      {/* Optional: Add a simple footer */}
      <footer className="text-center py-8 text-gray-600 text-sm">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HanumanAarti;