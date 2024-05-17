import React from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import SizeCreateContent from "./components/SizeCreateContent";

export default function SizeCreate() {
  return (
    <Provider store={store}>
      <SizeCreateContent />
    </Provider>
  );
}
