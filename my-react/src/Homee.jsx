import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

const Homee = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const trustObjectives = [
    "(a) To establish and maintain education and Hindu religious places for Sanskrit education and cultural development, free or at nominal cost to all.",
    "(b) To run and build Sanskrit, religious institutions, and Gaushalas (cow shelters).",
    "(c) To provide financial help to needy and poor students.",
    "(d) To organize tours and travels to historical places.",
    "(e) To distribute free food to poor and needy persons at different times and places.",
    "(f) To buy, lease, or sell movable or immovable property for trust objectives.",
    "(g) To establish schools, colleges, universities, and educational institutions including technical and medical ones.",
    "(h) To support educational institutions with grants, aid, or other assistance to spread knowledge and education to the public.",
    "(i) To build and run dharmshalas, ghats, hospitals, bridges, etc., for public use without caste or creed discrimination.",
    "(j) To promote and support arts, literature, history, and research in India.",
    "(k) To develop and maintain parks, gardens, gyms, and sports clubs for public use.",
    "(l) To support orphanages, old-age homes, and institutions for poor, destitute, widows, and the aged.",
    "(m) To help and educate the physically or mentally challenged, providing them with food, clothing, or shelter.",
    "(n) To provide aid during natural disasters and support relief work.",
    "(o) To promote sanitation and cleanliness in cities, villages, and water bodies.",
    "(p) To start and maintain Gaushalas and care for cows.",
    "(q) To take all actions necessary for the fulfillment of these objectives as decided by the trustees.",
    "(r) To promote environmental development through activities like plantation, etc.",
    "(s) To organize meetings/seminars to educate the public and protect the downtrodden from exploitation.",
  ];

  return (
    <>
      <Navbar />
      <Home />

      <div className="bg-gradient-to-br from-blue-50 to-white text-gray-800 px-4 sm:px-6 md:px-8 lg:px-12 py-16 font-sans max-w-screen overflow-x-hidden">
        <section className="flex flex-col md:flex-row items-center md:justify-between mb-16">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8">
            <h2 className="text-4xl text-amber-500 md:text-5xl font-extrabold mb-4 leading-tight">
              Welcome to Shri Divyashram
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line break-words">
              At Divyashram, we are devoted to preserving our <span className="font-bold text-[#FF9B45]">Sanskriti</span>, nurturing <span className="font-bold text-[#FF9B45]">spiritual values</span>, and serving humanity. As a non-profit trust, our mission spans from promoting <span className="font-bold text-[#FF9B45]">Sanskrit education</span>, maintaining <span className="font-bold text-[#FF9B45]">Gaushalas</span>, organizing <span className="font-bold text-[#FF9B45]">charity drives</span>, to supporting the <span className="font-bold text-[#FF9B45]">underprivileged</span> through food, education, healthcare, and disaster relief. We also focus on <span className="font-bold text-[#FF9B45]">environmental sustainability</span> and <span className="font-bold text-[#FF9B45]">cultural heritage</span>.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
            <img
              src="./logo.png"
              alt="Divyashram Logo"
              className="w-40 sm:w-48 md:w-56 h-auto object-contain mb-8 rounded-full shadow-xl border-8 border-[#FF9B45] max-w-full"
              style={{
                filter: 'drop-shadow(0 0 12px #FF9B45)',
              }}
            />
            <button
              className="bg-[#FF9B45] text-white font-bold text-xl px-10 py-4 rounded-full hover:bg-[#e68a32] transition duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#FF9B45] transform hover:scale-105"
              aria-label="Connect with Divyashram"
              onClick={() => setIsPopupOpen(true)}
            >
              Connect with Us
            </button>
          </div>
        </section>

        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-2 sm:px-4">
            <div className="bg-white rounded-2xl shadow-3xl p-6 sm:p-8 w-full max-w-lg relative overflow-x-hidden">
              <button
                className="absolute top-4 right-5 text-4xl font-extrabold text-gray-500 hover:text-gray-900"
                onClick={() => setIsPopupOpen(false)}
                aria-label="Close popup"
              >
                &times;
              </button>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Get in Touch</h2>
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSfKliaDcA-MU2-koEHog8G_0rocdNvL_ZbzPC5DiYwdhZdSWg/formResponse"
                method="POST"
                target="_blank"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="entry.2005620554"
                    placeholder="Full Name"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-3 focus:ring-[#FF9B45] focus:border-[#FF9B45] text-lg"
                  />
                  <input
                    type="email"
                    name="entry.1045781291"
                    placeholder="Email Address"
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-3 focus:ring-[#FF9B45] focus:border-[#FF9B45] text-lg"
                  />
                </div>
                <input
                  type="tel"
                  name="entry.1166974658"
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-3 focus:ring-[#FF9B45] focus:border-[#FF9B45] text-lg"
                />
                <textarea
                  name="entry.839337160"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-3 focus:ring-[#FF9B45] focus:border-[#FF9B45] resize-y text-lg"
                />
                <button
                  type="submit"
                  className="w-full bg-[#FF9B45] text-white font-bold text-xl py-4 rounded-lg hover:bg-[#e68a32] transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:ring-4 focus:ring-[#FF9B45] transform hover:scale-105"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        <section className="mt-20 bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl border border-blue-100 overflow-x-hidden">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-black leading-tight">
            Our Core Objectives: Building a Better Tomorrow
          </h1>
          <ul className="space-y-5 text-lg md:text-xl text-gray-700 list-inside">
            {trustObjectives.map((obj, index) => (
              <li key={`${index}-${obj}`} className="leading-relaxed flex items-start break-words">
                <svg className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  <strong className="text-yellow-500">{obj.substring(0, 3)}</strong>
                  {obj.substring(3)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Homee;
