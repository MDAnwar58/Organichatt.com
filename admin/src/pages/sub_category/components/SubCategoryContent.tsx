import React, { Fragment, useEffect } from "react";
import TableHeader from "../../components/TableHeader";
import DataTable from "../../components/DataTable";
import LimitSelection from "./LimitSelection";
import { useSelector } from "react-redux";
import Column from "../../components/Column";
import SubCategoryTableTBody from "./SubCategoryTableTBody";
import useSubCategoryContext from "../context/SubCategoryContext";

export default function SubCategoryContent() {
  const {
    getSubCategories,
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
  } = useSubCategoryContext();

  useEffect(() => {
    getSubCategories();
  }, []);

  const sub_categories = useSelector((state) => state.sub_categories);

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
      name="Sub Category Name"
      icon={true}
      sortBy={sortBy}
      iconClassName="ms-1"
      onClick={() => sortByHandle(sortBy, "name")}
      sortByDir={sortByDir === "name" && "name"}
    />,
    <Column name="Slug" />,
    <Column name="Image" />,
    <Column name="Status" />,
    <Column name="Action" />,
  ];

  const tbody = (
    <SubCategoryTableTBody
      sub_categories={sub_categories}
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
        title="Sub Category lists"
        link="/sub-category-create"
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
