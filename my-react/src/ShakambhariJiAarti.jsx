import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const ShakambhariJiAarti = ({ language }) => {
  const isHindi = language === "HI";

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Image aligned to top, cropping from bottom */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/*
            Key Change: object-position-top ensures the top of the image is always visible.
            The image will be cropped from the bottom if the banner is shorter than the image.
          */}
          <img
            src="./Lord/ShakambhariAarti.jpg" // Confirm this path is correct for your image
            alt="Maa Shakambhari Devi, Goddess of Vegetables and Grains, provider of sustenance."
            className="object-cover object-top w-full h-full filter brightness-90"
          />
        </div>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-100 via-transparent to-transparent opacity-90"></div>

        {/* Title - Centered, responsive font size, and subtle animation */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-800 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "दिव्य माँ शाकंभरी जी की आरती" : "Divine Aarti of Maa Shakambhari"}
        </h1>
      </div>

      {/* Aarti Text Section - Remains the same */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-yellow-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-700">
            {isHindi ? (
/* Aarti text... */
`जय अम्बे शाकंभरी माता,
मया करो भवसागर ताता।
सबकी पीड़ा हरने वाली,
दीनन की रक्षा करने वाली॥ जय...

रक्त चंदन तिलक लगाए,
शोभा से तू सदा सजाए।
भक्तों पर तू दया दिखाती,
अन्नपूर्णा रूप बतलाती॥ जय...

शाक सब्ज़ी फल की धारा,
संत जनों को अति प्यारा।
काया को तू तृप्त बनावे,
भूख-प्यास सब दूर हटावे॥ जय...

अष्टभुजा धारी तू भवानी,
करुणा की है तू कृपानी।
माँ शाकंभरी तू है न्यारी,
भक्तों की संकट टारी॥ जय...

जो भी तेरा ध्यान लगाते,
मनवांछित फल वो पाते।
आरती जो नित्य सुनावे,
माँ उसे कभी न तजावे॥ जय...`
            ) : (
/* Aarti text... */
`Jai Ambe Shakambhari Mata,
Please help us cross this worldly ocean.
You remove everyone's suffering,
Protector of the helpless.

Wearing red sandal tilak,
Always adorned in divine beauty.
You show compassion to your devotees,
Appearing in the form of Annapurna.

A stream of vegetables, fruits, and greens,
Most beloved by saints.
You nourish the body,
And remove hunger and thirst.

You are eight-armed Bhavani,
Full of mercy and grace.
Mother Shakambhari, you are unique,
You remove all troubles of your devotees.

Whoever meditates on you,
Receives their heart’s desires.
Those who recite your Aarti daily,
You never abandon them.`
            )}
          </pre>
        </div>
      </div>

      <footer className="text-center py-8 text-gray-600 text-sm">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ShakambhariJiAarti;