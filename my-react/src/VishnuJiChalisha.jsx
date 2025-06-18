import React from 'react';
import Navbar from './Navbar'; // Reuse your site's Navbar component

const VishnuJiChalisha = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री विष्णु चालीसा ॥

|| दोहा ||
श्री विष्णु चालीसा जो, श्रद्धा सहित सुनाय।
भवसागर संसार से, पार सहज हो जाय॥

|| चौपाई ||
जय श्री हरि विष्णु भगवाना। भक्तन के तुम सदा सहाना॥
सागर शयन कमल नयन प्यारे। चतुर्भुज रूप शंख चक्रधारी॥

लक्ष्मीपति जग के रखवारे। त्रिदेवों में श्रेष्ठ तुम्हारे॥
कश्यप के कुल में जन्म लियो। धर्म हेतु अवतार लियो॥

वामन रूप धरे त्रैलोकी। बलि के दान लिए भूप सोखी॥
नृसिंह रूप धरे जन रक्षक। हिरण्यकश्यप संहारक॥

राम बने रघुकुल के तारे। रावण मारी लंका उजियारे॥
कृष्ण बने ब्रजधाम विहारे। मथुरा गोकुल लीला प्यारे॥

धर्म स्थापना हेतु अवतारा। अधर्म नाशक जग उद्धारा॥
शंख, चक्र, गदा, पद्म धारी। भक्तन के हित सदाचारी॥

तुलसी दल जो अर्पित करै। मनवांछित फल सहज लहै॥
गज को बचाया तुमने आकर। भक्तों पर तुम सदैव उद्धारक॥

जो यह चालीसा नित गावै। विष्णु लोक में वास पावै॥
भक्ति भाव जो मन में लावै। हरि कृपा से मुक्ती पावै॥

|| दोहा ||
विष्णु चालीसा पढ़त जो, होई सकल सुख खान।
संतत पुण्य लाभ होय, मिटे सकल दुख त्राण॥
`;

  const englishChalisa = `
॥ Shri Vishnu Chalisa ॥

|| Doha ||
He who recites this Vishnu Chalisa with devotion in heart,
Shall easily cross the worldly ocean and attain the Lord’s divine part.

|| Chaupai ||
Victory to Lord Vishnu, the divine sustainer! Eternal protector of all His devotees.
He who lies on the cosmic ocean, with lotus eyes and four arms, bearing conch and discus.

Consort of Lakshmi, protector of the universe, supreme among the holy trinity.
You were born in the lineage of Sage Kashyapa, incarnated to restore dharma.

You took the form of Vamana and humbled King Bali with divine charm.
You incarnated as Narasimha to protect your devotee and destroy Hiranyakashipu's harm.

As Lord Rama, you uplifted the Raghu dynasty, destroyed Ravana and made Lanka holy.
As Lord Krishna, you played divine leelas in Mathura and Gokul sweetly.

You appear in the world for the sake of dharma, to destroy evil and uplift karma.
Wielding conch, discus, mace, and lotus—you are ever righteous and graceful to us.

Who offers a single Tulsi leaf to you with devotion receives their desires fulfilled with emotion.
You saved the elephant Gajendra from peril, and you redeem devotees with mercy eternal.

Whoever sings this Chalisa daily shall live in Vaikuntha, your abode so saintly.
With love for Hari in heart and mind, one attains liberation from worldly bind.

|| Doha ||
He who reads this Vishnu Chalisa gains joy, virtue, and peace.
All sorrow ends, blessings flow—devotion shall never cease.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/VishnuJiChalisha.jpg" // Update this path as needed
            alt="Lord Vishnu - The Preserver of the Universe"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-sky-100 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री विष्णु चालीसा" : "Shri Vishnu Chalisa"}
        </h1>
      </div>

      {/* Chalisa Text Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-blue-200
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

export default VishnuJiChalisha;
