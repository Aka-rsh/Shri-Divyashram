import React from 'react';
import Navbar from './Navbar';

const SaiBabaChalisha = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री साई चालीसा ॥

|| दोहा ||
श्री साईं चरणों में वंदन, दीनों का तुम धाम।
कृपा करो अब साईंनाथ, रखो सदा प्रभु ध्यान॥

|| चौपाई ||
जय साई ज्ञान के सागर। दुख हरने वाले हितकारक॥
शिरडी में लीला रचाई। भक्तों की तू आस बनाई॥

सबका मालिक एक बताया। सत्य, प्रेम का पाठ पढ़ाया॥
उद्देश्य तुम्हारा जगत कल्याण। संतों में तुम महान महान॥

धन, पद, मान न तुम चाहा। सेवा भाव सदा ही राहा॥
उदी, दर्शन, नाम महान। जीवन करते पूर्ण महान॥

नर-नारी जब संकट पाते। तेरी शरण शीश नवाते॥
मूरत तेरी मन को भाये। कृपा दृष्टि से दुख मिट जाये॥

तू अलौकिक, तू अविनाशी। भक्तों को देवे तू आशा॥
प्रेम, दया, करुणा अपार। सब पर करता सदा उपकार॥

दया दृष्टि जो तेरी पावे। जन्म-मरण से मुक्ति पावे॥
जो भी साईं नाम पुकारे। संकट उनका दूर तुम टारे॥

साईं चालीसा जो गावे। मनवांछित फल वो पावे॥
श्रद्धा सबुरी का जो ध्याये। साईं उसके पास ही आये॥

जो नित पाठ करे मन लाई। साईं सदा रहे संग भाई॥
‘कृपा’ कहे साईं भगवान। रखना सब पर सदा कृपावान॥

|| दोहा ||
साईं सच्चे, साईं प्यारे, भक्त तुम्हें निहाल।
कृपा करो अब दीन पर, कर दो बेड़ा पार॥
`;

  const englishChalisa = `
॥ Shri Sai Chalisa ॥

|| Doha ||
I bow at the feet of Sai, refuge of the weak and poor.
Grant your grace, O Sai Nath, and protect us evermore.

|| Chaupai ||
Victory to Sai, ocean of wisdom, remover of sorrow, and true friend.
In Shirdi, you performed miracles, becoming a hope that shall not end.

You taught that “God is One,” and spread the message of peace.
You stood for truth and love divine; your glories never cease.

You desired no wealth or fame, only service and devotion.
Your Udi, Darshan, Naam divine, give life its full emotion.

In times of trial or despair, devotees seek your grace.
Your image soothes the restless heart and brightens every face.

You are eternal, immortal light; in you the world finds hope.
Your compassion and divine grace help all devotees cope.

Those who chant your holy name are freed from worldly pain.
Your mercy gives salvation, releasing karma's chain.

Who sings this Chalisa with faith shall fulfill every desire.
With Shraddha and Saburi in heart, Sai will soon inspire.

Daily chanting with devotion ensures Sai’s eternal care.
Says Kripa: “O Lord Sai, keep us always in your prayer.”

|| Doha ||
Sai is true, Sai is kind, blessings without end.
O merciful Master of hearts, all miseries you mend.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-yellow-100 to-orange-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/SaiBaba.jpg" // Replace with actual Sai Baba image path
            alt="Shri Sai Baba - Saint of Shirdi"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-yellow-200 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-800 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री साईं चालीसा" : "Shri Sai Chalisa"}
        </h1>
      </div>

      {/* Chalisa Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-yellow-300
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

export default SaiBabaChalisha;
