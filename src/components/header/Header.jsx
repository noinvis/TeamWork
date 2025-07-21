import React from "react";
import logo from "./img/Frame 168.png";
import userIcon from "./img/user.png";
import searchIcon from "./img/search.png";
import heartIcon from "./img/heart.png";
import cartIcon from "./img/cart.png";

const Header = () => {
  return (
    <header className="max-w-[1440px] w-full mx-auto bg-white shadow-sm ">
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        <nav className="hidden md:flex space-x-8 font-medium text-gray-800">
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

        <div className="flex items-center space-x-6">
          <img
            src={userIcon}
            alt="User"
            className="w-5 h-5 cursor-pointer hover:scale-110 transition"
          />
          <img
            src={searchIcon}
            alt="Search"
            className="w-5 h-5 cursor-pointer hover:scale-110 transition"
          />
          <img
            src={heartIcon}
            alt="Wishlist"
            className="w-5 h-5 cursor-pointer hover:scale-110 transition"
          />
          <img
            src={cartIcon}
            alt="Cart"
            className="w-5 h-5 cursor-pointer hover:scale-110 transition"
          />
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
