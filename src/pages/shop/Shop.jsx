import React, { useRef, useState } from "react";
import CartProps from "../cart/cart-props/CartProps";
import SectionProps from "../cart/section-props/SectionProps";
import { useFetch } from "../../hooks/useFetch";
import Products from "../../components/products/Products";
import { api } from "../../api";
import Category from "../../components/category/Category";

const Shop = () => {
  const { data, error, loading } = useFetch("/products", { limit: 16 });

  const [seeMore, setSeeMore] = useState([]);
  const [errr, setErr] = useState(null);

  const offset = useRef(1);

  const handleAdd = () => {
    const limit = 16;
    const skipNumber = offset.current++;

    api
      .get(`/products?limit=${limit}&skip=${skipNumber * 16}`)
      .then((res) => {
        setSeeMore(seeMore.concat(res.data.products));
      })
      .catch((err) => setErr(err))
      .finally(() => setLoad(false));
  };
  

  const birlashgan = (data?.products || []).concat(seeMore);

  if (errr) {
    return (
      <p className="h-[200px] mt-[180px] text-center text-red-700">
        something went wrong
      </p>
    );
  } else {
    return (
      <section>
        <CartProps title={"Shop"} />
        <Category />
        <Products data={birlashgan} error={error} loading={loading} />
        <div className="container mx-auto">
          <button
            onClick={() => handleAdd()}
            className=" py-[14px] max-w-[250px] w-[100%]
          border-[1.5px] duration-200 border-[#b88e2f] bg-[#B88E2F] text-[#fff]
          hover:bg-[#fff] hover:text-[#B88E2F] font-bold block mx-auto mt-[32px]
          active:scale-[.98]
          "
          >
            Show more
          </button>
        </div>
        <SectionProps />
      </section>
    );
  }
};
export default Shop;
