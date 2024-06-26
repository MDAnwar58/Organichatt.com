import React from "react";

interface Props {
  onChange?: any;
  defaultChecked?: any;
}

export default function ToogleCheckBox({ onChange, defaultChecked }: Props) {
  return (
    <div className="text-end ps-3">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          onChange={onChange}
          className="sr-only peer"
          defaultChecked={defaultChecked}
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
      </label>
    </div>
  );
}
