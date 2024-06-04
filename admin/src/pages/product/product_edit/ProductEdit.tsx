import React from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import ProductEditContent from "./components/ProductEditContent";
import { useOutletContext } from "react-router-dom";

export default function ProductEdit() {
  const { sideBar } = useOutletContext();

  return (
    <Provider store={store}>
      <ProductEditContent sideBar={sideBar} />
    </Provider>
  );
}
