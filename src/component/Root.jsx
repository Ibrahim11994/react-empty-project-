import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import { NavLink, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <div className="bg-gray-200 ">
        <header className="flex items-center justify-between py-4 container">
          <NavLink to={"/"}>
            <h1 className="flex items-center">
              <FaShoppingBag className="text-yellow-800" />
              <span className="font-bold">
                {" "}
                <span className="text-yellow-800">sh</span>opping.{" "}
              </span>
            </h1>
          </NavLink>

          <NavLink to={"shop"}>
            <FaCartShopping />
          </NavLink>
        </header>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};
