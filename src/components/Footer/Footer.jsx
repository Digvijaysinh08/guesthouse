import React from "react";
import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { SiYoutube, SiTwitter } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white border-t shadow-lg mt-5">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center text-2xl font-bold text-orange-700 uppercase">
              Kingsukh Guest House
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-5 text-md font-bold text-gray-900 uppercase">Quick Links</h2>
              <ul className="text-gray-500 font-medium">
                {["Browse Destinations", "Special Offers & Packages", "Room Types & Amenities", "Customer Reviews & Ratings", "Travel Tips & Guides"].map((link, index) => (
                  <li className="mb-2" key={index}>
                    <Link to="/" className="hover:underline hover:text-orange-700">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-md font-bold text-gray-900 uppercase">Our Services</h2>
              <ul className="text-gray-500 font-medium">
                {["Concierge Assistance", "Flexible Booking Options", "Airport Transfers", "Wellness & Recreation"].map((service, index) => (
                  <li className="mb-2" key={index}>
                    <Link to="/" className="hover:underline hover:text-orange-700">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-md font-bold text-gray-900 uppercase">Contact Us</h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-2">
                  <Link to="/" className="hover:underline hover:text-orange-700">
                    Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline hover:text-orange-700">
                    kkghosh0099@gmail.com
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/" className="hover:underline hover:text-orange-700">
                    +91 9007062180
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024
            <Link to="/" className="hover:underline text-gray-500 hover:text-gray-900">
              vagheladigvijaysinh
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {[
              { to: "/", icon: <FaFacebookF className="w-4 h-4" />, label: "Facebook page" },
              { to: "/", icon: <GrInstagram className="w-4 h-4" />, label: "Instagram community" },
              { to: "/", icon: <SiYoutube className="w-4 h-4" />, label: "YouTube community" },
              { to: "/", icon: <SiTwitter className="w-4 h-4" />, label: "Twitter community" },
            ].map((item, index) => (
              <Link to={item.to} className="text-gray-500 hover:text-gray-900" key={index}>
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
