import { memo, useLayoutEffect, useRef, useState } from "react";
import Hero from "../../components/hero/Hero";
import HomeType from "../../components/home-type/HomeType";
import Products from "../../components/products/Products";
import { useFetch } from "../../hooks/useFetch";
import { api } from "../../api";

const Home = () => {
  const { data, error, loading } = useFetch("/products", { limit: 8 });
  const [showMore, setShowMore] = useState([]);
  const [load, setLoad] = useState(false);
  const offset = useRef(1);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleAddProduct = () => {
    const limit = 16;
    const skipNumber = offset.current++;

    api
      .get(`/products?limit=${limit}&skip=${skipNumber * 16}`)
      .then((res) => {
        setShowMore(showMore.concat(res.data.products));
      })
      .catch((err) => setErr(err))
      .finally(() => setLoad(false));
  };
  const added = (data?.products || []).concat(showMore);
  return (
    <div>
      <Hero />
      <HomeType />
      <Products
        data={added}
        error={error}
        loading={loading}
        title={"Our products"}
      />
      <button
        onClick={() => handleAddProduct()}
        className="bg-[#fff] py-[14px] max-w-[250px] w-[100%]
        border-[1.5px] duration-200 border-[#b88e2f] text-[#B88E2F]
        hover:bg-[#B88E2F] hover:text-[#fff] font-bold block mx-auto mt-[32px]
          active:scale-[.98]"
      >
        Show more{" "}
      </button>
    </div>
  );
};

export default memo(Home);
