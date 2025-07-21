import React from "react";
import diningImg from "./img/dining.png";
import livingImg from "./img/living.png";
import bedroomImg from "./img/bedroom.png";

const HomeType = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl text-[#333] font-bold mb-2">
          Browse The Range
        </h1>
        <p className="text-[#666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="text-center p-4 bg-white shadow hover:shadow-lg transition rounded-xl">
          <img
            src={diningImg}
            alt="Dining"
            className="w-full h-[400px] object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-[#333]">Dining</h3>
        </div>

        <div className="text-center p-4 bg-white shadow hover:shadow-lg transition rounded-xl">
          <img
            src={livingImg}
            alt="Living"
            className="w-full h-[400px] object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-[#333]">Living</h3>
        </div>

        <div className="text-center p-4 bg-white shadow hover:shadow-lg transition rounded-xl">
          <img
            src={bedroomImg}
            alt="Bedroom"
            className="w-full h-[400px] object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-[#333]">Bedroom</h3>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HomeType);
