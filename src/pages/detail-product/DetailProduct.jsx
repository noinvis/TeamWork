import React from "react";
import { memo, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Detail.css";
import img from "./images/Group 88.png";
import img2 from "./images/facebook.png";
import img3 from "./images/in.png";
import img4 from "./images/twitter.png";

const DetailProduct = () => {
  const { id } = useParams();
  const [imageIndex, setImageIndex] = useState(0);
  const { data, error, loading } = useFetch(`/products/${id}`);
  const [num, setNum] = useState(1);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return <p>Something went wrong :(</p>;
  }

  return loading ? (
    <div className="flex justify-center items-center h-screen">
      <div className="loader"></div>
    </div>
  ) : (
    <>
      <section className="container flex gap-[100px] type__btn py-[35px] max-[1150px]:flex-col max-[1150px]:gap-[30px]">
        <div className="flex gap-[30px] max-[1150px]:mx-auto max-[1150px]:flex-col-reverse">
          <div>
            <div className="flex flex-col items-center justify-center gap-[32px] max-[1150px]:flex-row">
              {data?.images?.map((item, inx) => (
                <div key={inx}>
                  <img
                    width={75}
                    height={80}
                    src={item}
                    alt=""
                    onClick={() => setImageIndex(inx)}
                    className="bg-[#F9F1E7] rounded-[10px]"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src={data?.images[imageIndex]}
              width={460}
              height={500}
              alt=""
              className="bg-[#F9F1E7] rounded-[10px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10px] max-[1150px]:text-center">
          <p className="text-[42px] max-[1150px]:text-center">{data?.title}</p>
          <p className="text-[#9F9F9F] text-[24px] max-[1150px]:text-center">
            Rs. {data?.price}
          </p>
          <div className="flex gap-[22px] items-center max-[1150px]:justify-center">
            <img src={img} alt="" />
            <div className="h-[30px] bg-[#9F9F9F] w-0.5"></div>
            <p className="text-[13px] text-[#9F9F9F]">
              {data?.warrantyInformation}
            </p>
          </div>
          <p className="w-[425px] font-medium max-[1150px]:text-center max-[1150px]:w-full">
            {data?.description}
          </p>
          <p className="text-[#9F9F9F] mt-[10px]">Size</p>
          <ul className="flex gap-[1rem] max-[1150px]:justify-center">
            <li className="type__btn py-[10px] px-[15px] rounded-[5px] bg-[#F9F1E7] active">
              <span>L</span>
            </li>
            <li className="type__btn py-[10px] px-[15px] rounded-[5px] bg-[#F9F1E7]">
              <span>XL</span>
            </li>
            <li className="type__btn py-[10px] px-[15px] rounded-[5px] bg-[#F9F1E7]">
              <span>XS</span>
            </li>
          </ul>
          <p className="text-[#9F9F9F] mt-[10px]">Color</p>
          <div className="flex gap-[1rem] max-[1150px]:justify-center">
            <div className="size-[40px] rounded-[50%] bg-[#816DFA] color"></div>
            <div className="size-[40px] rounded-[50%] bg-black color"></div>
            <div className="size-[40px] rounded-[50%] bg-[#B88E2F] color"></div>
          </div>
          <div className="flex gap-[1rem] mt-[20px] max-[1150px]:justify-center max-[560px]:flex-wrap">
            <div className="border1 flex gap-[35px] items-center rounded-[10px] py-[18px] px-[10px] max-[560px]:w-full max-[560px]:justify-center">
              <button onClick={() => setNum((p) => (p > 1 ? p - 1 : 1))} className="text-[20px] max-[560px]:text-[30px]">
                -
              </button>
              <p className="text-[18px] font-medium">{num}</p>
              <button onClick={() => setNum((p) => p + 1)} className="max-[560px]:text-[30px] text-[20px]">+</button>
            </div>
            <button className="border1 rounded-[10px] capitalize text-[20px] px-[40px] py-[20px] max-[560px]:w-full">
              Add To Cart
            </button>
            <button className="border1 rounded-[10px] text-[20px] px-[40px] py-[20px] max-[560px]:w-full">
              + Compare
            </button>
          </div>
          <div className="w-full h-[1px] bg-[#D9D9D9] mt-[60px]"></div>
          <pre className="text-[#9F9F9F] hover:text-black duration-300">
            SKU : {data?.sku}
          </pre>
          <pre className="text-[#9F9F9F] hover:text-black duration-300">
            Category : {data?.category}
          </pre>
          <pre className="text-[#9F9F9F] hover:text-black duration-300">
            Tags : {data?.tags?.join(", ")}
          </pre>
          <div className="flex items-center gap-[12px] max-[1150px]:justify-center">
            <pre className="text-[#9F9F9F] hover:text-black duration-300">
              Share :
            </pre>
            <div className="flex gap-[23px] items-center">
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[1px] bg-[#D9D9D9] mt-[50px]"></div>
      <section className="container pt-[50px]">
        <div className="flex gap-[50px] justify-center max-[650px]:flex-wrap">
          <p className="text-[24px] text-[#9F9F9F] hover:text-black duration-300 hover:cursor-pointer">
            Descripton
          </p>
          <p className="text-[24px] text-[#9F9F9F] hover:text-black duration-300 hover:cursor-pointer">
            Additional Information
          </p>
          <p className="text-[24px] text-[#9F9F9F] hover:text-black duration-300 hover:cursor-pointer">
            Reviews [{data?.stock}]
          </p>
        </div>
        <div className="container2 mt-[30px]">
          <p className="text-[#9F9F9F]">{data?.description}</p>
          <p className="text-[#9F9F9F] mt-[20px]">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
        <div className="flex gap-[30px] justify-around mt-[30px]">
          <div>
            <img src={data?.images[0]} alt="" width={400} />
          </div>
          <div>
            <img src={data?.images[0]} alt="" width={400} />
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(DetailProduct);
