import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom"; 
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

// const services = [
//   {
//     icon: "fa-solid fa-hotel",
//     title: "Hotel Booking",
//     desc: "Comfortable hotel stays close to temples and ghats.",
//   },
//   {
//     icon: "fa-solid fa-taxi",
//     title: "Airport Pickup and Drop",
//     desc: "Reliable airport and station transfers across Varanasi.",
//   },
//   {
//     icon: "fa-solid fa-route",
//     title: "Tour Packages",
//     desc: "Customizable packages covering top Kashi attractions.",
//   },
//   {
//     icon: "fa-solid fa-ticket",
//     title: "VIP Darshan Ticket",
//     desc: "Skip the lines and get premium darshan access.",
//   },
//   {
//     icon: "fa-solid fa-fire",
//     title: "Ganga Aarti Ticket",
//     desc: "Reserved seating for the spiritual Ganga Aarti experience.",
//   },
//   {
//     icon: "fa-solid fa-ship",
//     title: "Boat Booking",
//     desc: "Sunrise and evening boat rides on the holy Ganga.",
//   },
//   {
//     icon: "fa-solid fa-plane-departure",
//     title: "Flight Ticket",
//     desc: "Domestic and international ticket booking support.",
//   },
//   {
//     icon: "fa-solid fa-train-subway",
//     title: "Train Ticket",
//     desc: "Book train tickets for all major routes and schedules.",
//   },
// ];

const Homee = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const scrollRef = useRef(null);

  const trustObjectives = [
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
  ];

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
              Welcome to Shri Divyashram
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line break-words">
              At Divyashram, we are devoted to preserving our <span className="font-bold text-[#FF9B45]">Sanskriti</span>, nurturing <span className="font-bold text-[#FF9B45]">spiritual values</span>, and serving humanity. As a non-profit trust, our mission spans from promoting <span className="font-bold text-[#FF9B45]">Sanskrit education</span>, maintaining <span className="font-bold text-[#FF9B45]">Gaushalas</span>, organizing <span className="font-bold text-[#FF9B45]">charity drives</span>, to supporting the <span className="font-bold text-[#FF9B45]">underprivileged</span> through food, education, healthcare, and disaster relief. We also focus on <span className="font-bold text-[#FF9B45]">environmental sustainability</span> and <span className="font-bold text-[#FF9B45]">cultural heritage</span>.
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
              Connect with Us
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
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Get in Touch</h2>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSfKliaDcA-MU2-koEHog8G_0rocdNvL_ZbzPC5DiYwdhZdSWg/formResponse"
                method="POST"
                target="_blank"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" name="entry.2005620554" placeholder="Full Name" required className="p-4 border rounded-lg text-lg w-full" />
                  <input type="email" name="entry.1045781291" placeholder="Email Address" required className="p-4 border rounded-lg text-lg w-full" />
                </div>
                <input type="tel" name="entry.1166974658" placeholder="Phone Number" required className="p-4 border rounded-lg text-lg w-full" />
                <textarea name="entry.839337160" placeholder="Your Message" rows="5" required className="p-4 border rounded-lg text-lg w-full resize-y" />
                <button type="submit" className="w-full bg-[#FF9B45] text-white font-bold text-xl py-4 rounded-lg hover:bg-[#e68a32] transition transform hover:scale-105">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        <section className="mt-20 bg-gradient-to-r from-yellow-200 to-[#A4CCD9] p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl border border-blue-100">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-black">
            Our Core Objectives: Building a Better Tomorrow
          </h1>
          <ul className="space-y-5 text-lg md:text-xl text-gray-700 list-inside">
            {trustObjectives.map((obj, index) => (
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
        Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Service Card 1 */}
        <Link to="/KashiDarshan">
          <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white">
            <h2 className="bg-[#D1D8BE] text-2xl text-center py-2">Kashi Darshan</h2>
            <img
              loading="lazy"
              src="./Photos/p2.jpg" // or use: src={p2}
              alt="Kashi Darshan"
              className="object-cover w-full h-[250px] aspect-[4/3] bg-gray-200"
            />
          </div>
        </Link>

        {/* Service Card 2 */}
        <Link to="/HotelBooking">
          <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white">
            <h2 className="bg-[#D1D8BE] text-2xl text-center py-2">Hotels</h2>
            <img
              loading="lazy"
              src="./Photos/p7.jpg" // or use: src={p7}
              alt="Hotels"
              className="object-cover w-full h-[250px] aspect-[4/3] bg-gray-200"
            />
          </div>
        </Link>

        {/* Service Card 3 */}
        <Link to="/BoatBooking">
          <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white">
            <h2 className="bg-[#D1D8BE] text-2xl text-center py-2">Boating</h2>
            <img
              loading="lazy"
              src="./Photos/v1.jpg" // or use: src={v1}
              alt="Boating"
              className="object-cover w-full h-[250px] aspect-[4/3] bg-gray-200"
            />
          </div>
        </Link>

        {/* Service Card 4 */}
        <Link to="/CabBooking">
          <div className="rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white">
            <h2 className="bg-[#D1D8BE] text-2xl text-center py-2">Cab Booking</h2>
            <img
              loading="lazy"
              src="./Photos/cabbooking.png" // or use: src={cab}
              alt="Cab Booking"
              className="object-cover w-full h-[250px] aspect-[4/3] bg-gray-200"
            />
          </div>
        </Link>
      </div>
    </div>


{/* Why Choose Us Section */}
<div className="bg-amber-100 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg shadow-md mb-8">

  {/* Image Section */}
  <div className="flex justify-center items-center">
    <img 
      src="./Varanasi/Subeh-e-banaras.jpg" 
      alt="Subeh-e-Banaras" 
      className="rounded-lg border-4 border-black shadow-lg w-full h-auto object-cover"
    />
  </div>

  {/* Text Content Section */}
  <div className="flex flex-col justify-center text-yellow-900 px-4">
    <h1 className="text-4xl font-extrabold mb-4 text-center md:text-left">
      Why <span className="text-orange-800 underline">Choose Us</span>
    </h1>
    
    <p className="mb-6 text-lg leading-relaxed">
      At <span className="font-bold text-red-700">Shri Divyashram</span>, we blend 
      <span className="font-semibold text-orange-900"> tradition</span> with 
      <span className="font-semibold text-orange-900"> service</span> — uplifting lives through 
      <span className="font-semibold text-orange-700"> education</span>, 
      <span className="font-semibold text-orange-700"> spiritual care</span>, and 
      <span className="font-semibold text-orange-700"> humanitarian work</span>. 
      Rooted in <span className="font-bold text-amber-900">Sanatan Dharma</span>, our mission is driven by 
      <span className="font-bold text-orange-700"> compassion</span>, 
      <span className="font-bold text-orange-700"> integrity</span>, and 
      <span className="font-bold text-orange-700"> selfless action</span>. 
      Choose us to be part of 
      <span className="text-red-800 font-bold"> meaningful change</span> that honors culture and serves humanity.
    </p>

    {/* Vision Section */}
    <div className="bg-amber-200 border-2 border-amber-800 rounded-2xl p-4 mb-6">
      <h2 className="text-3xl font-bold mb-2">Our <span className="text-orange-800">Vision</span></h2>
      <p className="text-base leading-relaxed">
        <span className="font-bold text-red-700">Shri Divyashram</span> is dedicated to building a 
        <span className="font-semibold text-orange-700"> compassionate</span> and 
        <span className="font-semibold text-orange-700"> enlightened society</span> rooted in the timeless values of 
        <span className="font-bold text-amber-900"> Sanatan Dharma</span>, 
        <span className="font-semibold text-orange-700"> education</span>, and 
        <span className="font-semibold text-orange-700"> seva (selfless service)</span>.
        <br /><br />
        We strive to 
        <span className="font-bold text-orange-900"> nurture minds</span> and 
        <span className="font-bold text-orange-900"> uplift lives</span> by promoting 
        <span className="font-semibold text-red-700"> Sanskrit and Vedic knowledge</span>, 
        preserving <span className="font-semibold text-orange-800">Indian culture</span>, and 
        supporting the <span className="font-semibold text-red-700">underprivileged</span>.
        <br /><br />
        Our initiatives include <span className="font-semibold">educational institutions</span>, 
        <span className="font-semibold">Gaushalas</span>,<br /> 
        <span className="font-semibold">charitable outreach</span>, and 
        <span className="font-semibold">infrastructure</span> to empower future generations.
      </p>
    </div>

    {/* Mission Section */}
    <div className="bg-amber-200 border-2 border-amber-800 rounded-2xl p-4 mb-6">
      <h2 className="text-2xl font-semibold mb-2">Our <span className="text-orange-800">Mission</span></h2>
      <p className="text-base leading-relaxed">
        Our mission at <span className="font-bold text-red-700">Shri Divyashram</span> is to serve humanity through 
        <span className="font-semibold text-orange-700"> spiritual growth</span>, 
        <span className="font-semibold text-orange-700"> cultural preservation</span>, and 
        <span className="font-semibold text-orange-700"> social welfare</span>.
        <br /><br />
        We champion <span className="font-semibold text-red-700">Sanskrit and Vedic education</span>, uphold 
        <span className="font-semibold text-orange-700"> sacred traditions</span>, and support the 
        <span className="font-semibold text-red-800"> marginalized</span> through initiatives like 
        <span className="font-semibold"> Gaushalas</span>, 
        <span className="font-semibold"> dharamshalas</span>, and 
        <span className="font-semibold"> free healthcare</span>.
        <br /><br />
        Every step we take is guided by 
        <span className="font-bold text-orange-800"> dharma</span>, 
        <span className="font-bold text-orange-800"> seva</span>, and 
        <span className="font-bold text-orange-800"> knowledge</span> — to foster a 
        <span className="font-bold text-red-700"> more compassionate and educated society</span>.
      </p>
    </div>
  </div>
</div>



{/* Join Our Community Section */}
<div className="bg-yellow-200 rounded-lg shadow-md p-6 md:p-8 mb-8 mx-4 md:mx-auto max-w-5xl overflow-x-hidden">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-orange-800 mb-4">
    Join <span className="underline text-red-700">Our Community</span>
  </h2>
  
  <p className="text-lg leading-relaxed text-yellow-900 text-center max-w-3xl mx-auto">
    Be a part of something <span className="font-bold text-orange-800">greater</span> — a movement rooted in 
    <span className="font-semibold text-red-700"> tradition</span>, 
    <span className="font-semibold text-orange-800"> compassion</span>, and 
    <span className="font-semibold text-orange-700"> service</span>. 
    Whether you’re a student, a volunteer, a donor, or a supporter of 
    <span className="font-bold text-red-800"> Sanatan Dharma</span>, 
    your presence matters. Connect with us to grow spiritually, serve selflessly, and 
    <span className="font-bold text-orange-800"> uplift lives together</span>.
  </p>

  {/* Optional Call to Action Button */}
  <div className="mt-6 text-center">
    <button className="bg-orange-700 hover:bg-orange-800 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md">
      Join Now
    </button>
  </div>
</div>

{/* Client Feedback Section */}
<div className="bg-amber-100 rounded-lg shadow-md p-6 md:p-10 mb-10 mx-4 md:mx-auto max-w-6xl overflow-x-hidden">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-orange-800 mb-10">
    What Our Community Says
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Feedback 1 - Volunteer */}
    <div className="bg-white border-l-4 border-amber-600 p-6 rounded-lg shadow-md">
      <p className="text-lg text-gray-800 italic leading-relaxed">
        “Volunteering at <span className="font-bold text-red-700">Shri Divyashram</span> opened my eyes to the true meaning of 
        <span className="text-orange-800 font-semibold"> seva</span>. Every action here is done with love and purpose. 
        From teaching children to helping elders, it's a place where <span className="font-bold text-amber-900">humanity thrives through dharma</span>.”
      </p>
      <p className="mt-4 text-right font-semibold text-yellow-900">— Anjali Mehra, Volunteer</p>
    </div>

    {/* Feedback 2 - Donor */}
    <div className="bg-white border-l-4 border-orange-700 p-6 rounded-lg shadow-md">
      <p className="text-lg text-gray-800 italic leading-relaxed">
        “As a donor, I’ve always wanted to contribute to something truly impactful. 
        <span className="font-semibold text-red-700">Shri Divyashram</span> is exactly that. Transparent, spiritual, and deeply rooted in 
        <span className="text-orange-700 font-bold">Sanatan values</span>. I can see the change my support creates.”
      </p>
      <p className="mt-4 text-right font-semibold text-yellow-900">— Rajesh Kumar, Donor</p>
    </div>

    {/* Feedback 3 - Spiritual Seeker */}
    <div className="bg-white border-l-4 border-yellow-600 p-6 rounded-lg shadow-md">
      <p className="text-lg text-gray-800 italic leading-relaxed">
        “I came here searching for spiritual peace, and I found a family. 
        The <span className="text-orange-800 font-semibold">daily rituals</span>, the <span className="font-bold text-red-700">Vedic teachings</span>, and the serene environment of the ashram changed my perspective on life.”
      </p>
      <p className="mt-4 text-right font-semibold text-yellow-900">— Kavita Sharma, Spiritual Seeker</p>
    </div>

    {/* Feedback 4 - Visitor */}
    <div className="bg-white border-l-4 border-red-700 p-6 rounded-lg shadow-md">
      <p className="text-lg text-gray-800 italic leading-relaxed">
        “Visiting Shri Divyashram with my family was incredibly fulfilling. 
        The blend of <span className="font-bold text-orange-700">culture, care, and community</span> is unmatched. 
        It’s a place where ancient wisdom meets modern compassion. I left with <span className="font-semibold text-amber-900">hope in my heart</span>.”
      </p>
      <p className="mt-4 text-right font-semibold text-yellow-900">— Suresh Bansal, Visitor</p>
    </div>

  </div>
</div>


      
    <Footer />
    </>
  );
};

export default Homee;
