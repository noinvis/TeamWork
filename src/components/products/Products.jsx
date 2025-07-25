import React, { memo, useState } from "react";

import Skaleton from "../loading/Skaleton";
import { useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { PiHeart } from "react-icons/pi";
import { useStore } from "../../zustand/useStore";

const Products = ({ data, error, loading }) => {
  const { toggleWishlist } = useStore();


  const navigate = useNavigate();

  if (error) {
    return (
      <p className="mx-auto text-center font-medium text-[crimson] text-[40px] w-[50%]">
        Ohh!!! something went wrong while product data was coming!
      </p>
    );
  }
  if (loading) {
    return <Skaleton />;
  }
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-center text-[#3A3A3A] text-[40px] font-bold mb-[32px] mt-[50px]">
          Our Products
        </h2>
        <div className="grid grid-cols-4 gap-[32px] max-[900px]:grid-cols-3 max-[900px]:gap-[14px] max-[620px]:grid-cols-2 max-[450px]:grid-cols-1">
          {data?.map((item) => (
            <div
              key={item.id}
              className="group shadow-lg border border-[#f1eeee] overflow-hidden relative"
            >
              <div className="absolute top-[-60px] z-20 -right-[60px] bg-[#E97171] rounded-[50%] w-[48px] h-[48px]  flex items-center duration-400 ease justify-center  group-hover:right-[20px] group-hover:top-[20px]">
                <p className="text-[#fff]">-{item.stock}%</p>
              </div>

              <div className="bg-[#fefefe] p-[10px] relative">
                <img
                  onClick={() => navigate(`product/${item.id}`)}
                  className="transition hover:scale-[1.02]"
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <div className="p-[16px] bg-[#F4F5F7] h-[100%]">
                <h3 className="text-[#3A3A3A] font-semibold text-[24px]">
                  {item.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <p className="text-[#898989] font-medium mt-[8px]">
                  {item.category}
                </p>
                <p className="text-[#3A3A3A] text-[20px] font-semibold mt-[8px]">
                  {item.price} $<button onClick={() => toggleWishlist(item)} className="">like</button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Products);
