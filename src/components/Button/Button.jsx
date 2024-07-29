import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button({closeNavbar}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (closeNavbar) {
      closeNavbar();
    }
    navigate('/booking');
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-transform duration-300 transform hover:scale-105 focus:outline-none"
      >
        Book Now
      </button>
    </div>
  );
}

export default Button;
