import React, { Fragment, useEffect } from "react";
import GalleryModal from "../../../components/GalleryModal";
import useGalleryContext from "../../../common_context/GalleryContext";
import { Provider, useSelector } from "react-redux";
import store from "../apiCalling/store";
import ProductForm from "./ProductForm";

interface Props {
  sideBar?: boolean;
}

export default function ProductCreateContent({ sideBar }: Props) {
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
    <Fragment>
      <Provider store={store}>
        <ProductForm
          setOpenCreateModal={setOpenCreateModal}
          ImageUrl={ImageUrl}
          removeFile={removeFile}
          sideBar={sideBar}
        />
      </Provider>

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
    </Fragment>
  );
}