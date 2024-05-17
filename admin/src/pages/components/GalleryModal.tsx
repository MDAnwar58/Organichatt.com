import React, { useState } from "react";
import Gallery from "./Gallery";
import UploadFile from "./UploadFile";
import TabNav from "./TabNav";
import ModalClose from "./ModalClose";
import GalleryModalFooter from "./GalleryModalFooter";

export default function GalleryModal({
  openCreateModal,
  setOpenCreateModal,
  galleryCategoryId,
  itemHandle,
  galleries,
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
  selectGalleryImage,
  setGalleryId,
  setImageUrl,
}: {
  openCreateModal?: any;
  setOpenCreateModal?: any;
  galleryCategoryId?: any;
  itemHandle?: any;
  galleries?: any;
  searchHandler?: any;
  paginate?: any;
  page?: any;
  totalPage?: any;
  imagePreviewUrl?: any;
  imageHandle?: any;
  removeImage?: any;
  image_name?: any;
  image?: any;
  addGallery?: any;
  galleryAddForm?: any;
  tab?: any;
  setTab?: any;
  imageNameError?: any;
  setImageNameError?: any;
  imageError?: any;
  galleryId?: any;
  selectGalleryImage?: any;
  setGalleryId?: any;
  setImageUrl?: any;
}) {
  const modalCloseHandle = () => {
    setOpenCreateModal(false);
    setGalleryId(null);
    setImageUrl("");
  };
  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className={`${
        openCreateModal === false && "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0`}
    >
      <div className="relative w-full h-[100vh]">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full">
          {/* Modal header */}
          <div className="flex items-center justify-between px-4 py-2 md:px-5 md:py-3 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">
              <TabNav tab={tab} setTab={setTab} />
            </h3>
            <ModalClose modalCloseHandle={modalCloseHandle} />
          </div>
          {/* Modal body */}
          <div className="p-4 md:p-5 h-[78.5vh] overflow-y-scroll">
            {tab === "gallery" && (
              <Gallery
                galleryCategoryId={galleryCategoryId}
                itemHandle={itemHandle}
                galleries={galleries}
                searchHandler={searchHandler}
                galleryId={galleryId}
                selectGalleryImage={selectGalleryImage}
              />
            )}
            {tab === "upload file" && (
              <UploadFile
                imagePreviewUrl={imagePreviewUrl}
                imageHandle={imageHandle}
                removeImage={removeImage}
                image_name={image_name}
                image={image}
                addGallery={addGallery}
                galleryAddForm={galleryAddForm}
                imageNameError={imageNameError}
                setImageNameError={setImageNameError}
                imageError={imageError}
              />
            )}
          </div>
          {/* Modal footer */}
          <GalleryModalFooter
            setOpenCreateModal={setOpenCreateModal}
            modalCloseHandle={modalCloseHandle}
            paginate={paginate}
            page={page}
            totalPage={totalPage}
            tab={tab}
          />
        </div>
      </div>
    </div>
  );
}
