import React from 'react';
import Navbar from './Navbar';

const bookingOptions = [
  {
    type: 'Flight',
    name: 'One-Way Domestic Flight',
    price: 3500,
    details: 'Economy Class – Includes 15kg baggage',
    icon: '✈️',
  },
  {
    type: 'Flight',
    name: 'Round-Trip Flight (India)',
    price: 6500,
    details: 'Return ticket, Economy Class',
    icon: '✈️',
  },
  {
    type: 'Train',
    name: 'AC 2-Tier Sleeper',
    price: 1500,
    details: 'Includes bedding, window seat preference',
    icon: '🚆',
  },
  {
    type: 'Train',
    name: 'Tatkal Express Booking',
    price: 1800,
    details: 'Fast booking under Tatkal quota',
    icon: '🚆',
  },
];

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

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookingOptions.map((option, index) => {
            const message = `Namaste 🙏, I would like to book a *${option.name}* (${option.details}) starting from ₹${option.price}. Please assist me with availability and booking.`;
            const whatsappUrl = `https://wa.me/917007094655?text=${encodeURIComponent(message)}`;

            return (
              <div
                key={index}
                className="bg-white shadow-md border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:shadow-lg transition"
              >
                <div>
                  <h3 className="text-xl font-bold text-indigo-700 mb-1">
                    {option.icon} {option.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Type:</span> {option.type}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">{option.details}</p>
                  <p className="text-lg font-semibold text-gray-800">
                    From ₹{option.price}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-sm font-medium text-center transition"
                >
                  Book via WhatsApp
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fticket;
