import React, { useState } from "react";
import logo from "./img/Frame 168.png";
import { NavLink, useNavigate } from "react-router-dom";
import {
  IoCartOutline,
  IoClose,
  IoHomeOutline,
  IoMenu,
} from "react-icons/io5";
import { FiHeart, FiSearch} from "react-icons/fi";
import { CiUser } from "react-icons/ci";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="z-30 sticky top-0 left-0 bg-white">
      <div className="container w-full mx-auto">
        <nav className="flex md:flex-row items-center justify-between py-4 gap-4 md:gap-0">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-auto"
              onClick={() => navigate("/")}
            />
          </div>
            <ul
              className={`flex gap-[24px] top-full left-0 max-md:absolute max-md:bg-white max-md:w-full max-md:flex-col max-md:gap-2 max-md:overflow-hidden max-md:border-b max-md:border-gray-200 duration-300 
                ${toggle ? "max-md:py-[20px] max-md:px-[30px]" : "max-md:h-0 max-md:px-[30px]"}`}>
              <li className="hover:text-[#B88E2F] duration-300 max-md:mb-[1rem]">
                <NavLink to={"/"} className='link'>Home</NavLink>
              </li>
              <li className="hover:text-[#B88E2F] duration-300 max-md:mb-[1rem]">
                <NavLink to={"/blog"} className='link'>Blog</NavLink>
              </li>
              <li className="hover:text-[#B88E2F] duration-300 max-md:mb-[1rem]">
                <NavLink to={"/contact"} className='link'>Contact</NavLink>
              </li>
              <li className="hover:text-[#B88E2F] duration-300 max-md:mb-[1rem]">
                <NavLink to={"/shop"} className='link'>Shop</NavLink>
              </li>
            </ul>

          <div className="flex gap-3 max-md:fixed max-md:bottom-0 max-md:left-0 max-md:w-full max-md:justify-evenly max-md:bg-white max-md:py-4 max-md:border-t max-md:border-gray-300 z-30">
            <NavLink
              className={({ isActive }) => `${isActive ? "duration-300 text-[#B88E2F] rounded-[10px] drop-shadow-amber-600" : ""} text-[20px]`}
              to={"/search"}
            >
              <FiSearch />
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive ? "duration-300 text-[#B88E2F] rounded-[10px] drop-shadow-amber-600" : ""} text-[20px]`}
              to={"/wishlist"}
            >
              <FiHeart />
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `md:hidden ${isActive ? "duration-300 text-[#B88E2F] rounded-[10px] drop-shadow-amber-600" : ""} text-[20px]`
              }
              to={"/"}
            >
              <IoHomeOutline />
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive ? "duration-300 text-[#B88E2F] rounded-[10px] drop-shadow-amber-600" : ""} text-[20px]`}
              to={"/cart"}
            >
              <IoCartOutline />
            </NavLink>
            <NavLink
              className={({ isActive }) => `${isActive ? "duration-300 text-[#B88E2F] rounded-[10px] drop-shadow-amber-600" : ""} text-[20px]`}
              to={"/profile"}
            >
              <CiUser />
            </NavLink>
          </div>

          <button
            className="text-2xl md:hidden"
            onClick={() => setToggle((p) => !p)}
          >
            {toggle ? <IoClose /> : <IoMenu />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
