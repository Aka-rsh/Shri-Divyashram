import React from 'react';
import Navbar from './Navbar';

const cabOptions = [
  {
    name: 'Local City Tour',
    image: './Photos/cab-local.jpg', // Replace with actual path
    description: 'Explore Varanasi comfortably with a full-day cab service. Includes popular temples, ghats, and markets.',
  },
  {
    name: 'Airport Pickup & Drop',
    image: './Photos/cab-airport.jpg', // Replace with actual path
    description: 'Convenient airport transfers from Lal Bahadur Shastri Airport (VNS) to any location in Varanasi.',
  },
  {
    name: 'Outstation Travel',
    image: './Photos/cab-outstation.jpg', // Replace with actual path
    description: 'Plan trips to Prayagraj, Ayodhya, or Bodh Gaya with our reliable outstation cab service.',
  }
];

const CabBooking = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <Navbar />

      <div className="px-4 py-10">
        <h1 className="text-4xl font-bold text-center underline underline-offset-4 decoration-green-500 mb-6">
          Book a Cab in Varanasi
        </h1>
        <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
          Safe, reliable, and affordable cab services for airport transfers, city tours, or outstation travel. Book directly via WhatsApp.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cabOptions.map((cab, index) => {
            const message = `Namaste 🙏, I would like to book a *${cab.name}* service. Please share availability, fare, and cab type.`;
            const whatsappUrl = `https://wa.me/917007094655?text=${encodeURIComponent(message)}`;

            return (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                  src={cab.image}
                  alt={cab.name}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-green-700 mb-2">{cab.name}</h3>
                  <p className="text-gray-700 text-sm mb-4">{cab.description}</p>
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

export default CabBooking;
