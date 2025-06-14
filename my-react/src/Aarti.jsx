import React from 'react';

const Aarti = ({ language }) => {
  const content = {
    en: {
      title: 'Aarti',
      description1: `The Aarti ceremony is a deeply spiritual and visually stunning ritual performed on the banks
        of the sacred River Ganga in Varanasi. Devotees and priests offer light (usually fire from
        lamps) to the deities, accompanied by chanting, music, and the sound of bells. It symbolizes
        the removal of darkness and the invocation of divine blessings.`,
      description2: `Whether you're seeking peace, blessings, or a connection to something greater — experiencing
        an Aarti is a must when in Varanasi.`,
      note: 'Join the ceremony every evening at Dashashwamedh Ghat.',
    },
    hi: {
      title: 'आरती समारोह',
      description1: `आरती समारोह एक अत्यंत आध्यात्मिक और मनमोहक अनुष्ठान है, जो वाराणसी में पवित्र गंगा नदी के किनारे किया जाता है। भक्त और पुजारी दीयों की रोशनी (आमतौर पर दीपों से) देवताओं को अर्पित करते हैं, जिसमें मंत्रोच्चारण, संगीत और घंटियों की ध्वनि होती है। यह अंधकार के निवारण और दिव्य आशीर्वाद की प्रार्थना का प्रतीक है।`,
      description2: `चाहे आप शांति, आशीर्वाद या किसी उच्चतर शक्ति से जुड़ना चाहते हों — वाराणसी में आरती अनुभव करना अनिवार्य है।`,
      note: 'प्रत्येक शाम दशाश्वमेध घाट पर इस समारोह में शामिल हों।',
    },
  };

  const t = content[language.toLowerCase()] || content.en;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-center">{t.title}</h1>
      <img
        src="./Varanasi/Aartiview.jpg"
        alt="Aarti ceremony on the Ganges"
        className="w-full h-64 object-cover rounded mb-6"
      />
      <p className="text-lg text-gray-700 leading-relaxed mb-4">{t.description1}</p>
      <p className="text-md text-gray-600 mb-4">{t.description2}</p>
      <p className="text-sm text-gray-500 italic">{t.note}</p>
    </div>
  );
};

export default Aarti;
