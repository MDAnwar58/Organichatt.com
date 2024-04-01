import React from "react";
import { Link, useLocation, useRoutes } from "react-router-dom";

export default function ManuBar() {
  const location = useLocation();
  const pathname = location.pathname;
  const active = "text-white font-medium";
  return (
    <nav className="bg-green-400 shadow-md px-10 py-3 md:block hidden">
      <ul className="flex justify-end gap-x-5">
        <li>
          <Link
            to="/"
            className={`${
              pathname === "/" && active
            } text-gray-500 font-medium hover:text-white`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`${
              pathname === "/products" && active
            } text-gray-500 font-medium hover:text-white`}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/offers"
            className={`${
              pathname === "/offers" && active
            } text-gray-500 font-medium hover:text-white`}
          >
            Offers
          </Link>
        </li>
        <li>
          <a
            href="/about"
            className={`${
              pathname === "/about" && active
            } text-gray-500 font-medium hover:text-white`}
          >
            About
          </a>
        </li>
        <li>
          <Link
            to="/contact"
            className={`${
              pathname === "/contact" && active
            } text-gray-500 font-medium hover:text-white`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
