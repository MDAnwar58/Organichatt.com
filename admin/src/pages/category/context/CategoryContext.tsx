import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataDelete, getDatas, statusChange } from "../apiCalling/action";

export default function useCategoryContext() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [length, setLength] = useState(0);

  const dispatch = useDispatch();

  const [selectItemId, setSelectItemId] = useState("");
  const [search, setSearch] = useState("");

  const getCategories = () => {
    dispatch(
      getDatas(
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage,
        setLength
      )
    );
  };

  const onPageHabdle = (data) => {
    setPage(data.selected + 1);
    dispatch(
      getDatas(
        data.selected + 1,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage,
        setLength
      )
    );
  };

  const pageItemLimitHandler = (e) => {
    setLimit(e.target.value);
    dispatch(
      getDatas(
        page,
        e.target.value,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage,
        setLength
      )
    );
  };

  const itemHandle = (id) => {
    setSelectItemId(id);
    dispatch(
      getDatas(
        page,
        limit,
        setTotalPage,
        setLoading,
        id,
        search,
        setPage,
        setLength
      )
    );
  };

  const searchHandle = (e) => {
    setSearch(e.target.value);
    dispatch(
      getDatas(
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        e.target.value,
        setPage,
        setLength
      )
    );
  };

  const statusHandle = (id) => {
    dispatch(
      statusChange(
        id,
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage,
        setLength
      )
    );
  };

  const deleteHandle = (id) => {
    dispatch(
      dataDelete(
        id,
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage,
        setLength
      )
    );
  };

  return {
    getCategories,
    page,
    limit,
    totalPage,
    length,
    onPageHabdle,
    pageItemLimitHandler,
    selectItemId,
    itemHandle,
    loading,
    searchHandle,
    statusHandle,
    deleteHandle,
  };
}
