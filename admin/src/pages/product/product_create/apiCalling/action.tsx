import axiosClient from "../../../../axios-client";
import { successMsg } from "../../../../notify";
import { GET_CATEGORY_DATAS, GET_ERRORS } from "./actionType";

const getCategoryDatas = () => async (dispatch) => {
  const response = await axiosClient.get(`/categories-get`);
  // console.log(response.data.data.categories);
  dispatch({
    type: GET_CATEGORY_DATAS,
    payload: response.data.data.categories,
  });
};

const addData = (payload, navigate) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/sub-category-store`, payload);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch({
        type: GET_ERRORS,
        payload: [],
      });
      navigate("/sub-categories");
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
export { getCategoryDatas, addData };
