import React, { Fragment, useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import DataTable from "../../components/DataTable";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import useProductContext from "../context/ProductContext";
import ProductTableTBody from "./ProductTableTBody";

export default function ProductContent() {
  const {
    getProducts,
    page,
    limit,
    totalPage,
    length,
    onPageHabdle,
    pageItemLimitHandler,
    selectItemId,
    itemHandle,
    loading,
    searchHandle,
    statusHandle,
    deleteHandle,
    sortBy,
    sortByHandle,
    sortByDir,
  } = useProductContext();

  useEffect(() => {
    getProducts();
  }, []);

  const products = useSelector((state) => state.products);

  const filterItems = [
    {
      id: 1,
      name: "active",
    },
    {
      id: 2,
      name: "inactive",
    },
  ];

  const checkbox = <input type="checkbox" />;
  const theadColumnName = [
    // ${
    //     sortByDir === "" || (sortByDir === "id" && sortBy === "desc")
    //       ? "text-gray-950"
    //       : "text-gray-300"
    //   }
    <Column
      name="#"
      icon={true}
      sortBy={sortBy}
      iconClassName={`ms-1`}
      onClick={() => sortByHandle(sortBy, "id")}
      sortByDir={sortByDir === "id" && "id"}
    />,
    <Column
      name="Product Name"
      icon={true}
      sortBy={sortBy}
      iconClassName="ms-1"
      onClick={() => sortByHandle(sortBy, "name")}
      sortByDir={sortByDir === "name" && "name"}
    />,
    <Column name="Slug" />,
    <Column name="Price" />,
    <Column name="Discount Price" />,
    <Column name="Collection" />,
    <Column name="Brand" />,
    <Column name="Category" />,
    <Column name="Sub Category" />,
    <Column name="Colors" />,
    <Column name="Sizes" />,
    <Column name="Size Numbers" />,
    <Column name="Weights" />,
    <Column name="Image" />,
    <Column name="Status" />,
    <Column name="Action" />,
  ];

  const tbody = (
    <ProductTableTBody
      products={products}
      length={length}
      loading={loading}
      statusHandle={statusHandle}
      deleteHandle={deleteHandle}
      page={page}
      limit={limit}
      sortBy={sortBy}
    />
  );
  const limitSelection = <LimitSelection onChange={pageItemLimitHandler} />;

  return (
    <Fragment>
      <TableHeader
        title="Product lists"
        link="/product-create"
        linkName="Create"
        linkClassName={"bg-blue-500 text-white px-5 py-1 rounded-xl"}
      />

      <DataTable
        theadColumnName={theadColumnName}
        tbody={tbody}
        page={page}
        limit={limit}
        totalPage={totalPage}
        onPageHabdle={onPageHabdle}
        limitSelection={limitSelection}
        search={true}
        filter={true}
        filterItems={filterItems}
        selectItemId={selectItemId}
        itemHandle={itemHandle}
        onChangeSearch={searchHandle}
      />
    </Fragment>
  );
}
