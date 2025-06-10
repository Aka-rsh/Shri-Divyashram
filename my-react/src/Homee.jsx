import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';


// Receive the 'language' prop here
const Homee = ({ language }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const scrollRef = useRef(null);

  // Define content for both languages
  const content = {
    EN: {
      welcome: "Welcome to Shri Divyashram",
      welcomeDescription: `At Divyashram, we are devoted to preserving our Sanskriti, nurturing spiritual values, and serving humanity. As a non-profit trust, our mission spans from promoting Sanskrit education, maintaining Gaushalas, organizing charity drives, to supporting the underprivileged through food, education, healthcare, and disaster relief. We also focus on environmental sustainability and cultural heritage.`,
      connectWithUs: "Connect with Us",
      getInTouch: "Get in Touch",
      fullName: "Full Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      yourMessage: "Your Message",
      submit: "Submit",
      coreObjectives: "Our Core Objectives: Building a Better Tomorrow",
      objectivesList: [
        "(a) To establish and maintain education and Hindu religious places for Sanskrit education and cultural development, free or at nominal cost to all.",
        "(b) To run and build Sanskrit, religious institutions, and Gaushalas (cow shelters).",
        "(c) To provide financial help to needy and poor students.",
        "(d) To organize tours and travels to historical places.",
        "(e) To distribute free food to poor and needy persons at different times and places.",
        "(f) To buy, lease, or sell movable or immovable property for trust objectives.",
        "(g) To establish schools, colleges, universities, and educational institutions including technical and medical ones.",
        "(h) To support educational institutions with grants, aid, or other assistance to spread knowledge and education to the public.",
        "(i) To build and run dharmshalas, ghats, hospitals, bridges, etc., for public use without caste or creed discrimination.",
        "(j) To promote and support arts, literature, history, and research in India.",
        "(k) To develop and maintain parks, gardens, gyms, and sports clubs for public use.",
        "(l) To support orphanages, old-age homes, and institutions for poor, destitute, widows, and the aged.",
        "(m) To help and educate the physically or mentally challenged, providing them with food, clothing, or shelter.",
        "(n) To provide aid during natural disasters and support relief work.",
        "(o) To promote sanitation and cleanliness in cities, villages, and water bodies.",
        "(p) To start and maintain Gaushalas and care for cows.",
        "(q) To take all actions necessary for the fulfillment of these objectives as decided by the trustees.",
        "(r) To promote environmental development through activities like plantation, etc.",
        "(s) To organize meetings/seminars to educate the public and protect the downtrodden from exploitation.",
      ],
      services: "Services",
      kashiDarshan: "Kashi Darshan",
      hotels: "Hotels",
      boating: "Boating",
      cabBooking: "Cab Booking",
      joinCommunity: "Join Our Community",
      joinCommunityDescription: `Be a part of something greater — a movement rooted in tradition, compassion, and service. Whether you’re a student, a volunteer, a donor, or a supporter of Sanatan Dharma, your presence matters. Connect with us to grow spiritually, serve selflessly, and uplift lives together.`,
      joinNow: "Join Now",
      communitySays: "What Our Community Says",
      feedback1: {
        text: `“Volunteering at Shri Divyashram opened my eyes to the true meaning of seva. Every action here is done with love and purpose. From teaching children to helping elders, it's a place where humanity thrives through dharma.”`,
        author: "Anjali Mehra, Volunteer",
      },
      feedback2: {
        text: `“As a donor, I’ve always wanted to contribute to something truly impactful. Shri Divyashram is exactly that. Transparent, spiritual, and deeply rooted in Sanatan values. I can see the change my support creates.”`,
        author: "Rajesh Kumar, Donor",
      },
      feedback3: {
        text: `“I came here searching for spiritual peace, and I found a family. The daily rituals, the Vedic teachings, and the serene environment of the ashram changed my perspective on life.”`,
        author: "Kavita Sharma, Spiritual Seeker",
      },
      feedback4: {
        text: `“Visiting Shri Divyashram with my family was incredibly fulfilling. The blend of culture, care, and community is unmatched. It’s a place where ancient wisdom meets modern compassion. I left with hope in my heart.”`,
        author: "Suresh Bansal, Visitor",
      },
    },
    HI: {
      welcome: "श्री दिव्याश्रम में आपका स्वागत है",
      welcomeDescription: `दिव्याश्रम में, हम अपनी संस्कृति को संरक्षित करने, आध्यात्मिक मूल्यों का पोषण करने और मानवता की सेवा करने के लिए समर्पित हैं। एक गैर-लाभकारी ट्रस्ट के रूप में, हमारा मिशन संस्कृत शिक्षा को बढ़ावा देने, गौशालाओं का रखरखाव करने, धर्मार्थ अभियान आयोजित करने से लेकर भोजन, शिक्षा, स्वास्थ्य सेवा और आपदा राहत के माध्यम से वंचितों का समर्थन करने तक फैला हुआ है। हम पर्यावरणीय स्थिरता और सांस्कृतिक विरासत पर भी ध्यान केंद्रित करते हैं।`,
      connectWithUs: "हमसे जुड़ें",
      getInTouch: "संपर्क करें",
      fullName: "पूरा नाम",
      emailAddress: "ईमेल पता",
      phoneNumber: "फ़ोन नंबर",
      yourMessage: "आपका संदेश",
      submit: "भेजें",
      coreObjectives: "हमारे मुख्य उद्देश्य: एक बेहतर कल का निर्माण",
      objectivesList: [
        "(क) संस्कृत शिक्षा और सांस्कृतिक विकास के लिए शिक्षा और हिंदू धार्मिक स्थानों को स्थापित करना और बनाए रखना, सभी के लिए मुफ्त या मामूली लागत पर।",
        "(ख) संस्कृत, धार्मिक संस्थाओं और गौशालाओं का संचालन और निर्माण करना।",
        "(ग) जरूरतमंद और गरीब छात्रों को वित्तीय सहायता प्रदान करना।",
        "(घ) ऐतिहासिक स्थानों की यात्राओं का आयोजन करना।",
        "(ङ) विभिन्न समयों और स्थानों पर गरीब और जरूरतमंद व्यक्तियों को मुफ्त भोजन वितरित करना।",
        "(च) ट्रस्ट के उद्देश्यों के लिए चल या अचल संपत्ति खरीदना, पट्टे पर देना या बेचना।",
        "(छ) स्कूल, कॉलेज, विश्वविद्यालय और तकनीकी और चिकित्सा सहित शैक्षणिक संस्थानों की स्थापना करना।",
        "(ज) जनता में ज्ञान और शिक्षा फैलाने के लिए अनुदान, सहायता या अन्य सहायता के साथ शैक्षणिक संस्थानों का समर्थन करना।",
        "(झ) जाति या पंथ के भेदभाव के बिना सार्वजनिक उपयोग के लिए धर्मशालाओं, घाटों, अस्पतालों, पुलों आदि का निर्माण और संचालन करना।",
        "(ञ) भारत में कला, साहित्य, इतिहास और अनुसंधान को बढ़ावा देना और समर्थन करना।",
        "(ट) सार्वजनिक उपयोग के लिए पार्क, उद्यान, जिम और स्पोर्ट्स क्लब विकसित करना और बनाए रखना।",
        "(ठ) अनाथालयों, वृद्धाश्रमों और गरीब, निराश्रित, विधवाओं और वृद्धों के लिए संस्थानों का समर्थन करना।",
        "(ड) शारीरिक या मानसिक रूप से विकलांगों की मदद और शिक्षा करना, उन्हें भोजन, कपड़े या आश्रय प्रदान करना।",
        "(ढ) प्राकृतिक आपदाओं के दौरान सहायता प्रदान करना और राहत कार्य का समर्थन करना।",
        "(ण) शहरों, गांवों और जल निकायों में स्वच्छता और साफ-सफाई को बढ़ावा देना।",
        "(त) गौशालाएं शुरू करना और बनाए रखना और गायों की देखभाल करना।",
        "(थ) ट्रस्टियों द्वारा तय किए गए इन उद्देश्यों की पूर्ति के लिए सभी आवश्यक कार्रवाई करना।",
        "(द) वृक्षारोपण आदि गतिविधियों के माध्यम से पर्यावरणीय विकास को बढ़ावा देना।",
        "(ध) जनता को शिक्षित करने और शोषितों को शोषण से बचाने के लिए बैठकें/सेमिनार आयोजित करना।",
      ],
      services: "सेवाएं",
      kashiDarshan: "काशी दर्शन",
      hotels: "होटल",
      boating: "नौका विहार",
      cabBooking: "कैब बुकिंग",
      joinCommunity: "हमारे समुदाय में शामिल हों",
      joinCommunityDescription: `कुछ बड़ा का हिस्सा बनें — परंपरा, करुणा और सेवा में निहित एक आंदोलन। चाहे आप एक छात्र हों, एक स्वयंसेवक हों, एक दाता हों, या सनातन धर्म के समर्थक हों, आपकी उपस्थिति मायने रखती है। आध्यात्मिक रूप से बढ़ने, निःस्वार्थ भाव से सेवा करने और साथ मिलकर जीवन उत्थान करने के लिए हमसे जुड़ें।`,
      joinNow: "अभी शामिल हों",
      communitySays: "हमारा समुदाय क्या कहता है",
      feedback1: {
        text: `“श्री दिव्याश्रम में स्वयंसेवा करने से मुझे सेवा का सही अर्थ समझ में आया। यहां हर कार्य प्रेम और उद्देश्य के साथ किया जाता है। बच्चों को पढ़ाने से लेकर बुजुर्गों की मदद करने तक, यह एक ऐसी जगह है जहाँ धर्म के माध्यम से मानवता पनपती है।”`,
        author: "अंजलि मेहरा, स्वयंसेवक",
      },
      feedback2: {
        text: `“एक दाता के रूप में, मैं हमेशा कुछ वास्तव में प्रभावशाली में योगदान करना चाहता था। श्री दिव्याश्रम ठीक वैसा ही है। पारदर्शी, आध्यात्मिक, और सनातन मूल्यों में गहराई से निहित। मैं देख सकता हूँ कि मेरा समर्थन क्या बदलाव लाता है।”`,
        author: "राजेश कुमार, दाता",
      },
      feedback3: {
        text: `“मैं यहाँ आध्यात्मिक शांति की तलाश में आया था, और मुझे एक परिवार मिला। आश्रम के दैनिक अनुष्ठान, वैदिक शिक्षाएँ, और शांत वातावरण ने जीवन के प्रति मेरे दृष्टिकोण को बदल दिया।”`,
        author: "कविता शर्मा, आध्यात्मिक साधक",
      },
      feedback4: {
        text: `“अपने परिवार के साथ श्री दिव्याश्रम का दौरा करना अविश्वसनीय रूप से संतोषजनक था। संस्कृति, देखभाल और समुदाय का मिश्रण बेजोड़ है। यह एक ऐसी जगह है जहाँ प्राचीन ज्ञान आधुनिक करुणा से मिलता है। मैं अपने दिल में आशा लेकर लौटा।”`,
        author: "सुरेश बंसल, आगंतुक",
      },
    },
  };

  // Get the current language content
  const currentContent = content[language];

  // Auto-scroll for services
  useEffect(() => {
    const container = scrollRef.current;
    let scrollPosition = 0;
    const scrollStep = 320;

    const interval = setInterval(() => {
      if (!container) return;

      scrollPosition += scrollStep;

      if (scrollPosition >= container.scrollWidth - container.clientWidth) {
        scrollPosition = 0;
      }

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <Home />

      <div className="bg-gradient-to-br from-blue-50 to-white text-gray-800 px-4 sm:px-6 md:px-8 lg:px-12 py-16 font-sans max-w-screen overflow-x-hidden">
        <section className="flex flex-col md:flex-row items-center md:justify-between mb-16">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8">
            <h2 className="text-4xl text-amber-500 md:text-5xl font-extrabold mb-4 leading-tight">
              {currentContent.welcome}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line break-words">
              {currentContent.welcomeDescription.split('<span').map((part, index, arr) => {
                if (index === 0) return part;
                const [tagContent, rest] = part.split('>', 1);
                const [word, afterWord] = rest.split('</span', 1);
                const colorClass = tagContent.match(/text-\[([^\]]+)\]/)?.[1] || '';
                const fontClass = tagContent.includes('font-bold') ? 'font-bold' : tagContent.includes('font-semibold') ? 'font-semibold' : '';

                return (
                  <span key={index} className={`${fontClass} text-[${colorClass}]`}>
                    {word}
                    {afterWord.split('</span')[1]}
                  </span>
                );
              })}
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
            <img
              src="./logo.png"
              alt="Divyashram Logo"
              className="w-40 sm:w-48 md:w-56 h-auto object-contain mb-8 rounded-full shadow-xl border-8 border-[#FF9B45]"
              style={{ filter: 'drop-shadow(0 0 12px #FF9B45)' }}
            />
            <button
              className="bg-[#FF9B45] text-white font-bold text-xl px-10 py-4 rounded-full hover:bg-[#e68a32] transition duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FF9B45] transform hover:scale-105"
              onClick={() => setIsPopupOpen(true)}
            >
              {currentContent.connectWithUs}
            </button>
          </div>
        </section>

        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-2 sm:px-4">
            <div className="bg-white rounded-2xl shadow-3xl p-6 sm:p-8 w-full max-w-lg relative">
              <button
                className="absolute top-4 right-5 text-4xl font-extrabold text-gray-500 hover:text-gray-900"
                onClick={() => setIsPopupOpen(false)}
                aria-label="Close popup"
              >
                &times;
              </button>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">{currentContent.getInTouch}</h2>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSfKliaDcA-MU2-koEHog8G_0rocdNvL_ZbzPC5DiYwdhZdSWg/formResponse"
                method="POST"
                target="_blank"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" name="entry.2005620554" placeholder={currentContent.fullName} required className="p-4 border rounded-lg text-lg w-full" />
                  <input type="email" name="entry.1045781291" placeholder={currentContent.emailAddress} required className="p-4 border rounded-lg text-lg w-full" />
                </div>
                <input type="tel" name="entry.1166974658" placeholder={currentContent.phoneNumber} required className="p-4 border rounded-lg text-lg w-full" />
                <textarea name="entry.839337160" placeholder={currentContent.yourMessage} rows="5" required className="p-4 border rounded-lg text-lg w-full resize-y" />
                <button type="submit" className="w-full bg-[#FF9B45] text-white font-bold text-xl py-4 rounded-lg hover:bg-[#e68a32] transition transform hover:scale-105">
                  {currentContent.submit}
                </button>
              </form>
            </div>
          </div>
        )}

        <section className="mt-20 bg-gradient-to-r from-yellow-200 to-[#A4CCD9] p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl border border-blue-100">
          <h1 className="text-4xl md:text-5xl mb-10 text-center text-black">
            {currentContent.coreObjectives}
          </h1>
          <ul className="space-y-5 text-lg md:text-xl text-gray-700 list-inside">
            {currentContent.objectivesList.map((obj, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  <strong className="text-yellow-500">{obj.slice(0, 3)}</strong>{obj.slice(3)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Service Section */}
      <div className="flex flex-col justify-center bg-[#A7C1A8] w-full py-12 px-4 mb-8">
        <h1 className="text-4xl text-center underline underline-offset-8 decoration-black mb-10 font-bold tracking-wide">
          {currentContent.services}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Service Card 1 */}
          <Link to="/KashiDarshan">
            <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white">
              <h2 className="bg-[#D1D8BE] text-2xl text-center py-2">{currentContent.kashiDarshan}</h2>
              <img
                loading="lazy"
                src="./Photos/p2.jpg"
                alt={currentContent.kashiDarshan}
                className="object-cover w-full h-[250px] aspect-[4/3] bg-gray-200"
              />
            </div>
          </Link>

          {/* Service Card 2 */}
          <Link to="/HotelBooking">
            <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white">
              <h2 className="bg-[#D1D8BE] text-2xl text-center py-2">{currentContent.hotels}</h2>
              <img
                loading="lazy"
                src="./Photos/p7.jpg"
                alt={currentContent.hotels}
                className="object-cover w-full h-[250px] aspect-[4/3] bg-gray-200"
              />
            </div>
          </Link>

          {/* Service Card 3 */}
          <Link to="/BoatBooking">
            <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white">
              <h2 className="bg-[#D1D8BE] text-2xl text-center py-2">{currentContent.boating}</h2>
              <img
                loading="lazy"
                src="./Photos/v1.jpg"
                alt={currentContent.boating}
                className="object-cover w-full h-[250px] aspect-[4/3] bg-gray-200"
              />
            </div>
          </Link>

          {/* Service Card 4 */}
          <Link to="/CabBooking">
            <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white">
              <h2 className="bg-[#D1D8BE] text-2xl text-center py-2">{currentContent.cabBooking}</h2>
              <img
                loading="lazy"
                src="./Photos/cabbooking.png"
                alt={currentContent.cabBooking}
                className="object-cover w-full h-[250px] aspect-[4/3] bg-gray-200"
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Join Our Community Section */}
      <div className="bg-yellow-200 rounded-lg shadow-md p-6 md:p-8 mb-8 mx-4 md:mx-auto max-w-5xl overflow-x-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-orange-800 mb-4">
          {currentContent.joinCommunity.split('<span').map((part, index, arr) => {
            if (index === 0) return part;
            const [tagContent, rest] = part.split('>', 1);
            const [word, afterWord] = rest.split('</span', 1);
            const colorClass = tagContent.match(/text-\[([^\]]+)\]/)?.[1] || '';
            const fontClass = tagContent.includes('font-bold') ? 'font-bold' : tagContent.includes('font-semibold') ? 'font-semibold' : '';

            return (
              <span key={index} className={`${fontClass} ${colorClass}`}>
                {word}
                {afterWord.split('</span')[1]}
              </span>
            );
          })}
        </h2>

        <p className="text-lg leading-relaxed text-yellow-900 text-center max-w-3xl mx-auto">
          {currentContent.joinCommunityDescription.split('<span').map((part, index, arr) => {
            if (index === 0) return part;
            const [tagContent, rest] = part.split('>', 1);
            const [word, afterWord] = rest.split('</span', 1);
            const colorClass = tagContent.match(/text-\[([^\]]+)\]/)?.[1] || '';
            const fontClass = tagContent.includes('font-bold') ? 'font-bold' : tagContent.includes('font-semibold') ? 'font-semibold' : '';

            return (
              <span key={index} className={`${fontClass} ${colorClass}`}>
                {word}
                {afterWord.split('</span')[1]}
              </span>
            );
          })}
        </p>

        {/* Optional Call to Action Button */}
        <div className="mt-6 text-center">
          <button className="bg-orange-700 hover:bg-orange-800 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md">
            {currentContent.joinNow}
          </button>
        </div>
      </div>

      {/* Client Feedback Section */}
      <div className="bg-amber-100 rounded-lg shadow-md p-6 md:p-10 mb-10 mx-4 md:mx-auto max-w-6xl overflow-x-hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-orange-800 mb-10">
          {currentContent.communitySays}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Feedback 1 - Volunteer */}
          <div className="bg-white border-l-4 border-amber-600 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-800 italic leading-relaxed">
              {currentContent.feedback1.text.split('<span').map((part, index, arr) => {
                if (index === 0) return part;
                const [tagContent, rest] = part.split('>', 1);
                const [word, afterWord] = rest.split('</span', 1);
                const colorClass = tagContent.match(/text-\[([^\]]+)\]/)?.[1] || '';
                const fontClass = tagContent.includes('font-bold') ? 'font-bold' : tagContent.includes('font-semibold') ? 'font-semibold' : '';

                return (
                  <span key={index} className={`${fontClass} ${colorClass}`}>
                    {word}
                    {afterWord.split('</span')[1]}
                  </span>
                );
              })}
            </p>
            <p className="mt-4 text-right font-semibold text-yellow-900">— {currentContent.feedback1.author}</p>
          </div>

          {/* Feedback 2 - Donor */}
          <div className="bg-white border-l-4 border-orange-700 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-800 italic leading-relaxed">
              {currentContent.feedback2.text.split('<span').map((part, index, arr) => {
                if (index === 0) return part;
                const [tagContent, rest] = part.split('>', 1);
                const [word, afterWord] = rest.split('</span', 1);
                const colorClass = tagContent.match(/text-\[([^\]]+)\]/)?.[1] || '';
                const fontClass = tagContent.includes('font-bold') ? 'font-bold' : tagContent.includes('font-semibold') ? 'font-semibold' : '';

                return (
                  <span key={index} className={`${fontClass} ${colorClass}`}>
                    {word}
                    {afterWord.split('</span')[1]}
                  </span>
                );
              })}
            </p>
            <p className="mt-4 text-right font-semibold text-yellow-900">— {currentContent.feedback2.author}</p>
          </div>

          {/* Feedback 3 - Spiritual Seeker */}
          <div className="bg-white border-l-4 border-yellow-600 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-800 italic leading-relaxed">
              {currentContent.feedback3.text.split('<span').map((part, index, arr) => {
                if (index === 0) return part;
                const [tagContent, rest] = part.split('>', 1);
                const [word, afterWord] = rest.split('</span', 1);
                const colorClass = tagContent.match(/text-\[([^\]]+)\]/)?.[1] || '';
                const fontClass = tagContent.includes('font-bold') ? 'font-bold' : tagContent.includes('font-semibold') ? 'font-semibold' : '';

                return (
                  <span key={index} className={`${fontClass} ${colorClass}`}>
                    {word}
                    {afterWord.split('</span')[1]}
                  </span>
                );
              })}
            </p>
            <p className="mt-4 text-right font-semibold text-yellow-900">— {currentContent.feedback3.author}</p>
          </div>

          {/* Feedback 4 - Visitor */}
          <div className="bg-white border-l-4 border-red-700 p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-800 italic leading-relaxed">
              {currentContent.feedback4.text.split('<span').map((part, index, arr) => {
                if (index === 0) return part;
                const [tagContent, rest] = part.split('>', 1);
                const [word, afterWord] = rest.split('</span', 1);
                const colorClass = tagContent.match(/text-\[([^\]]+)\]/)?.[1] || '';
                const fontClass = tagContent.includes('font-bold') ? 'font-bold' : tagContent.includes('font-semibold') ? 'font-semibold' : '';

                return (
                  <span key={index} className={`${fontClass} ${colorClass}`}>
                    {word}
                  </span>
                );
              })}
            </p>
            <p className="mt-4 text-right font-semibold text-yellow-900">— {currentContent.feedback4.author}</p>
          </div>

        </div>
      </div>


      <Footer />
    </>
  );
};

export default Homee;