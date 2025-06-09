import React from 'react';
import Navbar from './Navbar';

const boatOptions = [
  {
    name: 'Hand Boat',
    image: './Photos/handboat.jpg', // Replace with actual path
    description: 'Perfect for a peaceful rowed experience during sunrise or Ganga Aarti. Ideal for solo travelers or small families.',
  },
  {
    name: 'Motorboat',
    image: './Photos/motorboat.jpg', // Replace with actual path
    description: 'Fast and efficient! Explore the Ganga ghats quickly with a motorboat – great for groups or short trips.',
  },
  {
    name: 'Bajra Boat',
    image: './Photos/bajra.jpg', // Replace with actual path
    description: 'Traditional wooden bajra boats offer a cultural and scenic ride, with canopy and seating — great for photography lovers.',
  },
  {
    name: 'Cruise',
    image: './Photos/cruise.jpg', // Replace with actual path
    description: 'Luxury experience on the Ganga with music, snacks, and panoramic views of the ghats. Ideal for families and events.',
  }
];

const BoatBooking = () => {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 font-sans">
      <Navbar />

      <div className="px-4 py-10">
        <h1 className="text-4xl font-bold text-center underline underline-offset-4 decoration-indigo-500 mb-6">
          Book a Boat Ride on the Ganga
        </h1>
        <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
          Choose from a range of boats and experience the holy Ganga from a unique perspective. Sunrise, sunset, or Ganga Aarti – we’ve got you covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {boatOptions.map((boat, index) => {
            const message = `Namaste 🙏, I would like to book a *${boat.name}* ride. Please share available time slots, pricing, and starting point.`;
            const whatsappUrl = `https://wa.me/917007094655?text=${encodeURIComponent(message)}`;

            return (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={boat.image}
                  alt={boat.name}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-indigo-700 mb-2">{boat.name}</h3>
                  <p className="text-gray-700 text-sm mb-4">{boat.description}</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-sm font-medium text-center transition"
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BoatBooking;
