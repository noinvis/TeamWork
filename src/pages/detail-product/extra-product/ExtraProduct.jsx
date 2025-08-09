import React, { memo, useLayoutEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import Products from "../../../components/products/Products";
import { useNavigate } from "react-router-dom";

const ExtraProduct = ({ category }) => {
  const { data, error, loading } = useFetch(`/products/category/${category}`);
  const navigate = useNavigate()

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return <p>Something went wrong :(</p>;
  }

  const filteredProducts = data?.products?.slice(0, 4);

  return (
    <>
      <Products
        data={filteredProducts}
        error={error}
        loading={loading}
      />
      <div className="flex justify-center mt-[30px]">
        <button onClick={() => navigate("/")} className="bg-[#fff] py-[14px] max-w-[250px] w-[100%] border-[1.5px] duration-200 border-[#b88e2f] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-[#fff] font-bold block mx-auto mt-[32px] active:scale-[.98]">Go Back</button>
      </div> 
    </>
  );
};

export default memo(ExtraProduct);
