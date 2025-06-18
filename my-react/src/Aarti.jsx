import React from 'react';
import Navbar from './Navbar';
import Aarticard from './Aarticard';
import { Link } from 'react-router-dom';

const Aarti = ({ language = "EN" }) => { // Added language prop with default EN
  const isHindi = language === "HI";

  const cardData = [
    {
      name: "Morning Aarti",
      title: "Surya Ji Aarti",
      img: "./Lord/SuryaJiAarti.jpg",
      subtitle: "Dedicated to Lord Surya",
      link: "/surya-aarti"
    },
    {
      name: "Evening Aarti",
      title: "Shiv Ji Aarti",
      img: "./Lord/ShivJiAarti.jpg",
      subtitle: "Dedicated to Lord Shiva",
      link: "/shiv-aarti"
    },
    {
      name: "Supreme Goddess",
      title: "Durga Mata Aarti",
      img: "./Lord/DurgaMataAarti.jpg",
      subtitle: "Aarti of Goddess Durga",
      link: "/durga-aarti"
    },
    {
      name: "Divine Mother",
      title: "Annapurna Mata Aarti",
      img: "./Lord/Annapurnaaarti.jpg",
      subtitle: "Aarti of Goddess Annapurna",
      link: "/annapurna-aarti"
    },
    {
      name: "Guru Aarti",
      title: "Dattatreya Ji Aarti",
      img: "./Lord/DattatreyaJiAarti.jpg",
      subtitle: "Aarti of Lord Dattatreya",
      link: "/dattatreya-aarti"
    },
    {
      name: "Remover of Obstacles",
      title: "Ganesh Ji Aarti",
      img: "./Lord/GaneshJiAarti.jpg",
      subtitle: "Aarti of Lord Ganesha",
      link: "/ganesh-aarti"
    },
    {
      name: "Vegetation Goddess",
      title: "Shakambhari Mata Aarti",
      img: "./Lord/ShakambhariAarti.jpg",
      subtitle: "Aarti of Goddess Shakambhari",
      link: "/shakambhari-aarti"
    },
    {
      name: "Divine Warrior",
      title: "Kartikeya Ji Aarti",
      img: "./Lord/KartikeyaAarti.jpg",
      subtitle: "Aarti of Lord Kartikeya",
      link: "/kartikeya-aarti"
    },
    {
      name: "Divine Architect",
      title: "Vishwakarma Ji Aarti",
      img: "./Lord/VishwakarmaAarti.jpg",
      subtitle: "Aarti of Lord Vishwakarma",
      link: "/vishwakarma-aarti"
    },
    {
      name: "Goddess of Power",
      title: "Kaali Mata Aarti",
      img: "./Lord/KaaliAarti.jpg",
      subtitle: "Aarti of Goddess Kali",
      link: "/kaali-aarti"
    },
    {
      name: "Protector God",
      title: "Hanuman Ji Aarti",
      img: "./Lord/HanumanJiAarti.jpg",
      subtitle: "Aarti of Lord Hanuman",
      link: "/hanuman-aarti"
    },
    {
      name: "Preserver of Universe",
      title: "Vishnu Ji Aarti",
      img: "./Lord/VishnuJiAarti.jpg",
      subtitle: "Aarti of Lord Vishnu",
      link: "/vishnu-aarti"
    },
    {
      name: "God of Justice",
      title: "Shani Ji Aarti",
      img: "./Lord/ShaniJiAarti.jpg",
      subtitle: "Aarti of Lord Shani",
      link: "/shani-aarti"
    },
    {
      name: "Goddess of Peace",
      title: "Shantadurga Mata Aarti",
      img: "./Lord/ShantaDurgaMaAarti.jpg",
      subtitle: "Aarti of Shantadurga Mata",
      link: "/shantadurga-aarti"
  }

  ];

  const content = {
    EN: {
      heroTitle: "The Essence of Aarti",
      heroDesc: "Aarti is more than just a ritual; it's a profound spiritual experience, a vibrant offering of light, devotion, and heartfelt gratitude to the divine. This sacred Hindu practice purifies the soul, calms the mind, and fills the environment with an overflow of positive energy and spiritual well-being. Immerse yourself in its essence and explore various Aartis, each a unique pathway to inner peace.",
      exploreBtn: "Explore Aartis",
      benefitsTitle: "Benefits of Chanting Aarti",
      benefitsDesc: "Aarti offers a multitude of benefits that extend beyond the spiritual realm. It **invokes auspicious divine blessings**, fostering spiritual positivity and a deeper connection with the divine. The practice also **calms the restless mind**, enhancing mental clarity and improving concentration for a more focused meditation. Through sacred sounds and the purifying light of the flame, Aarti **cleanses the surrounding atmosphere**, dispelling negativity and promoting a serene environment. Furthermore, it significantly **reduces daily stress and anxiety**, cultivating a profound sense of inner peace and tranquility. Participating in Aarti **enhances overall spiritual well-being**, connecting individuals to their higher selves and fostering significant spiritual growth. When performed collectively, it also **fosters a strong sense of community and shared devotion**, strengthening spiritual bonds among participants.",
      typesTitle: "Diverse Forms of Aarti",
      typesDesc: "Aarti manifests in diverse forms, each with its unique charm and significance. The most common is the **Lamp Aarti**, performed with lit oil lamps (diyas) or camphor, symbolizing the offering of pure light to the deity. Another powerful form is the **Conch Aarti**, which involves the auspicious blowing of the Shankh (conch shell), believed to create sacred vibrations that purify the space. Finally, the **Bell Aarti** is accompanied by the rhythmic ringing of bells, which not only purifies the air but also invokes the direct presence of the divine.",
      lampAarti: "Lamp Aarti",
      conchAarti: "Conch Aarti",
      bellAarti: "Bell Aarti",
      lampAartiDesc: "The most common form, performed with lit oil lamps (diyas) or camphor, symbolizing the offering of light.",
      conchAartiDesc: "Involves the auspicious blowing of the Shankh (conch shell), creating sacred vibrations.",
      bellAartiDesc: "Accompanied by the rhythmic ringing of bells, which purifies the air and invokes divine presence.",
      discoverAartis: "Discover Devotional Aartis",
      footerText: "Divine Bhajans. All rights reserved."
    },
    HI: {
      heroTitle: "आरती का सार",
      heroDesc: "आरती केवल एक अनुष्ठान नहीं है; यह एक गहरा आध्यात्मिक अनुभव है, जो प्रकाश, भक्ति और कृतज्ञता की एक जीवंत भेंट है। यह पवित्र हिंदू प्रथा आत्मा को शुद्ध करती है, मन को शांत करती है, और वातावरण को सकारात्मक ऊर्जा और आध्यात्मिक कल्याण से भर देती है। इसके सार में डूबें और विभिन्न आरतियों का अन्वेषण करें, प्रत्येक आंतरिक शांति का एक अनूठा मार्ग है।",
      exploreBtn: "आरतियाँ देखें",
      benefitsTitle: "आरती के लाभ",
      benefitsDesc: "आरती कई लाभ प्रदान करती है जो आध्यात्मिक क्षेत्र से परे हैं। यह **शुभ दिव्य आशीर्वाद** का आह्वान करती है, आध्यात्मिक सकारात्मकता और दिव्य क्षेत्र के साथ गहरा संबंध स्थापित करती है। यह अभ्यास **अशांत मन को भी शांत करता है**, मानसिक स्पष्टता बढ़ाता है और अधिक केंद्रित ध्यान के लिए एकाग्रता में सुधार करता है। पवित्र ध्वनियों और लौ के शुद्धिकरण प्रकाश के माध्यम से, आरती **आसपास के वातावरण को शुद्ध करती है**, नकारात्मकता को दूर करती है और एक शांत वातावरण को बढ़ावा देती है। इसके अलावा, यह दैनिक **तनाव और चिंता को काफी कम करता है**, हृदय के भीतर गहरी आंतरिक शांति और शांति पैदा करता है। सामूहिक रूप से किए जाने पर, आरती **समृद्धि आध्यात्मिक कल्याण** को बढ़ाती है, व्यक्तियों को उनके उच्च आत्म से जोड़ती है और आध्यात्मिक विकास को बढ़ावा देती है। यह **समुदाय और साझा भक्ति की एक मजबूत भावना** को भी बढ़ावा देती है, आध्यात्मिक बंधनों को मजबूत करती है।",
      typesTitle: "आरती के विविध रूप",
      typesDesc: "आरती विविध रूपों में प्रकट होती है, प्रत्येक का अपना अनूठा आकर्षण और महत्व है। सबसे सामान्य रूप **दीप आरती** है, जो जलते हुए तेल के दीपक (दीये) या कपूर से की जाती है, जो प्रकाश की पेशकश का प्रतीक है। एक और शक्तिशाली रूप **शंख आरती** है, जिसमें शंख (शंख) का शुभ नाद शामिल है, जो पवित्र कंपन पैदा करने वाला माना जाता है जो अंतरिक्ष को शुद्ध करता है। अंत में, **घंटा आरती** घंटियों की लयबद्ध ध्वनि के साथ होती है, जो न केवल हवा को शुद्ध करती है बल्कि दिव्य उपस्थिति का भी आह्वान करती है।",
      lampAarti: "दीप आरती",
      conchAarti: "शंख आरती",
      bellAarti: "घंटा आरती",
      lampAartiDesc: "सबसे सामान्य रूप, तेल के दीपक (दीये) या कपूर से की जाती है, जो प्रकाश की पेशकश का प्रतीक है।",
      conchAartiDesc: "शंख (शंख) के शुभ नाद को शामिल करती है, जो पवित्र कंपन पैदा करता है।",
      bellAartiDesc: "घंटियों की लयबद्ध ध्वनि के साथ होती है, जो हवा को शुद्ध करती है और दिव्य उपस्थिति का आह्वान करती है।",
      discoverAartis: "भक्ति आरतियाँ खोजें",
      footerText: "दिव्य भजन। सर्वाधिकार सुरक्षित।"
    }
  };

  const currentContent = isHindi ? content.HI : content.EN;

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 text-gray-800 font-sans">
      <Navbar />

      {/* Hero Section - A more impactful introduction */}
      <section className="relative bg-orange-100 py-16 px-4 md:px-8 text-center shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-pattern-light opacity-30 animate-pulse-light"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-orange-800 mb-6 drop-shadow-md animate-fade-in-down">
            {currentContent.heroTitle.split('Aarti')[0]}
            <span className="text-amber-600">Aarti</span>
            {currentContent.heroTitle.split('Aarti')[1]}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 animate-fade-in delay-200">
            {currentContent.heroDesc}
          </p>
          <Link to="#aarti-list" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out animate-bounce-in delay-500">
            {currentContent.exploreBtn}
          </Link>
        </div>
      </section>

      {/* Aarti Cards Section */}
      <section id="aarti-list" className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-orange-700 mb-12 animate-fade-in-down delay-1700">
            {currentContent.discoverAartis}
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cardData.map((item, index) => (
              <Aarticard
                key={index}
                name={item.name}
                title={item.title}
                img={item.img}
                subtitle={item.subtitle}
                link={item.link}
                className={`animate-fade-in-up delay-${1800 + index * 100}`}
                language={language} // Pass language to Aarticard if it supports it
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm bg-yellow-100">
        <p>&copy; {new Date().getFullYear()} {currentContent.footerText}</p>
      </footer>
    </div>
  );
};

export default Aarti;