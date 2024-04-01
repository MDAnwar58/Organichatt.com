import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Offers from "./pages/offers/Offers";
import ProductDetials from "./pages/products/product/Detials";

const routes = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product-details/:slug",
        element: <ProductDetials />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
