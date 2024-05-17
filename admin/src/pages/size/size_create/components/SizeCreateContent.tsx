import React, { Fragment, useEffect } from "react";
import GalleryModal from "../../../components/GalleryModal";
import useGalleryContext from "../../../common_context/GalleryContext";
import { Provider, useSelector } from "react-redux";
import store from "../apiCalling/store";
import SizeForm from "./SizeForm";

export default function SizeCreateContent() {
  return (
    <Fragment>
      <Provider store={store}>
        <SizeForm />
      </Provider>
    </Fragment>
  );
}
