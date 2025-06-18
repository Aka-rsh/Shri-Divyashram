import React from 'react';
import Navbar from './Navbar';

const RadhaJiChalisha = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री राधा चालीसा ॥

|| दोहा ||
वन्दे राधा चरण को, जो प्रेम स्वरूपा।
भक्ति, शांति, माधुर्य की, जो साक्षात रूपा॥

|| चौपाई ||
जय राधे राधे कहिए, मन में आनंद समाय।
श्याम बिना राधा नहीं, राधा बिना श्याम न भाय॥

वृषभानु तनया रानी, प्रेम भक्ति की खान।
श्यामसुंदर की प्राणप्रिया, ब्रज की रानी जान॥

कमल समान नयन तव, मधुर मुस्कान विशाल।
रूप लावण्य की सागर, करुणा की धार विशाल॥

मोर मुकुट सिर शोभित, गले पुष्प की माला।
ललित संग गोपीन संग, करती प्रेम रस लीला॥

भक्तों के मन को हरती, करुणा की तू धारा।
तेरे नाम जप से मिलती, भक्ति भाव की धारा॥

मंगल गुण सब में वासे, सबको तू प्रिय लागे।
तेरा नाम जपें जो नित, भवसागर तर भागे॥

राधा नाम जो मुख में राखे, हर दुख से वह भागे।
राधा के दर पर जो झुके, वह भव से मुक्ति पावे॥

जो नर राधा चालीसा पढ़े, भाव सनेह लाए।
राधा रानी कृपा करें, प्रेम रस वो पाए॥

|| दोहा ||
राधा रानी कृपा करो, जीवन सुखमय होय।
‘कृपा’ कहे यह चालीसा, पाठ करें जन जोय॥
`;

  const englishChalisa = `
॥ Shri Radha Chalisa ॥

|| Doha ||
I bow to the feet of Radha, the embodiment of divine love.
She is the form of devotion, peace, and sweet grace from above.

|| Chaupai ||
Chant “Radhe Radhe” with joy, and peace will fill your soul.
Without Shyam there’s no Radha, without Radha, Shyam’s not whole.

Princess of Vrishbhanu, you are the treasure of devotion.
Beloved of Shyam Sundar, queen of Braj’s emotion.

Your lotus eyes are divine, your gentle smile is grand.
You are the ocean of beauty, with mercy in your hand.

Peacock feathers crown your Lord, garlands adorn your throat.
With Lalita and other gopis, you in love’s play devote.

You bring joy to your devotees, compassion you bestow.
By chanting your sacred name, love and faith will grow.

All virtues dwell within you, you are dear to everyone.
Those who daily chant your name, find deliverance begun.

One who keeps Radha's name on lips, from sorrow will be free.
Those who bow at Radha’s door, attain true liberty.

Those who read this Chalisa with heartfelt devotion and love,
Will receive your grace, O Radha, and blessings from above.

|| Doha ||
O Radha Rani, show your grace and bless our mortal way.
Says Kripa: He who chants this gains joy every day.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-100 to-pink-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/RadhaJi.jpg" // Replace with your Radha Rani image path
            alt="Radha Rani - Embodiment of Love and Devotion"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-pink-200 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-pink-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री राधा चालीसा" : "Shri Radha Chalisa"}
        </h1>
      </div>

      {/* Chalisa Section */}
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

export default RadhaJiChalisha;
