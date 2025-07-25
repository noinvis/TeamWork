import { memo, useLayoutEffect } from "react";
import Hero from "../../components/hero/Hero";
import HomeType from "../../components/home-type/HomeType";
import Products from "../../components/products/Products";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const { data, error, loading } = useFetch("/products", { limit: 8 });
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <HomeType />
      <Products
        data={data?.products}
        error={error}
        loading={loading}
        title={"Our products"}
      />
    </div>
  );
};

export default memo(Home);
