import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getData, updateData } from "../../apiCalling/action";
import { useNavigate } from "react-router-dom";

export default function useCategoryEditContext() {
  const name = useRef();
  const image_url = useRef();
  const form = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getBrand = (id, setImageUrl) => {
    dispatch(getData(id, setImageUrl));
  };
  const updateBrand = (id) => {
    const payload = {
      name: name.current.value,
      image_url: image_url.current.value,
    };
    dispatch(updateData(id, payload, form, navigate));
  };
  return {
    getBrand,
    name,
    image_url,
    form,
    updateBrand,
  };
}
