import React from 'react';
import Navbar from './Navbar';

const Fticket = () => {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="px-4 py-10">
        <h1 className="text-4xl font-bold text-center underline underline-offset-4 decoration-amber-500 mb-6">
          Book Flight & Train Tickets
        </h1>
        <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
          Easily book your flight or train tickets with us. Tap a button below to connect via WhatsApp and confirm your journey with divine ease.
        </p>

        {/* Optionally, you can add a simple call-to-action button instead of cards */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/917007094655?text=Namaste%20%F0%9F%99%8F%2C%20I%20would%20like%20to%20book%20a%20ticket.%20Please%20assist%20me%20with%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded text-lg font-semibold transition"
          >
            Book Now via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fticket;
