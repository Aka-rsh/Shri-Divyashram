import React from 'react';
import Navbar from './Navbar';

const prasadItems = [
  { name: 'Ladoo Prasad', price: 151, weight: '250g (4–5 ladoos)' },
  { name: 'Panchamrit Bhog', price: 201, weight: '200ml' },
  { name: 'Dry Fruit Prasad Box', price: 351, weight: '300g' },
  { name: 'Tulsi Mala + Prasad Combo', price: 251, weight: '150g (includes mala + prasad)' },
];

const Prasad = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Header */}
      <div className="text-center px-4 pt-10 pb-6">
        <h1 className="text-4xl font-bold underline underline-offset-4 decoration-amber-500 mb-4">
          Divyashram Prasad Bhandar
        </h1>
        <p className="text-lg max-w-4xl mx-auto leading-relaxed">
          Savor the holiness of every offering, go on the blessing journey, and spread the delight to
          those you care about. Let the prasad serve as a daily reminder of the divine presence
          within and beyond.
        </p>
      </div>

      {/* Prasad Booking Section */}
      <div className="bg-amber-100 py-10">
        <h2 className="text-2xl text-center font-semibold text-amber-800 mb-6">Bhog / Prasad Items</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {prasadItems.map((item, index) => {
            const message = `Namaste 🙏, I would like to order the *${item.name}* (${item.weight}) Prasad for ₹${item.price}. Please guide me further.`;
            const whatsappUrl = `https://wa.me/917007094655?text=${encodeURIComponent(message)}`;

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border p-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-amber-700">{item.name}</h3>
                  <p className="text-gray-600 text-sm mt-1 mb-1">Weight: {item.weight}</p>
                  <p className="text-gray-700 mb-3 font-medium">Price: ₹{item.price}</p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-sm text-center font-medium transition"
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

export default Prasad;
