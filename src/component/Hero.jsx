import React from "react";
import img1 from "../assets/photo5.png";
const Hero = () => {
  return (
    <div className="  md:h-[500px] container flex flex-col-reverse py-4 md:grid md:grid-cols-2 grid-cols-1 lg:gap-[250px] md:gap-[120px] w-full lg:my-20  items-center">
      <div className="flex flex-col space-y-5 justify-center ">
        <h1 className=" font-extrabold md:text-2xl lg:text-6xl capitalize">
          denim <span className="text-yellow-800">t-shirt</span> <br /> for men
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
          impedit fuga. Iure rem quisquam quia!
        </p>
        <button className="bg-black py-3 px-6 text-white w-[100px] font-semibold">
          details
        </button>
      </div>
      <div className="">
        <img src={img1} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
