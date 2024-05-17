import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import SubCategoryContent from "./components/SubCategoryContent";

export default function SubCategory() {
  return (
    <PageContent>
      <Provider store={store}>
        <SubCategoryContent />
      </Provider>
    </PageContent>
  );
}
