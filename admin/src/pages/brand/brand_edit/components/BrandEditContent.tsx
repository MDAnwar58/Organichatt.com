import React, { Fragment, useEffect, useState } from "react";
import FormHeader from "../../../components/FormHeader";
import LanguageTab from "../../../components/LanguageTab";
import EnForm from "./EnForm";
import BnForm from "./BnForm";
import { Provider, useSelector } from "react-redux";
import useBrandEditContext from "../context/BrandEditContext";
import { useParams } from "react-router-dom";
import store from "../../../apiCalling/store";

export default function BrandEditContent({
  setOpenCreateModal,
  ImageUrl,
  setImageUrl,
  removeFile,
}: {
  setOpenCreateModal?: any;
  ImageUrl?: any;
  setImageUrl?: any;
  removeFile?: any;
}) {
  const { getBrand, name, image_url, form, updateBrand } =
    useBrandEditContext();

  const { id } = useParams();
  const [language, setLanguage] = useState("english");

  useEffect(() => {
    getBrand(id, setImageUrl);
  }, []);

  const brand = useSelector((state) => state.brand);
  const errors = useSelector((state) => state.errors);

  return (
    <div className="mx-auto 2xl:w-4/12 xl:w-5/12 lg:w-6/12 sm:w-8/12 w-full pt-0  bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-md mt-28">
      <FormHeader title="Brand Updated" />
      <LanguageTab language={language} setLanguage={setLanguage} />
      <Provider store={store}>
        {language === "english" && (
          <EnForm
            brand={brand}
            setOpenCreateModal={setOpenCreateModal}
            ImageUrl={ImageUrl}
            removeFile={removeFile}
            name={name}
            image_url={image_url}
            form={form}
            updateBrand={updateBrand}
            errors={errors}
          />
        )}
        {language === "bangla" && <BnForm />}
      </Provider>
    </div>
  );
}
