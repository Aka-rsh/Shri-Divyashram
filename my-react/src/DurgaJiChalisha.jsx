import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const DurgaJiChalisa = ({ language }) => {
  const isHindi = language === "HI";

  // Full Hindi Durga Chalisa Text
  const hindiChalisa = `
॥ श्री दुर्गा चालीसा ॥

नमो नमो दुर्गे सुख करनी। नमो नमो अम्बे दुःख हरनी॥
निरंकार है ज्योति तुम्हारी। तिहुँ लोक फैली उजियारी॥

शशि ललाट मुख महा बिसाला। नेट्र लाल भृकुटि विकराला॥
रूप मातु को अधिक सुहावे। दरश करत जन अति सुख पावे॥

तुम संसार शक्ति लय कीना। पालन हेतु अन्न धन दीना॥
अन्नपूर्णा हुई जग पाला। तुम ही आदि सृष्टि जग माला॥

प्रलय काल सब नाशन हारी। तुम गौरी शिव शंकर प्यारी॥
शिव योगी तुम्हरे गुण गावें। ब्रह्मा विष्णु तुम्हें नित ध्यावें॥

रूप सरस्वती को तुम धारा। दे सुबुद्धि ऋषि मुनि उबारा॥
धर यो रूप नरसिंह को अम्बा। परगट भई फाड़कर खम्बा॥

रक्षा करि प्रह्लाद बचायो। हिरण्याक्ष को स्वर्ग पठायो॥
लक्ष्मी रूप धरो जग माहीं। श्री नारायण अंग समाहीं॥

क्षीरसिन्धु में करै बास। सुर-नर मुनि जन करै प्यास॥
दुर्गा रूप निरंतर ध्यावत। धीरज धारण करै सुख पावत॥

तुम ही दुर्गा दश प्रहर धारी। तुम ही सिंह वाहन सुखकारी॥
भेमलासुर नरहिं घेरो। तुम ही शांति रूप संहेरो॥

रानी रूप कर कालसूर मारा। रक्तबीज संहारे खारा॥
महिषासुर को मारत धारा। तुम ही विजया, शरण हमारी॥

शुम्भ-निशुम्भ को तुम मारे। मदु-कैटभ को संहारे॥
आदि अंत तुम ही बताओ। माया से सब जग को भुलाओ॥

शरणागत को सदा सहाय। दास तुलसी करे दुहाई॥
दुर्गा चालीसा जो कोई गावै। सब सुख भोग परम पद पावै॥

`;

  // Full English Translation of Durga Chalisa
  const englishChalisa = `
॥ Shri Durga Chalisa ॥

Salutations to you, O Durga, bestower of happiness; salutations to you, O Mother, remover of sorrow.
You are the formless light that spreads radiance across the three worlds.

Your forehead bears the moon; your face is vast and glorious. Your eyes are red with anger, and brows fearsome.
Your form is supremely beautiful, and those who see you are filled with bliss.

You are the energy that drives the universe. You provide food and wealth for its sustenance.
As Annapurna, you nourish the world. You are the primal source of creation.

At the time of dissolution, you are the destroyer. You are Gauri, beloved of Lord Shiva.
Shiva and sages chant your praises; Brahma and Vishnu meditate upon you.

You took the form of Saraswati to grant wisdom and liberate the sages.
As Narasimha, you tore apart the pillar and appeared to protect Prahlada.

You saved Prahlada and killed Hiranyaksha. You are present in the world as Lakshmi.
You reside in the ocean of milk and fulfill the prayers of gods and sages.

In your Durga form, constantly meditated upon, you grant patience and happiness.
You are Durga with ten arms, riding a lion, giver of joy.

When Bhimasura attacked, you destroyed him; you became the embodiment of peace and wrath alike.
You destroyed Raktabeej and slayed the fierce Kalasura; your victory is our refuge.

You vanquished Shumbha and Nishumbha, and defeated Madhu and Kaitabha.
You are the beginning and the end; through illusion, you bewilder the world.

You always help those who seek your shelter. Tulsidas seeks your mercy.
Whoever chants the Durga Chalisa will enjoy all pleasures and attain the supreme state.

`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-100 to-red-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/DurgaMataChalisha.jpg" // <<-- Update with actual image path
            alt="Goddess Durga - the embodiment of Shakti and protection"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-red-100 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री दुर्गा चालीसा" : "Shri Durga Chalisa"}
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

export default DurgaJiChalisa;
