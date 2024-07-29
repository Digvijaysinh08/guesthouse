import React from "react";
import img from "../../assets/About.jpg"
import { useNavigate } from "react-router-dom";

 function About({closeNavbar}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/booking');
  };

  return (
    <div className="py-16 bg-white">
      <h2 className="uppercase hover:underline text-4xl font-extrabold text-center mb-12 text-gray-800 heading-text relative">
        About Kingsukh Guest House
      </h2>
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12 transform transition duration-300 hover:scale-105">
            <img
              src={img}
              alt="Kingsukh Guest House"
              className="rounded-lg h-lvh shadow-lg"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-xl text-gray-900 font-semibold md:text-4xl">
              The Best Holidays Start Here!
            </h2>
            <p className="mt-4 text-gray-600">
              Immerse in Nature's Splendor: Begin your journey at Kingsukh Guest
              House, nestled among the breathtaking hills of Biharinath,
              Baranti, Susunia, and Joychandi. Explore the serene beauty of
              Baranti, Maithon, and Panchat Dams, each offering a unique escape
              into nature. Surrounded by lush landscapes and scenic vistas,
              every moment spent here promises tranquility and awe-inspiring
              views.
            </p>
            <p className="mt-4 text-gray-600">
              Unwind in Comfort and Luxury: At Kingsukh Guest House, comfort
              meets elegance. Relax in our cozy accommodations, savor delicious
              meals crafted with care, and rejuvenate in our verdant garden
              oasis. Our warm hospitality ensures a memorable stay, blending the
              charm of nature with the comforts of home. The best holidays truly
              start here!
            </p>
            <button onClick={handleClick} className="mt-6 text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none transition-transform duration-300 hover:scale-105 shadow-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;