import React, { Fragment, useState, useEffect, useRef } from "react";

export default function BrowseCategoriesDropdownBtn() {
  const [browseCategoriesDropdownBtn, setBrowseCategoriesDropdownBtn] =
    useState(false);
  const [dropdownBtnStatus, setDropdownBtnStatus] = useState(false);
  const dropdownRef = useRef(null);
  // make a function to close the dropdown

  function browseCategoriesDropdownBtnHandle() {
    setBrowseCategoriesDropdownBtn(!browseCategoriesDropdownBtn);
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setBrowseCategoriesDropdownBtn(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Fragment>
      <button
        type="button"
        className="bg-gray-50 px-7 border border-gray-300 rounded-s-md lg:w-5/12 w-7/12"
        onClick={browseCategoriesDropdownBtnHandle}
      >
        Browse Categories
      </button>
      <ul
        ref={dropdownRef}
        className={`${
          browseCategoriesDropdownBtn === false && "hidden"
        } absolute top-[3rem] left-0 bg-white border shadow-sm rounded-md pb-1 browse-categories-dropdown-btn`}
      >
        <li>
          <a href="">
            <div className="px-5 py-1 hover:bg-gray-100 transition-all">
              Download
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="px-5 py-1 hover:bg-gray-100 transition-all">
              Create a Copy
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="px-5 py-1 hover:bg-gray-100 transition-all">
              Mark as Draft
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="px-5 py-1 hover:bg-gray-100 transition-all">
              Delete
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="px-5 py-1 hover:bg-gray-100 transition-all">
              Attend a Workshop
            </div>
          </a>
        </li>
      </ul>
    </Fragment>
  );
}
