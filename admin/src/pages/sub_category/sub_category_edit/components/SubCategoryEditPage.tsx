import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import store from "../../apiCalling/store";
import useGalleryContext from "../../../common_context/GalleryContext";
import GalleryModal from "../../../components/GalleryModal";
import SubCategoryEditContent from "./SubCategoryEditContent";

export default function SubCategoryEditPage() {
  const {
    getGalleryCategories,
    getGalleries,
    openCreateModal,
    setOpenCreateModal,
    galleryCategoryId,
    itemHandle,
    searchHandler,
    paginate,
    page,
    totalPage,
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
    galleryId,
    setGalleryId,
    ImageUrl,
    setImageUrl,
    selectGalleryImage,
    removeFile,
  } = useGalleryContext();

  useEffect(() => {
    getGalleryCategories();
    getGalleries();
  }, []);

  const galleries = useSelector((state) => state.galleries);

  return (
    <Provider store={store}>
      <SubCategoryEditContent
        setOpenCreateModal={setOpenCreateModal}
        ImageUrl={ImageUrl}
        setImageUrl={setImageUrl}
        removeFile={removeFile}
      />

      <GalleryModal
        openCreateModal={openCreateModal}
        setOpenCreateModal={setOpenCreateModal}
        galleryCategoryId={galleryCategoryId}
        itemHandle={itemHandle}
        galleries={galleries}
        searchHandler={searchHandler}
        paginate={paginate}
        page={page}
        totalPage={totalPage}
        imagePreviewUrl={imagePreviewUrl}
        imageHandle={imageHandle}
        removeImage={removeImage}
        image_name={image_name}
        image={image}
        addGallery={addGallery}
        galleryAddForm={galleryAddForm}
        tab={tab}
        setTab={setTab}
        imageNameError={imageNameError}
        setImageNameError={setImageNameError}
        imageError={imageError}
        galleryId={galleryId}
        selectGalleryImage={selectGalleryImage}
        setImageUrl={setImageUrl}
        setGalleryId={setGalleryId}
      />
    </Provider>
  );
}