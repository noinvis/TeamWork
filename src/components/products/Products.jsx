import React, { memo } from "react";

import { useFetch } from "../../hooks/useFetch";
import Skaleton from "../loading/Skaleton";
import { useNavigate } from "react-router-dom";
import { FiShare2 } from "react-icons/fi";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
const Products = () => {
  const navigate = useNavigate();
  const { data, error, loading } = useFetch("/products", { limit: 8 });
  console.log(data);

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
          {data?.products?.map((item) => (
            <div
              onClick={() => navigate(`product/${item.id}`)}
              key={item.id}
              className="group shadow-lg border border-[#f1eeee] overflow-hidden relative"
            >
              <div className=" absolute duration-300 top-0 left-0 w-full opacity-0 h-screen bg-[#0000006d]  z-10 group-hover:opacity-[1] ">
                <div className="absolute top-[-60px] z-20 -right-[60px] bg-[#E97171] rounded-[50%] w-[48px] h-[48px]  flex items-center duration-400 ease justify-center  group-hover:right-[20px] group-hover:top-[20px]">
                  <p className="text-[#fff]">-{item.stock}%</p>
                </div>
                <div>
                  <button className="bg-[#fff] block mx-auto mt-[180px] py-[12px] px-[52px] text-[16px] font-semibold text-[#B88E2F] shadow-lg">
                    Add to cart
                  </button>
                  <div className="flex items-center justify-center gap-[12px] mt-[24px] font-semibold">
                    <div className="flex items-center gap-[2px]">
                      <FiShare2 className="text-[#fff]" />
                      <p className="text-[#fff]">Share</p>
                    </div>
                    <div className="flex items-center gap-[2px]">
                      <MdCompareArrows className="text-[#fff]" />
                      <p className="text-[#fff]">Compare</p>
                    </div>
                    <div className="flex items-center gap-[2px]">
                      <FaRegHeart className="text-[#fff]" />
                      <p className="text-[#fff]">Like</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#fefefe] p-[10px] relative">
                <img
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
