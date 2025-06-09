import React, { useRef, useEffect } from "react";
import DarshanCard from './DarshanCard';
import Navbar from './Navbar';
import Footer from './Footer';

const templeData = [
 {
  imageUrl: "./Varanasi/T1.jpg",
  templeName: "Kashi Vishwanath Mandir",
  location: "Vishwanath Gali, Varanasi",
  description: "One of the 12 Jyotirlingas, dedicated to Lord Shiva, with a golden dome and deep spiritual legacy."
},
  {
  "imageUrl": "./Varanasi/Swarvedmahamandir.jpeg",
  "templeName": "Swarved MahaMandir Yoga Center",
  "location": "Umaraha, Mudli, Varanasi",
  "description": "A serene place dedicated to yoga and meditation, promoting holistic wellness and spiritual growth in the heart of Varanasi."
 },
  {
    imageUrl: "./Varanasi/Durgakund.jpg",
    templeName: "Durga Kund Mandir",
    location: "Durgakund Road, Varanasi",
    description: "18th-century Nagara-style temple dedicated to Goddess Durga, known for its sacred kund and red structure.",
  },
  {
    imageUrl: "./Varanasi/KaalBhairav.jpg",
    templeName: "Kaal Bhairav Mandir",
    location: "Vishweshwarganj, Varanasi",
    description: "Ancient temple of Lord Bhairav, protector of the city, known for skull garlands and fierce energy.",
  },
  {
    imageUrl: "./Varanasi/Maa-Annapurna.jpg",
    templeName: "Maa Annapurna Mandir",
    location: "Godowlia, Varanasi",
    description: "Temple of Goddess Annapurna, provider of food and nourishment, featuring brass and gold idols.",
  },
  {
    imageUrl: "./Varanasi/Sankatmochan.jpg",
    templeName: "Sankat Mochan Hanuman Mandir",
    location: "Near Assi Ghat, Varanasi",
    description: "Built by Tulsidas, this Hanuman temple is known for its peaceful ambiance and devotional chants.",
  },
  {
    imageUrl: "./Varanasi/Nepalitemple.jpeg",
    templeName: "Kanthwala (Nepali) Temple",
    location: "Lalita Ghat, Varanasi",
    description: "19th-century wooden temple modeled after Nepal's Pashupatinath, also called Mini Khajuraho.",
  },
  {
    imageUrl: "./Varanasi/Vishalakshimandir.jpeg",
    templeName: "Vishalakshi Mandir",
    location: "Manikarnika Ghat, Varanasi",
    description: "One of the Shakti Peeths, where Goddess Sati's earring fell; a sacred and powerful shrine.",
  },
  {
    imageUrl: "./Varanasi/BharatMandir.jpeg",
    templeName: "Bharat Mata Mandir",
    location: "Varanasi",
    description: "Unique temple with no deity, featuring a 3D marble map of undivided India; symbol of patriotism.",
  },
  {
    imageUrl: "./Varanasi/SankataMandir.jpeg",
    templeName: "Sankata Devi Mandir",
    location: "Varanasi",
    description: "Goddess Sankata is believed to relieve sorrows; popular among women and during Navratri.",
  },
  {
    imageUrl: "./Varanasi/LalitaGauritemple.jpg",
    templeName: "Lalita Gauri Temple",
    location: "Near Lalita Ghat, Varanasi",
    description: "19th-century temple of wealth and prosperity built by Nepalese king near Nepali temple.",
  },
  {
    imageUrl: "./Varanasi/Manasmandir.jpeg",
    templeName: "Tulsi Manas Temple",
    location: "Sankat Mochan Road, Varanasi",
    description: "White marble temple where Tulsidas wrote Ramcharitmanas; walls feature verses and epics.",
  },
  {
    imageUrl: "./Varanasi/Mitrunjaymandir.jpeg",
    templeName: "Mrityunjay Mahadev Temple",
    location: "Daranagar, Varanasi",
    description: "Shiva temple believed to protect from untimely death; contains a healing well.",
  },
  {
    imageUrl: "./Varanasi/TilbhandeshwarMahadev.jpeg",
    templeName: "Tilbhandeshwar Mahadev Mandir",
    location: "Varanasi",
    description: "Naturally growing Shiva linga worshipped with both Malayali and Benarasi rituals.",
  },
  {
    imageUrl: "./Varanasi/BhuVT.jpeg",
    templeName: "New Vishwanath Temple (BHU)",
    location: "BHU Campus, Varanasi",
    description: "Marble replica of the original temple, built by Birla family, open to all castes and religions.",
  },
  {
    imageUrl: "./Varanasi/Dundi Raj Ganesh Temple.jpeg",
    templeName: "Dundi Raj Ganesh Temple",
    location: "Near Kashi Vishwanath, Varanasi",
    description: "Oldest Ganesh temple in the city, believed to remove sorrows and grant blessings.",
  },
  {
    imageUrl: "./Varanasi/ISKCONTemple.jpeg",
    templeName: "ISKCON Temple",
    location: "Near BHU, Varanasi",
    description: "Marble temple of Lord Krishna known for Sunday feasts, kirtans, and spiritual gatherings.",
  },
  {
    imageUrl: "./Varanasi/RatneshwarMahadevTemple.jpeg",
    templeName: "Ratneshwar Mahadev Temple",
    location: "Scindia Ghat, Varanasi",
    description: "Half-submerged temple believed to grant male offspring, best viewed from the river.",
  },
  {
    imageUrl: "./Varanasi/VyasaTemple.jpeg",
    templeName: "Vyasa Temple",
    location: "Eastern bank of Ganga, Varanasi",
    description: "Dedicated to sage Vyasa who wrote Mahabharata; located outside the main city per legend.",
  },
  {
  imageUrl: "./Varanasi/BadaGaneshMandir.jpeg",
  templeName: "Bada Ganesh Mandir",
  location: "Lohatiya, Varanasi",
  description: "Home to the rare Swambhu Trinetra idol of Lord Ganesha, worshipped for removing obstacles and fulfilling wishes, especially on Ganesh Chaturthi.",
  },
  {
    imageUrl: "./Varanasi/MarkandeyMahadevTemple.jpeg",
    templeName: "Markandey Mahadev Temple",
    location: "Kaithi, Varanasi",
    description: "Temple where Lord Shiva saved a boy from death; popular during Mahashivratri.",
  },
  {
    imageUrl: "./Varanasi/TridevTemple.jpeg",
    templeName: "Tridev Temple",
    location: "Near Tulsi Manas Temple, Varanasi",
    description: "Modern temple dedicated to Hanuman, Khatu Shyam, and Rani Sati Dadi; photography allowed.",
  },
];

const cities = [
  {
    name: "All",
    image: "./Cities/All.jpeg",
    level: 1,
  },
  // 🟢 Tier 1: Top pilgrimage cities in UP
  {
    name: "Varanasi",
    image: "./Cities/Vns.jpeg",
    level: 1,
  },
  {
    name: "Ayodhya",
    image: "./Cities/Ayodhya.jpeg",
    level: 1,
  },
  {
    name: "Mathura",
    image: "./Cities/Mathura.jpeg",
    level: 1,
  },
  {
    name: "Prayagraj (Allahabad)",
    image: "./Cities/pyj.jpeg",
    level: 1,
  },
  {
    name: "Vrindavan",
    image: "./Cities/Vrindavan.jpeg",
    level: 1,
  },

  // 🟡 Tier 2: Other significant pilgrimage cities in UP
  {
    name: "Bodhgaya",
    image: "./Cities/bodhgaya.jpeg",
    level: 2,
  },
  {
    name: "Sarnath",
    image: "./Cities/Sarnath.jpeg",
    level: 2,
  },
  {
    name: "Gorakhpur",
    image: "./Cities/Gorakhpur.jpeg",
    level: 2,
  },
  {
    name: "Chitrakoot",
    image: "./Cities/Chitrakoot.jpeg",
    level: 2,
  },
  {
    name: "Naimisharanya",
    image: "./Cities/Naimisharanya.jpeg",
    level: 2,
  },

  // 🟠 Tier 3: Major pilgrimage cities across India (beyond UP)
  {
    name: "Haridwar",
    image: "./Cities/Haridwar.jpeg",
    level: 3,
  },
  {
    name: "Rishikesh",
    image: "./Cities/Rishikesh.jpeg",
    level: 3,
  },
  {
    name: "Ujjain",
    image: "./Cities/Ujjain.jpeg",
    level: 3,
  },
  {
    name: "Dwarka",
    image: "./Cities/Dwarka.jpeg",
    level: 3,
  },
  {
    name: "Puri",
    image: "./Cities/Puri.jpeg",
    level: 3,
  },
  {
    name: "Amritsar",
    image: "./Cities/Amritsar.jpeg",
    level: 3,
  },
  {
    name: "Tirupati",
    image: "./Cities/Tirupati.jpeg",
    level: 3,
  },
  {
    name: "Madurai",
    image: "./Cities/Madurai.jpeg",
    level: 3,
  },
  {
    name: "Katra (Vaishno Devi)",
    image: "./Cities/Katra (Vaishno Devi).jpeg",
    level: 3,
  },
  {
    name: "Shirdi",
    image: "./Cities/Shirdi.jpeg",
    level: 3,
  },
  {
    name: "Shingnapur",
    image: "./Cities/Shingnapur.jpeg",
    level: 3,
  },
  {
    name: "Pushkar",
    image: "./Cities/Pushkar.jpeg",
    level: 3,
  },
  {
    name: "Badrinath",
    image: "./Cities/Badrinath.jpeg",
    level: 3,
  },
  {
    name: "Kedarnath",
    image: "./Cities/Kedarnath.jpeg",
    level: 3,
  },
  {
    name: "Gangotri",
    image: "./Cities/Gangotri.jpeg",
    level: 3,
  },
  {
    name: "Yamunotri",
    image: "./Cities/Yamunotri.jpeg",
    level: 3,
  },
  {
    name: "Goa", // Included for churches/cathedrals, specifically Old Goa
    image: "./Cities/Goa.jpeg",
    level: 3,
  },
  {
    name: "Ajmer",
    image: "./Cities/Ajmer.jpeg",
    level: 3,
  },
  {
    name: "Sabarimala",
    image: "./Cities/Sabarimala.jpeg",
    level: 3,
  },
  {
    name: "Somnath",
    image: "./Cities/Somnath.jpeg",
    level: 3,
  },
  {
    name: "Rameswaram",
    image: "./Cities/Rameswaram.jpeg",
    level: 3,
  },
  {
    name: "Nashik",
    image: "./Cities/Nashik.jpeg",
    level: 3,
  },
  {
    name: "Trimbakeshwar",
    image: "./Cities/Trimbakeshwar.jpeg",
    level: 3,
  },
];

const Mandir = () => {
  const videoRef = useRef(null);  // <--- Declare videoRef here

  // Autoplay video on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) =>
        console.error("Video autoplay failed", e)
      );
    }
  }, []);

  return (
    <div>
      <Navbar />
      {/* Hero Video Section */}
      <div className="relative w-full h-screen overflow-hidden">
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
          Your browser does not support the video tag.
        </video>
        <div className="absolute bottom-4 left-4 text-white text-xs">
          Video credit:{" "}
          <a
            href="https://example.com/credit"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Video Creator
          </a>
        </div>
      </div>

      {/* City Selector */}
      <div className="p-2 bg-[#EFE4D2] rounded-md shadow-md max-w-full mx-auto mt-6 mb-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Select Your City for Services
        </h1>

        <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="min-w-[150px] bg-gray-100 rounded-lg shadow hover:shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="text-center font-medium">{city.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Temple Cards */}
      <div className="py-12 px-6 bg-[#FCEFCB]">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Explore the Divine Temples
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {templeData.map((temple, index) => (
            <div key={index} className="hover:scale-[1.02] transition-transform">
              <DarshanCard
                imageUrl={temple.imageUrl}
                templeName={temple.templeName}
                location={temple.location}
                description={temple.description}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mandir;
