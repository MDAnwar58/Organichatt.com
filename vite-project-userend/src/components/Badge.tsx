import React from "react";

export default function Badge({ children, className, count }: any) {
  return (
    <div className=" relative">
      {children}
      <span className={` absolute ${className}`}>
        <span className=" bg-green-500 text-white border-2 border-white rounded-full px-1">
          {count}
        </span>
      </span>
    </div>
  );
}
