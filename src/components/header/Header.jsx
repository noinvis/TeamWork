import React, { useState } from "react";
import logo from "./img/Frame 168.png";
import { Link, NavLink } from "react-router-dom";
import { IoCartOutline, IoClose, IoHeartOutline, IoHomeOutline, IoMenu, IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="max-w-[1440px] w-full mx-auto bg-white">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 gap-4 md:gap-0">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        <ul
          className={`flex gap-4 e top-full left-0 max-sm:absolute max-sm:bg-white max-sm:w-full max-sm:flex-col max-sm:gap-2  max-sm:overflow-hidden max-sm:border-b max-sm:border-gray-200 duration-200 ${
            toggle ? "max-sm:h-[110px]" : "max-sm:h-0"
          }`}
        >
          <li className="max-sm:px-3 ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="max-sm:px-3 ">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="max-sm:px-3 ">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="max-sm:px-3 ">
            <Link to={"/shop"}>Shop</Link>
          </li>
        </ul>

        <div className="flex gap-3 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:w-full max-sm:justify-evenly max-sm:bg-white max-sm:py-4 max-sm:border-t max-sm:border-gray-300">
                  <NavLink
                    className={({ isActive }) =>
                      `sm:hidden ${isActive ? "text-red-500" : ""}`
                    }
                    to={"/"}
                  >
                    <IoHomeOutline />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}
                    to={"/search"}
                  >
                    <IoSearchOutline />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}
                    to={"/wishlist"}
                  >
                    <IoHeartOutline />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}
                    to={"/cart"}
                  >
                    <IoCartOutline />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `${isActive ? "text-red-500" : ""}`}
                    to={"/profile"}
                  >
                    <FaRegUser />
                  </NavLink>
                </div>
        
                <button
                  className="text-2xl sm:hidden"
                  onClick={() => setToggle((p) => !p)}
                >
                  {toggle ? <IoClose /> : <IoMenu />}
                </button>
      </div>
    </header>
  );
};

export default React.memo(Header);
