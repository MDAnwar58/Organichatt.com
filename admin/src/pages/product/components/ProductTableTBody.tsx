import React from "react";
import { Link } from "react-router-dom";
import DataNotFound from "../../components/DataNotFound";
import Loading from "../../components/Loading";

export default function ProductTableTBody({
  products,
  length,
  loading,
  statusHandle,
  deleteHandle,
  page,
  limit,
  sortBy,
}: {
  products?: any;
  length?: any;
  loading?: boolean;
  statusHandle?: any;
  deleteHandle?: any;
  page?: any;
  limit?: any;
  sortBy?: any;
}) {
  return (
    <tbody>
      {products.length > 0 ? (
        products.map((product, index) => (
          <tr
            key={
              sortBy === "desc"
                ? index + 1 + (page - 1) * limit
                : length - index - (page - 1) * limit
            }
            // {length - index - (page - 1) * limit}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center"
          >
            <td className="px-6 py-4">
              {sortBy === "desc"
                ? index + 1 + (page - 1) * limit
                : length - index - (page - 1) * limit}
              {/* {length - index - (page - 1) * limit} */}
            </td>
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {product.name}
            </td>
            <td className="px-6 py-4">{product.slug}</td>
            <td className="px-6 py-4">
              <img
                src={product.image_url}
                className="h-16 w-16 rounded-2xl"
                alt={product.name}
              />
            </td>
            <td className="px-6 py-4">
              {product.status === "active" ? (
                <small
                  onClick={() => statusHandle(product.id)}
                  className=" bg-green-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  Active
                </small>
              ) : (
                <small
                  onClick={() => statusHandle(product.id)}
                  className=" bg-red-300 text-white rounded-xl text-sm font-semibold px-3 pb-[.15rem] cursor-pointer"
                >
                  InActive
                </small>
              )}
            </td>
            <td className="px-6 py-4">
              <Link
                to={`/product-edit/${product.id}`}
                className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
              <button
                type="button"
                onClick={() => deleteHandle(product.id)}
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
