import React, { useRef, useEffect, useState } from "react";
import DarshanCard from './DarshanCard';
import Navbar from './Navbar';
import Footer from './Footer';
import { ChevronLeft, ChevronRight } from "lucide-react";

// (Keep your existing templeData array here, it's perfect)
const templeData = [
  {
    imageUrl: "./Varanasi/T1.jpg",
    templeName: {
      en: "Kashi Vishwanath Mandir",
      hi: "काशी विश्वनाथ मंदिर"
    },
    location: {
      en: "Vishwanath Gali, Varanasi",
      hi: "विश्वनाथ गली, वाराणसी"
    },
    description: {
      en: "One of the 12 Jyotirlingas, dedicated to Lord Shiva, with a golden dome and deep spiritual legacy.",
      hi: "12 ज्योतिर्लिंगों में से एक, भगवान शिव को समर्पित, एक सुनहरे गुंबद और गहरी आध्यात्मिक विरासत के साथ।"
    }
  },
  {
    imageUrl: "./Varanasi/Swarvedmahamandir.jpeg",
    templeName: {
      en: "Swarved MahaMandir Yoga Center",
      hi: "स्वर्वेद महामंदिर योग केंद्र"
    },
    location: {
      en: "Umaraha, Mudli, Varanasi",
      hi: "उमरहा, मुडली, वाराणसी"
    },
    description: {
      en: "A serene place dedicated to yoga and meditation, promoting holistic wellness and spiritual growth in the heart of Varanasi.",
      hi: "योग और ध्यान के लिए समर्पित एक शांत स्थान, वाराणसी के हृदय में समग्र कल्याण और आध्यात्मिक विकास को बढ़ावा देता है।"
    }
  },
  {
    imageUrl: "./Varanasi/Durgakund.jpg",
    templeName: {
      en: "Durga Kund Mandir",
      hi: "दुर्गा कुंड मंदिर"
    },
    location: {
      en: "Durgakund Road, Varanasi",
      hi: "दुर्गाकुंड रोड, वाराणसी"
    },
    description: {
      en: "18th-century Nagara-style temple dedicated to Goddess Durga, known for its sacred kund and red structure.",
      hi: "देवी दुर्गा को समर्पित 18वीं सदी का नागर-शैली का मंदिर, अपने पवित्र कुंड और लाल संरचना के लिए जाना जाता है।"
    },
  },
  {
    imageUrl: "./Varanasi/KaalBhairav.jpg",
    templeName: {
      en: "Kaal Bhairav Mandir",
      hi: "काल भैरव मंदिर"
    },
    location: {
      en: "Vishweshwarganj, Varanasi",
      hi: "विश्वेश्वरगंज, वाराणसी"
    },
    description: {
      en: "Ancient temple of Lord Bhairav, protector of the city, known for skull garlands and fierce energy.",
      hi: "भगवान भैरव का प्राचीन मंदिर, शहर का संरक्षक, खोपड़ी की माला और उग्र ऊर्जा के लिए जाना जाता है।"
    },
  },
  {
    imageUrl: "./Varanasi/Maa-Annapurna.jpg",
    templeName: {
      en: "Maa Annapurna Mandir",
      hi: "माँ अन्नपूर्णा मंदिर"
    },
    location: {
      en: "Godowlia, Varanasi",
      hi: "गोदौलिया, वाराणसी"
    },
    description: {
      en: "Temple of Goddess Annapurna, provider of food and nourishment, featuring brass and gold idols.",
      hi: "देवी अन्नपूर्णा का मंदिर, भोजन और पोषण प्रदाता, जिसमें पीतल और सोने की मूर्तियाँ हैं।"
    },
  },
  {
    imageUrl: "./Varanasi/Sankatmochan.jpg",
    templeName: {
      en: "Sankat Mochan Hanuman Mandir",
      hi: "संकट मोचन हनुमान मंदिर"
    },
    location: {
      en: "Near Assi Ghat, Varanasi",
      hi: "अस्सी घाट के पास, वाराणसी"
    },
    description: {
      en: "Built by Tulsidas, this Hanuman temple is known for its peaceful ambiance and devotional chants.",
      hi: "तुलसीदास द्वारा निर्मित, यह हनुमान मंदिर अपने शांतिपूर्ण माहौल और भक्तिमय मंत्रों के लिए जाना जाता है।"
    },
  },
  {
    imageUrl: "./Varanasi/Nepalitemple.jpeg",
    templeName: {
      en: "Kanthwala (Nepali) Temple",
      hi: "कंठवाला (नेपाली) मंदिर"
    },
    location: {
      en: "Lalita Ghat, Varanasi",
      hi: "ललिता घाट, वाराणसी"
    },
    description: {
      en: "19th-century wooden temple modeled after Nepal's Pashupatinath, also called Mini Khajuraho.",
      hi: "नेपाल के पशुपतिनाथ के बाद निर्मित 19वीं सदी का लकड़ी का मंदिर, जिसे मिनी खजुराहो भी कहा जाता है।"
    },
  },
  {
    imageUrl: "./Varanasi/Vishalakshimandir.jpeg",
    templeName: {
      en: "Vishalakshi Mandir",
      hi: "विशालाक्षी मंदिर"
    },
    location: {
      en: "Manikarnika Ghat, Varanasi",
      hi: "मणिकर्णिका घाट, वाराणसी"
    },
    description: {
      en: "One of the Shakti Peeths, where Goddess Sati's earring fell; a sacred and powerful shrine.",
      hi: "शक्ति पीठों में से एक, जहाँ देवी सती की बाली गिरी थी; एक पवित्र और शक्तिशाली मंदिर।"
    },
  },
  {
    imageUrl: "./Varanasi/BharatMandir.jpeg",
    templeName: {
      en: "Bharat Mata Mandir",
      hi: "भारत माता मंदिर"
    },
    location: {
      en: "Varanasi",
      hi: "वाराणसी"
    },
    description: {
      en: "Unique temple with no deity, featuring a 3D marble map of undivided India; symbol of patriotism.",
      hi: "कोई देवता नहीं वाला अनोखा मंदिर, जिसमें अखंड भारत का 3डी संगमरमर का नक्शा है; देशभक्ति का प्रतीक।"
    },
  },
  {
    imageUrl: "./Varanasi/SankataMandir.jpeg",
    templeName: {
      en: "Sankata Devi Mandir",
      hi: "संकटा देवी मंदिर"
    },
    location: {
      en: "Varanasi",
      hi: "वाराणसी"
    },
    description: {
      en: "Goddess Sankata is believed to relieve sorrows; popular among women and during Navratri.",
      hi: "देवी संकटा को दुखों से मुक्ति दिलाने वाली माना जाता है; महिलाओं और नवरात्रि के दौरान लोकप्रिय।"
    },
  },
  {
    imageUrl: "./Varanasi/LalitaGauritemple.jpg",
    templeName: {
      en: "Lalita Gauri Temple",
      hi: "ललिता गौरी मंदिर"
    },
    location: {
      en: "Near Lalita Ghat, Varanasi",
      hi: "ललिता घाट के पास, वाराणसी"
    },
    description: {
      en: "19th-century temple of wealth and prosperity built by Nepalese king near Nepali temple.",
      hi: "नेपाली मंदिर के पास नेपाली राजा द्वारा निर्मित धन और समृद्धि का 19वीं सदी का मंदिर।"
    },
  },
  {
    imageUrl: "./Varanasi/Manasmandir.jpeg",
    templeName: {
      en: "Tulsi Manas Temple",
      hi: "तुलसी मानस मंदिर"
    },
    location: {
      en: "Sankat Mochan Road, Varanasi",
      hi: "संकट मोचन रोड, वाराणसी"
    },
    description: {
      en: "White marble temple where Tulsidas wrote Ramcharitmanas; walls feature verses and epics.",
      hi: "सफेद संगमरमर का मंदिर जहाँ तुलसीदास ने रामचरितमानस लिखी थी; दीवारों पर छंद और महाकाव्य हैं।"
    },
  },
  {
    imageUrl: "./Varanasi/Mitrunjaymandir.jpeg",
    templeName: {
      en: "Mrityunjay Mahadev Temple",
      hi: "मृत्युंजय महादेव मंदिर"
    },
    location: {
      en: "Daranagar, Varanasi",
      hi: "दरानगर, वाराणसी"
    },
    description: {
      en: "Shiva temple believed to protect from untimely death; contains a healing well.",
      hi: "शिव मंदिर असमय मृत्यु से रक्षा करने वाला माना जाता है; इसमें एक उपचार कुआँ है।"
    },
  },
  {
    imageUrl: "./Varanasi/TilbhandeshwarMahadev.jpeg",
    templeName: {
      en: "Tilbhandeshwar Mahadev Mandir",
      hi: "तिलबंडेश्वर महादेव मंदिर"
    },
    location: {
      en: "Varanasi",
      hi: "वाराणसी"
    },
    description: {
      en: "Naturally growing Shiva linga worshipped with both Malayali and Benarasi rituals.",
      hi: "स्वाभाविक रूप से बढ़ते शिव लिंग की पूजा मलयाली और बनारसी दोनों रीति-रिवाजों से की जाती है।"
    },
  },
  {
    imageUrl: "./Varanasi/BhuVT.png",
    templeName: {
      en: "New Vishwanath Temple (BHU)",
      hi: "नया विश्वनाथ मंदिर (बीएचयू)"
    },
    location: {
      en: "BHU Campus, Varanasi",
      hi: "बीएचयू परिसर, वाराणसी"
    },
    description: {
      en: "Marble replica of the original temple, built by Birla family, open to all castes and religions.",
      hi: "मूल मंदिर की संगमरमर की प्रतिकृति, बिड़ला परिवार द्वारा निर्मित, सभी जातियों और धर्मों के लिए खुला।"
    },
  },
  {
    imageUrl: "./Varanasi/Dundi Raj Ganesh Temple.jpeg",
    templeName: {
      en: "Dundi Raj Ganesh Temple",
      hi: "डुंडी राज गणेश मंदिर"
    },
    location: {
      en: "Near Kashi Vishwanath, Varanasi",
      hi: "काशी विश्वनाथ के पास, वाराणसी"
    },
    description: {
      en: "Oldest Ganesh temple in the city, believed to remove sorrows and grant blessings.",
      hi: "शहर का सबसे पुराना गणेश मंदिर, दुखों को दूर करने और आशीर्वाद देने वाला माना जाता है।"
    },
  },
  {
    imageUrl: "./Varanasi/ISKCONTemple.jpeg",
    templeName: {
      en: "ISKCON Temple",
      hi: "इस्कॉन मंदिर"
    },
    location: {
      en: "Near BHU, Varanasi",
      hi: "बीएचयू के पास, वाराणसी"
    },
    description: {
      en: "Marble temple of Lord Krishna known for Sunday feasts, kirtans, and spiritual gatherings.",
      hi: "भगवान कृष्ण का संगमरमर का मंदिर रविवार के दावतों, कीर्तनों और आध्यात्मिक सभाओं के लिए जाना जाता है।"
    },
  },
  {
    imageUrl: "./Varanasi/RatneshwarMahadevTemple.jpeg",
    templeName: {
      en: "Ratneshwar Mahadev Temple",
      hi: "रत्नेश्वर महादेव मंदिर"
    },
    location: {
      en: "Scindia Ghat, Varanasi",
      hi: "सिंधिया घाट, वाराणसी"
    },
    description: {
      en: "Half-submerged temple believed to grant male offspring, best viewed from the river.",
      hi: "आधा डूबा हुआ मंदिर जिसे पुरुष संतान प्रदान करने वाला माना जाता है, नदी से सबसे अच्छा देखा जा सकता है।"
    },
  },
  {
    imageUrl: "./Varanasi/VyasaTemple.jpeg",
    templeName: {
      en: "Vyasa Temple",
      hi: "व्यास मंदिर"
    },
    location: {
      en: "Eastern bank of Ganga, Varanasi",
      hi: "गंगा के पूर्वी तट, वाराणसी"
    },
    description: {
      en: "Dedicated to sage Vyasa who wrote Mahabharata; located outside the main city per legend.",
      hi: "ऋषि व्यास को समर्पित जिन्होंने महाभारत लिखा था; किंवदंती के अनुसार मुख्य शहर के बाहर स्थित है।"
    },
  },
  {
    imageUrl: "./Varanasi/BadaGaneshMandir.jpeg",
    templeName: {
      en: "Bada Ganesh Mandir",
      hi: "बड़ा गणेश मंदिर"
    },
    location: {
      en: "Lohatiya, Varanasi",
      hi: "लोहटिया, वाराणसी"
    },
    description: {
      en: "Home to the rare Swambhu Trinetra idol of Lord Ganesha, worshipped for removing obstacles and fulfilling wishes, especially on Ganesh Chaturthi.",
      hi: "भगवान गणेश की दुर्लभ स्वयंभू त्रिनेत्र मूर्ति का घर, बाधाओं को दूर करने और इच्छाओं को पूरा करने के लिए पूजा की जाती है, विशेष रूप से गणेश चतुर्थी पर।"
    },
  },
  {
    imageUrl: "./Varanasi/MarkandeyMahadevTemple.jpeg",
    templeName: {
      en: "Markandey Mahadev Temple",
      hi: "मार्कंडेय महादेव मंदिर"
    },
    location: {
      en: "Kaithi, Varanasi",
      hi: "कैथी, वाराणसी"
    },
    description: {
      en: "Temple where Lord Shiva saved a boy from death; popular during Mahashivratri.",
      hi: "मंदिर जहाँ भगवान शिव ने एक लड़के को मृत्यु से बचाया था; महाशिवरात्रि के दौरान लोकप्रिय।"
    },
  },
  {
    imageUrl: "./Varanasi/TridevTemple.jpeg",
    templeName: {
      en: "Tridev Temple",
      hi: "त्रिदेव मंदिर"
    },
    location: {
      en: "Near Tulsi Manas Temple, Varanasi",
      hi: "तुलsi मानस मंदिर के पास, वाराणसी"
    },
    description: {
      en: "Modern temple dedicated to Hanuman, Khatu Shyam, and Rani Sati Dadi; photography allowed.",
      hi: "हनुमान, खाटू श्याम और रानी सती दादी को समर्पित आधुनिक मंदिर; फोटोग्राफी की अनुमति है।"
    },
  },
];

// (Keep your existing cities data here, it's perfect)
const cities = [
  {
    name: { en: "All", hi: "सभी" },
    image: "./Cities/All.jpeg",
    level: 1,
  },
  {
    name: { en: "Varanasi", hi: "वाराणसी" },
    image: "./Cities/Vns.jpeg",
    level: 1,
  },
  {
    name: { en: "Ayodhya", hi: "अयोध्या" },
    image: "./Cities/Ayodhya.jpeg",
    level: 1,
  },
  {
    name: { en: "Mathura", hi: "मथुरा" },
    image: "./Cities/Mathura.jpeg",
    level: 1,
  },
  {
    name: { en: "Prayagraj (Allahabad)", hi: "प्रयागराज (इलाहाबाद)" },
    image: "./Cities/pyj.jpeg",
    level: 1,
  },
  {
    name: { en: "Vrindavan", hi: "वृंदावन" },
    image: "./Cities/Vrindavan.jpeg",
    level: 1,
  },
  {
    name: { en: "Bodhgaya", hi: "बोधगया" },
    image: "./Cities/bodhgaya.jpeg",
    level: 2,
  },
  {
    name: { en: "Sarnath", hi: "सारनाथ" },
    image: "./Cities/Sarnath.jpeg",
    level: 2,
  },
  {
    name: { en: "Gorakhpur", hi: "गोरखपुर" },
    image: "./Cities/Gorakhpur.jpeg",
    level: 2,
  },
  {
    name: { en: "Chitrakoot", hi: "चित्रकूट" },
    image: "./Cities/Chitrakoot.jpeg",
    level: 2,
  },
  {
    name: { en: "Naimisharanya", hi: "नैमिषारण्य" },
    image: "./Cities/Naimisharanya.jpeg",
    level: 2,
  },
  {
    name: { en: "Haridwar", hi: "हरिद्वार" },
    image: "./Cities/Haridwar.jpeg",
    level: 3,
  },
  {
    name: { en: "Rishikesh", hi: "ऋषिकेश" },
    image: "./Cities/Rishikesh.jpeg",
    level: 3,
  },
  {
    name: { en: "Ujjain", hi: "उज्जैन" },
    image: "./Cities/Ujjain.jpeg",
    level: 3,
  },
  {
    name: { en: "Dwarka", hi: "द्वारका" },
    image: "./Cities/Dwarka.jpeg",
    level: 3,
  },
  {
    name: { en: "Puri", hi: "पुरी" },
    image: "./Cities/Puri.jpeg",
    level: 3,
  },
  {
    name: { en: "Amritsar", hi: "अमृतसर" },
    image: "./Cities/Amritsar.jpeg",
    level: 3,
  },
  {
    name: { en: "Tirupati", hi: "तिरुपति" },
    image: "./Cities/Tirupati.jpeg",
    level: 3,
  },
  {
    name: { en: "Madurai", hi: "मदुरै" },
    image: "./Cities/Madurai.jpeg",
    level: 3,
  },
  {
    name: { en: "Katra (Vaishno Devi)", hi: "कटरा (वैष्णो देवी)" },
    image: "./Cities/Katra (Vaishno Devi).jpeg",
    level: 3,
  },
  {
    name: { en: "Shirdi", hi: "शिर्डी" },
    image: "./Cities/Shirdi.jpeg",
    level: 3,
  },
  {
    name: { en: "Shingnapur", hi: "शिंगणापुर" },
    image: "./Cities/Shingnapur.jpeg",
    level: 3,
  },
  {
    name: { en: "Pushkar", hi: "पुष्कर" },
    image: "./Cities/Pushkar.jpeg",
    level: 3,
  },
  {
    name: { en: "Badrinath", hi: "बद्रीनाथ" },
    image: "./Cities/Badrinath.jpeg",
    level: 3,
  },
  {
    name: { en: "Kedarnath", hi: "केदारनाथ" },
    image: "./Cities/Kedarnath.jpeg",
    level: 3,
  },
  {
    name: { en: "Gangotri", hi: "गंगोत्री" },
    image: "./Cities/Gangotri.jpeg",
    level: 3,
  },
  {
    name: { en: "Yamunotri", hi: "यमुनोत्री" },
    image: "./Cities/Yamunotri.jpeg",
    level: 3,
  },
  {
    name: { en: "Goa", hi: "गोवा" },
    image: "./Cities/Goa.jpeg",
    level: 3,
  },
  {
    name: { en: "Ajmer", hi: "अजमेर" },
    image: "./Cities/Ajmer.jpeg",
    level: 3,
  },
  {
    name: { en: "Sabarimala", hi: "सबरीमाला" },
    image: "./Cities/Sabarimala.jpeg",
    level: 3,
  },
  {
    name: { en: "Somnath", hi: "सोमनाथ" },
    image: "./Cities/Somnath.jpeg",
    level: 3,
  },
  {
    name: { en: "Rameswaram", hi: "रामेश्वरम" },
    image: "./Cities/Rameswaram.jpeg",
    level: 3,
  },
  {
    name: { en: "Nashik", hi: "नाशिक" },
    image: "./Cities/Nashik.jpeg",
    level: 3,
  },
  {
    name: { en: "Trimbakeshwar", hi: "त्र्यंबकेश्वर" },
    image: "./Cities/Trimbakeshwar.jpeg",
    level: 3,
  },
];

const CitySelector = ({ cities, language, onSelectCity, selectedCity }) => {
  const scrollRef = useRef(null);
  const currentLangKey = language === 'EN' ? 'en' : 'hi';

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      if (direction === "left") {
        current.scrollBy({ left: -300, behavior: "smooth" });
      } else {
        current.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="p-4 bg-[#EFE4D2] rounded-lg shadow-xl max-w-6xl mx-auto mt-8 mb-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-800">
        {currentLangKey === 'en' ? 'Select Your City for Divine Services' : 'दिव्य सेवाओं के लिए अपना शहर चुनें'}
      </h1>

      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 opacity-70 group-hover:opacity-100 hover:scale-110 transition-all duration-200"
          aria-label={currentLangKey === 'en' ? "Scroll left" : "बाएं स्क्रॉल करें"}
        >
          <ChevronLeft size={28} className="text-gray-700" />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide py-4 px-2 sm:px-8"
        >
          {cities.map((city, index) => (
            <div
              key={index}
              onClick={() => onSelectCity(city.name.en)} // Pass the English name for filtering
              className={`min-w-[140px] sm:min-w-[180px] bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105 overflow-hidden flex flex-col
                ${selectedCity === city.name.en ? 'ring-4 ring-amber-500' : ''} `}
            >
              <img
                src={city.image}
                alt={city.name[currentLangKey]}
                className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
              />
              <div className="text-center font-semibold text-gray-800 py-2 px-1 text-sm sm:text-base">
                {city.name[currentLangKey]}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 opacity-70 group-hover:opacity-100 hover:scale-110 transition-all duration-200"
          aria-label={currentLangKey === 'en' ? "Scroll right" : "दाएं स्क्रॉल करें"}
        >
          <ChevronRight size={28} className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

const Mandir = ({ language }) => {
  const videoRef = useRef(null);
  const [selectedCity, setSelectedCity] = useState("Varanasi"); // State to hold the selected city
  const currentLangKey = language === 'EN' ? 'en' : 'hi';

  const introLines = {
    en: "Immerse yourself in the spiritual grandeur and architectural marvels. Each sacred site tells a tale of devotion, peace, and ancient wisdom.",
    hi: "आध्यात्मिक भव्यता और स्थापत्य चमत्कारों में खुद को डुबो दें। प्रत्येक पवित्र स्थल भक्ति, शांति और प्राचीन ज्ञान की कहानी कहता है।"
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) =>
        console.error("Video autoplay failed", e)
      );
    }
  }, []);

  // Filter temples based on the selected city
  const filteredTemples = selectedCity === "All"
    ? templeData
    : templeData.filter(temple =>
        temple.location.en.toLowerCase().includes(selectedCity.toLowerCase())
      );

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero Video Section */}
      <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="./Darshan/Kashi-darshan-vd.mp4" type="video/mp4" />
          <p className="text-red-500 p-4 absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
            {currentLangKey === 'en' ? 'Your browser does not support the video tag.' : 'आपका ब्राउज़र वीडियो टैग का समर्थन नहीं करता है।'}
          </p>
        </video>
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white text-xs sm:text-sm md:text-base bg-black bg-opacity-40 rounded-md px-2 py-1">
          {currentLangKey === 'en' ? 'Video credit:' : 'वीडियो क्रेडिट:'}{" "}
          <a
            href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-amber-300"
          >
            {currentLangKey === 'en' ? 'Varanasi Tourism' : 'वाराणसी पर्यटन'}
          </a>
        </div>
      </div>

      {/* City Selector */}
      <CitySelector cities={cities} language={language} onSelectCity={setSelectedCity} selectedCity={selectedCity} />

      {/* Temple Cards Section */}
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#FCEFCB]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
          {currentLangKey === 'en' ? 'Explore the Divine Temples' : 'दिव्य मंदिरों का अन्वेषण करें'}
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-600 mb-12 max-w-3xl mx-auto font-medium">
          {introLines[currentLangKey]}
        </p>

        {filteredTemples.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center max-w-7xl mx-auto">
            {filteredTemples.map((temple, index) => (
              <div
                key={index}
                className="w-full max-w-xs hover:scale-[1.02] transition-transform duration-200 ease-in-out"
              >
                <DarshanCard
                  imageUrl={temple.imageUrl}
                  templeName={temple.templeName[currentLangKey]}
                  location={temple.location[currentLangKey]}
                  description={temple.description[currentLangKey]}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-gray-600">
            {currentLangKey === 'en' ? 'No temples found for the selected city.' : 'चयनित शहर के लिए कोई मंदिर नहीं मिला।'}
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Mandir;