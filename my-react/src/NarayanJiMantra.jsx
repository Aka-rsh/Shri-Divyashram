import React from 'react';
import Navbar from './Navbar';

const NarayanJiMantra = ({ language }) => {
  const isHindi = language === "HI";

  const hindiContent = `
🔱 नारायण मंत्र 🔱

1. नारायण बीज मंत्र:
ॐ नमो नारायणाय।
अर्थ: "मैं भगवान नारायण को नमन करता हूँ।"
उपयोग: शांति, भक्ति, जीवन सुरक्षा, और अध्यात्मिक उन्नति के लिए।

2. अष्टाक्षर मंत्र:
ॐ नमो नारायणाय।
यह मंत्र विष्णु भक्तों द्वारा सबसे अधिक जपा जाता है।
जप करने से पापों का नाश होता है और मुक्ति की प्राप्ति होती है।

3. नारायण गायत्री मंत्र:
ॐ नारायणाय विद्महे।
वासुदेवाय धीमहि।
तन्नो विष्णुः प्रचोदयात्॥
अर्थ: "हम नारायण को जानें, वासुदेव का ध्यान करें, वह विष्णु हमें प्रेरणा दे।"

4. महानारायण रक्षा मंत्र:
ॐ नारायणाय विद्महे।
वासुदेवाय धीमहि।
तन्नो विष्णुः प्रचोदयात्॥
(इस मंत्र का नियमित जप करने से नकारात्मक शक्तियों से रक्षा होती है।)

5. विष्णु सहस्रनाम का प्रारंभिक मंत्र:
श्रीमन् नारायणो देवो, केशवः पुरुषोत्तमः।
सर्वदेवात्मको देवः, श्रीमद्भागवतप्रियः॥
अर्थ: "श्रीमान नारायण, केशव, पुरुषोत्तम, समस्त देवों की आत्मा हैं और उन्हें श्रीमद्भागवत अत्यंत प्रिय है।"

🌼 **जप विधि सुझाव**:
- तुलसी की माला से 108 बार जप करें।
- ब्रह्म मुहूर्त (4–6 बजे) या सूर्य उदय/अस्त के समय श्रेष्ठ।
- घी का दीपक जलाएं और तुलसी पत्र अर्पित करें। यह भगवान नारायण को अत्यंत प्रिय है।
`;

  const englishContent = `
🔱 Narayan Mantras 🔱

1. Narayan Beej Mantra:
Om Namo Narayanaya
Meaning: "I bow to Lord Narayana."
Use: For peace, devotion, spiritual upliftment, and protection.

2. Ashtakshar Mantra (8-lettered):
Om Namo Narayanaya
Most commonly chanted by Vishnu devotees.
Destroys sins and grants liberation (moksha).

3. Narayan Gayatri Mantra:
Om Narayanaya Vidmahe,
Vasudevaya Dhimahi,
Tanno Vishnuh Prachodayat॥
Meaning: "We contemplate on Narayana, meditate on Vasudeva; may that Vishnu inspire us."

4. Maha Narayan Raksha Mantra:
Om Narayanaya Vidmahe,
Vasudevaya Dhimahi,
Tanno Vishnuh Prachodayat॥
(Daily chanting protects from all negative energies.)

5. Vishnu Sahasranama Introductory Verse:
Shriman Narayano Devo, Keshavah Purushottamah,
Sarvadevatmako Deva, Shrimadbhagavatapriyah॥
Meaning: "Shriman Narayana, Keshava, the Supreme Person, soul of all gods, beloved of the Shrimad Bhagavatam."

🌼 **Chanting Tips**:
- Use a Tulsi (holy basil) mala (108 beads).
- Ideal time: Brahma Muhurta (4–6 AM) or sunrise/sunset.
- Offer ghee lamp and Tulsi leaves—dear to Lord Narayan.
`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-200 text-gray-800 font-sans">
      <Navbar />

      {/* Banner Image Section */}
      <div className="relative h-[80vh] md:h-[90vh] lg:h-screen w-full overflow-hidden shadow-xl">
        <img
          src="./Lord/NarayanJiMantra.jpg" // Ensure this path is correct
          alt="Lord Narayana, the preserver of the universe"
          className="object-cover w-full h-full filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-100 via-transparent to-transparent opacity-90"></div>

        <h1 className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-900 drop-shadow-lg
                       bg-white/70 px-6 py-3 rounded-xl animate-fade-in-up transition-all duration-300 ease-in-out">
          {isHindi ? "भगवान नारायण मंत्र" : "Lord Narayan Mantras"}
        </h1>
      </div>

      {/* Mantra Content Section */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl border border-blue-200
                        transform hover:scale-[1.01] transition-transform duration-300 ease-in-out animate-fade-in">
          <pre className="whitespace-pre-wrap leading-relaxed text-base sm:text-lg md:text-xl font-serif text-gray-700">
            {isHindi ? hindiContent : englishContent}
          </pre>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm">
        <p>&copy; 2025 Divine Bhajans. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NarayanJiMantra;
