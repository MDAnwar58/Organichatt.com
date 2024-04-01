import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./Layout";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default router;
