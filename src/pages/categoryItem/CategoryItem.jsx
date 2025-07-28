import React, { useLayoutEffect } from "react";
import CartProps from "../cart/cart-props/CartProps";
import Category from "../../components/category/Category";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Products from "../../components/products/Products";
import Skaleton from "../../components/loading/Skaleton";
import SectionProps from "../cart/section-props/SectionProps";

const CategoryItem = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { type } = useParams();
  const { data, error, loading } = useFetch(`/products/category/${type}`);
  console.log(data);
  console.log(type);

  if (error) {
    return (
      <p className="h-[300px] mt-[200px] text-center text-[30px] text-[crimson]">
        something went wrong
      </p>
    );
  }
  if (loading) {
    return (
      <>
        <CartProps title={type} />
        <Skaleton />
      </>
    );
  } else {
    return (
      <section>
        <CartProps title={type} />
        <Category />
        <Products data={data?.products} />
        <SectionProps />
      </section>
    );
  }
};

export default React.memo(CategoryItem);
