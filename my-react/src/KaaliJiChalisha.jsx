import React from 'react';
import Navbar from './Navbar';

const KaaliJiChalisha = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री काली चालीसा ॥

|| दोहा ||
जय काली माता, अम्बे त्रिपुरा सुंदरी।
भय हरे देवि, जगदम्बे जगत्पुत्री॥

|| चौपाई ||
जय काली, जय काली, जगत में तुम ही माली।
संकट मोचन, दुख हरने वाली॥

त्रिपुरा सुंदरी भवानी, शैलपुत्री महाविद्या।
शक्तिमयी भवतु माँ, कृपा करो हम पर विधाता॥

गर्जन करे महाकाल, करुणा करो दयाल।
शिव पार्वती की आराध्या, जगत के पालनहार॥

भस्मराग जलधि में, नारी रूप तुम्हारा।
कालरात्रि की छवि में, भय का संहार हमारा॥

धूप दीप जलायो, माया मोहो त्यागो।
जो कोई तेरा जाप करे, सकल सुख पावे जागो॥

|| दोहा ||
काली माता की आराधना करो, संकट से मुक्ति पाओ।
भक्तों की रक्षा करो, प्रेम से हम सबको छाओ॥
`;

  const englishChalisa = `
॥ Shri Kali Chalisa ॥

|| Doha ||
Hail Kali Mata, Ambika, Tripura Sundari,
Remover of fear, Mother of the universe, beautiful and mighty!

|| Chaupai ||
Hail Kali, hail Kali, the gardener of the world,
Remover of troubles, bringer of peace and joy!

Tripura Sundari, Bhavani, Shailputri, and great Vidya,
Bless us with power and grace, O divine Mother!

Mahakaal roars, show compassion, O merciful,
Worshipped by Shiva-Parvati, protector of all worlds!

In ashes, gems, and oceans, your form as a woman shines,
In the form of Kalaratri, you destroy all fear and darkness!

Light the incense and lamps, forsake illusion and desire,
Whoever chants your name attains all happiness and liberation!

|| Doha ||
Worship Kali Mata, and free yourself from all distress,
Protect your devotees, and shower your love and grace on us all.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/KaaliAarti.jpg" // Update path as needed
            alt="Kali Mata - Fierce and Compassionate Goddess"
            className="object-cover w-full h-full filter brightness-75"
            style={{ objectPosition: 'center' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-600 drop-shadow-lg
                       bg-black/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री काली चालीसा" : "Shri Kali Chalisa"}
        </h1>
      </div>

      {/* Chalisa Text */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-black bg-opacity-80 p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-red-700
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-red-300">
            {isHindi ? hindiChalisa : englishChalisa}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default KaaliJiChalisha;
