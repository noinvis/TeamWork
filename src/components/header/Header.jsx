import React from "react";
import logo from "./img/Frame 168.png";
import userIcon from "./img/user.png";
import searchIcon from "./img/search.png";
import heartIcon from "./img/heart.png";
import cartIcon from "./img/cart.png";

const Header = () => {
  return (
    <header className="max-w-[1440px] w-full mx-auto bg-white shadow-sm">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 gap-4 md:gap-0">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        <nav className="hidden md:flex space-x-6 text-sm lg:text-base font-medium text-gray-800">
          <a href="#" className="hover:text-yellow-600">
            Home
          </a>
          <a href="#" className="hover:text-yellow-600">
            Shop
          </a>
          <a href="#" className="hover:text-yellow-600">
            About
          </a>
          <a href="#" className="hover:text-yellow-600">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          {[userIcon, searchIcon, heartIcon, cartIcon].map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:scale-110 transition"
              alt="icon"
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
