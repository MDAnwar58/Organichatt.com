import React from "react";
import PageContent from "../components/PageContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import WeightContent from "./components/WeightContent";

export default function Weight() {
  return (
    <PageContent>
      <Provider store={store}>
        <WeightContent />
      </Provider>
    </PageContent>
  );
}
