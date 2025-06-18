import React from 'react';
import Navbar from './Navbar';

const NavgrahChalisha = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री नवग्रह चालीसा ॥

|| दोहा ||
नमन करूँ नवग्रह को, श्रद्धा सहित विचार।
जो जन भाव सहित जपे, होई सकल दुख हार॥

|| चौपाई ||
जय नवग्रह मय सविता देवा। शनि, बुध, मंगल, गुरु सेवा॥
राहु-केतु अरु चंद्र, भानु। इनकी कृपा न टारे प्राण॥

सूर्य देव दिन के अधिकारी। तेजोमय स्वरूप तुम्हारी॥
किरणों से जग में उजियारा। जीवन का संजीवन धारा॥

चंद्र शीतल मन को भाए। शांति, प्रेम, सौम्यता लाए॥
सोमवार को पूजन पावे। मनवांछित फल मानव पावे॥

मंगल रक्त वर्ण बलकारी। शत्रु विनाशक वीर महारी॥
कर्ज, रोग सब दूर करावे। हनुमान संग पूजा भावे॥

बुध विद्या का दाता ज्ञानी। चतुर, नीति, वाणी निभानी॥
बुधवार को पूजन करिए। सर्व ज्ञान का लाभ लीजिए॥

गुरु बृहस्पति ज्ञान के सागर। धन वैभव के पूर्ण उपकारक॥
गुरुवार दिन ध्यान लगावै। शुभ बुद्धि वह जन पावै॥

शुक्र प्रेम, कला का ज्ञाता। सौंदर्य, भोगों का दाता॥
शुक्रवार को पूजन कीजै। जीवन में सुख समृद्धि लीजै॥

शनि क्रूर पर धर्म रक्षक। कर्म अनुसार फल के सृजक॥
शनिवार को ध्यान लगावै। संकट सब जन का हटावै॥

राहु केतु छाया स्वरूपा। ग्रह दोष से करें परिपूरणा॥
उपाय, मन्त्र, जप से भागे। साधक को शुभ फल लागे॥

जो यह चालीसा पढ़े नित। नाशे दोष, पावै ऋत॥
‘कृपा’ कहे नवग्रह नाथा। करिए सदा कृपा में साथा॥

|| दोहा ||
नवग्रह देव कृपा करो, जीवन हो उजियार।
सकल दोष सब नाश हों, रहे न कोई विकार॥
`;

  const englishChalisa = `
॥ Shri Navgrah Chalisa ॥

|| Doha ||
I bow with faith to the nine divine lights, guiding our fates true.
Who chants with devotion deep, will have troubles few.

|| Chaupai ||
Praise to the Nine Celestial Gods – Sun, Saturn, Mercury so wise.
Mars, Jupiter, Moon and Venus, with Rahu and Ketu in skies.

Surya Dev, the lord of day, radiant, bright, divine.
Your golden rays spread through the world, giving life a shine.

Chandra brings a calming mind, love and peace to grow.
Worshiped on the Monday morn, blessings begin to flow.

Mangal, red and fierce with might, destroyer of every foe.
Removes disease and debt alike, worship with Hanuman so.

Budh is the lord of speech and wit, bestower of wisdom bright.
Worship him on Wednesdays pure, and intellect will ignite.

Guru, the Jupiter, ocean of knowledge, bestower of wealth and grace.
Think of him on Thursdays bright, and blessings will embrace.

Shukra brings love and art divine, beauty and pleasures flow.
Worship on a Friday morn, and fortune will surely grow.

Shani rules by karmic law, feared yet just and strong.
Saturday is his sacred day – he punishes all wrong.

Rahu and Ketu, shadowy nodes, cause of mystery and fear.
Appeased with chants and penance true, their blessings draw near.

Who recites this Chalisa daily, with pure and steady mind,
All planetary faults are erased – fortune and peace they find.

Says Kripa: “O Lords of Light, be ever kind and near.
Protect us from all cosmic harm, and keep our path clear.”

|| Doha ||
O Lords of the Nine Celestial Planets, bring light to life’s course.
Destroy all doshas and flaws, and keep us on the righteous force.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-yellow-100 to-orange-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/NavgrahChalisha.jpg" // Replace with your Navgrah image
            alt="Navgrah - The Nine Celestial Deities"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-yellow-300 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री नवग्रह चालीसा" : "Shri Navgrah Chalisa"}
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

export default NavgrahChalisha;
