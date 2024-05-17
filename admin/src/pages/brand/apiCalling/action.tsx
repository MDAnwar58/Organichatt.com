import axiosClient from "../../../axios-client";
import { successMsg } from "../../../notify";
import { GET_DATAS, GET_EDIT_DATA, GET_UPDATE_ERRORS } from "./actionType";

const getDatas =
  (page, limit, setTotalPage, setLoading, selectItemId, search, setPage) =>
  async (dispatch) => {
    const response = await axiosClient.get(
      `/brands-get?status=${selectItemId}&search=${search}`
    );
    let totalItemsLength = response.data.data.brands.length;
    let totalPagesFromResponse = Math.ceil(totalItemsLength / limit);
    setTotalPage(totalPagesFromResponse);

    let newPage = page; // Initialize newPage with current page

    if (totalItemsLength === 0) {
      // If there are no search results, reset the page to 1
      newPage = 1;
    } else if (page > totalPagesFromResponse) {
      // If the current page exceeds total pages, reset to last page
      newPage = totalPagesFromResponse;
    }

    dispatch(getItems(newPage, limit, response.data.data.brands));

    setPage(newPage); // Set the current page after changing the limit
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

const statusChange =
  (id, page, limit, setTotalPage, setLoading, selectItemId, search, setPage) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/brand-status/${id}`);
    if (response.data.status === "success") {
      successMsg(response.data.msg);
      dispatch(
        getDatas(
          page,
          limit,
          setTotalPage,
          setLoading,
          selectItemId,
          search,
          setPage
        )
      );
    }
  };

const getData = (id, setImageUrl) => async (dispatch) => {
  const response = await axiosClient.get(`/brand-edit/${id}`);
  setImageUrl(response.data.data.image_url);
  dispatch({
    type: GET_EDIT_DATA,
    payload: response.data.data,
  });
};

const updateData =
  (id, payload, form, setNameError, setImageUrlError, navigate) =>
  async (dispatch) => {
    try {
      const response = await axiosClient.post(`/brand-update/${id}`, payload);
      if (response.data.status === "success") {
        successMsg(response.data.msg);
        dispatch({
          type: GET_EDIT_DATA,
          payload: {},
        });
        form.current.reset();
        navigate("/brands");
      }
    } catch (error) {
      dispatch(getErrors(error.response.data.errors));
      if (error.response.data.errors.name) {
        setNameError(true);
      }
      if (error.response.data.errors.image_url) {
        setImageUrlError(true);
      }
    }
  };

const getErrors = (errors) => (dispatch) => {
  dispatch({
    type: GET_UPDATE_ERRORS,
    payload: errors,
  });
};

const dataDelete =
  (id, page, limit, setTotalPage, setLoading, selectItemId, search, setPage) =>
  async (dispatch) => {
    const response = await axiosClient.get(`/brand-delete/${id}`);
    if (response.data.status) {
      successMsg(response.data.msg);
      dispatch(
        getDatas(
          page,
          limit,
          setTotalPage,
          setLoading,
          selectItemId,
          search,
          setPage
        )
      );
    }
  };

export { getDatas, statusChange, getData, updateData, dataDelete };
