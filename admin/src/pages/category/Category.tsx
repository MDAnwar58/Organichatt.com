import React from "react";
import PageContent from "../components/PageContent";
import CategoryPage from "./components/CategoryPage";
import { Provider } from "react-redux";
import store from "../apiCalling/store";

export default function Category() {
  return (
    <PageContent>
      <Provider store={store}>
        <CategoryPage />
      </Provider>
    </PageContent>
  );
}
