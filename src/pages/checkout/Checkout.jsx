import React, { useLayoutEffect } from "react";
import CartProps from "../cart/cart-props/CartProps";
import SectionProps from "../cart/section-props/SectionProps";
import { useCart } from "../../zustand/useCart";
import { Navigate } from "react-router-dom";
import axios from "axios";

const BOT_TOKEN = "8491754994:AAEAY63AAepcM30C8ODBZy7A01dENr1sbU8";
const USER_ID = "2092970039";
const CHAT_ID = "-4961623169";

// https://api.telegram.org/bot8491754994:AAEAY63AAepcM30C8ODBZy7A01dENr1sbU8/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const Checkout = () => {
  const { cart, clear } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);

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
        className="container py-[63px] flex justify-between max-[900px]:flex-col"
      >
        <div className="w-[50%] max-[900px]:w-full">
          <p className="text-[36px] font-semibold">Billing details</p>
          <div className="flex gap-[30px] mt-[35px]">
            <div className="w-full">
              <p className="font-medium">First name</p>
              <input
                name="fname"
                required
                type="text"
                className="w-full border outline-0 border-[#9F9F9F] h-[75px] focus:border-[#B88E2F] focus:border-[2px] max-[700px]:h-[45px] rounded-[10px] mt-[22px] max-[450px]:mt-[1rem] indent-4"
              />
            </div>
            <div className="w-full">
              <p className="font-medium">Last Name</p>
              <input
                name="lname"
                required
                type="text"
                className="w-full border outline-0 border-[#9F9F9F] h-[75px] focus:border-[#B88E2F] focus:border-[2px] max-[700px]:h-[45px] rounded-[10px] mt-[22px] max-[450px]:mt-[1rem] indent-4"
              />
            </div>
          </div>
          <div className="w-full mt-[36px] max-[450px]:mt-[1rem]">
            <p className="font-medium">Company Name (Optional)</p>
            <input
              name="cpmname"
              required
              type="text"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] focus:border-[#B88E2F] focus:border-[2px] max-[700px]:h-[45px] rounded-[10px] mt-[22px] max-[450px]:mt-[1rem] indent-4"
            />
          </div>
          <div className="w-full mt-[36px] max-[450px]:mt-[1rem]">
            <p className="font-medium">Country / Region</p>
            <input
              name="country"
              required
              type="text"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] focus:border-[#B88E2F] focus:border-[2px] max-[700px]:h-[45px] rounded-[10px] mt-[22px] max-[450px]:mt-[1rem] indent-4"
            />
          </div>
          <div className="w-full mt-[36px] max-[450px]:mt-[1rem]">
            <p className="font-medium">Street address</p>
            <input
              name="straddress"
              required
              type="text"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] focus:border-[#B88E2F] focus:border-[2px] max-[700px]:h-[45px] rounded-[10px] mt-[22px] max-[450px]:mt-[1rem] indent-4"
            />
          </div>
          <div className="w-full mt-[36px] max-[450px]:mt-[1rem]">
            <p className="font-medium">Town / City</p>
            <input
              name="city"
              required
              type="text"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] focus:border-[#B88E2F] focus:border-[2px] max-[700px]:h-[45px] rounded-[10px] mt-[22px] max-[450px]:mt-[1rem] indent-4"
            />
          </div>
          <div className="w-full mt-[36px] max-[450px]:mt-[1rem]">
            <p className="font-medium">Province</p>
            <input
              name="province"
              required
              type="text"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] focus:border-[#B88E2F] focus:border-[2px] max-[700px]:h-[45px] rounded-[10px] mt-[22px] max-[450px]:mt-[1rem] indent-4"
            />
          </div>
          <div className="w-full mt-[36px] max-[450px]:mt-[1rem]">
            <p className="font-medium">ZIP code</p>
            <input
              name="code"
              required
              type="number"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] focus:border-[#B88E2F] focus:border-[2px] max-[700px]:h-[45px] rounded-[10px] mt-[22px] max-[450px]:mt-[1rem] indent-4"
            />
          </div>
          <div className="w-full mt-[36px] max-[450px]:mt-[1rem]">
            <p className="font-medium">Phone</p>
            <input
              name="phone"
              required
              type="number"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] focus:border-[#B88E2F] focus:border-[2px] max-[700px]:h-[45px] rounded-[10px] mt-[22px] max-[450px]:mt-[1rem] indent-4"
            />
          </div>
          <div className="w-full mt-[36px] max-[450px]:mt-[1rem]">
            <p className="font-medium">Email address</p>
            <input
              name="email"
              required
              type="text"
              className="w-full border outline-0 border-[#9F9F9F] h-[75px] focus:border-[#B88E2F] focus:border-[2px] max-[700px]:h-[45px] rounded-[10px] mt-[22px] max-[450px]:mt-[1rem] indent-4"
            />
          </div>
        </div>
        <div className="w-[45%] max-[900px]:w-full max-[900px]:mt-[50px] sticky top-[100px] h-full">
          <div className="flex justify-between">
            <p className="font-medium text-[24px]">Product</p>
            <p className="font-medium text-[24px]">Subtotal</p>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between my-2">
              <p className="text-[#9F9F9F] flex gap-2">
                {item.title}
                <span className="text-black">&#10006; {item.quantity}</span>
              </p>
              <p>Rs.{item.price * item.quantity}</p>
            </div>
          ))}
          <div className="flex justify-between my-2 items-center">
            <p className="">Total</p>
            <p className="text-[#B88E2F] font-bold text-[24px]">Rs.{totalPrice}</p>
          </div>
          <div className="w-full h-[1px] bg-[#D9D9D9]"></div>
          <div className="flex gap-[15px] items-center mt-[25px]">
            <div className="bg-black p-[10px] rounded-[50%]"></div>
            <p className="">Direct Bank Transfer</p>
          </div>
          <p className="text-[#9F9F9F] mt-[11px]">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
          <div className="py-[25px]">
            <label htmlFor="Bank" className="flex gap-[15px]">
                <input type="radio" name="type" id="Bank" />
                <p className="text-[#9F9F9F]" id="Bank">Direct Bank Transfer</p>
            </label>
            <label htmlFor="Cash" className="flex gap-[15px]">
                <input type="radio" name="type" id="Cash" />
                <p className="text-[#9F9F9F]" id="Cash">Cash On Delivery</p>
            </label>
          </div>
          <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>
          <div className="flex justify-center mt-[40px]">
            <button
              type="submit"
              className="text-[20px] py-[17px] px-[100px] border rounded-[15px] max-[500px]:py-[10px] max-[500px]:px-[50px]"
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
