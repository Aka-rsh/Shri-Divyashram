import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <section className="bg-[#FCEFCB] py-10 min-h-screen flex flex-col justify-between">
        <div className="max-w-7xl mx-auto bg-white p-6 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row gap-10 md:gap-16 flex-grow mt-6 mb-6">
          {/* Contact Form */}
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center md:text-left">
              Feel Free to Connect
            </h2>
            <form>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Full Name */}
    <div>
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Full Name
      </label>
      <input
        id="name"
        type="text"
        placeholder="Enter your full name"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
      />
    </div>

    {/* Phone Number */}
    <div>
      <label
        htmlFor="phone"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Phone Number
      </label>
      <input
        id="phone"
        type="tel"
        placeholder="Enter your phone number"
        required
        pattern="[0-9]{10}"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
      />
    </div>

    {/* Email Address */}
    <div className="md:col-span-2">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Email Address
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        required
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
      />
    </div>
  </div>

  {/* Message */}
  <div className="mt-6">
    <label
      htmlFor="message"
      className="block mb-2 text-sm font-medium text-gray-700"
    >
      Your Message
    </label>
    <textarea
      id="message"
      placeholder="Type your message here..."
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
      rows={5}
    ></textarea>
  </div>

  {/* Submit */}
  <div className="mt-8 text-center md:text-left">
    <button
      type="submit"
      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-lg font-medium transition-transform hover:-translate-y-1"
    >
      Send Message
    </button>
  </div>
</form>

          </div>

          {/* Contact Info + Updated Map */}
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center md:text-left">
              Get in Touch
            </h2>
            <p className="mb-3 text-gray-600">📞 +91 70070 94655</p>
            <p className="mb-3 text-gray-600">📧 sridevashramtrust@gmail.com</p>
            <p className="mb-6 text-gray-600">📍 Varanasi, Uttar Pradesh, India</p>

            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.406369936785!2d82.989136975386!3d25.324141377629488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2de222363511%3A0x720ce9d306ed891a!2sANNKUT%20SUPPLEMENTS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1748612813175!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Updated Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
