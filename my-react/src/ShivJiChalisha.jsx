import React from 'react';
import Navbar from './Navbar'; // Ensure this is your responsive navbar

const ShivJiChalisa = ({ language }) => {
  const isHindi = language === "HI";

  const hindiChalisa = `
॥ श्री शिव चालीसा ॥

|| दोहा ||
श्री गणेश गिरिजा सुवन, मंगल मूल सुजान।
कहत अयोध्यादास तुम, देहु अभय वरदान॥

|| चौपाई ||
जय गिरिजा पति दीनदयाला। सदा करत सन्तन प्रतिपाला॥
भाल चन्द्रमा सोहत नीके। कानन कुण्डल नागफनी के॥

अंग गौर शिर गंग बहाये। मुण्डमाल तन छार लगाये॥
वस्त्र खाल बाघम्बर सोहे। छवि को देख नाग मन मोहे॥

मैना मातु की तुम दुहिता। अमर बिरंचि राखी है रिता॥
काल कंटक मुण्ड माली। धरी कालिका रूप काली॥

दक्ष यज्ञ विनाशन कर्ता। पुण्यदायक संकट हरता॥
त्रिपुरारी तुम अति बलवाना। सन्तन के प्रभु सदा समाना॥

कनक कसिपत कुण्डल सोहे। नाग यज्ञ उपवीत के जोहे॥
साँड सवारी करत भुज भारी। तिगम तेज धर त्रिनयन धारी॥

अंधक मर्दन कर ही लीजै। भूत प्रेत संतन पर खीजै॥
प्रभु दया करि मैं राखो लाज। जन के संकट हरहु महाराज॥

कर्पूरगौर आरति गावत। सुर मुनि जन मन हरषि लावत॥
श्रद्धा भक्ति बढ़े मन माहीं। जय जय जय शिव शम्भू सदा ही॥

जो यह चालीसा गावे। अंत समय शिवपुर पावे॥
अयोध्यादास हरषि उचारा। कृपा करहु हे शिव दुलारा॥
`;

  const englishChalisa = `
॥ Shri Shiv Chalisa ॥

|| Doha ||
O son of Girija and remover of obstacles, you are the source of all welfare and wisdom.
Says Ayodhya Das: O Lord, grant me fearlessness and your divine blessing.

|| Chaupai ||
Glory to you, Lord of Parvati, merciful and kind, you are always the protector of saints.
The crescent moon shines beautifully on your forehead; your ears adorned with serpents.

Your body glows white, the Ganga flows from your hair; you wear a garland of skulls and ashes on your body.
You wear a tiger skin; your divine form enchants even serpents.

You are the daughter of Maina (Parvati's) consort; Brahma himself could not fully describe your glory.
Adorned with skulls and serpents, you take the fierce form of Kali.

You destroyed Daksha’s sacrifice and remove the troubles of your devotees.
You are Tripurari, destroyer of the three cities, strong and always close to your saints.

Golden complexion with shining earrings, you wear a serpent sacred thread.
You ride a bull, wielding mighty arms, and with three eyes radiate intense power.

You slay demons like Andhaka, and spirits and ghosts flee at your command.
O Lord, protect my dignity and remove the misfortunes of your humble servant.

Your fair complexion shines like camphor; the gods and sages sing your praises with joy.
May devotion and faith grow within us—victory, victory, victory to Lord Shambhu!

Whoever chants this Chalisa shall attain Shivpuri (Shiva’s abode) at life’s end.
Says Ayodhya Das with great delight: O beloved Shiva, please shower your grace.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-indigo-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          <img
            src="./Lord/ShivJiAarti.jpg" // <-- Update this path to actual image
            alt="Lord Shiva - the destroyer and transformer"
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-indigo-200 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-900 drop-shadow-lg
                       bg-white/80 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री शिव चालीसा" : "Shri Shiv Chalisa"}
        </h1>
      </div>

      {/* Chalisa Text Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-indigo-200
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

export default ShivJiChalisa;
