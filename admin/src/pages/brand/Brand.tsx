import React from "react";
import PageContent from "../components/PageContent";
import BrandContent from "./components/BrandContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";

export default function Brand() {
  return (
    <PageContent>
      <Provider store={store}>
        <BrandContent />
      </Provider>
    </PageContent>
  );
}
