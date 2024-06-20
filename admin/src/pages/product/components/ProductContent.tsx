import React, { Fragment, useEffect, useState } from "react";
import TableHeader from "../../components/TableHeader";
import DataTable from "../../components/DataTable";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import useProductContext from "../context/ProductContext";
import ProductTableTBody from "./ProductTableTBody";
import ReactDataTable from "./table/ReactDataTable";

export default function ProductContent() {
  const {
    getProducts,
    page,
    limit,
    totalPage,
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
      name: "publish",
    },
    {
      id: 2,
      name: "unpublish",
    },
  ];

  const checkbox = (
    <input type="checkbox" className="border border-gray-950 rounded-md" />
  );
  const theadColumnName = [
    <Column name={checkbox} />,
    <Column
      name="Product Name"
      icon={true}
      sortBy={sortBy}
      iconClassName="ms-1"
      onClick={() => sortByHandle(sortBy, "name")}
      sortByDir={sortByDir === "name" && "name"}
    />,
    <Column name="Slug" />,
    <Column
      name="Price"
      icon={true}
      sortBy={sortBy}
      iconClassName="ms-1"
      onClick={() => sortByHandle(sortBy, "price")}
      sortByDir={sortByDir === "price" && "price"}
    />,
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
      loading={loading}
      statusHandle={statusHandle}
      deleteHandle={deleteHandle}
      page={page}
      limit={limit}
      sortBy={sortBy}
    />
  );
  const limitSelection = <LimitSelection onChange={pageItemLimitHandler} />;

  const COLUMNS = [
    {
      title: "Product Name",
      field: "name",
      fieldStatus: true,
    },
    {
      title: "Slug",
      field: "slug",
      fieldStatus: true,
    },
    {
      title: "Price",
      field: "price",
      fieldStatus: true,
    },
    {
      title: "Discount Price",
      field: "discount_price",
      fieldStatus: true,
    },
    {
      title: "Collection",
      field: "collection",
      fieldStatus: true,
    },
    {
      title: "Brand",
      field: "brand",
      fieldStatus: true,
    },
    {
      title: "Category",
      field: "category",
      fieldStatus: true,
    },
    {
      title: "Sub Category",
      field: "sub_category",
      fieldStatus: true,
    },
    {
      title: "Colors",
      field: "product_colors",
      fieldStatus: true,
    },
    {
      title: "Sizes",
      field: "product_sizes",
      fieldStatus: true,
    },
    {
      title: "Size Numbers",
      field: "product_size_numbers",
      fieldStatus: true,
    },
    {
      title: "Weights",
      field: "product_weights",
      fieldStatus: true,
    },
    {
      title: "Image",
      field: "image_url",
      fieldStatus: true,
    },
    {
      title: "Status",
      field: "status",
      fieldStatus: true,
    },
  ];

  // console.log(COLUMNS);
  const [itemIds, setItemIds] = useState([]);
  const [selectAllItem, setSelectAllItem] = useState(false);
  const onDeleteHandle = (id) => {
    alert(id);
  };
  const handleSelectAllChange = (items) => {
    setSelectAllItem(!selectAllItem);
    if (!selectAllItem) {
      const allItemIds = items.map((item) => item.id);
      setItemIds(allItemIds);
    } else {
      setItemIds([]);
    }
  };
  const onSelectItem = (itemId, items) => {
    setItemIds((prevSelectedItems) => {
      if (prevSelectedItems.includes(itemId) !== false) {
        // Unselect the item
        prevSelectedItems.includes(itemId);
        const updatedItems = prevSelectedItems.filter((id) => id !== itemId);
        if (updatedItems.length !== items.length) {
          setSelectAllItem(false);
        }
        return updatedItems;
      } else {
        // Select the item
        const updatedItems = [...prevSelectedItems, itemId];
        if (updatedItems.length === items.length) {
          setSelectAllItem(true);
        }
        return updatedItems;
      }
    });
  };
  const onAllDelete = () => {
    console.log(itemIds);
  };
  // console.log(products);
  return (
    <div>
      <TableHeader
        title="Product lists"
        link="/product-create"
        linkName="Create"
        linkClassName={"bg-blue-500 text-white px-5 py-1 rounded-xl"}
      />

      <ReactDataTable
        items={products}
        Columns={COLUMNS}
        columnItemCount={2}
        actionColumn={true}
        viewHrefText="view"
        viewHrefLink="/product-view/"
        viewClassName="text-blue-300"
        editHrefText="edit"
        editHrefLink="/product-edit/"
        editClassName="text-blue-500 ms-1"
        deleteButtonText="delete"
        onDelete={onDeleteHandle}
        deleteButtonClassName="text-red-500 ms-1"
        selectedBox
        onSelectAll={handleSelectAllChange}
        selectAllItem={selectAllItem}
        onSelectItem={onSelectItem}
        itemIds={itemIds}
        onAllDelete={onAllDelete}
        onStatusChange={statusHandle}
      />
      {/* <DataTable
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
      /> */}
    </div>
  );
}
