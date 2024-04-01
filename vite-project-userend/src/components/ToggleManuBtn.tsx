import React from "react";
import "../assets/css/manu-btn.css";

export default function ToggleManuBtn({ rotateHandle, manuBtnRotate }: any) {
  return (
    <button
      className={`custom-button rounded-md md:hidden block md:me-0 me-3 ${
        manuBtnRotate === true ? "px-[.7rem] py-[1.075rem]" : "p-[.7rem]"
      }`}
      onClick={rotateHandle}
    >
      <div className={`line-1 ${manuBtnRotate === true && "line-rotate-1"}`} />
      <div
        className={`line-2 ${
          manuBtnRotate === true ? "line-rotate-2" : "mt-3"
        }`}
      />
    </button>
  );
}
