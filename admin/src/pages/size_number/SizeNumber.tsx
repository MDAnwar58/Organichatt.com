import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import SizeNumberContent from "./components/SizeNumberContent";

export default function SizeNumber() {
  return (
    <PageContent>
      <Provider store={store}>
        <SizeNumberContent />
      </Provider>
    </PageContent>
  );
}
