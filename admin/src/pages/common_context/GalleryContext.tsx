import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addData,
  getGalleryCategoryDatas,
  getGalleryDatas,
} from "../apiCalling/action";
import { useLocation } from "react-router-dom";

export default function useGalleryContext() {
  const { pathname } = useLocation();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [galleryCategoryId, setGalleryCategoryId] = useState("");
  const [search, setSearch] = useState("");

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const image_name = useRef();
  const image = useRef();
  const galleryAddForm = useRef();

  const galleryCategoryName = pathname === "/admin/brand-create" && "Brand";
  const [gallery_category_name] = useState(galleryCategoryName);

  const dispatch = useDispatch();
  const [tab, setTab] = useState("gallery");
  const [imageNameError, setImageNameError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const [galleryId, setGalleryId] = useState(null);
  const [ImageUrl, setImageUrl] = useState("");

  const getGalleryCategories = () => {
    dispatch(getGalleryCategoryDatas());
    // alert();
  };

  const getGalleries = () => {
    dispatch(
      getGalleryDatas(page, limit, setTotalPage, galleryCategoryId, search)
    );
  };

  const itemHandle = (id) => {
    setGalleryCategoryId(id);
    dispatch(getGalleryDatas(page, limit, setTotalPage, id, search));
  };
  const searchHandler = (e) => {
    setSearch(e.target.value);
    dispatch(
      getGalleryDatas(
        page,
        limit,
        setTotalPage,
        galleryCategoryId,
        e.target.value
      )
    );
  };

  const paginate = (btn, num) => {
    if (btn === "previews") {
      if (num > 0) {
        setPage(num);
        dispatch(
          getGalleryDatas(num, limit, setTotalPage, galleryCategoryId, search)
        );
      }
    } else {
      if (page !== totalPage) {
        setPage(num);
        dispatch(
          getGalleryDatas(num, limit, setTotalPage, galleryCategoryId, search)
        );
      }
    }
  };

  // image file read and show this upload image file
  const imageHandle = (e) => {
    setImageError(false);
    if (e.target && e.target.files.length > 0) {
      const file = e.target.files[0];
      previewFile(file);
    }
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const removeImage = () => {
    setImagePreviewUrl(""); // Clear the image preview URL
  };

  const addGallery = () => {
    const formData = new FormData();
    formData.append("image_name", image_name.current.value);
    formData.append("image", image.current.files[0]);

    dispatch(
      addData(
        formData,
        gallery_category_name,
        page,
        limit,
        setTotalPage,
        galleryCategoryId,
        search,
        galleryAddForm,
        setImagePreviewUrl,
        setTab,
        setImageNameError,
        setImageError
      )
    );
  };

  const selectGalleryImage = (id, url) => {
    setGalleryId(id);
    setImageUrl(url);
  };

  const removeFile = () => {
    setGalleryId(null);
    setImageUrl("");
  };

  return {
    getGalleryCategories,
    getGalleries,
    openCreateModal,
    setOpenCreateModal,
    page,
    setPage,
    limit,
    totalPage,
    setTotalPage,
    setGalleryCategoryId,
    galleryCategoryId,
    itemHandle,
    searchHandler,
    paginate,
    imagePreviewUrl,
    imageHandle,
    removeImage,
    image_name,
    image,
    addGallery,
    galleryAddForm,
    tab,
    setTab,
    imageNameError,
    setImageNameError,
    imageError,
    setImageError,
    galleryId,
    setGalleryId,
    ImageUrl,
    setImageUrl,
    selectGalleryImage,
    removeFile,
  };
}
