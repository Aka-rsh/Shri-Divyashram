import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const ShivJiAarti = ({ language }) => {
  const isHindi = language === "HI";

  // Hindi Aarti Text for Shri Shiv Omkara
  const hindiAarti = `
ॐ जय शिव ओंकारा, स्वामी जय शिव ओंकारा।
ब्रह्मा, विष्णु, सदाशिव, अर्द्धांगी धारा॥
ॐ जय शिव ओंकारा...

एकानन चारि मुख त्रिनयन,
अंग हीन कर सारा।
स्वामी अंग हीन कर सारा॥

त्रिगुण स्वामी कीर्ति निधाना,
जगपालन कर्ता।
स्वामी जगपालन कर्ता॥

अकाल मूरत अनूपा,
जग के हितकारी।
स्वामी जग के हितकारी॥

शिव योगी तू महान,
ज्ञान रूप सुखकारी।
स्वामी ज्ञान रूप सुखकारी॥

आरती करत अनूपा,
नंदि गणेशा।
स्वामी नंदि गणेशा॥
`;

  // English Translation of the Aarti
  const englishAarti = `
Om Jai Shiv Omkara, Swami Jai Shiv Omkara.
Brahma, Vishnu, Sadashiva, You hold the half-body of Devi.
Om Jai Shiv Omkara...

One-faced, four-faced, three-eyed,
You are beyond physical form.
Swami, You are beyond physical form.

Lord of the three Gunas, treasure of fame,
The protector of the world.
Swami, the protector of the world.

Immortal and incomparable form,
Benefactor of the world.
Swami, benefactor of the world.

Shiva, the great Yogi,
The embodiment of knowledge and happiness.
Swami, the embodiment of knowledge and happiness.

Aarti is performed, O incomparable One,
By Nandi and Ganesha.
Swami, by Nandi and Ganesha.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Engaging and responsive */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/* Update this path to your Shiv Ji image */}
          <img
            src="./Lord/ShivJiAarti.jpg" // **UPDATE THIS PATH TO YOUR SHIV JI IMAGE**
            alt="Lord Shiva in a meditative or cosmic form."
            className="object-cover w-full h-full filter brightness-90"
          />
        </div>

        {/* Overlay for text readability - adjusted for Shiva colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated - adjusted for Shiva colors */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "ॐ जय शिव ओंकारा" : "Om Jai Shiv Omkara"}
        </h1>
      </div>

      {/* Aarti Text Section - Clean, readable, and interactive */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-gray-300
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

export default ShivJiAarti;