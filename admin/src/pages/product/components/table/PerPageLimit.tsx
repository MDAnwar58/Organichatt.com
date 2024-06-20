import React from "react";

interface Props {
  setRowsPerPage?: any;
}

export default function PerPageLimit({ setRowsPerPage }: Props) {
  return (
    <select
      onChange={(e) => {
        setRowsPerPage(e.target.value);
      }}
      className=" rounded-md p-2 px-3 dark:bg-gray-700 dark:text-white border border-gray-100 dark:border-gray-800 drop-shadow-sm"
    >
      {Array(46)
        .fill(0)
        .map((_, n) => (
          <option key={n + 5} value={n + 5}>
            {n + 5}
          </option>
        ))}
    </select>
  );
}
