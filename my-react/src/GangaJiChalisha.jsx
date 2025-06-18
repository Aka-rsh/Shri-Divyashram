import React from 'react';
import Navbar from './Navbar'; // Reuse your existing responsive Navbar

const GangaJiChalisa = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ गंगा जी चालीसा ॥

|| दोहा ||
जय जगदम्बा जगतजननी, गंगा जलधारा।
पावन भवसागर तरिणी, संत जन प्रिया मारा॥

|| चौपाई ||
हे भवानी जलधारा, भव भय हरण कारक।
तुम्हारे कृपा सदा, हर दुःख भारी।

शुद्ध कर दे मन को, गंगा प्रवाह समान।
दे शांति, सुख, समृद्धि, दूर करे हर काम॥

अर्धनारीश्वर रूपा, महादेव की प्यारी।
मुक्ति दायक गंगा माता, भक्तों की सवारी॥

हरि हर महादेव से, तुम जुड़ी हुई सदा।
तुम बिन न कोई पावे, जीवन का उजियारा॥

जो यह चालीसा पढ़े, भव से मुक्त होई।
गंगा माता की कृपा से, सुखी जीवन पाई॥

जय गंगा माता जय, हे स्नेहिल दाता।
संकट हरने वाली, कर दे मन की शांति॥

अयोध्या दास कहे प्रभु, कृपा कर मुझ पर।
गंगा माता कृपा करो, संकट से उबार॥`;

  const englishChalisa = `
॥ Ganga Ji Chalisa ॥

|| Doha ||
Hail the Mother of the universe, the river Ganga,
The purifier who saves souls, beloved of saints.

|| Chaupai ||
O Bhavani, stream of life, remover of worldly fears,
Your grace is forever, heavy with compassion.

Purify our minds like your sacred flow,
Grant peace, happiness, and prosperity, and remove all troubles.

Form of Ardhanarishwar, beloved of Mahadev,
Ganga Mata, giver of liberation, rides with her devotees.

Forever connected to Hari and Mahadev,
Without you, no one finds the light of life.

Whoever reads this Chalisa is freed from worldly existence,
By Ganga Mata’s grace, a happy life is attained.

Hail Ganga Mata, O loving giver,
Remover of troubles, grant peace to the heart.

Ayodhya Das says, O Lord, have mercy on me,
Ganga Mata, please save me from hardships.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/GanagMa.jpg" // <-- Update this with the correct image path for Ganga Ji
            alt="Ganga Ji - purifier and divine river goddess"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-cyan-100 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-cyan-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "गंगा जी चालीसा" : "Ganga Ji Chalisa"}
        </h1>
      </div>

      {/* Chalisa Text Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-cyan-200
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

export default GangaJiChalisa;
