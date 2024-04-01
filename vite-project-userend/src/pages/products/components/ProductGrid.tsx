import Product from "../../../components/Product";
import ProductDetailsModal from "../../../components/ProductDetailsModal";
import React, { Fragment, useState } from "react";

export default function ProductGrid() {
  const [modalOpenOrClose, setModalOpenOrClose] = useState(false);
  const openModal = () => {
    setModalOpenOrClose(true);
  };
  const closeModal = () => {
    setModalOpenOrClose(false);
  };
  return (
    <Fragment>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
        <Product openModal={openModal} />
      </div>
      <ProductDetailsModal
        modalOpenOrClose={modalOpenOrClose}
        closeModal={closeModal}
      />
    </Fragment>
  );
}
