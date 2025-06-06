import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Tours = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src="./Varanasi/killa2.jpg"
          alt="Scenic View"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="bg-[#E7EFC7] py-10 px-4">
        <h1 className="text-4xl font-bold text-center underline underline-offset-4 decoration-2 decoration-black mb-6">
          Varanasi Tour
        </h1>

        <p className="text-xl text-center max-w-4xl mx-auto mb-10 leading-relaxed">
          Set out on a voyage into Varanasi's ageless core, where vibrant local life and old spirituality harmoniously blend.
          Discover the city's rich history and culture through its fragrant street food and secret passageways, observe fascinating
          ceremonies, and explore the sacred ghats along the Ganges. From peaceful morning yoga by the river to immersive artisan
          workshops, we provide one-of-a-kind experiences that guarantee an authentic and intensely personal exploration of this
          enchanted location. We also lead you to both famous monuments and peaceful, lesser-known areas.
        </p>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">

          {/* Card 1: Subah-e-Banaras */}
          <Link to="/tours/Subeh-e-Banaras" className="block">
            <div className="w-full h-96 bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="h-2/3 w-full overflow-hidden">
                <img
                  src="./Varanasi/KashiVishwanathNight.jpg"
                  alt="Kashi Vishwanath Temple"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-gray-600">Varanasi</h3>
                <h1 className="text-2xl text-gray-900 mt-1">Subah-e-Banaras</h1>
                <h2 className="text-md text-gray-500">80 Ghat</h2>
              </div>
            </div>
          </Link>

          {/* Card 2: Temple Visit */}
          <Link to="/tours/Temple-Visit" className="block">
            <div className="w-full h-96 bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="h-2/3 w-full overflow-hidden">
                <img
                  src="./Varanasi/v2.jpg"
                  alt="Temple Visit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-gray-600">Varanasi</h3>
                <h1 className="text-2xl text-gray-900 mt-1">Temple Visit</h1>
                <h2 className="text-md text-gray-500">Must Visit</h2>
              </div>
            </div>
          </Link>

          {/* Card 3: Sarnath */}
          <Link to="/tours/Sarnath" className="block">
            <div className="w-full h-96 bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="h-2/3 w-full overflow-hidden">
                <img
                  src="./Varanasi/v3.webp"
                  alt="Sarnath Buddhist Temple"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-gray-600">Varanasi</h3>
                <h1 className="text-2xl text-gray-900 mt-1">Sarnath</h1>
                <h2 className="text-md text-gray-500">Buddhist Temple</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Tours;
