import React from "react";
import { Button, Card, CardBody } from "@nextui-org/react";

export default function FormCard() {
  return (
    <div className="p-5 bg-slate-50 shadow-lg rounded-lg border">
      <h3 className="text-center text-xl font-semibold pb-5">Contact US</h3>
      <form action="">
        <input
          type="text"
          className="w-full rounded-md px-5 lg:py-3 py-2 border mb-3"
          placeholder="Enter Your Name"
        />
        <div className="grid grid-cols-2 gap-5">
          <input
            type="email"
            className="w-full rounded-md px-5 lg:py-3 py-2 border mb-3"
            placeholder="Enter Your Email"
          />
          <input
            type="text"
            className="w-full rounded-md px-5 mb-3 lg:py-3 py-2 border"
            placeholder="Enter Your Phone"
          />
        </div>
        <input
          type="text"
          className="w-full rounded-md px-5 mb-3 lg:py-3 py-2 border"
          placeholder="Subjects"
        />
        <textarea
          className="w-full rounded-md p-5 mb-3 lg:py-3 py-2 border"
          rows={10}
        ></textarea>
        <div className="text-end">
          <button className="text-white text-xl font-semibold bg-green-400 px-5 py-2 rounded-md">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
