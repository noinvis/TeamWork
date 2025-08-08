import React, { useLayoutEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./Category.css";
import { NavLink, useNavigate } from "react-router-dom";
const Category = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data } = useFetch("/products/category-list");

  let offset = 0;

  return (
    <div className="bg-[#F9F1E7]">
      <div className="container mx-auto flex items-center   h-[100px] scrollbar-hide overflow-x-auto  border-[#c2c2c2]  px-[2px] ">
        <ul className="flex items-center mx-auto  text-nowrap gap-[10px]  ">
          <li>
            <NavLink
              to={`/shop`}
              className="navlink duration-200 hover:bg-[#dac6af] px-[20px] py-[14px] rounded-[6px] h-[30px] text-[#555353] bg-[#f1e0cc]"
            >
              <span> All</span>
            </NavLink>
          </li>
          {data?.map((item) => (
            <li key={offset++}>
              <NavLink
                to={`/products/category/${item}`}
                className="navlink duration-200 hover:bg-[#dac6af] px-[20px] py-[14px] rounded-[6px] h-[30px] text-[#555353] bg-[#f1e0cc]"
              >
                <span> {item}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Category);
