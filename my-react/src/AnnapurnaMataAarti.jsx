import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const AnnapurnaMataAarti = ({ language }) => {
  const isHindi = language === "HI";

  // Hindi Aarti Text
  const hindiAarti = `
जय अन्नपूर्णे माता
मैया जय शाकंभरी माता।
अपने पूत पर कर दया
अपने पूत पर कर दया
भूख मिटे यह तात।। जय...

सबको अन्न प्रदान करें
सर्वत्र सुख उपजाएं।
जो जन शरण में आएं
उनका दुःख मिटाएं।। जय...

धूप दीप नैवेद्य अरपें
श्रद्धा से मन लाएं।
भक्तों के विघ्न विनाशें
सुख-समृद्धि पाएं।। जय...

भंडारा तेरा चलता
कभी न अन्न की कमी।
तेरा नाम जपें जो
उन्हें मिले निधि रमी।। जय...

जो यह आरती गावे
मनवांछित फल पावे।
अन्नपूर्णा प्रसन्न हों
जीवन सफल बनाए।। जय...
`;

  // English Translation of the Aarti
  const englishAarti = `
Hail Mother Annapurna!
Hail Mother Shakambhari!
Have mercy on your children,
Have mercy on your children,
May their hunger be appeased. Jai...

You provide food to everyone,
You bring happiness everywhere.
Those who seek refuge in you,
Their sorrows are dispelled. Jai...

We offer incense, lamps, and oblations,
With devotion in our hearts.
You destroy the obstacles of devotees,
They attain happiness and prosperity. Jai...

Your storehouse is always full,
There is never a shortage of food.
Those who chant your name,
Attain abundant treasures. Jai...

Whoever sings this Aarti,
Receives their heart's desires.
May Annapurna be pleased,
And make life successful. Jai...
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-200 to-amber-300 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Engaging and responsive */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/* Ensure this path points to your Annapurna Mata image */}
          <img
            src="./Lord/Annapurnaaarti.jpg" // **Update this path to your Annapurna Mata image**
            alt="Maa Annapurna, the Goddess of Food and Nourishment, holding a ladle and bowl."
            className="object-cover w-full h-full filter brightness-90"
            // object-cover (default object-position is center) will crop from top and bottom
            // as needed to fill the banner while maintaining aspect ratio.
          />
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-800 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "माँ अन्नपूर्णा जी की आरती" : "Aarti of Maa Annapurna Ji"}
        </h1>
      </div>

      {/* Aarti Text Section - Clean, readable, and interactive */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-yellow-300
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

export default AnnapurnaMataAarti;