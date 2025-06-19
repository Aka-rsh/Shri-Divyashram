import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const GaneshaJiAarti = ({ language }) => {
  const isHindi = language === "HI"; // Assuming "HI" will cover Marathi for Aarti text

  // Marathi Aarti Text
  const marathiAarti = `
सुखकर्ता दुखहर्ता
वार्ता विघ्नांची
नुरवी पुरवी प्रेम कृपा जयाची
सर्वांगी सुंदर उटी शेंदुराची
कंठी झळके माळ मुक्ताफळांची ॥ १ ॥

जय देव जय देव
जय मंगलमूर्ती
दर्शनमात्रे मन कामना पुरती ॥ धृ ॥

रत्नखचित फरा तुझ गौरीकुमरा
चंदनाची उटी कुंकुम केशरा
हीरजडित मुकुट शोभतो बरा
रुणझुणती नूपुरे चरणी घागरिया ॥ २ ॥

लंबोदर पीळवंद
चरणी राजेश्र्वरी
पुत्र तू भवानीचा
वरदविनायक त्रिनयनी ॥ ३ ॥

दु:खविनाशन मंगल करण
जयजय स्वामी
मंगल मूर्ती मोरया
जय देव जय देव ॥ ४ ॥
`;

  // English Translation of the Aarti
  const englishAarti = `
O remover of sorrows, bestower of happiness,
You quell all obstacles.
Your grace fills us with love.
Your entire body is beautifully smeared with vermilion,
And around Your neck shines a garland of pearls. || 1 ||

Victory to the Lord, victory to the Lord,
Victory to the auspicious one!
Merely by Your sight, all desires are fulfilled. || Chorus ||

O son of Gauri, Your forehead is studded with jewels,
Adorned with sandalwood paste, saffron, and vermilion.
Your diamond-studded crown shines beautifully,
Anklets with tiny bells jingle at Your feet. || 2 ||

With a large belly, and a graceful stance,
O Lord of all, with feet like royalty,
You are the son of Bhavani,
The boon-bestowing Vinayaka with three eyes. || 3 ||

Destroyer of sorrow, cause of all auspiciousness,
Hail, hail Lord!
O auspicious Murti, Morya!
Victory to the Lord, victory to the Lord! || 4 ||
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-100 to-yellow-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Engaging and responsive */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/* Ensure this path points to your Ganesha image */}
          <img
            src="./Lord/GaneshJiAarti.jpg" // **Update this path to your Ganesha Ji image**
            alt="Lord Ganesha, the remover of obstacles, adorned with a garland."
            className="object-cover w-full h-full filter brightness-90"
          />
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-100 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-800 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "सुखकर्ता दुखहर्ता श्री गणेश आरती" : "Sukhkarta Dukhharta Shri Ganesha Aarti"}
        </h1>
      </div>

      {/* Aarti Text Section - Clean, readable, and interactive */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-red-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-700">
            {isHindi ? marathiAarti : englishAarti}
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

export default GaneshaJiAarti;