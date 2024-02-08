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
            <h1>
              <FaShoppingBag />
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
