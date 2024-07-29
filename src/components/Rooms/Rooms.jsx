import React from "react";
import Button from "../Button/Button";
import img1  from "../../assets/Room/1.jpg"
import img2  from "../../assets/Room/2.jpg"
import img3  from "../../assets/Room/3.jpg"

function Rooms() {
  const rooms = [
    {
      image:img1,
      title: "Cozy Haven Room",
      description: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: "Rs. 1000/night"
    },
    {
      image: img2,
      title: "Spacious Serenity Suite",
      description: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      price: "Rs. 1500/night"
    },
    {
      image: img3,
      title: "Cozy Haven Room",
      description: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: "Rs. 2000/night"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 lg:px-6">
      <h2 className="uppercase hover:underline text-4xl font-extrabold text-center mb-12 text-gray-800 heading-text relative">
        <span className="relative z-10">Our Living Rooms</span>
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative">
              <img
                src={room.image}
                alt={room.title}
                className="object-cover w-full h-64 rounded-t-2xl "
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{room.title}</h3>
              <p className="text-gray-700 mb-3">{room.description}</p>
              <p className="text-lg font-bold text-gray-800 mb-4">{room.price}</p>
              <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
