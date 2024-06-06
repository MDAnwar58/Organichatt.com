import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  dataDelete,
  dataSorting,
  getDatas,
  statusChange,
} from "../apiCalling/action";

export default function useProductContext() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const [selectItemId, setSelectItemId] = useState("");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("desc");
  const [sortByDir, setSortByDir] = useState("");

  const dispatch = useDispatch();

  const getProducts = () => {
    dispatch(
      getDatas(
        page,
        limit,
        setTotalPage,
        setLoading,
        selectItemId,
        search,
        setPage,
        sortByDir,
        sortBy
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
        sortByDir,
        sortBy
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
        sortByDir,
        sortBy
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
        sortByDir,
        sortBy
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
        sortByDir,
        sortBy
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
        sortByDir,
        sortBy
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
        sortByDir,
        sortBy
      )
    );
  };

  const sortByHandle = (sort, dir): void => {
    setSortByDir(dir);
    if (sort === "desc") {
      setSortBy("asc");
      dispatch(
        dataSorting(
          page,
          limit,
          setTotalPage,
          setLoading,
          selectItemId,
          search,
          setPage,
          dir,
          "asc"
        )
      );
    } else {
      setSortBy("desc");
      dispatch(
        dataSorting(
          page,
          limit,
          setTotalPage,
          setLoading,
          selectItemId,
          search,
          setPage,
          dir,
          "desc"
        )
      );
    }
  };

  return {
    getProducts,
    page,
    limit,
    totalPage,
    onPageHabdle,
    pageItemLimitHandler,
    selectItemId,
    itemHandle,
    loading,
    searchHandle,
    statusHandle,
    deleteHandle,
    sortBy,
    sortByHandle,
    sortByDir,
  };
}
