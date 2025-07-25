import React from "react";
import { memo, useLayoutEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import "../Detail.css";
import Products from "../../../components/products/Products";
const ExtraProduct = () => {
  const { data, error, loading } = useFetch(`/product`, { limit: 4, skip: 10 });

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
    <Products data={data?.products} error={error} loading={loading}/>
  );
};

export default memo(ExtraProduct);
