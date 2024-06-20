import React, { useEffect, useRef } from "react";
import { MdDelete } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import FilterButton from "./FilterButton";
import SettingsButton from "./SettingsButton";
import Button from "./Button";

interface Props {
  setSearchTerm?: any;
  setCurrentPage?: any;
  totalPages?: any;
  filterBtn?: any;
  setFilterBtn?: any;
  pagination?: any;
  setPagination?: any;
  columns?: any;
  columnItems?: any;
  columnItemCount?: any;
  handleColumnStatusChange?: any;
  selectedBox?: any;
  onAllDelete?: any;
  onResetDataTable?: any;
  searchTerm?: any;
}

export default function TableTop({
  setSearchTerm,
  setCurrentPage,
  totalPages,
  filterBtn,
  setFilterBtn,
  pagination,
  setPagination,
  columns,
  columnItems,
  columnItemCount,
  handleColumnStatusChange,
  selectedBox,
  onAllDelete,
  onResetDataTable,
  searchTerm,
}: Props) {
  return (
    <div className="flex mb-3">
      {filterBtn === true && <FilterButton />}
      <input
        type="text"
        className=" w-full  dark:bg-gray-700 border border-gray-300  dark:border-gray-800 rounded-xl py-2 px-5"
        placeholder="search..."
        onKeyUp={(e) => {
          setSearchTerm(e.target.value);
          if (e.target.value !== "") {
            setCurrentPage(totalPages);
          } else {
            setCurrentPage(1);
          }
        }}
        defaultValue={searchTerm}
      />
      <Button
        dataTooltipTarget="tooltip-no-arrow"
        onClick={() => onResetDataTable()}
        className="text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-800 text-2xl px-2 rounded-xl shadow-sm ms-1"
      >
        <GrPowerReset />
      </Button>
      {selectedBox && (
        <Button
          onClick={onAllDelete}
          className="text-red-500 bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-800 text-2xl px-2 rounded-xl shadow-sm ms-1"
        >
          <MdDelete />
        </Button>
      )}
      <SettingsButton
        filterBtn={filterBtn}
        setFilterBtn={setFilterBtn}
        pagination={pagination}
        setPagination={setPagination}
        columnItems={columnItems}
        columns={columns}
        columnItemCount={columnItemCount}
        handleColumnStatusChange={handleColumnStatusChange}
      />
    </div>
  );
}
