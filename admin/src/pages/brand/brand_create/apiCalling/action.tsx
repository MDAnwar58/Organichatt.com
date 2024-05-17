import axiosClient from "../../../../axios-client";
import { successMsg } from "../../../../notify";
import { GET_ERRORS } from "../../../apiCalling/actionType";

const addData = (payload, navigate) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/brand-store`, payload);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch({
        type: GET_ERRORS,
        payload: [],
      });
      navigate("/brands");
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
export { addData };
