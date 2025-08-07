import React from "react";
import logo from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div>
        <div className="iconCircle ">
          <img   src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
