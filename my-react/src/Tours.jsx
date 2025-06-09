import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// 👇 New Street Food Component
const streetFoods = [
  {
    emoji: "🥟",
    name: "Kachori-Sabzi",
    description: "Crispy fried puris (kachori) stuffed with spicy lentils, served with a tangy potato curry.",
    location: "Ram Bhandar (Chowk), Kachori Gali",
  },
  {
    emoji: "🍅",
    name: "Tamatar Chaat",
    description: "A fiery mix of mashed tomatoes, spices, ghee, green chutney, and crispy sev.",
    location: "Deena Chaat Bhandar (Dashashwamedh area)",
    note: "Unique to Varanasi – not found in many other cities.",
  },
  {
    emoji: "🧊",
    name: "Malaiyo (Winter Special)",
    description: "Frothy, saffron-infused milk dessert topped with pistachios and cardamom.",
    location: "Thatheri Bazaar early in the morning",
    note: "Available only in winter (November to February).",
  },
  {
    emoji: "🧁",
    name: "Launglata",
    description: "A sweet pastry filled with khoya and dry fruits, deep-fried and soaked in sugar syrup.",
    location: "Kachori Gali, Vishwanath Gali",
  },
  {
    emoji: "🧉",
    name: "Banarasi Paan",
    description: "Betel leaf stuffed with gulkand, cardamom, coconut, and more. A cultural experience.",
    location: "Keshav Paan Bhandar, Chowk area",
  },
  {
    emoji: "🥤",
    name: "Blue Lassi",
    description: "Thick, creamy lassi served in a clay cup, with dozens of fruit varieties.",
    location: "Blue Lassi Shop near Manikarnika Ghat",
  },
  {
    emoji: "🥘",
    name: "Baati Chokha",
    description: "Baked wheat balls (baati), mashed spiced eggplant/potato (chokha), and tangy chutneys.",
    location: "Baati Chokha Restaurant (Teliyabagh)",
  },
  {
    emoji: "🧀",
    name: "Chena Dahi Vada",
    description: "Soft cottage cheese fritters soaked in sweet yogurt and topped with chutneys.",
    location: "Godowlia Market",
  },
  {
    emoji: "🍧",
    name: "Thandai",
    description: "A cool milk-based drink with dry fruits and spices—occasionally infused with bhang during Holi!",
    location: "Baba Thandai (Godowlia)",
  },
  {
    emoji: "🥞",
    name: "Imarti & Jalebi",
    description: "Deep-fried sweets made from urad dal (Imarti) or maida (Jalebi), soaked in sugar syrup.",
    location: "Rajbandhu Sweets",
  },
];

const VaranasiStreetFoods = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-black underline underline-offset-4 decoration-2 decoration-black mb-10">
       Varanasi's Famous Street Foods
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {streetFoods.map((food, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition rounded-lg p-5 border border-gray-100"
          >
            <div className="text-3xl mb-2">{food.emoji}</div>
            <h2 className="text-xl font-semibold text-gray-800">{food.name}</h2>
            <p className="text-gray-600 mt-1">{food.description}</p>
            {food.note && (
              <p className="text-sm text-yellow-600 mt-1 italic">{food.note}</p>
            )}
            <p className="text-sm text-blue-700 mt-2 font-medium">
              📍 Where to try: {food.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 👇 Itinerary Data
const itinerary = [
  {
    title: "सुबह 5:00 – 8:00 | सुबहे बनारस और गंगा आरती",
    description: `अपने दिन की शुरुआत अस्सी घाट की दिव्य और शांति से भरपूर सुबह की आरती के साथ करें। गंगा किनारे सूरज की पहली किरणों को निहारते हुए यहाँ योग, ध्यान और शंखध्वनि का अनुभव किया जा सकता है। इसके बाद घाटों पर टहलते हुए दशाश्वमेध घाट तक पहुँचें और फिर पवित्र काशी विश्वनाथ मंदिर में दर्शन करें — यह आत्मा को शुद्ध करने वाला अनुभव है।`,
    image: "./Darshan/Kashi-Darshan.png",
  },
  {
    title: "सुबह 8:30 – 9:30 | बनारसी नाश्ता",
    description: `आरती और दर्शन के बाद काशी के प्रसिद्ध राम भंडार में गरमा गरम कचौड़ी-सब्जी, कुरकुरी जलेबी और मटके वाली चाय का लुत्फ उठाएं। गलियों की चाय दुकानों पर मिलने वाली कुल्हड़ वाली चाय आपकी सुबह को और खास बना देगी। बनारस का नाश्ता स्वाद और आत्मीयता का संगम है।`,
    image: "./Varanasi/nasta.jpeg",
  },
  {
    title: "10:00 – 1:00 | सारनाथ और BHU घूमना",
    description: `बुद्ध की शिक्षा का साक्षी बनने सारनाथ जाएँ, जहाँ उन्होंने पहला उपदेश दिया था। धमेख स्तूप, म्यूज़ियम और चुपचाप बहता समय आपको अतीत से जोड़ देगा। इसके बाद बनारस हिंदू विश्वविद्यालय (BHU) जाएँ — विशाल परिसर, हरियाली और परिसर का विश्वनाथ मंदिर आध्यात्मिक शांति का अनुभव कराते हैं।`,
    image: "./Varanasi/BhuVT.jpeg",
  },
  {
    title: "1:30 – 2:30 | दोपहर का खाना",
    description: `लंच के लिए Baati Chokha रेस्टोरेंट पर मिट्टी की महक और देसी स्वाद का आनंद लें — सत्तू भरी बाटी, चोखा, घी और गुड़। अगर हलका खाना चाहें तो Deena Chat Bhandar पर चाट और ठंडे पेय भी बढ़िया विकल्प हैं।`,
    image: "./Varanasi/Lunch.jpg",
  },
  {
    title: "3:00 – 5:00 | बाजार और विश्राम",
    description: `दोपहर के समय में थोड़ा विश्राम करें या गौदौलिया और विश्वनाथ गलियों में रंग-बिरंगी दुकानों पर रुद्राक्ष, बनारसी साड़ी, पूजा-सामग्री और लोकल हस्तशिल्प की खरीदारी करें। चाहें तो घाट के किनारे शांत बैठकर गंगा की लहरों के संग मन को विश्राम दें।`,
    image: "./Varanasi/Godowalia.jpg",
  },
  {
    title: "5:30 – 7:00 | गंगा आरती (दशाश्वमेध घाट)",
    description: `दशाश्वमेध घाट पर शाम की गंगा आरती एक अलौकिक अनुभव है — आरती की थालियाँ, मंत्रोच्चार, घंटियों की ध्वनि और सैकड़ों दीपक गंगा में तैरते हुए मन को भाव-विभोर कर देते हैं। चाहें तो नाव से आरती देखें, जो एक अलग दृष्टिकोण प्रदान करता है।`,
    image: "./Photos/p3.png",
  },
  {
    title: "7:30 PM के बाद | रात का खाना और विश्राम",
    description: `रात के खाने में आप Tandoor Villa की स्वादिष्ट थाली, Vaatika Cafe का पिज़्ज़ा और घाट किनारे की ठंडी हवा का आनंद ले सकते हैं। मिठाई में बनारस की पहचान मलइयो, लाल पेड़ा या ठंडा राजभोग ज़रूर ट्राय करें। यह दिनभर के अनुभवों को एक मीठा अंत देगा।`,
    image: "./Varanasi/Thali.jpg",
  },
];

const Tours = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src="./Varanasi/killa2.jpg"
          alt="Scenic View"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="bg-[#E7EFC7] py-10 px-4">
        <h1 className="text-4xl font-bold text-center underline underline-offset-4 decoration-2 decoration-black mb-6">
          Varanasi Tour
        </h1>

        <p className="text-xl text-center max-w-4xl mx-auto mb-10 leading-relaxed">
          Set out on a voyage into Varanasi's ageless core, where vibrant local life and old spirituality harmoniously blend.
          Discover the city's rich history and culture through its fragrant street food and secret passageways, observe fascinating
          ceremonies, and explore the sacred ghats along the Ganges. From peaceful morning yoga by the river to immersive artisan
          workshops, we provide one-of-a-kind experiences that guarantee an authentic and intensely personal exploration of this
          enchanted location. We also lead you to both famous monuments and peaceful, lesser-known areas.
        </p>

        {/* Itinerary */}
        <div className="bg-[#e1fae2]">
          <h1 className="text-2xl text-center underline-offset-4 underline mt-4">Places To Visit In Varanasi</h1>
          {itinerary.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center max-w-6xl mx-auto py-10 px-4 gap-8`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg shadow-md object-cover w-full h-64 md:h-80"
                />
              </div>
              <div className="w-full md:w-1/2 text-gray-800">
                <h3 className="text-xl md:text-2xl font-semibold text-amber-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-md leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Street Food Section */}
        <VaranasiStreetFoods />
      </div>

      <Footer />
    </div>
  );
};

export default Tours;
