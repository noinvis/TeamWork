import React from "react";
import bgImage from "./img/hero-bg.png";

const Hero = () => {
  return (
    <section
      className="w-full mx-auto bg-cover bg-center min-h-[550px] flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-[1440px] w-full px-4">
        <div className="bg-white bg-opacity-90 p-6 md:p-8 rounded-xl max-w-xl mx-auto md:ml-auto shadow-lg mr-4 md:mr-[100px]">
          <p className="text-sm tracking-wide text-[#333] font-semibold mb-2">
            New Arrival
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-[#b88e2f] mb-4 leading-tight">
            Discover Our <br className="hidden md:block" /> New Collection
          </h1>
          <p className="text-sm md:text-[20px] text-[#333] mb-6 font-[Poppins] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#b88e2f] hover:bg-yellow-800 text-white px-4 md:px-6 py-2 md:py-3 rounded shadow font-semibold transition w-full md:w-[222px] h-[50px]">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);
