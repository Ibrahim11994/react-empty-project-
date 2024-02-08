import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./component/Root";
import Cart, { CartLoader } from "./component/Cart";
import ShoppingBag from "./component/shoppingBag";
import CartDetails, { CartDetailsLoader } from "./component/CartDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      ,
      {
        path: "shop",
        element: <ShoppingBag />,
      },
      {
        path: "",
        element: <Cart />,
        loader: CartLoader,
      },
      {
        path: ":id",
        element: <CartDetails />,
        loader:CartDetailsLoader
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
