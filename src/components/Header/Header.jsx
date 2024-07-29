import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PiDotsNineBold } from "react-icons/pi";
import { MdClose } from "react-icons/md";
import Button from "../Button/Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header className="shadow-md sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {!isOpen && (
            <Link to="https://api.whatsapp.com/send?phone=919007062180" className="flex items-center text-lg font-bold text-orange-700">
              Guest House
            </Link>
          )}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex items-center w-full lg:flex lg:w-auto`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/rooms", label: "Rooms" },
                { path: "/services", label: "Services" },
                { path: "/gallery", label: "Gallery" },
                { path: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700 font-semibold" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    onClick={closeNavbar}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Button closeNavbar={closeNavbar} />
              </li>
            </ul>
          </div>
          <button onClick={toggleNavbar} className="md:hidden absolute top-4 right-4 bg-gray-100 rounded-lg shadow-lg">
            {isOpen ? <MdClose className="text-gray-800 w-6 h-6" /> : <PiDotsNineBold className="text-gray-800 w-6 h-6" />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
