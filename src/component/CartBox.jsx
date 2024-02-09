import React from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
const CartBox = ({ price, title, id, image }) => {
  return (
    <Link
      to={id.toString()}
      key={id}
      className="mt-10 relative flex flex-col h-[320px]  gap-6 shadow bg-white py-4 group hover:shadow-md "
    >
      <div className="flex justify-center">
        <img className="h-[150px] w-[130px] " src={image} alt={title} />
      </div>
      <div className="px-3 flex flex-col justify-between gap-3">
        <p className="font-thin text-sm pt-4">{title}</p>
        <p className="font-semibold py-2">${price}</p>
      </div>
      <div className=" absolute top-2 right-2 opacity-0 transition-all duration-300 bg-white w-10 h-[80px] flex items-center flex-col justify-around gap-2 group-hover:opacity-100">
        <div className="bg-red-500 p-2 text-white shadow-lg">
          <FaPlus />
        </div>
        <div className="p-2 bg-white shadow-lg">
          <IoEyeSharp />
        </div>
      </div>
    </Link>
  );
};

export default CartBox;
