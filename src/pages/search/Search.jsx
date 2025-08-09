import React, { memo, useEffect, useState } from "react";
import CartProps from "../cart/cart-props/CartProps";
import SectionProps from "../cart/section-props/SectionProps";
import Products from "../../components/products/Products";
import { FiSearch } from "react-icons/fi";
import bosh from "../../assets/empty.jpg";
import { api } from "../../api";

const Search = () => {
  const [load, setLoad] = useState(false);
  const [info, setInfo] = useState([]);
  const [err, setErr] = useState(null);

  const [text, setText] = useState("");

  useEffect(() => {
    setLoad(true);
    api
      .get(`/products/search?q=${text}&limit=16`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => setErr(err))
      .finally(() => setLoad(false));
  }, [text]);
  console.log(info?.products);

  if (err) {
    return (
      <>
        <CartProps title={"Search something"} />
        <p className="h-[200px] mt-[180px] text-center text-red-700">
          something went wrong
        </p>
      </>
    );
  }
  if (text && info?.products.length === 0) {
    return (
      <>
        <CartProps title={"Search something"} />

        <div className="bg-[#f9edd2e0]">
          <div className="container mx-auto ">
            <div className="  py-[12px]  flex items-center justify-around">
              <div>
                <h2 className="text-[20px] font-bold">Furniro</h2>
              </div>
              <form
                className="w-[40%] "
                onSubmit={(e) => e.preventDefault()}
                action=""
              >
                <div className="flex  items-center mx-auto max-w-[500px] overflow-hidden shadow-sm p-[5px] gap-[10px] rounded-[12px]  bg-[#fff] ">
                  <FiSearch className="text-[20px] ml-[10px] text-[#B88E2F]" />
                  <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="outline-none flex-1"
                    type="text"
                    name=""
                    id=""
                  />
                  <button className="border duration-150 w-[20%] py-[8px] rounded-[7px] text-[#fff] bg-[#B88E2F] hover:bg-[#b88f2fe0]">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-[80px]">
          <img
            className=" mx-auto block max-w-[250px] w-[100%]"
            src={bosh}
            alt=""
          />
          <p className="text-[#62605f] text-center mb-[200px] text-[20px]">
            Bunday mahsulot mavjud emas!
          </p>
        </div>

        <SectionProps />
      </>
    );
  }
  return (
    <>
      <CartProps title={"Search something"} />

      <div className="bg-[#f9edd2e0]">
        <div className="container mx-auto py-[12px]">
          <div className=" flex items-center justify-around">
            <div>
              <h2 className="text-[20px] font-bold">Furniro</h2>
            </div>
            <form
              className=" w-[40%]"
              onSubmit={(e) => e.preventDefault()}
              action=""
            >
              <div className="flex shadow-sm items-center bg-[#fff] max-w-[500px] overflow-hidden  p-[5px] gap-[10px] rounded-[12px]">
                <FiSearch className="text-[20px] ml-[10px] text-[#B88E2F]" />
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="outline-none  flex-1 "
                  type="text"
                  name=""
                  placeholder="Search..."
                  id=""
                />
                <button className="border duration-150 w-[20%] py-[8px] rounded-[7px] text-[#fff] bg-[#B88E2F] hover:bg-[#b88f2fe0]">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Products
        loading={load}
        error={err}
        data={info?.products}
        title={"Product"}
      />

      <SectionProps />
    </>
  );
};

export default memo(Search);
