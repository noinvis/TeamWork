import React, { memo, useLayoutEffect } from "react";
import "./cart.css";
import CartProps from "./cart-props/CartProps";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../zustand/useCart";
import { MdDelete } from "react-icons/md";
import { TYPES } from "./static/index";
import SectionProps from "./section-props/SectionProps";
import nth from './img/cart.png'

const Cart = () => {
  const { cart, increment, decrement, remove } = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate()

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!cart || cart.length === 0) {
    return (
        <div className="h-[65vh] flex justify-center items-center flex-col">
            <img src={nth} alt="" width={300}/>
            <p className="text-[30px] text-center max-[450px]:text-[25px]">Savatingiz hozircha bo'sh</p>
            <p className="mt-[1rem] text-center">Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz yoki to'plamlarni ko'rishingiz mumkin</p>
            <button className="py-[10px] px-[30px] bg-[#B88E2F] text-white rounded-[15px] mt-[1rem]" onClick={() => navigate("/")}>Bosh sahifa</button>
        </div>
    )
  }
  return (
    <>
      <CartProps title={"Cart"}/>
      <section className="flex container gap-[30px] mt-[70px] max-[1050px]:grid max-[1050px]:grid-cols-1">
        <div className="w-full">
          <div className="flex bg-[#F9F1E7] h-[55px] justify-between items-center px-[100px] max-[650px]:px-[10px]">
            {
              TYPES.map((item, inx) => (
                <p key={inx} className="font-medium">{item}</p>
              ))
            }
          </div>
          <div>
            {cart?.map((product) => (
              <div
                key={product.id}
                className="mt-[55px] flex items-center justify-between px-[10px] max-[550px]:px-0"
              >
                <div className="flex items-center gap-[1rem]">
                  <div className="size-[100px] bg-[#F9F1E7] rounded-[10px] p-[10px]" onClick={() => navigate(`/product/${product.id}`)}>
                    <img src={product.thumbnail} />
                  </div>
                  <p className="text-[#9F9F9F] w-[200px] max-[730px]:w-auto max-[550px]:hidden">{product.title}</p>
                </div>
                <p className="text-[#9F9F9F]">Rs. {product.price}</p>
                <div className="w-[100px] flex items-center justify-center">
                  <button
                    disabled={product.quantity <= 1}
                    onClick={() => decrement(product)}
                    className="p-2 disabled:opacity-40 text-[20px]"
                  >
                    -
                  </button>
                  <span className="p-2">{product.quantity}</span>
                  <button
                    onClick={() => increment(product)}
                    className="p-2 text-[20px]"
                  >
                    +
                  </button>
                </div>
                <p className="max-[650px]:hidden">
                  Rs. {product.price}
                </p>
                <button className="text-[#B88E2F] text-[30px]" onClick={()=> remove(product)}>
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#F9F1E7] pb-[80px] w-[400px] h-[400px] flex flex-col items-center max-[1050px]:w-full">
          <p className="text-center font-semibold text-[32px] mt-[15px]">
            Cart Totals
          </p>
          <div className="flex gap-[60px] mt-[60px] items-center">
            <p className="font-medium">Subtotal</p>
            <p className="text-[#9F9F9F]">Rs. {totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex gap-[62px] mt-[30px] items-center">
            <p className="font-medium">Total</p>
            <p className="text-[#B88E2F] text-[20px]">
              Rs. {totalPrice.toFixed(2)}
            </p>
          </div>
          <button onClick={() => navigate("/checkout")} className="border rounded-[15px] py-[15px] px-[60px] mt-[40px]">
            Check Out
          </button>
        </div>
      </section>
      <SectionProps/>
    </>
  );
};

export default memo(Cart);
