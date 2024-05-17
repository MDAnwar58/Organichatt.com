import React from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import ColorEditPage from "./components/ColorEditPage";

export default function ColorEdit() {
  return (
    <Provider store={store}>
      <ColorEditPage />
    </Provider>
  );
}
