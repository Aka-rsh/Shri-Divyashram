import React from 'react';
import Navbar from './Navbar';

const SheetlaJiChalisha = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री शीतला चालीसा ॥

|| दोहा ||
वंदन करू शीतला मैया, संकट हरनी नाम।
दया करो मम मातु अब, करो कृपा हरि धाम॥

|| चौपाई ||
जय शीतला माई भवानी। रोग नाशिनी दीन सयानी॥
एक लोटा जल अरु झारी। चउमुख दीया राखै नारी॥

रोग, पीड़ा, ताप नशावै। संकट भारी दूर करावै॥
फूल, चावल अर्पित होवे। माई की पूजा सफल होवे॥

शीतल व्रत जो नारी धारे। सुख-समृद्धि वह घर वारे॥
बच्चों को जो रोग सतावै। माता शीघ्र शरण में आवै॥

चेचक, ताप, दु:ख जो आये। माई कृपा से सब हर जाए॥
गुरुवार को व्रत कर लीजे। भक्ति भाव से मन दीजे॥

माँ का ध्यान करे जो प्राणी। शीतलता पावे वह ज्ञानी॥
भक्तों का रखे वह ध्यान। संकट से करे कल्याण॥

दया करो अब हे ममता वाली। वंदन करूँ शरण में जाओ आली॥
चालीसा यह जो नित गावे। माँ का आशीष वह पावे॥

कहें ‘कृपा’ यह भाव सुनो मैया। रहो सदा शीतल छाया॥

|| दोहा ||
शीतला मैया दया करो, संकट मोरे टार।
भक्त तुम्हारा नाथ से, सदा रहे सुख हार॥
`;

  const englishChalisa = `
॥ Shri Sheetla Chalisa ॥

|| Doha ||
I bow to you, O Sheetla Maa, remover of all disease.
Grant your mercy, Divine Mother, bring us peace and ease.

|| Chaupai ||
Hail Sheetla Devi, O Divine Mother! You cure suffering and care for others.
With pot of water and a sacred broom, your image calms every doom.

You remove all pain and fever, you make our heavy burdens lighter.
Rice and flowers we offer true, our devotion is pure for you.

Those who fast with faith on day divine, their homes with peace and wealth will shine.
Children struck by illness or fear, with your grace, soon find cheer.

Smallpox, fevers, all are gone, when Sheetla Maa’s name is called upon.
Keep the fast on Thursday bright, pray with love and heart so right.

One who remembers you each day, finds calmness, joy along the way.
You protect your true devotees, and fill their lives with harmony.

O merciful goddess, mother divine, accept my humble prayers and shrine.
Whoever reads this Chalisa daily, is blessed with your kindness wholly.

Says Kripa: “Please hear our call, keep your cool shade over all.”

|| Doha ||
Sheetla Maa, so kind and true, remove all troubles far.
Your faithful devotees shall always wear your joy as garland star.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-100 to-yellow-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/SheetlaMataChalisha.jpg" // Update path as needed
            alt="Sheetla Mata - Goddess of Healing and Calm"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-pink-200 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-pink-800 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री शीतला चालीसा" : "Shri Sheetla Chalisa"}
        </h1>
      </div>

      {/* Chalisa Text */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-pink-200
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

export default SheetlaJiChalisha;
