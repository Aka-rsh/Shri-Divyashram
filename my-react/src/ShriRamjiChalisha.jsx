import React from 'react';
import Navbar from './Navbar'; // Reuse your Navbar component

const ShriRamJiChalisa = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री राम चालीसा ॥

|| दोहा ||
श्री राम चालीसा सुनै, रामचरन रति होय।
सकल मनोरथ सिद्धि, परम पद निज पाय॥

|| चौपाई ||
जय श्री राम कोटि नाम धनि। सुनत लाजत सकल अधम भव हानि॥
रघुकुल तिलक राम भवानी। जगदुदारन चरित सुहानी॥

सीता राम रूप अति प्यारा। त्रैलोक्यपति दीन हितकारा॥
रघुनन्दन प्रभु शील सुभाऊ। भूतल प्रकट भयो रघुराऊ॥

रामु सत्य ब्रतधारी ग्यानी। भूपु राम सम नहीं कोई जानी॥
राम नाम परमारथ साधन। सकल सिद्धि कर जग में बंधन॥

राम नाम बिनु मुक्त न होई। राम भजन बिनु सुख न कोई॥
रामु नाम निज मंत्र बतावा। जो यह जपे तासु फल पावा॥

अंजनि पुत्र राम दुलारा। लंक विदारक संकट हारा॥
राम भक्त हनुमान सुजाना। सरब सिद्धि के तुम हो दाना॥

राम कीन्ह कृपा जसु गाया। तुलसीदास हृदय बसि आया॥
जो जन राम चालीसा गावै। सकल मनोरथ सिद्धि पावै॥

राम चरन में लव लगाई। होइ भव सिंधु पार नर नारी॥
अंत काल रघुनाथ उबारै। जनम जनम प्रभु भक्त पुकारै॥

राम चालीसा पाठ जो करै। हरि चरणों में ध्यान जो धरै॥
राम कृपा ते ताहि सुलभ होई। तुलसी वाणी सत्य न खोई॥

|| दोहा ||
राम चालीसा पाठ कर, साधक हो सुखरूप।
जनम जनम के पाप सब, होहि नाश फिरि कूप॥
`;

  const englishChalisa = `
॥ Shri Ram Chalisa ॥

|| Doha ||
He who listens to the Ram Chalisa develops love for Lord Ram's feet.
All desires are fulfilled, and the supreme spiritual state is attained.

|| Chaupai ||
Glory to Lord Ram whose countless names are sacred; even hearing them removes sins.
He is the crown jewel of the Raghu clan, the divine savior with wondrous deeds.

Sita and Ram form a beautiful pair; Lords of the three worlds, compassionate to the humble.
Born in the Raghu family, Lord Ram appeared on earth to spread righteousness.

Ram is truthful, virtuous, and wise—no king equals Lord Ram.
His name is the supreme path to salvation, destroying all bondage in the world.

Without Ram’s name, there is no liberation; without His devotion, no real happiness.
Lord Ram revealed His name as a mantra—whoever chants it gains divine fruit.

Hanuman, son of Anjani, is dear to Lord Ram, destroyer of Lanka and remover of all dangers.
He is the wise and powerful devotee of Ram, giver of all divine attainments.

Lord Ram bestowed His grace, and His glories are sung—He resides in Tulsidas’ heart.
Whoever recites this Chalisa attains success in all desires.

By placing just a little love at Ram’s feet, one can cross the ocean of birth and death.
At life’s end, Lord Ram grants salvation; in every birth, His devotees call on Him.

He who reads the Ram Chalisa and meditates on the Lord’s feet
Will attain Ram’s grace easily—Tulsidas' words shall never be untrue.

|| Doha ||
One who recites the Ram Chalisa becomes joyful in life.
Sins of many lifetimes are destroyed, and one never falls back into ignorance.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-red-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/ShriRamjiChalisha.jpg" // <-- Replace with actual image path
            alt="Lord Shri Ram - embodiment of dharma and compassion"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-orange-100 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री राम चालीसा" : "Shri Ram Chalisa"}
        </h1>
      </div>

      {/* Chalisa Text Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-yellow-200
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

export default ShriRamJiChalisa;
