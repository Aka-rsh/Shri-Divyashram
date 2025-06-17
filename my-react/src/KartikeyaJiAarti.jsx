import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const KartikeyaJiAarti = ({ language }) => {
  const isHindi = language === "HI";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Image aligned to top, cropping from bottom */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/*
            Key Change: object-position-top ensures the top of the image is always visible.
            The image will be cropped from the bottom if the banner is shorter than the image.
          */}
          <img
            src="./Lord/KartikeyaAarti.jpg" // Confirm this path is correct for your 1273x1295px image
            alt="Lord Kartikeya, Son of Shiva and Parvati, divine warrior and protector."
            className="object-cover object-top w-full h-full filter brightness-90"
          />
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-100 via-transparent to-transparent opacity-90"></div>

        {/* Title - Centered, responsive font size, and subtle animation */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-800 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री कार्तिकेय जी की आरती" : "Aarti of Shri Kartikeya Ji"}
        </h1>
      </div>

      {/* Aarti Text Section - Remains the same */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-blue-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-700">
            {isHindi ? (
`जय देव जय देव
कार्तिक स्वामी देवा।
शिवसुत सुंदर रूपा
मुक्ति का तू है मेवा॥ जय...

शक्ति के तू पुत्र महाबली,
मयूर वाहन प्यारा।
सात मुखों से ज्ञान बरसाए,
दुष्ट हरण विधि न्यारा॥ जय...

गंगा के तू पालक,
पार्वती के ललना।
वेद पुराणों में वर्णित,
तू तेजस्वी भगवना॥ जय...

भक्तों पर तू दया करे,
शत्रुओं का नाश करे।
सिंह समान तू गर्जे,
भय हर हरष बढ़ावे॥ जय...

आरती जो जन गावें,
मनवांछित फल पावें।
मंगलमूर्ति कार्तिकेय,
जीवन सफल बनावे॥ जय...`
            ) : (
`Jai Dev Jai Dev,
O Lord Kartikeya.
Beautiful son of Shiva,
You are the fruit of liberation. Jai...

Mighty son of Shakti,
Beloved peacock rider.
You shower knowledge from seven faces,
Your way of destroying evil is unique. Jai...

You are the guardian of Ganga,
The dear son of Parvati.
Described in Vedas and Puranas,
You are the radiant divine one. Jai...

You show mercy to devotees,
You destroy enemies.
You roar like a lion,
Dispelling fear and increasing joy. Jai...

Those who sing your Aarti,
Attain their heart's desires.
O auspicious Kartikeya,
You make life successful. Jai...`
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

export default KartikeyaJiAarti;