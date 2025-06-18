import React from 'react';
import Navbar from './Navbar';

const ChamundaJiChalisha = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री चामुंडा चालीसा ॥

दोहा :  
जय चामुंडा माता, संकट हारी दाता।  
दुष्ट दलन कृपालु, जग की ज्योति साता॥  

चौपाई :  
शक्ति स्वरूपिणी माता, करुणा की मूरत।  
अश्वत्थामा संग्राम में, त्राहि त्राहि करती चीत्कार॥  

चामुंडा देवी महिमा, सुनि भक्तों के प्राण।  
दुष्टों का विनाश करें, त्रिभुवन की मान॥  

भूत प्रेत शत्रु नाशक, संकट हरने वाली।  
सिंह वाहन सुशोभित, निर्भय सर्वदलीय॥  

त्रिपुरा सुंदरी रूपिणी, महाकाली महादेवी।  
जो तेरा जाप करे माता, जीवन बने सुखकारी॥  

दोहा :  
जय चामुंडा माता, करुणा करहु हम पर।  
संकट से बचाओ हमें, भवसागर से तारो॥

`;

  const englishChalisa = `
॥ Shri Chamunda Chalisa ॥

Doha:  
Hail Chamunda Mata, giver who removes all troubles,  
Destroyer of evil, the light of the world!  

Chaupai:  
Mother, embodiment of power, symbol of compassion,  
In battle with evil, you cry out fiercely!  

Listen to the glory of Chamunda Devi, O devotees,  
She destroys demons and is revered across the three worlds.  

Destroyer of ghosts and enemies, remover of suffering,  
Seated on a lion, fearless protector of all beings!  

Tripura Sundari form, Mahakali, Great Goddess,  
Whoever chants your name, O Mother, life becomes blissful!  

Doha:  
Hail Chamunda Mata, show mercy upon us,  
Save us from troubles, and ferry us across the ocean of life!  
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-red-900 to-black text-white font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/ChamundajiChalisha.jpg" // Update path as needed
            alt="Chamunda Mata - Fierce form of Goddess Durga"
            className="object-cover w-full h-full filter brightness-75"
            style={{ objectPosition: 'center' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-600 drop-shadow-lg
                       bg-black/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री चामुंडा चालीसा" : "Shri Chamunda Chalisa"}
        </h1>
      </div>

      {/* Chalisa Text */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-black bg-opacity-80 p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-red-700
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-red-300">
            {isHindi ? hindiChalisa : englishChalisa}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ChamundaJiChalisha;
