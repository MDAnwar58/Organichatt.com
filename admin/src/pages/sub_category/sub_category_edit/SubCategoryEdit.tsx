import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import SubCategoryEditPage from "./components/SubCategoryEditPage";

export default function CategoryEdit() {
  return (
    <Provider store={store}>
      <SubCategoryEditPage />
    </Provider>
  );
}
