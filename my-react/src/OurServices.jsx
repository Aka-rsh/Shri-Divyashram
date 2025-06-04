import React from 'react';
import Navbar from "./Navbar";
import Home from './Home';
import Footer from './Footer';
import Service from './Service';

// Array of service objects
const servicesData = [
  {
    title: "काशी दर्शन",
    description: "पवित्र नगरी काशी की यात्रा करें — जहाँ मंदिरों की घंटियां, गंगा की आरती और अध्यात्म की शांति आपका स्वागत करती हैं।",
    imageUrl: "./Darshan/Kashi-Darshan.png",
    linkTo: "/KashiDarshan",
  },
  
  {
  title: "गौ सेवा",
  description: "गौ माता की सेवा करें — करुणा, धर्म और समर्पण का प्रतीक। आपके सहयोग से गोशालाओं में पोषण और देखभाल सुनिश्चित होती है।",
  imageUrl: "./Darshan/G.jpg", 
  linkTo: "/Goseva",
  },
  {
  title: "गुरुकुल",
  description: "प्राचीन भारतीय शिक्षा प्रणाली का पुनर्जागरण — जहाँ ज्ञान, संस्कार और जीवन मूल्यों की शिक्षा मिलती है। गुरुकुल में आपका योगदान बच्चों के उज्ज्वल भविष्य की नींव रखता है।",
  imageUrl: "./Darshan/Gurukul.png", 
  linkTo: "/Gurukul",
  }
  // Add more services here...
];

const OurServices = () => {
  return (
    <div className="bg-[#FCEFCB] min-h-screen flex flex-col justify-between">
      <Navbar></Navbar>
      <Home />

      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold text-center text-yellow-900 mt-12 underline decoration-yellow-900">
        सेवाओं का संगम
      </h1>
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-yellow-800 mt-6 mb-8">
        Welcome to Divine Yatra – Explore Pilgrimage, Seva & Learning
      </h2>

      {/* Render all services dynamically */}
      {servicesData.map((service, index) => (
        <Service
          key={index}
          title={service.title}
          description={service.description}
          imageUrl={service.imageUrl}
          linkTo={service.linkTo}
        />
      ))}

      <Footer />
    </div>
  );
};

export default OurServices;
