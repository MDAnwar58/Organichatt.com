import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import SizeContent from "./components/SizeContent";

export default function Size() {
  return (
    <PageContent>
      <Provider store={store}>
        <SizeContent />
      </Provider>
    </PageContent>
  );
}
