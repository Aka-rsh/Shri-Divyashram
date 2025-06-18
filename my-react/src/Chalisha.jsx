import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Chalisha = ({ language = "EN" }) => {
  const isHindi = language === "HI";

 const cardData = [
  {
    name: "Lord Hanuman",
    title: "Hanuman Chalisha",
    img: "./Lord/HanumanJiAarti.jpg",
    subtitle: "Dedicated to Lord Hanuman",
    link: "/hanuman-chalisha"
  },
  {
    name: "Goddess Durga",
    title: "Durga Chalisha",
    img: "./Lord/DurgaMataChalisha.jpg",
    subtitle: "Dedicated to Goddess Durga",
    link: "/durga-chalisha"
  },
  {
    name: "Lord Shiva",
    title: "Shiv Chalisha",
    img: "./Lord/ShivJiAarti.jpg",
    subtitle: "Dedicated to Lord Shiva",
    link: "/shiv-chalisha"
  },
  {
    name: "Goddess Lakshmi",
    title: "Lakshmi Chalisha",
    img: "./Lord/MahaLakshmiJiChalisha.jpg",
    subtitle: "Dedicated to Goddess Lakshmi",
    link: "/lakshmi-chalisha"
  },
  {
    name: "Lord Ganesha",
    title: "Ganesh Chalisha",
    img: "./Lord/GaneshJiAarti.jpg",
    subtitle: "Dedicated to Lord Ganesha",
    link: "/ganesh-chalisha"
  },
  {
    name: "Lord Rama",
    title: "Ram Chalisha",
    img: "./Lord/ShriRamjiChalisha.jpg",
    subtitle: "Dedicated to Lord Rama",
    link: "/ram-chalisha"
  },
  {
    name: "Lord Krishna",
    title: "Krishna Chalisha",
    img: "./Lord/Krishnaji.jpg",
    subtitle: "Dedicated to Lord Krishna",
    link: "/krishna-chalisha"
  },
  {
    name: "Lord Vishnu",
    title: "Vishnu Chalisha",
    img: "./Lord/VishnuJiChalisha.jpg",
    subtitle: "Dedicated to Lord Vishnu",
    link: "/vishnu-chalisha"
  },
  {
    name: "Lord Shani",
    title: "Shani Chalisha",
    img: "./Lord/ShaniJiAarti.jpg",
    subtitle: "Dedicated to Lord Shani",
    link: "/shani-chalisha"
  },
  {
    name: "Goddess Saraswati",
    title: "Saraswati Chalisha",
    img: "./Lord/SaraswatiMataChalisha.jpg",
    subtitle: "Dedicated to Goddess Saraswati",
    link: "/saraswati-chalisha"
  },
  {
    name: "Goddess Ganga",
    title: "Ganga Chalisha",
    img: "./Lord/GanagMa.jpg",
    subtitle: "Dedicated to Goddess Ganga",
    link: "/ganga-chalisha"
  },
  {
    name: "Lord Surya",
    title: "Surya Chalisha",
    img: "./Lord/SuryaDevChalisha.jpg",
    subtitle: "Dedicated to Lord Surya",
    link: "/surya-chalisha"
  },
  {
    name: "Goddess Radha",
    title: "Radha Chalisha",
    img: "./Lord/RadhaJi.jpg",
    subtitle: "Dedicated to Goddess Radha",
    link: "/radha-chalisha"
  },
  {
    name: "Sai Baba",
    title: "Sai Chalisha",
    img: "./Lord/SaiBaba.jpg",
    subtitle: "Dedicated to Sai Baba",
    link: "/sai-chalisha"
  },
  {
    name: "Navgrah",
    title: "Navgrah Chalisha",
    img: "./Lord/NavgrahChalisha.jpg",
    subtitle: "Dedicated to Navgrah Devtas",
    link: "/navgrah-chalisha"
  },
  {
    name: "Sheetla Mata",
    title: "Sheetla Mata Chalisha",
    img: "./Lord/SheetlaMataChalisha.jpg",
    subtitle: "Dedicated to Sheetla Mata",
    link: "/sheetla-chalisha"
  },
  {
    name: "Kaali Mata",
    title: "Kaali Mata Chalisha",
    img: "./Lord/KaaliAarti.jpg",
    subtitle: "Dedicated to Kaali Mata",
    link: "/kaali-chalisha"
  },
  {
    name: "Santoshi Mata",
    title: "Santoshi Mata Chalisha",
    img: "./Lord/SantoshiMataChalisha.jpg",
    subtitle: "Dedicated to Santoshi Mata",
    link: "/santoshi-chalisha"
  },
  {
    name: "Chamunda Mata",
    title: "Chamunda Mata Chalisha",
    img: "./Lord/ChamundajiChalisha.jpg",
    subtitle: "Dedicated to Chamunda Mata",
    link: "/chamunda-chalisha"
  }
];

  // --- Content for English and Hindi ---
  const content = {
    EN: {
      heroTitle: "The Power of Chalisha",
      heroDesc: "A Chalisha is a devotional hymn consisting of forty verses, typically dedicated to a specific deity. Chanting a Chalisha is a powerful way to invoke divine blessings, gain spiritual strength, and overcome life's challenges. These sacred verses, when recited with devotion, bring peace to the mind, purify the soul, and foster a deep connection with the divine. Explore our collection and find solace in the rhythmic chants.",
      discoverChalishas: "Discover Devotional Chalishas",
      footerText: "Divine Bhajans. All rights reserved."
    },
    HI: {
      heroTitle: "चालीसा की शक्ति",
      heroDesc: "चालीसा चालीस श्लोकों का एक भक्तिमय भजन है, जो आमतौर पर एक विशिष्ट देवता को समर्पित होता है। चालीसा का पाठ करना दिव्य आशीर्वाद प्राप्त करने, आध्यात्मिक शक्ति प्राप्त करने और जीवन की चुनौतियों को दूर करने का एक शक्तिशाली तरीका है। ये पवित्र छंद, जब भक्ति के साथ पढ़े जाते हैं, तो मन को शांति देते हैं, आत्मा को शुद्ध करते हैं, और ईश्वर के साथ गहरा संबंध स्थापित करते हैं। हमारे संग्रह का अन्वेषण करें और लयबद्ध मंत्रों में सांत्वना पाएं।",
      discoverChalishas: "भक्ति चालीसाएँ खोजें",
      footerText: "दिव्य भजन। सर्वाधिकार सुरक्षित।"
    }
  };

  const currentContent = isHindi ? content.HI : content.EN;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200 text-gray-800 font-sans">
      <Navbar />

      {/* Hero Section - Impactful Introduction for Chalishas */}
      <section className="relative bg-indigo-100 py-16 px-4 md:px-8 text-center shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dark opacity-20 animate-pulse-dark"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-6 drop-shadow-md animate-fade-in-down">
            {currentContent.heroTitle.split('Chalisha')[0]}
            <span className="text-black">Chalisha</span>
            {currentContent.heroTitle.split('Chalisha')[1]}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 animate-fade-in delay-200">
            {currentContent.heroDesc}
          </p>
        </div>
      </section>

      {/* Chalisha Cards Section */}
      <section id="chalisha-list" className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-12 animate-fade-in-down delay-1700">
            {currentContent.discoverChalishas}
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cardData.map((item, index) => (
              // Inlined card structure directly here
              <Link
                key={index}
                to={item.link}
                className={`block bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out ${`animate-fade-in-up delay-${1800 + index * 100}`}`}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-full"
                    // If you need specific cropping for cards, you might add object-position here too
                    // style={{ objectPosition: 'center top' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <p className="text-sm font-semibold opacity-80">{item.name}</p>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{item.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm bg-indigo-100">
        <p>&copy; {new Date().getFullYear()} {currentContent.footerText}</p>
      </footer>
    </div>
  );
};

export default Chalisha;