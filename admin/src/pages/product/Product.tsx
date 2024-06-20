import React, { useEffect } from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import ProductContent from "./components/ProductContent";
import { Helmet } from "react-helmet";

export default function SubCategory() {
  useEffect(() => {
    console.clear();
  }, []);
  return (
    <PageContent>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organ Admin - Products</title>
      </Helmet>
      <Provider store={store}>
        <ProductContent />
      </Provider>
    </PageContent>
  );
}
