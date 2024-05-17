import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";
import { GET_DATAS, GET_EDIT_DATA, GET_UPDATE_ERRORS } from "./actionType";

const getDatas =
  (page, limit, setTotalPage, setLoading, search, setPage) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/sizes-get?search=${search}`);
    // console.log(response.data.data.colors);

    let totalItemsLength = response.data.data.sizes.length;
    let totalPagesFromResponse = Math.ceil(totalItemsLength / limit);
    setTotalPage(totalPagesFromResponse);

    let newPage = page;

    if (totalItemsLength === 0) {
      newPage = 1;
    } else if (page > totalPagesFromResponse) {
      newPage = totalPagesFromResponse;
    }

    dispatch(getItems(newPage, limit, response.data.data.sizes));

    setPage(newPage);
    setLoading(false);
    dispatch({
      type: GET_EDIT_DATA,
      payload: {},
    });
  };

const getItems = (page, limit, items) => (dispatch) => {
  let array = [];
  for (let i = (page - 1) * limit; i < page * limit && items[i]; i++) {
    array.push(items[i]);
  }
  dispatch({
    type: GET_DATAS,
    payload: array,
  });
};

const getData = (id) => async (dispatch) => {
  const response = await axiosClient.get(`/size-edit/${id}`);
  dispatch({
    type: GET_EDIT_DATA,
    payload: response.data.data,
  });
};

const updateData = (id, payload, form, navigate) => async (dispatch) => {
  try {
    const response = await axiosClient.post(`/size-update/${id}`, payload);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch({
        type: GET_EDIT_DATA,
        payload: {},
      });
      dispatch({
        type: GET_UPDATE_ERRORS,
        payload: [],
      });
      form.current.reset();
      navigate("/sizes");
    }
  } catch (error) {
    dispatch(getErrors(error.response.data.errors));
  }
};

const getErrors = (errors) => (dispatch) => {
  dispatch({
    type: GET_UPDATE_ERRORS,
    payload: errors,
  });
};

const dataDelete =
  (id, page, limit, setTotalPage, setLoading, search, setPage) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/size-delete/${id}`);
    if (response.data.status) {
      successMsg(response.data.msg);
      dispatch(
        getDatas(page, limit, setTotalPage, setLoading, search, setPage)
      );
    }
  };

export { getDatas, getData, updateData, dataDelete };
