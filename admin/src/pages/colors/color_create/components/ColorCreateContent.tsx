import React, { Fragment, useEffect } from "react";
import GalleryModal from "../../../components/GalleryModal";
import useGalleryContext from "../../../common_context/GalleryContext";
import { Provider, useSelector } from "react-redux";
import store from "../apiCalling/store";
import ColorForm from "./ColorForm";

export default function ColorCreateContent() {
  return (
    <Fragment>
      <Provider store={store}>
        <ColorForm />
      </Provider>
    </Fragment>
  );
}
