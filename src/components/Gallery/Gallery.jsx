import React from 'react';
import img1 from '../../assets/Gallery/1.jpg';
import img2 from '../../assets/Gallery/2.jpg';
import img3 from '../../assets/Gallery/3.jpg';
import img4 from '../../assets/Gallery/4.jpg';
import img5 from '../../assets/Gallery/5.jpg';
import img6 from '../../assets/Gallery/6.jpg';
import img7 from '../../assets/Gallery/7.jpg';
import img8 from '../../assets/Gallery/8.jpg';

 function Gallery(){
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="uppercase hover:underline text-4xl font-extrabold text-center mb-12 text-gray-800 heading-text relative">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image,index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-0 flex items-center justify-center transition duration-300">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
