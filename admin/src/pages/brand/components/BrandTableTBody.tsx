import React from "react";
import { Link } from "react-router-dom";
import DataNotFound from "../../components/DataNotFound";
import Loading from "../../components/Loading";
import { UpArrowIcon } from "../../components/Icons";

export default function BrandTableTBody({
  brands,
  loading,
  statusHandle,
  deleteHandle,
  page,
  limit,
}: {
  brands?: any;
  loading?: boolean;
  statusHandle?: any;
  deleteHandle?: any;
  page?: any;
  limit?: any;
}) {
  return (
    <tbody>
      {brands.length > 0 ? (
        brands.map((brand, index) => (
          <tr
            key={index + 1 + (page - 1) * limit}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4"> {index + 1 + (page - 1) * limit}</td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {brand.name}
            </td>
            <td className="px-6 py-4">{brand.slug}</td>
            <td className="px-6 py-4">
              <img src={brand.image_url} className="h-20" alt={brand.name} />
            </td>
            <td className="px-6 py-4">
              {brand.status === "active" ? (
                <small
                  onClick={() => statusHandle(brand.id)}
                  className=" bg-green-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  Active
                </small>
              ) : (
                <small
                  onClick={() => statusHandle(brand.id)}
                  className=" bg-red-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  InActive
                </small>
              )}
            </td>
            <td className="px-6 py-4">
              <Link
                to={`/brand-edit/${brand.id}`}
                className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => deleteHandle(brand.id)}
                className=" font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : loading === true ? (
        <Loading colSpan={6} height={20} />
      ) : (
        <DataNotFound colSpan={6} />
      )}
    </tbody>
  );
}
