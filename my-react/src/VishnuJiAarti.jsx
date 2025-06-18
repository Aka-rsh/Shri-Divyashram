import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const VishnuJiAarti = ({ language }) => {
  const isHindi = language === "HI";

  // Hindi Aarti Text for Shri Vishnu Bhagwan
  const hindiAarti = `
आरती श्री विष्णु भगवान की,
जो कल्याण करें भक्त जान की।

चतुर्भुज धारी शंख चक्रधारी,
मुकुट मुकुटन सिर पर बारी।

पीताम्बर तन, वनमाला प्यारी,
कमल निवास करें सुखकारी।

गरुड़ सवारी कर चतुराई,
भक्तों के संकट दूर भगाई।

लक्ष्मीपति तुम धन के दाता,
सुदर्शन चक्र चले दुष्ट घाता।

शेषनाग पर करे विश्राम,
भव-सागर से करो परित्राण।

भक्ति भाव से जो जन गावे,
मनवांछित फल वह जन पावे।

आरती श्री विष्णु भगवान की,
जो कल्याण करें भक्त जान की।
`;

  // English Translation of the Aarti
  const englishAarti = `
Perform the Aarti of Shri Vishnu Bhagwan,
Who brings welfare to His devotees.

He holds four arms, bearing a conch and a discus,
A crown adorned majestically on His head.

His body draped in yellow robes, a lovely forest garland,
He resides in the lotus, bestowing happiness.

Riding Garuda with great skill,
He drives away the troubles of His devotees.

Lord of Lakshmi, You are the giver of wealth,
Your Sudarshan Chakra strikes down the wicked.

He rests upon Sheshnag,
Granting salvation from the ocean of existence.

Whoever sings this Aarti with devotion,
That person attains their desired fruit.

Perform the Aarti of Shri Vishnu Bhagwan,
Who brings welfare to His devotees.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-blue-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Engaging and responsive */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/* Update this path to your Vishnu Ji image */}
          <img
            src="./Lord/VishnuJiAarti.jpg" // **UPDATE THIS PATH TO YOUR VISHNU JI IMAGE**
            alt="Lord Vishnu, the preserver, resting on Sheshnag."
            style={{ objectPosition: 'top', width: '100%' }}
          />
        </div>

        {/* Overlay for text readability - adjusted for Vishnu colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-100 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated - adjusted for Vishnu colors */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-800 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "आरती श्री विष्णु भगवान की" : "Aarti Shri Vishnu Bhagwan Ki"}
        </h1>
      </div>

      {/* Aarti Text Section - Clean, readable, and interactive */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-blue-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-700">
            {isHindi ? hindiAarti : englishAarti}
          </pre>
        </div>
      </div>

      {/* Optional: Add a simple footer */}
      <footer className="text-center py-8 text-gray-600 text-sm">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default VishnuJiAarti;