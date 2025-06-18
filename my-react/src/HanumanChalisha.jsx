import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is a responsive component

const HanumanChalisha = ({ language }) => {
  const isHindi = language === "HI";

  // Full Hindi Chalisha Text
  const hindiChalisha = `
॥ श्री हनुमान चालीसा ॥

दोहा :
श्रीगुरु चरन सरोज रज, निज मनु मुकुरु सुधारि।
बरनउँ रघुबर बिमल जसु, जो दायकु फल चारि॥

बुद्धिहीन तनु जानिके, सुमिरौं पवन-कुमार।
बल बुद्धि बिद्या देहु मोहिं, हरहु कलेस बिकार॥

चौपाई :
जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥
राम दूत अतुलित बल धामा। अंजनि पुत्र पवनसुत नामा॥

महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥
कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥

हाथ बज्र औ ध्वजा बिराजै। काँधे मूँज जनेऊ साजै॥
संकर सुवन केसरी नंदन। तेज प्रताप महा जग बंदन॥

बिद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥
प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥

सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥
भीम रूप धरि असुर सँहारे। रामचंद्र के काज सँवारे॥

लाय सजीवन लखन जियाए। श्री रघुबीर हरषि उर लाए॥
रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥

सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कंठ लगावैं॥
सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥

जम कुबेर दिगपाल जहाँ ते। कबि कोबिद कहि सकैं कहाँ ते॥
तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥

तुम्हरो मंत्र बिभीषन माना। लंकेस्वर भए सब जग जाना॥
जुग सहस्र जोजन पर भानु। लील्यो ताहि मधुर फल जानू॥

प्रभु मुद्रिका मेलि मुख माहीं। जलधि लाँघि गए अचरज नाहीं॥
दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥

राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥
सब सुख लहै तुम्हारी सरना। तुम रच्छक काहू को डर ना॥

आपन तेज सम्हारो आपै। तीनों लोक हाँक तें काँपै॥
भूत पिसाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥

नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥
संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै॥

सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा॥
और मनोरथ जो कोई लावै। सोइ अमित जीवन फल पावै॥

चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥
साधु संत के तुम रखवारे। असुर निकंदन राम दुलारे॥

अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥
राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥

तुम्हरे भजन राम को भावै। जनम जनम के दुख बिसरावै॥
अंत काल रघुबर पुर जाई। जहाँ जनम हरि-भक्त कहाई॥

और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई॥
संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥

जै जै जै हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥
जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥

जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥

तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महँ डेरा॥

दोहा :
पवन तनय संकट हरन, मंगल मूरति रूप।
राम लखन सीता सहित, हृदय बसहु सुर भूप॥
`;

  // Full English Translation
  const englishChalisha = `
॥ Shri Hanuman Chalisa ॥

Doha:
With the dust of the Guru’s lotus feet, I clean the mirror of my mind.
I narrate the pure glory of Sri Raghuvara, which bestows the four fruits of life (Dharma, Artha, Kama, Moksha).

Knowing myself to be ignorant, I meditate on you, O Hanuman, son of the Wind God.
Grant me strength, wisdom, and knowledge, and remove all my troubles and impurities.

Chaupai:
Victory to Hanuman, ocean of wisdom and virtues! Victory to the lord of monkeys, who enlightens the three worlds!
O Messenger of Rama, abode of incomparable strength, son of Anjani, known as Pavanputra (son of the Wind God)!

O Great Hero, valiant as Vajra (thunderbolt), destroyer of evil thoughts and companion of good sense!
Your complexion is golden, your attire beautiful; your ears have earrings, and your hair is curly!

In your hands shine the thunderbolt and banner; on your shoulder rests the sacred thread of munja grass!
O Son of Shiva (or incarnation of Shiva's strength), delight of Kesari, your glory and might are revered throughout the world!

You are learned, virtuous, and extremely clever, always eager to accomplish Rama's tasks!
You are fond of listening to the tales of the Lord, and reside in the hearts of Rama, Lakshmana, and Sita!

Assuming a tiny form, you appeared before Sita; assuming a terrible form, you set Lanka ablaze!
Assuming a giant form, you destroyed demons; you accomplished the tasks of Lord Rama!

You brought Sanjeevani herb and revived Lakshmana; Lord Rama embraced you joyfully!
Rama praised you greatly, saying, "You are as dear to me as my brother Bharata!"

Thousands of mouths sing your glory, saying this, Lord Rama embraced him!
Sanaka and other sages, Brahma and other deities, Narada and Saraswati, along with Sages and Nagas!

Yama (god of death), Kubera (god of wealth), and the guardians of the directions – how can any poet or scholar describe your glory?
You rendered great service to Sugriva, by uniting him with Rama and restoring his kingdom!

Vibhishana accepted your counsel, and the whole world knows he became the king of Lanka!
You swallowed the sun, which is thousands of miles away, thinking it to be a sweet fruit!

Placing Rama's ring in your mouth, you crossed the ocean – there is no wonder in this!
All the difficult tasks in the world become easy through your grace!

You are the guardian at Rama’s door; nothing can enter without your command!
All joys are found in your refuge; you are the protector, so there is no fear!

You alone can control your own immense power; the three worlds tremble at your roar!
Ghosts and spirits do not come near when the name of Mahabir (Hanuman) is chanted!

All diseases vanish and all pains are removed by continuously chanting the name of brave Hanuman!
Hanuman rescues from all crises those who meditate on him with mind, word, and deed!

Rama, the ascetic king, depends on all your deeds for his success!
Whoever brings any other desire (to you), gains the immeasurable fruit of life!

Your glory is spread across all four ages (Yugas); it is world-renowned and illuminates the universe!
You are the protector of saints and sages, the destroyer of demons, and beloved of Rama!

You are the bestower of eight Siddhis (supernatural powers) and nine Nidhis (treasures), this boon was granted by Mother Janaki (Sita)!
The elixir of Rama (devotion to Rama) is with you; may you always remain a servant of Lord Rama!

Chanting your name pleases Rama, and dispels the sorrows of countless births!
At the end of life, one goes to the abode of Rama, where one is called a devotee of Hari!

No other deity needs to be remembered; serving Hanuman brings all happiness!
All troubles are cut and all pains disappear for whoever remembers the mighty Hanuman!

Victory, Victory, Victory to Hanuman Gosain! Grant your grace like a Guru Dev!
Whoever recites this a hundred times, is freed from bondage and attains great joy!

Whoever reads this Hanuman Chalisa attains spiritual perfection; Gauri's Lord (Shiva) is the witness!

Tulsidas is ever a servant of Hari; O Lord, please reside in my heart!

Doha:
O Son of the Wind, dispeller of troubles, embodiment of auspiciousness!
Reside in my heart, O king of gods, along with Rama, Lakshmana, and Sita!
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-100 to-red-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Section - Engaging and responsive */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <div className="w-full h-full">
          {/* Image for Lord Hanuman - object-fit: 'cover' and object-position: 'top' */}
          <img
            src="./Lord/HanumanJiAarti.jpg" // **UPDATE THIS PATH to your Hanuman Ji image if different**
            alt="Lord Hanuman, the epitome of strength, devotion, and wisdom."
            className="object-cover w-full h-full filter brightness-90"
            style={{ objectPosition: 'top' }} // This ensures the top part of the image is visible
          />
        </div>

        {/* Overlay for text readability - adjusted for Hanuman colors */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-100 via-transparent to-transparent opacity-90"></div>

        {/* Title - Prominent, responsive, and animated - adjusted for Hanuman colors */}
        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-red-800 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "श्री हनुमान चालीसा" : "Shri Hanuman Chalisa"}
        </h1>
      </div>

      {/* Chalisha Text Section - Clean, readable, and interactive */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-red-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-700">
            {isHindi ? hindiChalisha : englishChalisha}
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

export default HanumanChalisha;