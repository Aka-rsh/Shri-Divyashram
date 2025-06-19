import React from 'react';
import Navbar from './Navbar';
import Aarticard from './Aarticard';
import { Link } from 'react-router-dom';

const Mantra = ({ language = "EN" }) => {
  const isHindi = language === "HI";

  const cardData = [
    {
      name: "Preserver Mantra",
      title: "Narayana Mantra",
      img: "./Lord/NarayanJiMantra.jpg",
      subtitle: "Mantra dedicated to Lord Narayana",
      link: "/narayana-mantra"
    },
    {
      name: "Goddess of Power",
      title: "Kaali Mantra",
      img: "./Lord/KaaliAarti.jpg",
      subtitle: "Mantra of Goddess Kali",
      link: "/kaali-mantra"
    },
    {
      name: "Fire Deity",
      title: "Agni Mantra",
      img: "./Lord/SuryaDevChalisha.jpg",
      subtitle: "Sacred Fire Invocation",
      link: "/agni-mantra"
    },
    {
      name: "Rudra Form",
      title: "Maha Rudrabhishek Mantra",
      img: "./Lord/RudraAbhishekJiMantra.jpg",
      subtitle: "Powerful Shiv Mantra for Rudrabhishek",
      link: "/maha-rudrabhishek-mantra"
    },
    {
      name: "Divine Feminine",
      title: "Shakti Mantra",
      img: "./Lord/DurgaMataAarti.jpg",
      subtitle: "Mantra invoking Adi Shakti",
      link: "/shakti-mantra"
    },
    {
      name: "Devotee's Power",
      title: "Hanuman Mool Mantra",
      img: "./Lord/HanumanJiAarti.jpg",
      subtitle: "Root Mantra of Lord Hanuman",
      link: "/hanuman-mool-mantra"
    },
    {
      name: "Supreme Avatar",
      title: "Shri Krishna Mantra",
      img: "./Lord/Krishnaji.jpg",
      subtitle: "Mantra of Lord Krishna",
      link: "/krishna-mantra"
    },
    {
      name: "Principal Rudra",
      title: "Pramukh Rudra Mantra",
      img: "./Lord/PramukhRudraMantra.jpg",
      subtitle: "One of the key mantras from Rudra",
      link: "/pramukh-rudra-mantra"
    },
    {
      name: "Wisdom Planet",
      title: "Brihaspati Beej Mantra",
      img: "./Lord/BrihaspatiBeejMantra.jpg",
      subtitle: "Mantra of Jupiter (Guru)",
      link: "/brihaspati-beej-mantra"
    },
    {
      name: "Healing Deity",
      title: "Dhanwantri Mantra",
      img: "./Lord/Annapurnaaarti.jpg",
      subtitle: "Mantra for health and healing",
      link: "/dhanwantri-mantra"
    }
  ];

  const currentContent = {
    EN: {
      heroTitle: "Powerful Spiritual",
      heroDesc: "Mantras are sacred vibrations that invoke divine energies and transform consciousness. Chanting mantras purifies the mind, heals the body, and elevates the soul to a higher state of awareness. Each mantra holds unique energy—connect with these timeless chants to find balance, peace, and divine protection.",
      exploreBtn: "Explore Mantras",
      discoverAartis: "Discover Sacred Mantras",
      footerText: "Divine Bhajans. All rights reserved."
    },
    HI: {
      heroTitle: "शक्तिशाली आध्यात्मिक",
      heroDesc: "मंत्र पवित्र ध्वनियाँ हैं जो दिव्य शक्तियों को जागृत करती हैं और चेतना को रूपांतरित करती हैं। मंत्रों का जप मन को शुद्ध करता है, शरीर को स्वस्थ करता है और आत्मा को ऊँचे स्तर पर ले जाता है। हर मंत्र की अपनी अनूठी ऊर्जा होती है—इन कालातीत मंत्रों से जुड़ें और शांति, संतुलन और दिव्य संरक्षण प्राप्त करें।",
      exploreBtn: "मंत्र देखें",
      discoverAartis: "पवित्र मंत्रों की खोज करें",
      footerText: "दिव्य भजन। सर्वाधिकार सुरक्षित।"
    }
  }[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100 text-gray-800 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-orange-100 py-16 px-4 md:px-8 text-center shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-pattern-light opacity-30 animate-pulse-light"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-orange-800 mb-6 drop-shadow-md animate-fade-in-down">
            {currentContent.heroTitle} <span className="text-amber-600">Mantras</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 animate-fade-in delay-200">
            {currentContent.heroDesc}
          </p>
          <Link to="#mantra-list" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out animate-bounce-in delay-500">
            {currentContent.exploreBtn}
          </Link>
        </div>
      </section>

      {/* Mantra Cards Section */}
      <section id="mantra-list" className="py-16 px-4 md:px-8">
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
                language={language}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-600 text-sm bg-yellow-100">
        <p>&copy; {new Date().getFullYear()} {currentContent.footerText}</p>
      </footer>
    </div>
  );
};

export default Mantra;
