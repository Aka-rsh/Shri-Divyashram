import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const images = [
    "./Photos/p1.png",
    "./Photos/p8.jpg",
    "./Photos/p4.png",
    "./Photos/p3.png",
    "./Photos/p6.jpg"
  ];
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] sm:h-screen w-full">
      {/* Background Image Slider */}
      <div
        className="relative h-full w-full bg-cover bg-center flex items-center justify-center transition-all duration-500"
        style={{ backgroundImage: `url(${images[activeDot]})` }}
        aria-label={`Slide ${activeDot + 1}`}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-opacity-40 z-0"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-[70px] font-bold drop-shadow-lg px-4 text-center">
           Welcome to <br />
           <span className="text-yellow-400">श्री</span> <br />
            <span className="text-orange-500">दिव्याश्रम</span>
          </h1>

          <p className="mt-4 text-white text-lg md:text-2xl font-medium">
            Stay. Travel. Worship. All-in-One Spiritual Experience
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md shadow-md transition duration-300">
              Book Now
            </button>
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-2 rounded-md shadow-md transition duration-300">
              Explore Services
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 px-4">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setActiveDot(i)}
              title={`Slide ${i + 1}`}
              className={`h-[14px] w-[14px] rounded-full cursor-pointer border transform transition-transform duration-300 ease-in-out hover:scale-90 ${
                activeDot === i
                  ? "bg-orange-500 border-white"
                  : "bg-white opacity-70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
