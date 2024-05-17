import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import ProductContent from "./components/ProductContent";

export default function SubCategory() {
  return (
    <PageContent>
      <Provider store={store}>
        <ProductContent />
      </Provider>
    </PageContent>
  );
}
