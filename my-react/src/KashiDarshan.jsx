import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import DarshanCard from "./DarshanCard";
import Footer from "./Footer";


const templeData = [
 {
  imageUrl: "/Varanasi/T1.jpg",
  templeName: "Kashi Vishwanath Mandir",
  location: "Vishwanath Gali, Varanasi",
  description: "One of the 12 Jyotirlingas, dedicated to Lord Shiva, with a golden dome and deep spiritual legacy."
},
  {
    imageUrl: "/Varanasi/Durgakund.jpg",
    templeName: "Durga Kund Mandir",
    location: "Durgakund Road, Varanasi",
    description: "18th-century Nagara-style temple dedicated to Goddess Durga, known for its sacred kund and red structure.",
  },
  {
    imageUrl: "/Varanasi/KaalBhairav.jpg",
    templeName: "Kaal Bhairav Mandir",
    location: "Vishweshwarganj, Varanasi",
    description: "Ancient temple of Lord Bhairav, protector of the city, known for skull garlands and fierce energy.",
  },
  {
    imageUrl: "/Varanasi/Maa-Annapurna.jpg",
    templeName: "Maa Annapurna Mandir",
    location: "Godowlia, Varanasi",
    description: "Temple of Goddess Annapurna, provider of food and nourishment, featuring brass and gold idols.",
  },
  {
    imageUrl: "/Varanasi/Sankatmochan.jpg",
    templeName: "Sankat Mochan Hanuman Mandir",
    location: "Near Assi Ghat, Varanasi",
    description: "Built by Tulsidas, this Hanuman temple is known for its peaceful ambiance and devotional chants.",
  },
  {
    imageUrl: "/Varanasi/Nepalitemple.jpeg",
    templeName: "Kanthwala (Nepali) Temple",
    location: "Lalita Ghat, Varanasi",
    description: "19th-century wooden temple modeled after Nepal's Pashupatinath, also called Mini Khajuraho.",
  },
  {
    imageUrl: "/Varanasi/Vishalakshimandir.jpeg",
    templeName: "Vishalakshi Mandir",
    location: "Manikarnika Ghat, Varanasi",
    description: "One of the Shakti Peeths, where Goddess Sati's earring fell; a sacred and powerful shrine.",
  },
  {
    imageUrl: "/Varanasi/BharatMandir.jpeg",
    templeName: "Bharat Mata Mandir",
    location: "Varanasi",
    description: "Unique temple with no deity, featuring a 3D marble map of undivided India; symbol of patriotism.",
  },
  {
    imageUrl: "/Varanasi/SankataMandir.jpeg",
    templeName: "Sankata Devi Mandir",
    location: "Varanasi",
    description: "Goddess Sankata is believed to relieve sorrows; popular among women and during Navratri.",
  },
  {
    imageUrl: "/Varanasi/LalitaGauritemple.jpg",
    templeName: "Lalita Gauri Temple",
    location: "Near Lalita Ghat, Varanasi",
    description: "19th-century temple of wealth and prosperity built by Nepalese king near Nepali temple.",
  },
  {
    imageUrl: "/Varanasi/Manasmandir.jpeg",
    templeName: "Tulsi Manas Temple",
    location: "Sankat Mochan Road, Varanasi",
    description: "White marble temple where Tulsidas wrote Ramcharitmanas; walls feature verses and epics.",
  },
  {
    imageUrl: "/Varanasi/Mitrunjaymandir.jpeg",
    templeName: "Mrityunjay Mahadev Temple",
    location: "Daranagar, Varanasi",
    description: "Shiva temple believed to protect from untimely death; contains a healing well.",
  },
  {
    imageUrl: "/Varanasi/TilbhandeshwarMahadev.jpeg",
    templeName: "Tilbhandeshwar Mahadev Mandir",
    location: "Varanasi",
    description: "Naturally growing Shiva linga worshipped with both Malayali and Benarasi rituals.",
  },
  {
    imageUrl: "/Varanasi/BhuVT.jpeg",
    templeName: "New Vishwanath Temple (BHU)",
    location: "BHU Campus, Varanasi",
    description: "Marble replica of the original temple, built by Birla family, open to all castes and religions.",
  },
  {
    imageUrl: "/Varanasi/Dundi Raj Ganesh Temple.jpeg",
    templeName: "Dundi Raj Ganesh Temple",
    location: "Near Kashi Vishwanath, Varanasi",
    description: "Oldest Ganesh temple in the city, believed to remove sorrows and grant blessings.",
  },
  {
    imageUrl: "/Varanasi/ISKCONTemple.jpeg",
    templeName: "ISKCON Temple",
    location: "Near BHU, Varanasi",
    description: "Marble temple of Lord Krishna known for Sunday feasts, kirtans, and spiritual gatherings.",
  },
  {
    imageUrl: "/Varanasi/RatneshwarMahadevTemple.jpeg",
    templeName: "Ratneshwar Mahadev Temple",
    location: "Scindia Ghat, Varanasi",
    description: "Half-submerged temple believed to grant male offspring, best viewed from the river.",
  },
  {
    imageUrl: "/Varanasi/VyasaTemple.jpeg",
    templeName: "Vyasa Temple",
    location: "Eastern bank of Ganga, Varanasi",
    description: "Dedicated to sage Vyasa who wrote Mahabharata; located outside the main city per legend.",
  },
  {
  imageUrl: "/Varanasi/BadaGaneshMandir.jpeg",
  templeName: "Bada Ganesh Mandir",
  location: "Lohatiya, Varanasi",
  description: "Home to the rare Swambhu Trinetra idol of Lord Ganesha, worshipped for removing obstacles and fulfilling wishes, especially on Ganesh Chaturthi.",
  },
  {
    imageUrl: "/Varanasi/MarkandeyMahadevTemple.jpeg",
    templeName: "Markandey Mahadev Temple",
    location: "Kaithi, Varanasi",
    description: "Temple where Lord Shiva saved a boy from death; popular during Mahashivratri.",
  },
  {
    imageUrl: "/Varanasi/TridevTemple.jpeg",
    templeName: "Tridev Temple",
    location: "Near Tulsi Manas Temple, Varanasi",
    description: "Modern temple dedicated to Hanuman, Khatu Shyam, and Rani Sati Dadi; photography allowed.",
  },
];

const services = [
  {
    icon: "fa-solid fa-hotel",
    title: "Hotel Booking",
    desc: "Comfortable hotel stays close to temples and ghats.",
  },
  {
    icon: "fa-solid fa-taxi",
    title: "Airport Pickup and Drop",
    desc: "Reliable airport and station transfers across Varanasi.",
  },
  {
    icon: "fa-solid fa-route",
    title: "Tour Packages",
    desc: "Customizable packages covering top Kashi attractions.",
  },
  {
    icon: "fa-solid fa-ticket",
    title: "VIP Darshan Ticket",
    desc: "Skip the lines and get premium darshan access.",
  },
  {
    icon: "fa-solid fa-fire",
    title: "Ganga Aarti Ticket",
    desc: "Reserved seating for the spiritual Ganga Aarti experience.",
  },
  {
    icon: "fa-solid fa-ship",
    title: "Boat Booking",
    desc: "Sunrise and evening boat rides on the holy Ganga.",
  },
  {
    icon: "fa-solid fa-plane-departure",
    title: "Flight Ticket",
    desc: "Domestic and international ticket booking support.",
  },
  {
    icon: "fa-solid fa-train-subway",
    title: "Train Ticket",
    desc: "Book train tickets for all major routes and schedules.",
  },
];

const KashiDarshan = () => {
  const videoRef = useRef(null);
  const scrollRef = useRef(null);

  // Autoplay video on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) =>
        console.error("Video autoplay failed", e)
      );
    }
  }, []);

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
    <div className="overflow-x-hidden">
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
          <source src="/Darshan/vns-vd2.mp4" type="video/mp4" />
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

{/* Services Carousel */}
<div className="bg-amber-300 px-2 sm:px-4 py-10">
  <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
    Our Services
  </h2>
  <div
    ref={scrollRef}
    className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth snap-x snap-mandatory px-1"
  >
    {services.map(({ icon, title, desc }, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md p-4 flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-80 snap-start hover:shadow-lg transition-all relative"
      >
        {/* Plus symbol in top-right corner of each box */}
        <a
          href="/new-page" // Replace with your actual new page URL or route
          className="absolute top-2 right-2 text-xl font-bold text-gray-800 hover:text-gray-600 cursor-pointer"
          aria-label={`Open new page for ${title}`}
        >
          +
        </a>

        <div className="text-3xl text-amber-500 mb-3">
          <i className={icon}></i>
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-700">{desc}</p>
      </div>
    ))}
  </div>
</div>


      {/* Temple Cards */}
      <div className="py-12 px-4 bg-[#FCEFCB]">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Explore the Divine Temples
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {templeData.map((temple, index) => (
            <DarshanCard
              key={index}
              imageUrl={temple.imageUrl}
              templeName={temple.templeName}
              location={temple.location}
              description={temple.description}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default KashiDarshan;