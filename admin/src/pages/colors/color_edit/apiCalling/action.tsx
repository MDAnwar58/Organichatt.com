import axiosClient from "../../../../axios-client";
import { successMsg } from "../../../../notify";
import { GET_DATA, GET_ERRORS } from "./actionType";

const getData = (id) => async (dispatch) => {
  const response = await axiosClient.get(`/color-edit/${id}`);
  dispatch({
    type: GET_DATA,
    payload: response.data.data,
  });
};

const updateData = (id, payload, form, navigate) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/color-update/${id}`, payload);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch({
        type: GET_DATA,
        payload: {},
      });
      dispatch({
        type: GET_ERRORS,
        payload: [],
      });
      form.current.reset();
      navigate("/colors");
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

const getErrors = (errors) => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: errors,
  });
};

export { getData, updateData };
