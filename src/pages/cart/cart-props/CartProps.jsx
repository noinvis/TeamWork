import React, { memo } from 'react'
import img from "../img/Rectangle 1.png";
import logo from '../img/logo.png'
import { useNavigate } from "react-router-dom";

const CartProps = ({title}) => {
    const navigate = useNavigate()
  return (
    <section className="w-full mx-auto bg-cover bg-center min-h-[320px] flex items-center justify-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="flex flex-col justify-between items-center">
        <img src={logo}/>
        <p className="font-medium text-[48px] text-center">{title}</p>
        <div className="flex gap-[6px] items-center">
          <p className="font-medium hover:cursor-pointer" onClick={() => navigate("/")}>Home</p>
          <div className="text-[20px]">&#8250;</div>
          <p className="font-light hover:cursor-pointer">{title}</p>
        </div>
      </div>
    </section>
  )
}

export default memo(CartProps)