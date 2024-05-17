import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import ColorContent from "./components/ColorContent";

export default function Category() {
  return (
    <PageContent>
      <Provider store={store}>
        <ColorContent />
      </Provider>
    </PageContent>
  );
}
