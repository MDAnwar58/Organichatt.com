import React, { useEffect, useState } from "react";
import FormHeader from "../../../components/FormHeader";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import ImageInputFile from "../../../components/ImageInputFile";
import Select from "../../../components/Select";
import { useSelector } from "react-redux";
import useSubCategoryCreateContext from "../context/SubCategoryCreateContext";
import InputRadio from "../../../components/InputRadio";
import ToogleCheckBox from "../../../components/ToogleCheckBox";
import MultipleSelect from "../../../components/MultipleSelect";
import TextEditor from "../../../components/TextEditor";

interface Props {
  setOpenCreateModal?: any;
  ImageUrl?: any;
  removeFile?: any;
  sideBar?: any;
}

export default function ProductForm({
  setOpenCreateModal,
  ImageUrl,
  removeFile,
  sideBar,
}: Props) {
  const { getCategories, name, category_id, image_url, form, addGallery } =
    useSubCategoryCreateContext();
  const [collectionDisabled, setCollectionDisabled] = useState(true);
  const [brandDisabled, setBrandDisabled] = useState(true);
  const [categoryDisabled, setCategoryDisabled] = useState(true);
  const [subCategoryDisabled, setSubCategoryDisabled] = useState(true);
  const [colorDisabled, setColorDisabled] = useState(true);
  const [sizeDisabled, setSizeDisabled] = useState(true);
  const [sizeNumberDisabled, setSizeNumberDisabled] = useState(true);
  const [weightDisabled, setWeightDisabled] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  const errors = useSelector((state) => state.errors);
  const categories = useSelector((state) => state.categories);

  const colors = [
    <option>2016</option>,
    <option>2017</option>,
    <option>2018</option>,
    <option>2019</option>,
    <option>2020</option>,
    <option>2021</option>,
    <option>2022</option>,
  ];
  return (
    <div className=" w-full pt-0 mt-16">
      <FormHeader title="Product Added" />
      <form action="">
        <div className={`${sideBar === true ? "4lg:flex" : "6md:flex"}`}>
          <div
            className={`${
              sideBar === true ? "4lg:w-6/12 w-full" : "6md:w-6/12 w-full"
            } pt-3`}
          >
            <div className="p-5 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
              <div className="mb-5">
                <Input
                  type="text"
                  inputRef={name}
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Product name"
                  error={errors.name}
                />
              </div>
              <div className="mb-5">
                <Input
                  type="text"
                  inputRef={name}
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Product title"
                  error={errors.title}
                />
              </div>
              <div className="mb-5">
                <Input
                  type="text"
                  inputRef={name}
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Price"
                  error={errors.price}
                />
              </div>
              <div className="mb-5">
                <Input
                  type="text"
                  inputRef={name}
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Discount price"
                  error={errors.discount_price}
                />
              </div>
              <div className="mb-5">
                <Input
                  type="text"
                  inputRef={name}
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Perchese quantity"
                  error={errors.perchese_quantity}
                />
              </div>
              <div className="mb-5">
                <Input
                  type="text"
                  inputRef={name}
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Available quantity"
                  error={errors.available_quantity}
                />
              </div>
              <div className="mb-5">
                <ImageInputFile
                  title=" and choose file"
                  format="PNG, JPG or GIF"
                  maxSize="20MB"
                  imageUrl={ImageUrl}
                  imgClassName="h-full"
                  onClick={() => setOpenCreateModal(true)}
                  inputValue={ImageUrl}
                  removeFile={removeFile}
                  inputRef={image_url}
                  height={52}
                />
                {errors.image_url && (
                  <small className="text-red-500 px-3">
                    {errors.image_url}
                  </small>
                )}
              </div>
              <div className="mb-5">
                <label htmlFor="refundable">Refundable</label>
                <InputRadio
                  label="Yes"
                  defaultValue="yes"
                  idWithDetectLabel="yes"
                  defaultChecked={true}
                  inputRef={name}
                />
                <InputRadio
                  label="No"
                  defaultValue="no"
                  idWithDetectLabel="no"
                  inputRef={name}
                />
                {errors.refundable && (
                  <small className="text-red-500 px-3">
                    {errors.refundable}
                  </small>
                )}
              </div>
              <div className=" flex items-center mb-5">
                <Select
                  disabled={collectionDisabled}
                  inputRef={category_id}
                  className={`px-5 ${
                    collectionDisabled === true ? "bg-gray-300" : "bg-gray-50"
                  } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                >
                  <option value="">Choose collection</option>
                  {categories.length > 0 &&
                    categories.map((category, index) => (
                      <option key={index + 1} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </Select>
                <ToogleCheckBox
                  onChange={() => setCollectionDisabled(!collectionDisabled)}
                  defaultChecked={true}
                />
              </div>
              <div className=" flex items-center mb-5">
                <Select
                  disabled={brandDisabled}
                  inputRef={category_id}
                  className={`px-5 ${
                    brandDisabled === true ? "bg-gray-300" : "bg-gray-50"
                  } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                >
                  <option value="">Choose brand</option>
                  {categories.length > 0 &&
                    categories.map((category, index) => (
                      <option key={index + 1} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </Select>
                <ToogleCheckBox
                  onChange={() => setBrandDisabled(!brandDisabled)}
                  defaultChecked={true}
                />
              </div>
              <div className="flex items-center mb-5">
                <Select
                  disabled={categoryDisabled}
                  inputRef={category_id}
                  className={`px-5 ${
                    categoryDisabled === true ? "bg-gray-300" : "bg-gray-50"
                  } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                >
                  <option value="">Choose category</option>
                  {categories.length > 0 &&
                    categories.map((category, index) => (
                      <option key={index + 1} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </Select>

                <ToogleCheckBox
                  onChange={() => setCategoryDisabled(!categoryDisabled)}
                  defaultChecked={true}
                />
              </div>
              <div className="flex items-center">
                <Select
                  disabled={subCategoryDisabled}
                  inputRef={category_id}
                  className={`px-5 ${
                    subCategoryDisabled === true ? "bg-gray-300" : "bg-gray-50"
                  } border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                >
                  <option value="">Choose sub category</option>
                  {categories.length > 0 &&
                    categories.map((category, index) => (
                      <option key={index + 1} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </Select>
                <ToogleCheckBox
                  onChange={() => setSubCategoryDisabled(!subCategoryDisabled)}
                  defaultChecked={true}
                />
              </div>
            </div>

            <div className="my-3 p-5 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
              <textarea
                rows={15}
                placeholder="write meta description..."
                className=" w-full rounded-lg border border-gray-300 bg-gray-50"
              ></textarea>
            </div>
          </div>
          <div
            className={`${
              sideBar === true
                ? "4lg:w-6/12 w-full 4lg:ps-3"
                : "6md:w-6/12 6md:ps-3 w-full"
            } pt-3`}
          >
            <div className="p-5 mb-3 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
              <MultipleSelect
                disabled={colorDisabled}
                label="Select colors"
                size={5}
                items={colors}
                defaultChecked
                detectOptionWithlabel="years"
                onChangeToogleCheck={() => setColorDisabled(!colorDisabled)}
              />
            </div>
            <div className="p-5 mb-3 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
              <MultipleSelect
                disabled={sizeDisabled}
                label="Select Size"
                size={5}
                items={colors}
                defaultChecked
                detectOptionWithlabel="years"
                onChangeToogleCheck={() => setSizeDisabled(!sizeDisabled)}
              />
            </div>
            <div className="p-5 mb-3 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
              <MultipleSelect
                disabled={sizeNumberDisabled}
                label="Select Size Number"
                size={5}
                items={colors}
                defaultChecked
                detectOptionWithlabel="years"
                onChangeToogleCheck={() =>
                  setSizeNumberDisabled(!sizeNumberDisabled)
                }
              />
            </div>
            <div className="p-5 mb-3 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
              <MultipleSelect
                disabled={weightDisabled}
                label="Select Weight"
                size={5}
                items={colors}
                defaultChecked
                detectOptionWithlabel="years"
                onChangeToogleCheck={() => setWeightDisabled(!weightDisabled)}
              />
            </div>
            <div className="p-5 mb-3 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
              <div className="mb-5">
                <Input
                  type="text"
                  inputRef={name}
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Meta tag"
                  error={errors.name}
                />
              </div>
              <div className="mb-5">
                <Input
                  type="text"
                  inputRef={name}
                  className="px-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Meta title"
                  error={errors.name}
                />
              </div>
              <div className="mb-5">
                <textarea
                  rows={10}
                  placeholder="write meta description..."
                  className=" w-full rounded-lg border border-gray-300 bg-gray-50"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3 p-5 bg-gray-50 dark:bg-gray-800 shadow-sm border dark:border-gray-900 rounded-lg">
          <TextEditor placeholder="write specification..." />
        </div>
        <div className=" flex justify-end items-center">
          <button
            type="button"
            onClick={() => addGallery()}
            className="text-md font-semibold text-white bg-green-300 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
            value="publish"
          >
            Publish & Save
          </button>
          <button
            type="button"
            onClick={() => addGallery()}
            className="ms-3 text-md font-semibold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase"
            value="unpublish"
          >
            Unpublish & Save
          </button>
        </div>
      </form>
    </div>
  );
}
