import React from "react";
import { memo, useLayoutEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import "../Detail.css";
const ExtraProduct = () => {
  const { data, error, loading } = useFetch(`/products`, { limit: 4 });

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
    <>  
        {
            data?.products?.map(item => (
                <div key={item.id} className="shadow-lg my-[24px]">
                    <div className="h-[300px] bg-contain flex justify-center">
                        <img src={item.thumbnail} alt={item.title} />
                    </div>
                    <div className="bg-[#F4F5F7] p-[20px]">
                        <h3 className="font-semibold text-[24px]">{item.brand}</h3>
                        <p className="font-medium text-[#898989]">{item.category}</p>
                        <div className="flex justify-between items-center">
                            <p className="text-[20px] font-semibold">Rp {String(item.price - 5).slice(0, 5)}</p>
                            <p className="line-through text-[#898989]">Rp {item.price}</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  );
};

export default memo(ExtraProduct);
