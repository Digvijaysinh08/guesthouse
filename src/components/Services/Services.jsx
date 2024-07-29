import React from "react";
import img1 from "../../assets/Services/1.jpg";
import img2 from "../../assets/Services/2.jpg";
import img3 from "../../assets/Services/3.jpg";
import img4 from "../../assets/Services/4.webp";

function Service() {
  const services = [
    {
      image: img1,
      title: "High Class Security",
      description:
        "Our high-class security ensures top-tier protection with advanced technology, expert personnel, and customized solutions for your peace of mind."
    },
    {
      image: img2,
      title: "24 Hours Room Service",
      description:
        "Enjoy 24-hour room service, offering delicious meals and prompt assistance whenever you need, ensuring your comfort and convenience around the clock."
    },
    {
      image: img3,
      title: "Restaurant",
      description:
        "Our restaurant offers a delightful dining experience with a diverse menu, fresh ingredients, and exceptional service in a cozy, inviting atmosphere."
    },
    {
      image: img4,
      title: "Tourist Guide Support",
      description:
        "Our tourist guide support offers expert local insights, personalized tours, and assistance to ensure a memorable and hassle-free travel experience."
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 lg:px-6">
      <h2 className="uppercase hover:underline text-4xl font-extrabold text-center mb-12 text-gray-800 heading-text relative">
        Our Services
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
