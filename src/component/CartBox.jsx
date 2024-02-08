import React from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
const CartBox = ({ price, title, id, image }) => {
  return (
    <Link
      to={id.toString()}
      key={id}
      className="mt-10 relative flex flex-col h-[320px] rounded-md gap-6 shadow bg-white py-4 group hover:shadow-md overflow-hidden"
    >
      <div className="flex justify-center">
        <img className="h-[150px] w-[130px] " src={image} alt={title} />
      </div>
      <div className="px-3 flex flex-col justify-between gap-3">
        <p className="font-thin text-sm pt-4">{title}</p>
        <p className="font-semibold py-2">${price}</p>
      </div>
      <div className=" absolute top-2 right-[-50px] bg-white w-10 h-[80px] flex items-center flex-col justify-around gap-2 group-hover:right-[2]">
        <div className="bg-[#F0EFEF] p-2">
          <FaPlus />
        </div>
        <div className="p-2 bg-[#F0EFEF]">
          <IoEyeSharp />
        </div>
      </div>
    </Link>
  );
};

export default CartBox;
