import React from "react";
import bgImage from "./img/hero-bg.png";

const Hero = () => {
  return (
    <section
      className="max-w-[1440px] w-full mx-auto bg-cover bg-center min-h-[550px] flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-[1440px] w-full mx-auto px-4">
        <div className="bg-white bg-opacity-90 p-8 rounded-xl max-w-xl ml-auto shadow-lg mr-[20px] md:mr-[120px]">
          <p className="text-sm tracking-widest text-[#333] text-[16px] mb-2 font-bold">
            New Arrival
          </p>
          <h1 className="text-4xl font-bold text-[#b88e2f] leading-tight mb-4">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-[#333] mb-6 font-bold font-[Poppins] text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#b88e2f] hover:bg-yellow-800 text-white px-6 py-3 rounded shadow font-semibold transition w-[222px] h-[54px]">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
