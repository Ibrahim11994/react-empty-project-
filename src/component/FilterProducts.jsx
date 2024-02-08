import React from "react";
import img1 from "../assets/photo8.png";
import img2 from "../assets/photo6.png";
import img3 from "../assets/photo7.png";
const FilterProducts = () => {
  return (
    <div className="container gap-5 grid lg:grid-cols-3 text-white">
      <div className="  col-span-1 rounded p-4 bg-gray-500 flex items-center justify-around">
        <img className="h-[130px]" src={img1} alt="men" />
        <p className="text-3xl font-extrabold">
          <span className="text-yellow-800">men</span> <br /> collections...
        </p>
      </div>
      <div className=" col-span-1 p-4 bg-gray-500 rounded flex items-center justify-around">
        <img className="h-[130px]" src={img2} alt="women" />
        <p className="text-3xl font-extrabold">
          <span className="text-yellow-800">women</span> <br /> collections...
        </p>
      </div>
      <div className=" col-span-1 rounded bg-gray-500 p-4 flex items-center justify-around">
        <img className="h-[130px]" src={img3} alt="bags" />
        <p className="text-3xl font-extrabold">
          <span className="text-yellow-800">bags</span> <br /> collections...
        </p>
      </div>
    </div>
  );
};

export default FilterProducts;
