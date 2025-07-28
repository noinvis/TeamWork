import React from "react";
import CartProps from "../cart/cart-props/CartProps";
import SectionProps from "../cart/section-props/SectionProps";
import { useCart } from "../../zustand/useCart";
import { Navigate } from "react-router-dom";
import { api } from "../../api";
import axios from "axios";

const BOT_TOKEN = "8491754994:AAEAY63AAepcM30C8ODBZy7A01dENr1sbU8";
const USER_ID = "2092970039";
const CHAT_ID = "-4961623169";

// https://api.telegram.org/bot8491754994:AAEAY63AAepcM30C8ODBZy7A01dENr1sbU8/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const Checkout = () => {
  const { cart, clear } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    let text = "";
    text += `<b>Place Order</b> %0A%0A`;
    text += `First Name : <b>${data.fname}</b> %0A`;
    text += `Last Name : <b>${data.lname}</b> %0A`;
    text += `Company Name : <b>${data.cpmname}</b> %0A`;
    text += `Country : <b>${data.country}</b> %0A`;
    text += `Street Address : <b>${data.straddress}</b> %0A`;
    text += `City : <b>${data.city}</b> %0A`;
    text += `Province : <b>${data.province}</b> %0A`;
    text += `ZIP Code : <b>${data.code}</b> %0A`;
    text += `Phone Number : <b>${data.phone}</b> %0A`;
    text += `Email Address : <b>${data.email}</b> %0A%0A`;

    cart.forEach((item) => {
      text += `<b>Want to Buy</b> %0A%0A`;
      text += `Title: <b>${item.title}</b> %0A`;
      text += `Quantity: <b>${item.quantity}</b> %0A`;
      text += `Price: <b>${item.price} $</b> %0A%0A`;
    });
    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    text += `Total Price: <b>${totalPrice}</b>`;

    axios
      .get(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=HTML`
      )
      .then(() => {
        e.target.reset();
        clear();
        alert("Buyurtma muvaffaqiyatli yuborildi!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (cart.length === 0 || !cart) return <Navigate replace to={"/cart"} />;

  return (
    <>
      <CartProps title={"Checkout"} />
      <form
        onSubmit={handleSubmit}
        className="container py-[63px] flex gap-[26px]"
      >
        <div className="w-[49%]">
          <p className="text-[36px] font-semibold">Billing details</p>
          <div className="flex gap-[30px] mt-[35px]">
            <div className="w-full">
              <p className="font-medium">First name</p>
              <input
                name="fname"
                required
                type="text"
                className="w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4"
              />
            </div>
            <div className="w-full">
              <p className="font-medium">Last Name</p>
              <input
                name="lname"
                required
                type="text"
                className="w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4"
              />
            </div>
          </div>
          <div className="w-full mt-[36px]">
            <p className="font-medium">Company Name (Optional)</p>
            <input
              name="cpmname"
              required
              type="text"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4"
            />
          </div>
          <div className="w-full mt-[36px]">
            <p className="font-medium">Country / Region</p>
            <input
              name="country"
              required
              type="text"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4"
            />
          </div>
          <div className="w-full mt-[36px]">
            <p className="font-medium">Street address</p>
            <input
              name="straddress"
              required
              type="text"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4"
            />
          </div>
          <div className="w-full mt-[36px]">
            <p className="font-medium">Town / City</p>
            <input
              name="city"
              required
              type="text"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4"
            />
          </div>
          <div className="w-full mt-[36px]">
            <p className="font-medium">Province</p>
            <input
              name="province"
              required
              type="text"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4"
            />
          </div>
          <div className="w-full mt-[36px]">
            <p className="font-medium">ZIP code</p>
            <input
              name="code"
              required
              type="number"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4"
            />
          </div>
          <div className="w-full mt-[36px]">
            <p className="font-medium">Phone</p>
            <input
              name="phone"
              required
              type="number"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4"
            />
          </div>
          <div className="w-full mt-[36px]">
            <p className="font-medium">Email address</p>
            <input
              name="email"
              required
              type="text"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] rounded-[10px] mt-[22px] indent-4"
            />
          </div>
        </div>
        <div className="w-[50%]">
          <div className="flex justify-between">
            <p className="font-medium text-[24px]">Product</p>
            <p className="font-medium text-[24px]">Subtotal</p>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-[20px] py-[17px] px-[100px] border rounded-[15px]"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
      <SectionProps />
    </>
  );
};

export default Checkout;
