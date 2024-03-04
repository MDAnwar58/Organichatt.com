import React from "react";
import { Button, Link } from "@nextui-org/react";

export default function PhoneSignUpForm({ setAuthWithPhoneStatus }: any) {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="name"
        className=" bg-[#f3f3f4] hover:bg-[#e4e4e7] rounded-lg py-3 px-5 border-none focus:ring-0"
        placeholder="Enter Your Name"
      />

      <input
        type="number"
        className=" bg-[#f3f3f4] hover:bg-[#e4e4e7] rounded-lg py-3 px-5 border-none focus:ring-0"
        placeholder="Enter Your Phone"
      />

      <input
        type="password"
        className=" bg-[#f3f3f4] hover:bg-[#e4e4e7] rounded-lg py-3 px-5 border-none focus:ring-0"
        placeholder="Enter Password"
      />

      <input
        type="password"
        className=" bg-[#f3f3f4] hover:bg-[#e4e4e7] rounded-lg py-3 px-5 border-none focus:ring-0"
        placeholder="Confirm Password"
      />
      <p className="text-center text-small">
        Need to create an account?{" "}
        <Link
          className="text-sm cursor-pointer"
          onPress={() => setAuthWithPhoneStatus("sign-in-with-phone")}
        >
          Sign In
        </Link>
      </p>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="success">
          Sign Up
        </Button>
      </div>
    </form>
  );
}
