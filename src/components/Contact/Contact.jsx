import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 py-12 px-5 lg:px-6">
      <div className="container mx-auto">
        <h2 className="uppercase hover:underline text-4xl font-extrabold mb-12 text-gray-800 heading-text relative">
          <span className="relative z-10">Contact Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105">
              <div className="p-6 flex items-center">
                <FaPhoneAlt className="text-4xl text-orange-500 mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 text-left">Phone</h3>
                  <p className="text-gray-600 mt-2">+91 9007062180</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105">
              <div className="p-6 flex items-center">
                <FaEnvelope className="text-4xl text-orange-500 mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 text-left">Email</h3>
                  <p className="text-gray-600 mt-2">kkghosh0099@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105">
              <div className="p-6 flex items-center">
                <FaMapMarkerAlt className="text-4xl text-orange-500 mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 text-left">
                    Location
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
                    723156
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Get in Touch
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-base font-semibold text-gray-700 text-left">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-transform duration-300 hover:scale-105"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-700 text-left">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-transform duration-300 hover:scale-105"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-base font-semibold text-gray-700 text-left">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-orange-500 focus:border-orange-500 transition-transform duration-300 hover:scale-105"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-orange-700 text-white font-semibold rounded-md shadow-lg hover:bg-orange-800 transition-transform duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
