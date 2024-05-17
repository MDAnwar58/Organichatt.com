import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import CategoryContent from "./components/CategoryContent";

export default function Category() {
  return (
    <PageContent>
      <Provider store={store}>
        <CategoryContent />
      </Provider>
    </PageContent>
  );
}
