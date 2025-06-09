import React,{useRef,useEffect} from 'react';
import Navbar from './Navbar';
import * as FaIcons from 'react-icons/fa';
import Footer from './Footer';
import { FaPhone } from 'react-icons/fa6';

const reasons = [
  {
    title: 'Location, Location, Location!',
    text: "Imagine waking up just steps from the sacred Ganges River and the awe-inspiring Kashi Vishwanath Temple. Our guest house puts you right in the heart of Varanasi's spiritual and cultural hub, with Assi Ghat also just a stone's throw away."
  },
  {
    title: 'Your Home Away From Home',
    text: "Ditch the impersonal hotel vibe! We offer a truly homely stay that immerses you in Varanasi's authentic charm. Expect warm smiles, personalized service, and a genuine connection to the local culture."
  },
  {
    title: 'Comfort Without Compromise (or Cost!)',
    text: "Travel smart, not expensive. Our guest house provides quality accommodations that are kind to your wallet, proving you don't have to sacrifice comfort for affordability."
  },
  {
    title: 'Modern Comforts, Ancient Charm',
    text: "We blend the best of both worlds. Enjoy free Wi-Fi to share your adventures, a complimentary breakfast to start your day right, and even guided tours to unveil the city's hidden gems."
  },
  {
    title: 'Booking Bliss Made Easy',
    text: "Ready to experience Varanasi? Our user-friendly online platform makes booking a breeze, with instant confirmations and 24/7 customer support for peace of mind."
  },
  {
    title: 'Unforgettable Stays, Unbeatable Deals',
    text: "Whether you're a solo explorer, a romantic duo, or a family on an adventure, we have special packages and discounts tailored just for you. Get ready for an experience that will last a lifetime!"
  }
];

const stay = [
    {
        heading: "Your Personal Sanctuary",
        subheadings: [
            { text: "Dreamy Beds & Linens", icon: "FaBed" },
            { text: "Stay Connected: Free Wi-Fi", icon: "FaWifi" },
            { text: "Cool & Comfortable: AC", icon: "FaSnowflake" },
            { text: "Entertainment at Your Fingertips: TV", icon: "FaTv" },
            { text: "Private Refreshment: Fridge", icon: "FaFridge" },
            { text: "Hot Water On Demand: Geyser", icon: "FaShower" },
        ]
    },
    {
        heading: "Beyond Your Room",
        subheadings: [
            { text: "Start Your Day Right: Complimentary Breakfast", icon: "FaCoffee" },
            { text: "A Warm Welcome: Personalized Services", icon: "FaHandsHelping" },
            { text: "Hassle-Free Arrival: Car Parking", icon: "FaCar" },
            { text: "Explore with Ease: Guided Tour Services", icon: "FaMapMarkedAlt" },
            { text: "Peace of Mind: CCTV Security", icon: "FaVideo" },
            { text: "Safety First: First Aid Kit", icon: "FaFirstAid" },
            { text: "Always Pristine: Housekeeping and Cleaning", icon: "FaSoap" },
            { text: "Flexible Stays: 24/7 Check-in and Check-out", icon: "FaClock" },
            { text: "24/7 Support: Dedicated Team Assistance", icon: "FaHeadset" }
        ]
    }
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

const via = [
  { name: "OYO", url: "https://www.oyo.com" },
  { name: "Trivago", url: "https://www.trivago.com" },
  { name: "MakeMyTrip", url: "https://www.makemytrip.com" },
  { name: "Booking.com", url: "https://www.booking.com" },
  { name: "Airbnb", url: "https://www.airbnb.com" }
];


const HotelBooking = () => {
    const scrollRef = useRef(null);
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
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Image */}
      <div className="w-full">
        <img
          src="./Varanasi/T1.jpg"
          alt="BHU Varanasi"
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Title and Intro Paragraph */}
      <h1 className="text-5xl font-extrabold text-center text-yellow-900 mt-5 underline decoration-yellow-900">
        Guest house in Varanasi
      </h1>
      <p className=" font-semibold text-center mt-6 mb-8 mx-6">
        “At <span className="text-yellow-900">Divyashram</span>, your stay is more than just a room — it's a soulful experience in the heart of Kashi. Whether you're a pilgrim seeking peace, a traveler exploring spiritual India, or a family visiting Varanasi, we offer a clean, affordable, and welcoming space that feels like home.
        <br /><br />
        With all modern amenities, spiritual surroundings, and easy booking through WhatsApp, <span className="text-yellow-900">your comfort is our priority</span>. From sunrise aarti at the ghats to calm nights under the sacred skies, Divyashram lets you live the true spirit of Varanasi — simply, peacefully, and beautifully.”
      </p>

      {/* Why Choose Us Section */}
      <div className="px-6 py-10 bg-white">
        <h2 className="text-4xl font-bold text-center text-yellow-900 mb-10">
          Why Choose Our Varanasi Guest House?
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm border border-yellow-200">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

{/* Call us Now */}
<div className="flex justify-center mb-2 mt-6">
  <a href="tel:7007094655">
    <button className="flex flex-col sm:flex-row items-center justify-center bg-[#393E46] text-white text-lg sm:text-2xl font-bold px-6 py-3 rounded-md shadow-md hover:bg-[#a587dd] transition duration-300">
      <FaIcons.FaPhoneAlt className="mr-2 mb-1 sm:mb-0" />
      <div className="text-center sm:text-left">
        <div>Call Now - 7007094655</div>
        <div className="text-sm text-center font-medium">Book your stay</div>
      </div>
    </button>
  </a>
</div>


      {/* Guesthouse Comforts & Conveniences: Elevating Your Stay */}
<div className="px-6 py-10">
  <h2 className="text-4xl font-bold text-center text-yellow-900 mb-10 ">
    Guesthouse Comforts & Conveniences: Elevating Your Stay
  </h2>

  <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-yellow-200">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {stay.map((section, index) => (
        <div key={index}>
          <h3 className="text-2xl font-bold text-yellow-900 mb-4">{section.heading}</h3>
          <ul className="space-y-2 font-bold text-xl">
            {section.subheadings.map((item, subIndex) => {
              const Icon = FaIcons[item.icon];
              return (
                <li key={subIndex} className="flex items-start">
                  {Icon && (
                    <span className="text-yellow-800 mt-1 mr-3">
                      <Icon />
                    </span>
                  )}
                  <span className="text-gray-700">{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>

{/* other Services */}
{/* Services Carousel */}
<div className="bg-amber-300 px-2 sm:px-4 py-10">
  <h2 className="text-4xl font-semibold text-center text-gray-800 mb-6">
   Other services we provide beyond our guest house accommodations
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

{/* Call us Now */}
<div className="flex justify-center mb-8 mt-6">
  <a href="tel:7007094655">
    <button className="flex flex-col sm:flex-row items-center justify-center bg-[#393E46] text-white text-lg sm:text-2xl font-bold px-6 py-3 rounded-md shadow-md hover:bg-[#a587dd] transition duration-300">
      <FaIcons.FaPhoneAlt className="mr-2 mb-1 sm:mb-0" />
      <div className="text-center sm:text-left">
        <div>Call Now - 7007094655</div>
        <div className="text-sm text-center font-medium">Book your stay</div>
      </div>
    </button>
  </a>
</div>

{/* Via */}
 <h1 className="text-4xl font-bold text-center text-yellow-900 my-6">
  Platforms Where We Are Listed
</h1>
<div className="flex justify-center mt-4 space-x-4 flex-wrap mb-3 sm:mt-2">
  {via.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#393E46] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#a587dd] transition duration-300 whitespace-nowrap"
          >
            {item.name}
          </a>
  ))}
</div>

 
 {/* Footer */}
 <Footer></Footer>
    </div>
  );
};

export default HotelBooking;
