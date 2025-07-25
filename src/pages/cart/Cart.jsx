import React from "react";
import './cart.css'
import CartProps from "./cart-props/CartProps";

const Cart = () => {
  return (
    <>
      <CartProps/>
      <section className="flex container gap-[30px] mt-[70px]">
        <div className="w-full">
          <div className="flex bg-[#F9F1E7] h-[55px]"></div>
          <div></div>
        </div>
        <div className="bg-[#F9F1E7] pb-[80px] w-[400px] flex flex-col items-center">
          <p className="text-center font-semibold text-[32px] mt-[15px]">Cart Totals</p>
          <div className="flex gap-[60px] mt-[60px] items-center">
            <p className="font-medium">Subtotal</p>
            <p className="text-[#9F9F9F]">Rs. </p>
          </div>
          <div className="flex gap-[60px] mt-[30px] items-center">
            <p className="font-medium">Total</p>
            <p className="text-[#B88E2F] text-[20px]">Rs. </p>
          </div>
          <button className="border rounded-[15px] py-[15px] px-[60px] mt-[40px]">Check Out</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
