import React from 'react';
import Navbar from './Navbar'; // Assumes a reusable, responsive Navbar

const KrishnaJiChalisha = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री कृष्ण चालीसा ॥

|| दोहा ||
कृष्ण चालीसा जो पढ़े, मन वांछित फल पाय।
भवसागर से पार कर, श्री हरि धाम सिधाय॥

|| चौपाई ||
जय श्री कृष्ण कन्हैया प्यारे। भक्तन के तू सदा सहारे॥
यशोदा के तू लालन ललना। मुरली मनोहर नंद किशोरना॥

काली नाग मर्दन तू कीन्हा। पूतना राक्षसी भय हीना॥
त्रिभुवन में तू लीला करै। प्रेम भक्ति हरि सबको भरै॥

गोवर्धन गिरि तू उठायो। इन्द्र का अभिमान घटायो॥
गोप गोपिन संग रास रचायो। राधा रानी हृदय समायो॥

बनसुरिया की धुन मधुर भारी। सुन कर भाव विभोर नर-नारी॥
कंस का अंत तू ही कीन्हा। मथुरा कारागार छुड़ायो लीन्हा॥

सुदामा के तू संकट टारे। दीनन के तू पालनहारे॥
शरण में जो तेरी है आता। भवबंधन से मुक्ति पाता॥

गीता ज्ञान तू ने दिया। अर्जुन को धर्म पथ पर लिया॥
रूप अनेक दिखायो रण में। मोह विनाश किया क्षण में॥

संकट हो या हो अंधियारा। तू ही भवसागर से पार उतारा॥
नाम तिहारो जो भी जपै। भव बंधन से मुक्त होइ सबै॥

जो जन श्री कृष्ण चालीसा। पढ़े प्रेम से हरि जैसा॥
तन मन में हरि बसि जावें। जीवन सफल बना जावें॥

|| दोहा ||
कृष्ण कृपा जो होय जन, जीवन सफल बनाय।
कहत ‘कृपा’ यह वाणी, प्रेम सहित गुण गाए॥
`;

  const englishChalisa = `
॥ Shri Krishna Chalisa ॥

|| Doha ||
He who recites this Krishna Chalisa with devotion will fulfill all desires,
And cross the ocean of existence, reaching Lord Hari’s eternal abode.

|| Chaupai ||
Victory to you, beloved Shri Krishna! Eternal support of your devotees.
You are the darling child of Yashoda, flute player, son of Nanda.

You subdued the serpent Kaliya, and freed the world from the fear of Putana.
In all three worlds, your divine play continues; you fill hearts with devotion and love.

You lifted the Govardhan mountain and humbled the pride of Indra.
You performed the Raas Leela with gopis and reside in Radha’s heart.

Your flute’s sweet melody enchants all beings—humans, gods, and sages.
You destroyed Kansa’s tyranny and liberated the prisoners of Mathura.

You helped your friend Sudama in need, protector of the poor and the meek.
Whoever comes to your shelter is freed from worldly bondage.

You gave the knowledge of the Gita, guided Arjuna on the path of righteousness.
You revealed your divine forms in the battlefield and removed confusion in a moment.

In distress or darkness, you are the boat across the worldly ocean.
He who chants your name is freed from all bonds and sorrow.

Whoever lovingly recites this Krishna Chalisa,
Finds Lord Hari dwelling in heart and mind, and their life becomes blessed.

|| Doha ||
By Krishna’s grace, life becomes fulfilled and divine.
Sings Kripa Das: May all praise the Lord with heartfelt love and rhyme.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/Krishnaji.jpg" // <-- Update path accordingly
            alt="Shri Krishna - Lord of love, wisdom, and divine play"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-purple-100 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री कृष्ण चालीसा" : "Shri Krishna Chalisa"}
        </h1>
      </div>

      {/* Chalisa Text Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-purple-200
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

export default KrishnaJiChalisha;
