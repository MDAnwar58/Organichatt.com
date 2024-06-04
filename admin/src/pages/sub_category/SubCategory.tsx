import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "../apiCalling/store";
import SubCategoryPage from "./components/SubCategoryPage";

export default function SubCategory() {
  return (
    <PageContent>
      <Provider store={store}>
        <SubCategoryPage />
      </Provider>
    </PageContent>
  );
}
