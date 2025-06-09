import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const prasadItems = [
  { name: 'Kashi Vishwanath Mandir Prasad', image: './Varanasi/KashivishwanathPrasad.jpeg' },
  { name: 'Annapurna Mata Mandir', image: './Varanasi/Annapurnamata.jpeg' },
  { name: 'Gangajal', image: './Varanasi/GangaJal.png' },
  { name: 'Rudraksh Mala', image: './Varanasi/RudrakshaMala.jpeg' },
  { name: 'Sacred Ash (Bhabhut)', image: './Varanasi/Bhasma.png' },
  { name: 'Sankat Mochan Prasad', image: './Varanasi/SankatMochanPrasad.jpeg' },
  { name: 'Kal Bhairav Prasad + band', image: './Varanasi/KalBhairavPrasadband.jpeg' },
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

      {/* Prasad Items Section */}
      <div className="bg-amber-100 py-10">
        <h2 className="text-2xl text-center font-semibold text-amber-800 mb-10">Bhog / Prasad Items</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4">
          {prasadItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-md border-4 border-white bg-white">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-amber-800">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* Final Fixed Price Section */}
<div className="bg-gray-100 py-14 px-4">
  <h2 className="text-2xl text-center font-bold text-amber-700 mb-6">
    Prasad Offerings – Fixed Price
  </h2>
  <p className="text-center text-gray-700 mb-10">
    Each divine prasad item is now available at <span className="font-semibold text-green-600">₹501 + delivery charges</span>.
    Choose your blessing and order easily via WhatsApp.
  </p>

  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {prasadItems.map((item, index) => {
    const message = `Namaste 🙏, I would like to order the *${item.name}* for ₹501 + delivery charges. Please guide me further.\n\nनमस्ते 🙏, मैं *${item.name}* प्रसाद ₹501 + डिलीवरी चार्ज के साथ बुक करना चाहता/चाहती हूँ। कृपया आगे की जानकारी दें।`;
    const whatsappUrl = `https://wa.me/917007094655?text=${encodeURIComponent(message)}`;

      return (
        <div
          key={index}
          className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-amber-200">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-amber-800 mb-2">{item.name}</h3>
          <p className="text-gray-600 mb-3">Price: ₹501 + Delivery</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-sm font-medium transition"
          >
            Book via WhatsApp
          </a>
        </div>
      );
    })}
  </div>
</div>

{/* Footer */}
<Footer></Footer>

    </div>
  );
};

export default Prasad;
