import React from 'react';
import Navbar from './Navbar'; // Reuse your existing responsive Navbar

const SantoshiJiChalisa = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ संतोषी माता चालीसा ॥

|| दोहा ||
जय संतोषी माता, संकटों की हार।
संतोषी भव सुकून की, रखवाली संसार॥

|| चौपाई ||
तुम हो दया की मूरत, करुणा के सागर।
तुम्हारी कृपा से मिटे, जीवन के सब भार।

संतोष का भाव सदा, भर दे मन के द्वार।
जो पढ़े तुम्हारी चालीसा, उसका होता उद्धार।

प्रसन्न हो कर माता, देतीं सुख-समृद्धि।
सभी प्रकार के कष्टों से, करतीं रक्षा भक्ति।

आशीर्वाद तुम्हारा, बना जीवन धन्य।
संतोषी माता की भक्ति से, मिले सुकून अन्न।

अयोध्या दास कहे प्रभु, कृपा करो मुझ पर।
संतोषी माता की महिमा, अमर रहे चिरपर।`;

  const englishChalisa = `
॥ Santoshi Mata Chalisa ॥

|| Doha ||
Hail Santoshi Mata, conqueror of troubles,
Guardian of peace and contentment in the world.

|| Chaupai ||
You are the embodiment of mercy, ocean of compassion,
By your grace, all burdens of life are removed.

Fill the heart’s door with the feeling of contentment,
Whoever recites your Chalisa finds salvation.

Pleased, you grant happiness and prosperity,
Protecting devotees from every kind of distress.

Your blessings make life blessed,
Through devotion to Santoshi Mata, peace is attained.

Ayodhya Das says, O Lord, have mercy on me,
May the glory of Santoshi Mata remain forever.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-red-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/SantoshiMataChalisha.jpg" // <-- Update this with the correct image path for Santoshi Ji
            alt="Santoshi Mata - goddess of satisfaction and contentment"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-orange-100 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "संतोषी माता चालीसा" : "Santoshi Mata Chalisa"}
        </h1>
      </div>

      {/* Chalisa Text Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-red-200
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

export default SantoshiJiChalisa;
