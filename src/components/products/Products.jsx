import React, { memo } from "react";

import Skaleton from "../loading/Skaleton";
import { useNavigate } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { PiHeart } from "react-icons/pi";
import { useStore } from "../../zustand/useStore";
import { RiShoppingCartLine } from "react-icons/ri";
import { useCart } from "../../zustand/useCart";

const Products = ({ data, error, loading, title }) => {
  const { toggleWishlist, wishlist } = useStore();
  const {add} = useCart()

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
          {title}
        </h2>
        <div className="grid grid-cols-4 gap-[32px] max-[900px]:grid-cols-3 max-[900px]:gap-[14px] max-[620px]:grid-cols-2 max-[450px]:grid-cols-1">
          {data?.map((item) => (
            <div
              key={item.id}
              className="group shadow-lg border border-[#f1eeee] overflow-hidden relative"
            >
              <div className="absolute top-[-60px] z-20 -right-[60px] bg-[#E97171] rounded-[50%] w-[48px] h-[48px]  flex items-center duration-300 ease justify-center  group-hover:right-[12px] group-hover:top-[12px] max-[700px]:top-[12px] max-[700px]:right-[12px] max-[700px]:w-[38px] max-[700px]:h-[38px]">
                <p className="text-[#fff] max-[700px]:text-[14px]">
                  -{item.stock}%
                </p>
              </div>

              <div className="bg-[#fefefe] p-[10px] relative">
                <img
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="transition hover:scale-[1.02]"
                  src={item.thumbnail}
                  alt=""
                />
                <div className=" absolute duration-300 bottom-[8px] right-[-50px] group-hover:right-[12px] max-[700px]:right-[12px] max-[700px]:flex max-[700px]:gap-1.5">
                  <button
                    onClick={() => toggleWishlist(item)}
                    className="block p-[8px] rounded-[50%] bg-[#f1f1f1] mb-[5px] max-[700px]:mb-0"
                  >
                    {wishlist.some((product) => product.id === item.id) ? (
                      <FcLike className="text-[24px] max-[700px]:text-[18px]" />
                    ) : (
                      <PiHeart className="text-[24px] max-[700px]:text-[18px]" />
                    )}
                  </button>

                  <button className="p-[8px] rounded-[50%] bg-[dodgerblue]" onClick={()=> add(item)}>
                    <RiShoppingCartLine className="text-[24px] text-[#fff] max-[700px]:text-[18px]" />
                  </button>
                </div>
              </div>
              <div
                onClick={() => navigate(`product/${item.id}`)}
                className="p-[16px] bg-[#F4F5F7] h-[100%]"
              >
                <h3 className="text-[#3A3A3A] font-semibold text-[24px]">
                  {item.title.split(" ").slice(0, 2).join(" ")}
                </h3>
                <p className="text-[#898989] font-medium mt-[8px]">
                  {item.category}
                </p>
                <p className="text-[#3A3A3A] text-[20px] font-semibold mt-[8px]">
                  {item.price} $
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
