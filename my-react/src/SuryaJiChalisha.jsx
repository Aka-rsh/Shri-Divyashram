import React from 'react';
import Navbar from './Navbar';

const SuryaJiChalisha = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री सूर्य चालीसा ॥

|| दोहा ||
जयति जयति जगत के दीपक, त्रिभुवन के अधिकारी।
सप्त अश्व रथ पर सवार, पूजत सब नर-नारी॥

|| चौपाई ||
जय सूर्य देव तेज वनमाला। दिन के नाथ, प्रताप विशाल॥
किरणों से जीवन जग पालें। अंधकार को दूर निकालें॥

त्रिनेत्र रूप प्रभा बिखरावत। नवग्रह में प्रथम बतावत॥
चक्र, गदा, कमंडल धारी। दिव्य रूप सब जग से न्यारी॥

सात अश्वों का रथ चलावत। संपूर्ण दिशा ज्योति फैलावत॥
सप्त रंगी किरणों से प्यारे। शुभ प्रकाश जग में तुम वारे॥

दीन-दुखी जो नाम पुकारे। संकट उनके दूर तुम्हारे॥
अग्रदूत बन तज तम छाया। जीवन में नव प्रकाश लाया॥

जपें सूर्य अर्घ्य से प्रभाते। संत सदा तुमको ध्याते॥
बुद्धि, बल, विद्या के दाता। रोग-शोक मिटाने वाले त्राता॥

अदिति पुत्र, ज्योति स्वरूपा। ग्रहों में श्रेष्ठ, भास्कर भूपा॥
तुम बिन न दिन, न जीवन संभव। सृष्टि करे तुमसे ही अचंभव॥

जो यह चालीसा नित गावे। तेज, बल, वैभव वह पावे॥
‘कृपा’ कहे हे सूर्य नराए। भक्ति से सब संकट टराए॥

|| दोहा ||
आरोग्य, आयु, संपदा, देहु नाथ दिनराज।
भक्त तुम्हारे शरण में, सदा रहैं निष्काज॥
`;

  const englishChalisa = `
॥ Shri Surya Chalisa ॥

|| Doha ||
Victory to you, O Surya Dev, light of the universe so bright.
Ruler of all three worlds, riding a chariot of light.

|| Chaupai ||
Hail Surya Dev, garlanded with radiance! Lord of the day, you shine immense.
With your rays, life is sustained; you dispel darkness and pain.

With a third eye, you spread your light. First among planets, shining bright.
You hold discus, mace, and sacred urn. Divine is your eternal form.

You ride the chariot of seven steeds, spreading light as all life needs.
With seven-colored divine beams, you fulfill the universe's dreams.

To the sorrowful, your name brings aid; you drive away their darkest shade.
You are the herald of the dawn, bringing hope where gloom has gone.

Saints offer water with devotion, honoring you with true emotion.
Bestower of wisdom, strength, and grace; remover of disease from every place.

Son of Aditi, form of flame; among the planets, you hold fame.
Without you, no day can be born, no life without your golden morn.

One who chants this Chalisa daily, gains power, prestige, and health surely.
Says Kripa: "O Sun Divine, your bhakti makes all fate align."

|| Doha ||
O Sun God, grant health and age, and wealth that shines like gold.
Your devotees, in your refuge, stay happy and pure of soul.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-200 to-orange-300 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/SuryaJiAarti.jpg" // Replace with your actual Surya Dev image path
            alt="Surya Dev - Lord of Radiance and Life"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-orange-300 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री सूर्य चालीसा" : "Shri Surya Chalisa"}
        </h1>
      </div>

      {/* Chalisa Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-orange-300
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

export default SuryaJiChalisha;
