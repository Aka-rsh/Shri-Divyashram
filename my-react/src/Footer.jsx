import React from 'react';

const Footer = () => {
  return (
    <section
      id="Footer"
      className="bg-gradient-to-br from-stone-900 to-neutral-800 text-stone-100 py-20 font-inter shadow-2xl overflow-hidden"
    >
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      <footer className="container mx-auto px-4 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 xl:gap-16 items-start">
          {/* Column 1: Logo and About */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:col-span-2">
            <img
              src="./logo.png"
              alt="Divyashram Logo"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full mb-4 border-4 border-stone-400 shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
            <p className="text-lg leading-relaxed text-stone-200">
              Join us on our journey of spiritual discovery. Follow our channels and stay connected for updates and sacred experiences.
            </p>
          </div>

          {/* Column 2 + 3 in a responsive 2-column layout */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Quick Contact */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide border-b-2 border-stone-500 pb-2">
                Quick Contact
              </h3>
              <ul className="space-y-4 break-words w-full">
                <li className="flex items-center justify-center sm:justify-start">
                  <i className="fa-solid fa-map-pin mr-3 text-stone-300 text-xl"></i>
                  <span className="text-base">Best Travel Agency in Varanasi</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start">
                  <i className="fa-solid fa-phone mr-3 text-stone-300 text-xl"></i>
                  <span className="text-base">7007094655, 9415273451</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start">
                  <i className="fa-regular fa-envelope mr-3 text-stone-300 text-xl"></i>
                  <a
                    href="mailto:sridevashramtrust@gmail.com"
                    className="text-base hover:text-white transition-colors duration-300 ease-in-out"
                  >
                    sridevashramtrust@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide border-b-2 border-stone-500 pb-2">
                Opening Hours
              </h3>
              <p className="text-base break-words">
                <strong className="text-stone-200">Open Hours (Mon - Sat):</strong>
                <br />
                24×7 Available
              </p>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wide border-b-2 border-stone-500 pb-2">
              Social Media
            </h3>
            <div className="space-y-4 flex flex-col items-center md:items-start w-full text-center md:text-left">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start hover:text-white transition-colors w-full"
              >
                <i className="fab fa-facebook-f text-xl mr-3"></i>
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start hover:text-white transition-colors w-full"
              >
                <i className="fab fa-instagram text-xl mr-3"></i>
                Instagram
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start hover:text-white transition-colors w-full"
              >
                <i className="fab fa-twitter text-xl mr-3"></i>
                Twitter
              </a>
              <a
                href="https://wa.me/917007094655"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start hover:text-white transition-colors w-full"
              >
                <i className="fab fa-whatsapp text-xl mr-3"></i>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <hr className="border-stone-700 my-16 opacity-75" />

        {/* Footer Bottom Text */}
        <div className="text-center text-sm text-stone-200">
          <p>© 2025 | All Rights Reserved. Designed by Akarsh Srivastava & Saurav</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
