import React from "react";

export default function DataNotFound({ colSpan }: any) {
  return (
    <tr>
      <td colSpan={colSpan} className="text-center h-10 dark:bg-gray-800">
        Data not found
      </td>
    </tr>
  );
}
