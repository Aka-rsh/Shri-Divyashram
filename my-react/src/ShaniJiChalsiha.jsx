import React from 'react';
import Navbar from './Navbar'; // Assumes a shared Navbar component

const ShaniJiChalisha = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री शनि चालीसा ॥

|| दोहा ||
नमो नमः श्री शनि देव, दीनन के हितकारी।
सुनि अरज विनय हमारी, करहु कृपा भिखारी॥

|| चौपाई ||
जय श्री शनि दयालु महिमा, अपरम्पार।
त्रिभुवन में विख्यात, करहु सब पर उपकार॥

काला वसन धरें तन शोभित, नील मुकुट सिर छाय।
गदा, धनुष, त्रिशूल कर, धरी दृष्टि कर भय॥

जन्मे छठे रवि के घर में, माता छाया नाम।
सूर्य पुत्र कहलायें, जगत करें जयगान॥

शनैश्चर जब रुष्ट हों, दुख देते अघ भारी।
राजा हो या रंक सब पर, तासु दृष्टि विकारी॥

कोई न बच सके प्रभाव से, नवग्रह में बलशाली।
कृपा करो प्रभु शनिदेव, दुख हरहु नाथ निराली॥

नर हो या नारी जो कोई, सुमिरन कर ले तेरा।
शनि कृपा कर दुर्भाग्य से, बदल दे भाग्य सारा॥

कर्मों का फल सबको देते, तटस्थ न्याय अधिकारी।
सच्चे मन से जो भजें, जीवन हो जाए सुखकारी॥

तेल अर्पण करें शनिवारा, मंत्र जपे मन लाई।
भूत, प्रेत, पीड़ा सब हर, भक्ति सच्ची पाई॥

जो शनि चालीसा पढ़े, ध्यान धरे मन मांही।
कष्ट कठिन सब दूर हों, सुख संपत्ति पाई॥

|| दोहा ||
कृपा करो श्री शनि देव, दया करो अब कीजै।
भक्त तुम्हारा ‘कृपा’ कहे, शरण तुम्हारी लीजै॥
`;

  const englishChalisa = `
॥ Shri Shani Chalisa ॥

|| Doha ||
Salutations to you, Lord Shani Dev, the helper of the helpless.
Hear our humble prayer, show mercy to your supplicants.

|| Chaupai ||
Victory to merciful Lord Shani, whose greatness has no end.
You are known in all three worlds; may you bestow blessings on all.

Clad in black robes, your body shines; a blue crown rests on your head.
You carry a mace, bow, and trident—your gaze alone brings fear.

Born on the sixth day in the house of Surya, to Mother Chhaya by name.
You are known as the son of the Sun; the world sings your fame.

When angered, you bring misfortune heavy, pain to both rich and poor.
No one escapes your stern gaze; your power is immense and sure.

None can avoid your mighty effect, strongest among the Navagraha.
Have mercy, O Shani Dev, remove our suffering, O unique Lord.

Man or woman, whoever remembers you with a pure and faithful heart,
You change their fate, Shani Dev, and remove the misfortune part.

You give just rewards for deeds; you're fair and deeply wise.
One who prays with pure devotion finds their troubles minimized.

Offer oil on Saturdays, chant your mantra with focus true.
Ghosts, spirits, and ailments flee—the power of devotion is due.

Whoever recites this Shani Chalisa and meditates with heart's intent,
Will see hardships disappear and receive peace and contentment.

|| Doha ||
Have mercy, O Lord Shani Dev, show compassion now, we pray.
Says your servant "Kripa": in your shelter, we humbly stay.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-slate-200 to-blue-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/ShaniJiAarti.jpg" // Replace with your Shani Dev image path
            alt="Shri Shani Dev - Lord of Justice and Karma"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-blue-200 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री शनि चालीसा" : "Shri Shani Chalisa"}
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

export default ShaniJiChalisha;
