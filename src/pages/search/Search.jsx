import React, { memo, useEffect, useState } from "react";
import CartProps from "../cart/cart-props/CartProps";
import SectionProps from "../cart/section-props/SectionProps";
import Products from "../../components/products/Products";
import { FiSearch } from "react-icons/fi";
import bosh from "../../assets/empty.jpg";
import { api } from "../../api";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [load, setLoad] = useState(false);
  const [info, setInfo] = useState([]);
  const [err, setErr] = useState(null);
  const [katalog, setKatalog] = useState();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const { data } = useFetch("/products/category-list");

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

        <div className="container mx-auto ">
          <div className="container   mx-auto flex items-center justify-center">
            <form
              className="w-[100%] "
              onSubmit={(e) => e.preventDefault()}
              action=""
            >
              <div className="flex  items-center mx-auto max-w-[500px] overflow-hidden border p-[5px] gap-[10px] rounded-[12px]">
                <FiSearch className="text-[20px] ml-[10px] text-[#B88E2F]" />
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="outline-none flex-1 "
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
        </div>

        <SectionProps />
      </>
    );
  }
  return (
    <>
      <CartProps title={"Search something"} />

            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="outline-none flex-1 "
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
