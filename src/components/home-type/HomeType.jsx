import React from "react";
import diningImg from "./img/dining.png";
import livingImg from "./img/living.png";
import bedroomImg from "./img/bedroom.png";

const HomeType = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl text-[#333] font-bold mb-2">
          Browse The Range
        </h1>
        <p className="text-[#666] text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[diningImg, livingImg, bedroomImg].map((img, index) => (
          <div
            key={index}
            className="text-center p-4 bg-white shadow hover:shadow-lg transition rounded-xl"
          >
            <img
              src={img}
              alt="Room"
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-[#333]">
              {index === 0 ? "Dining" : index === 1 ? "Living" : "Bedroom"}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(HomeType);
