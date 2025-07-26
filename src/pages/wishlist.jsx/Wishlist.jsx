import React from "react";
import { useStore } from "../../zustand/useStore";
import Products from "../../components/products/Products";
import product from "../../assets/empty.webp";
import CartProps from "../cart/cart-props/CartProps";
import SectionProps from "../cart/section-props/SectionProps";
const Wishlist = () => {
  const { wishlist } = useStore();

  if (wishlist.length == 0) {
    return (
      <section className="mb-[120px] mt-[70px]">
        <div className="container mx-auto">
          <div className="mx-auto w-[50%] max-[1000px]:w-[80%] max-[600px]:w-[100%] ">
            <img className="block mx-auto max-w-[250px]" src={product} alt="" />
          </div>
          <div className="mx-auto">
            <h2 className="text-center text-[#b88e2f] mt-[20px] text-[30px] ">
              Your have not current favorite product
            </h2>
            <p className="text-center text-[#965505] font-medium">
              Please choose your liked product
            </p>
          </div>
        </div> 
      </section>
    );
  } else {
    return (
      <section>
        <CartProps title={"Wishlist"}/>
        <div className="container mx-auto mb-[80px]">
          <Products data={wishlist} title={"Wishlist"} />
        </div>
        <SectionProps />
      </section>
    );
  }
};

export default React.memo(Wishlist);
