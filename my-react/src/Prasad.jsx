import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const prasadItems = [
  { en: 'Gangajal', hi: 'गंगाजल', image: './Varanasi/GangaJal.png' },
  { en: 'Rudraksh Mala', hi: 'रुद्राक्ष माला', image: './Varanasi/RudrakshaMala.jpeg' },
  { en: 'Kashi Vishwanath Mandir Prasad', hi: 'काशी विश्वनाथ मंदिर प्रसाद', image: './Varanasi/KashivishwanathPrasad.jpeg' },
  { en: 'Annapurna Mata Mandir Prasad', hi: 'अन्नपूर्णा माता मंदिर प्रसाद', image: './Varanasi/Annapurnamata.jpeg' },
  { en: 'Mahadev Bhasm (Bhabhut)', hi: 'महादेव भस्म (भभूत)', image: './Varanasi/Bhasma.png' },
  { en: 'Sankat Mochan Prasad', hi: 'संकट मोचन प्रसाद', image: './Varanasi/SankatMochanPrasad.jpeg' },
  { en: 'Kal Bhairav Prasad + Ganda', hi: 'काल भैरव प्रसाद + गंडा', image: './Varanasi/KalBhairavPrasadband.jpeg' },
];

const Prasad = ({ language }) => {
  const currentLangKey = language === 'EN' ? 'en' : 'hi';

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      <Navbar />

      {/* 🎁 Floating Prasad Package Offer - Vertical on Right */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 p-2"> {/* Key changes here */}
        <div className="relative bg-gradient-to-r from-amber-500 to-red-500 text-white font-extrabold text-center
                        px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-xl
                        animate-pulse hover:animate-bounce cursor-pointer select-none
                        border-2 border-white transform hover:scale-105 transition-transform duration-200 ease-in-out
                        max-w-[160px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-xs mx-auto">
          <span className="block text-xs sm:text-sm md:text-base leading-tight">
            {currentLangKey === 'en' ? 'Complete Divine Prasad Pack' : 'संपूर्ण दिव्य प्रसाद पैकेज'}
          </span>
          <span className="block text-lg sm:text-xl md:text-2xl mt-1 leading-none">
            {currentLangKey === 'en' ? 'Only ₹501!' : 'केवल ₹501 में!'}
          </span>
          {/* Optional: Add a small arrow or icon to suggest clicking/scrolling */}
          <span className="absolute -bottom-2 right-0 left-0 text-center">
             <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </span>
        </div>
      </div>

      <header className="text-center px-4 pt-10 pb-6">
        <h1 className="text-4xl font-bold underline underline-offset-4 decoration-amber-500 mb-4">
          {currentLangKey === 'en' ? 'Divyashram Prasad Bhandar' : 'दिव्याश्रम प्रसाद भंडार'}
        </h1>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          {currentLangKey === 'en'
            ? 'Receive the divine blessings of Kashi right at your doorstep. Each prasad item is sanctified and carefully packed, carrying spiritual energy and devotion from Varanasi’s sacred temples.'
            : 'काशी के दिव्य आशीर्वाद अब सीधे आपके घर तक। प्रत्येक प्रसाद आइटम को मंत्रों द्वारा शुद्ध कर भक्तिभाव से पैक किया गया है, जिसमें वाराणसी के पवित्र मंदिरों से आध्यात्मिक ऊर्जा और भक्ति निहित है।'}
        </p>
      </header>

      <section className="bg-amber-100 py-10">
        <h2 className="text-2xl text-center font-semibold text-amber-800 mb-10">
          {currentLangKey === 'en' ? 'Complete Prasad Package Includes:' : 'संपूर्ण प्रसाद पैकेज में शामिल हैं:'}
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4">
          {prasadItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-md border-4 border-white bg-white">
                <img src={item.image} alt={item[currentLangKey]} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-amber-800">{item[currentLangKey]}</h3>
            </div>
          ))}
        </div>

        {/* Note - UPDATED */}
        <div className="text-center mt-8 px-4">
          <p className="bg-white inline-block px-4 py-2 rounded shadow text-sm text-gray-700 font-medium border border-amber-400">
            🔔 <strong>{currentLangKey === 'en' ? 'Note:' : 'नोट:'}</strong>{' '}
            {currentLangKey === 'en'
              ? 'Every prasad item is purified and energized (abhimantrit) by Pandit Ji before packaging.'
              : 'हर प्रसाद आइटम को पंडित जी द्वारा शुद्ध और अभिमंत्रित कर भेजा जाता है।'}
          </p>
        </div>
      </section>

      <section className="bg-white py-14 px-4">
        <div className="max-w-2xl mx-auto shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            {currentLangKey === 'en' ? 'Book the Complete Prasad Package' : 'संपूर्ण प्रसाद पैकेज बुक करें'}
          </h2>
          <p className="text-gray-700 mb-5">
            {currentLangKey === 'en'
              ? 'Get all the divine items listed above in one holy bundle for just '
              : 'ऊपर दिए गए सभी दिव्य प्रसाद आइटम एक साथ इस पवित्र पैकेज में — केवल '}
            <span className="text-green-700 font-semibold">₹501 + {currentLangKey === 'en' ? 'delivery' : 'डिलीवरी'}</span>.
          </p>
          <a
            href={`https://wa.me/917007094655?text=${encodeURIComponent(
              currentLangKey === 'en'
                ? 'Namaste 🙏, I would like to book the *complete Prasad package* for ₹501 + delivery charges. Please guide me further.'
                : 'नमस्ते 🙏, मैं *संपूर्ण प्रसाद पैकेज* ₹501 + डिलीवरी चार्ज के साथ बुक करना चाहता/चाहती हूँ। कृपया आगे की जानकारी दें।'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-medium transition"
          >
            {currentLangKey === 'en' ? 'Book via WhatsApp' : 'व्हाट्सएप से बुक करें'}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prasad;