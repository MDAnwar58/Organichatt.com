import React from "react";
import { Provider } from "react-redux";
import store from "../../apiCalling/store";
import ColorEditContent from "./ColorEditContent";

export default function ColorEditPage() {
  return (
    <Provider store={store}>
      <ColorEditContent />
    </Provider>
  );
}
