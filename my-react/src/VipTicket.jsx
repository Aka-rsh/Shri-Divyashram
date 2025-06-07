import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaPhoneAlt } from 'react-icons/fa';
import Footer from './Footer';

const VipTicket = () => {
  const [openDarshan, setOpenDarshan] = useState(null);

  const toggleDarshan = (name) => {
    setOpenDarshan(openDarshan === name ? null : name);
  };

  const packages = {
    aarti: [
      { name: 'Mangla Aarti', price: 500 },
      { name: 'Mid Day Bhog Aarti', price: 300 },
      { name: 'Sapt Rishi Aarti', price: 300 },
      { name: 'Shringaar / Bhog Aarti', price: 300 },
    ],
    rudra: [
      { name: 'Rudrabhishek (1 Shastri)', price: 450 },
      { name: 'Rudrabhishek (5 Shastri)', price: 1380 },
      { name: 'Rudrabhishek (11 Shastri)', price: 2600 },
      { name: 'Laghu Rudra (11 Shastri)', price: 5500 },
      { name: 'Twenty Years Rudrabhishek', price: 25000 },
      { name: 'Rudrabhishek (1 Shastri) – Video Conference', price: 700 },
      { name: 'Rudrabhishek (5 Shastri) – Video Conference', price: 2100 },
    ],
    sugam: [{ name: 'Sugam Darshan', price: 250 }],
    mahadev: [
      { name: 'Sanyasi Bhojan (Daily)', price: 3000 },
      { name: 'Sanyasi Bhojan (Monday)', price: 4500 },
      { name: 'Dainik Ratri Kalin Shringar (9 PM)', price: 5000 },
      { name: 'Shravan Somvar Sanyasi Bhojan', price: 7500 },
      { name: 'Every Purnima Shringaar', price: 3700 },
      { name: 'Shraavan Somvar Shringaar', price: 15000 },
      { name: 'Milk (5 Ltr to 21 Ltr)', price: 230 },
      { name: 'Akhand Deep', price: 700 },
      { name: 'Laksha Bilarvachan', price: 8660 },
      { name: 'Bilarvachan', price: 500 },
      { name: 'Satyanarayan Katha', price: 500 },
      { name: 'Mahamrityunjaya Jap Puja (5 Days / 7 Shastri)', price: 51000 },
      { name: 'Mahamrityunjaya Jap Puja (1 Day / 32 Shastri)', price: 100000 },
    ],
  };

  const renderPackageList = (key) => (
  <ul className="mt-4 space-y-4">
    {packages[key].map((pkg, idx) => {
      const message = `Hello, I would like to book "${pkg.name}" at Kashi Vishwanath Mandir. Price: ₹${pkg.price.toLocaleString()}`;
      const whatsappUrl = `https://wa.me/917007094655?text=${encodeURIComponent(message)}`;

      return (
        <li key={idx} className="flex justify-between items-center bg-gray-50 border p-3 rounded-md shadow-sm">
          <div className="text-sm font-medium text-gray-800">
            {pkg.name} – ₹{pkg.price.toLocaleString()}
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-sm font-semibold"
          >
            WhatsApp
          </a>
        </li>
      );
    })}
  </ul>
);


  const getTitle = (key) => {
    switch (key) {
      case 'aarti':
        return 'Aarti Packages';
      case 'rudra':
        return 'Rudrabhishek Options';
      case 'sugam':
        return 'Sugam Darshan';
      case 'mahadev':
        return 'Mahadev Pooja';
      default:
        return key;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      <div className="bg-[#A7C1A8] w-full py-10 px-4">
        <h1 className="text-4xl font-bold text-center underline underline-offset-4 decoration-2 decoration-black mb-2">
          VIP Ticket – Kashi Vishwanath Mandir
        </h1>
        <h2 className="text-2xl text-center text-gray-800 font-medium">
          Darshan & Pooja Packages
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {Object.entries(packages).map(([key]) => (
          <div
            key={key}
            className={`bg-white rounded-xl border border-gray-200 shadow-md transition hover:shadow-xl p-6 cursor-pointer ${
              openDarshan === key ? 'ring-2 ring-amber-400' : ''
            }`}
            onClick={() => toggleDarshan(key)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-amber-700 capitalize">
                {getTitle(key)}
              </h3>
              <span className="text-sm text-gray-500">
                {openDarshan === key ? '▲ Hide' : '▼ View'}
              </span>
            </div>

            {openDarshan === key && renderPackageList(key)}
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-14 text-center px-4 mb-6">
        <h2 className="text-2xl font-semibold mb-4">For More Enquiry :-</h2>
        <a href="tel:7007094655">
          <button className="flex flex-col sm:flex-row items-center justify-center bg-[#393E46] text-white text-lg sm:text-xl font-bold px-6 py-4 rounded-lg shadow-md hover:bg-[#5c63a1] transition duration-300 mx-auto">
            <FaPhoneAlt className="mr-3 text-xl" />
            <div className="text-center sm:text-left">
              <div>Call Now - 7007094655</div>
              <div className="text-sm font-medium text-gray-200">Book your Darshan</div>
            </div>
          </button>
        </a>
        {/* WhatsApp Button */}
<div className="flex justify-center mt-4">
  <a
    href="https://wa.me/917007094655?text=Hello%2C%20I%20would%20like%20to%20book%20a%20Darshan%20package%20at%20Kashi%20Vishwanath%20Mandir."
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="flex flex-col sm:flex-row items-center justify-center bg-green-500 text-white text-lg sm:text-xl font-bold px-6 py-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
      <svg
        className="w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.52 3.48A11.78 11.78 0 0012.05.5a11.53 11.53 0 00-9.68 17.73L.5 23.5l5.46-1.42a11.62 11.62 0 005.92 1.59H12a11.52 11.52 0 008.52-20.19zm-8.5 18.22a9.47 9.47 0 01-4.89-1.34l-.35-.2-3.25.85.87-3.16-.22-.33a9.5 9.5 0 0115.03-11.1A9.5 9.5 0 0112.02 21.7zM17.1 14.46c-.28-.14-1.63-.8-1.88-.89s-.44-.14-.62.14-.71.89-.88 1.08-.33.21-.6.07a7.78 7.78 0 01-2.29-1.41 8.6 8.6 0 01-1.58-1.95c-.17-.3 0-.46.13-.6.13-.13.3-.33.44-.5a2.05 2.05 0 00.29-.47.53.53 0 000-.5c-.07-.13-.62-1.5-.85-2s-.45-.45-.62-.45H8c-.18 0-.45 0-.68.33a2.8 2.8 0 00-.87 2.08 4.87 4.87 0 001.03 2.59 10.98 10.98 0 004.47 4.31 4.96 4.96 0 002.83.82 2.42 2.42 0 001.58-.66 2 2 0 00.47-1.43c0-.21-.15-.3-.31-.38z" />
      </svg>
      <div className="text-center sm:text-left">
        <div>WhatsApp Us</div>
        <div className="text-sm text-gray-200 font-medium">Quick chat with our team</div>
      </div>
    </button>
  </a>
</div>

      </div>
      
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default VipTicket;
