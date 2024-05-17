import React from "react";
import { useOutletContext } from "react-router-dom";
import GalleryTrustBinContent from "./components/GalleryTrustBinContent";
import { Provider } from "react-redux";
import store from "./apiCalling/store";
import PageContent from "../../components/PageContent";

export default function GalleryTrustBin() {
  const { sideBar } = useOutletContext();
  return (
    <Provider store={store}>
      <PageContent>
        <GalleryTrustBinContent sideBar={sideBar} />
      </PageContent>
    </Provider>
  );
}
