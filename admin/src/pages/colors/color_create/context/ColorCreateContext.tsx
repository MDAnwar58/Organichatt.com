import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../apiCalling/action";
import { useNavigate } from "react-router-dom";

export default function useColorCreateContext() {
  const name = useRef();
  const color_code = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addHandle = () => {
    const payload = {
      name: name.current.value,
      color_code: color_code.current.value,
    };
    dispatch(addData(payload, navigate));
  };
  return {
    name,
    color_code,
    form,
    addHandle,
  };
}
