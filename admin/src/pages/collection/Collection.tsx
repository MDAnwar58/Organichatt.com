import React from "react";
import PageContent from "../components/PageContent";
import CollectionContent from "./components/CollectionContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";

export default function Collection() {
  return (
    <PageContent>
      <Provider store={store}>
        <CollectionContent />
      </Provider>
    </PageContent>
  );
}
