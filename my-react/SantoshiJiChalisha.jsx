import React from 'react';
import Navbar from './Navbar';

const SantoshiJiChalisha = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ संतोषी माता चालीसा ॥

दोहा :
जय संतोषी माता, शांति सुख की दाता।
तुम्हरे दर्शन मात्र से, मिटे जग की क्रन्दता॥

चौपाई :
संतोषी माता करो ध्यान, संकट हरें जग का पान।
तुम्हारी पूजा जो करें, प्रसन्न हो करें वरदान॥

दुःख दर्द हर लो तुम, सुख संपदा सदा दो तुम।
जो भी तेरी भक्ति करे, माता उसके कष्ट हर ले॥

संतोषी माता का वास, होता है सबके मानस।
तुम्हारी कृपा से जो मिले, जीवन में सफल होता हर बार॥

तुम्हारी आराधना से, घर में आती शांति।
संतोषी माता के चरणों में, झुकती है हर बाला और बालक॥

दोहा :
संतोषी माता की जय, संकटमोचन नंदन।
सदा करो हम पर कृपा, हमें दैओ सुख समृद्धि धन॥
`;

  const englishChalisa = `
॥ Santoshi Mata Chalisa ॥

Doha:
Victory to Santoshi Mata, the giver of peace and happiness,
Just by seeing you, the world's pain and sorrow vanish!

Chaupai:
Meditate on Santoshi Mata, she removes the suffering of the world,
Whoever worships you, becomes happy and blessed!

You remove all pain and sorrow, always give happiness and wealth,
Whoever has devotion to you, Mother, all their troubles disappear!

Santoshi Mata dwells in every heart,
By your grace, one succeeds in life every time!

By your worship, peace comes to the home,
At the feet of Santoshi Mata, every child and woman bows!

Doha:
Victory to Santoshi Mata, remover of troubles,
Always bless us, grant us happiness, prosperity, and wealth.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-yellow-200 to-yellow-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/SantoshiMataChalisha.jpg" // Update path as needed
            alt="Santoshi Mata - Goddess of Satisfaction and Contentment"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'center' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-700 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री संतोषी माता चालीसा" : "Shri Santoshi Mata Chalisa"}
        </h1>
      </div>

      {/* Chalisa Text */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-yellow-300
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-700">
            {isHindi ? hindiChalisa : englishChalisa}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SantoshiJiChalisha;
