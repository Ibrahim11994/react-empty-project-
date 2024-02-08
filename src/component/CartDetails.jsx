import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CartDetails = () => {
  const product = useLoaderData();
  const { id } = useParams();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 items-center container gap-6 my-10 h-[600px] p-10">
      <div className=" md:col-span-2 bg-white flex items-center justify-center rounded-lg">
        <img
          className="h-[400px] p-10"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="  md:col-span-3 space-y-5">
        <p className=" font-extrabold text-3xl">{product.title}</p>
        <p className="text-gray-600">{product.description}</p>
        <p className="font-extrabold text-3xl">${product.price}</p>
        <button className="py-2 px-8 rounded font-semibold mt-4 bg-black text-white ">
          add to cart
        </button>
      </div>
    </div>
  );
};

export const CartDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  return res.json();
};
export default CartDetails;
