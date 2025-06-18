import React from 'react';
import Navbar from './Navbar'; // Reuse your Navbar component

const SaraswatiJiChalisha = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री सरस्वती चालीसा ॥

|| दोहा ||
वन्दे वाणी विनायक, माता सरस्वती देवी।
ज्ञान, बुद्धि, विवेक दो, जीवन हो सुखरसी॥

|| चौपाई ||
जय जय शारदा ज्ञानदायिनी। मम बुद्धि तेज बढ़ायिनी॥
श्वेत वस्त्र, वीणा धर धारी। सिर पर मुकुट, कर में माला प्यारी॥

कमल आसन बिराजत माता। करु कृपा मुझ पर दिनराता॥
बालक बुद्धिहीन को दीन्हा। विद्यादान कर के उजियारा कीन्हा॥

ऋषि मुनि जन करते सेवा। ब्रह्मा-वाणी तव गुण गावा॥
शिव विष्णु तव ध्यान लगावैं। नारद शारदा नाम जपावैं॥

तुम बिन ज्ञान कहाँ से आवे। मन मन्दिर में ज्योति जगावे॥
शरण तुम्हारी जो जन आवै। भवसागर से पार लगावै॥

वाणी मधुर बनावै माता। अपवित्रता दूर भगाता॥
संगीत सिखावै तू सच्चा। स्वर लय राग बने सब अच्छा॥

वेद, पुराण, उपनिषद बानी। तव कृपा से जग में जानी॥
विद्या के तुम मूल आधार। करहु कृपा सदा हम पर भार॥

शारदीय नवरात्रि में पूजे। भक्त तुम्हारे तन-मन भूले॥
मूर्ख जनों को विद्या दीन्हा। अधकार में दिया उजियारा तीन्हा॥

जो यह चालीसा पढ़े नित, सरस्वती कृपा होय।
‘कृपा’ कहे मातु प्रसन्न हो, मनवांछित फल होय॥

|| दोहा ||
सरस्वती माता सुनो, कर दो कृपा अपार।
विद्या-बुद्धि देहु हमें, मिटे अज्ञान अंधकार॥
`;

  const englishChalisa = `
॥ Shri Saraswati Chalisa ॥

|| Doha ||
I bow to Goddess Saraswati, O giver of wisdom and voice.
Bless us with intellect, knowledge, and make our life rejoice.

|| Chaupai ||
Glory to you, O Sharada Devi, bestower of divine learning.
Increase my wisdom and brilliance; keep my intellect ever burning.

Clad in white, holding the veena, with a garland in your hand,
You sit on a lotus throne, crowned and ever so grand.

Reside in my heart always, bless me day and night.
You gave light to the ignorant, made their intellect bright.

Sages and saints serve you, O divine voice of Brahma.
Shiva and Vishnu meditate on you, Narada chants your mantra.

Without you, knowledge cannot arise, you light the mind's dark place.
Whoever surrenders to your feet is saved by your grace.

You sweeten speech, remove impurity, and guide righteous tone.
You teach music and divine art, giving rhythm, scale, and tone.

The Vedas, Puranas, and sacred texts came through your grace.
You are the source of learning, mother of the human race.

In Sharadiya Navratri, you’re worshiped with joy and love.
You bless even the dull-minded from the divine realms above.

Whoever recites this Chalisa daily shall earn your sacred grace.
Says Kripa Das: “O Mother, fulfill every wish and embrace.”

|| Doha ||
Listen, Mother Saraswati, bless us with endless light.
Give us wisdom and learning, and remove ignorance and fright.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-100 to-rose-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/SaraswatiMataChalisha.jpg" // Update this path to your image
            alt="Maa Saraswati - Goddess of Wisdom and Music"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-pink-200 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-pink-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री सरस्वती चालीसा" : "Shri Saraswati Chalisa"}
        </h1>
      </div>

      {/* Chalisa Text Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-pink-200
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

export default SaraswatiJiChalisha;
