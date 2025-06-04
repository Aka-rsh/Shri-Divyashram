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
    setActiveDot((prev) => {
      const next = prev === images.length - 1 ? 0 : prev + 1;
      return next;
    });
  }, 5000);

  return () => clearInterval(interval);
}, []); // ✅ FIXED


return (
  <section className="relative h-screen w-full">

    {/* Background image slider */}
    <div
      className="relative h-full w-full bg-cover bg-center flex items-center justify-center transition-all duration-500"
      style={{ backgroundImage: `url(${images[activeDot]})` }}
    >
<h1 className="text-white text-[60px] md:text-[80px] font-bold drop-shadow-lg px-4 text-center">
  Welcome to <br />
  श्री <br />
  दिव्याश्रम
</h1>

      {/* Dots navigation */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, i) => (
          <span
  key={i}
  onClick={() => setActiveDot(i)}
  title={`Slide ${i + 1}`}
  className={`h-[14px] w-[14px] rounded-full cursor-pointer border ${
    activeDot === i ? "bg-orange-500 border-white" : "bg-white opacity-70"
  }`}
/>

        ))}
      </div>
    </div>
    {/* Footer */}

    
  </section>
);
}
export default Home;
