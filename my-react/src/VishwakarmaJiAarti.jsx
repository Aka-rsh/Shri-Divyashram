import React from 'react';
import Navbar from './Navbar';

const VishwakarmaJiAarti = ({ language }) => {
  const isHindi = language === "HI";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-teal-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Image centered, cropping from top and bottom */}
      <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] w-full overflow-hidden shadow-xl"> {/* Adjusted height for subtle cropping */}
        <div className="w-full h-full">
          <img
            src="./Lord/VishwakarmaAarti.jpg" // Confirm this path is correct
            alt="Lord Vishwakarma, the divine architect and engineer, holding tools of creation."
            className="object-cover object-center w-full h-full filter brightness-90" // object-center is key
          />
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-800 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री विश्वकर्मा जी की आरती" : "Aarti of Shri Vishwakarma Ji"}
        </h1>
      </div>

      {/* Aarti Text Section - Remains the same */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-blue-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-700">
            {isHindi ? (
`जय श्री विश्वकर्मा भगवान, कृपा करो हम पर।
कृपा करो हम पर, संकट दारिद्र दूर करो ॥ जय...

सृष्टि रचाई अपने मन से,
ज्ञान का सागर कहो जिसे।
देव शिल्पी नाम तुम्हारा,
ब्रह्ma विष्णु से न्यारा ॥ जय...

तुमने ही रथ बनाए,
तुमने ही शस्त्र चलाए।
इंद्र का बना दीवालय,
स्वर्ग सा सुंदर थालय ॥ जय...

द्वारिका पुरी बनाई,
सत्ययुग की कला दिखाई।
हर युग में तुम आए,
धर्म की राह दिखाए ॥ जय...

सभी कार्य सिद्ध करो,
भक्तों का उद्धार करो।
जय जय श्री विश्वकर्मा,
सबको अपना प्यार दो ॥ जय...`
            ) : (
`Hail Shri Vishwakarma Bhagwan, have mercy on us.
Have mercy on us, remove troubles and poverty. Jai...

You created the universe with your mind,
A boundless ocean of knowledge.
Your name is the Divine Architect,
Distinct from Brahma and Vishnu. Jai...

You crafted the chariots,
You wielded the weapons.
You built Indra's divine abode,
A beautiful dwelling like heaven. Jai...

You built the city of Dwarka,
Showcasing the art of Satya Yuga.
You appeared in every era,
Showing the path of Dharma. Jai...

Fulfill all our endeavors,
Redeem your devotees.
Hail, hail Shri Vishwakarma,
Grant your love to everyone. Jai...`
            )}
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

export default VishwakarmaJiAarti;