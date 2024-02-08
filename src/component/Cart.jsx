import React from "react";
import Hero from "./Hero";
import { useLoaderData } from "react-router-dom";
import CartBox from "./CartBox";
import Footer from "./Footer";
import FilterProducts from "./FilterProducts";

const Cart = () => {
  const products = useLoaderData();

  const filterProducts = products.filter(
    (product) =>
      product.category === "men's clothing" ||
      product.category === "women's clothing"
  );
  console.log(filterProducts);
  return (
    <>
      <Hero />
      <FilterProducts/>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-8 container items-center py-20 px-4 md:px-0 ">
        {filterProducts.map(({ image, price, title, id }) => (
          <CartBox id={id} key={id} price={price} title={title} image={image} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export const CartLoader = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};
export default Cart;
