import React from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import SizeCreateContent from "./components/SizeNumberCreateContent";

export default function SizeNumberCreate() {
  return (
    <Provider store={store}>
      <SizeCreateContent />
    </Provider>
  );
}
