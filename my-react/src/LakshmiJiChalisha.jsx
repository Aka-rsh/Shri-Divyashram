import React from 'react';
import Navbar from './Navbar'; // Reuse your existing Navbar

const LakshmiChalisa = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री लक्ष्मी चालीसा ॥

|| दोहा ||
माता लक्ष्मी करि कृपा, शुभ मंगल गुण दाय।
कहत अयोध्या दास यह, हरहु विपत्ति दुःख भय॥

|| चौपाई ||
जय लक्ष्मी माता, माया ज्योति रूपा।
सब जग की पालक, जगत हित रूपा॥

चतुर्भुजा रूप विराजत, धन धान्य की दाता।
कमल आसन ऊपर बिराजत, श्री विष्णु की भ्राता॥

स्वर्णमयी सजे शोभा भारी, सागर मंथन में अवतारी।
भक्तन हित कारज बनावे, संकट हरि सुख सुफल देवे॥

नर नारी जब ध्यान लगावें, लक्ष्मी कृपा सदा बरसावें।
जो जन सच्चे भाव से गावे, संकट हर हरषित फल पावे॥

कुबेर साथ कोष में बैठी, तिजोरी में सदा सन्निहित रहती।
सकल सम्पत्ति तुम बिनु नाहीं, दरिद्रता को दूर कराहीं॥

धूप दीप नैवेद्य चढ़ावें, श्रद्धा से जो पाठ सुनावें।
वह घर दरिद्रता मिट जावे, लक्ष्मी वास सदा उहां पावे॥

शुभ मंगल सब काम सवारे, विपत्ति दोष न कोई सतावे।
भक्त तेरे दुःख दरिद्र हरें, घर में सदा सुख-संपत्ति भरें॥

जो चालीसा पढ़े मन लाई, लक्ष्मी कृपा सदा उर समाई।
अष्ट सिद्धि नव निधि की दाता, धन वैभव सदा बड़ाता॥

अयोध्यादास करे विनती, सुन लक्ष्मी ममता विनती।
करो कृपा मुझ पर हे माता, सदा रहो उर मेरे भ्राता॥
`;

  const englishChalisa = `
॥ Shri Lakshmi Chalisa ॥

|| Doha ||
O Mother Lakshmi, bestow your grace, bring auspiciousness and virtue.
Says Ayodhya Das: Remove my fears, sorrows, and troubles.

|| Chaupai ||
Glory to you, Mother Lakshmi, embodiment of divine light and illusion.
You are the nourisher of the world, working for the benefit of creation.

You shine in a four-armed form, the giver of wealth and prosperity.
Seated on a lotus, you are the beloved of Lord Vishnu.

Adorned in gold, your beauty is divine; you emerged during the churning of the ocean.
You fulfill the tasks of your devotees, removing their hardships and granting success.

Men and women who meditate upon you receive your blessings continuously.
Those who chant your praises with pure devotion are freed from suffering and blessed with joy.

You sit with Kubera in the treasury; you reside where faith and truth dwell.
All wealth is yours to give; you remove poverty from those who serve you.

Those who offer incense, lamps, and food, and recite this Chalisa with devotion,
Find poverty removed from their home, and your presence always blessing them.

You fulfill all auspicious tasks; no misfortune can affect your devotee.
You remove distress and fill homes with happiness and prosperity.

Whoever reads this Chalisa with a focused mind receives Lakshmi's eternal blessings.
You grant eight siddhis and nine treasures; you constantly increase wealth and splendor.

Ayodhya Das offers his prayer, O compassionate Mother Lakshmi.
Please show your grace upon me always; remain forever in my heart and home.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-100 to-red-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/MahaLakshmiJiChalisha.jpg" // <-- Update this with actual image path
            alt="Goddess Lakshmi - the bringer of prosperity and wealth"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-red-100 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री लक्ष्मी चालीसा" : "Shri Lakshmi Chalisa"}
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

export default LakshmiChalisa;
