import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignIn from "./pages/auth/SignIn";
import Layout from "./Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Categories from "./pages/category/Categories";
import CategoryCreate from "./pages/category/category_create/CategoryCreate";
import Gallery from "./pages/gallery/Gallery";
import GalleryCategory from "./pages/gallery/gallery_category/GalleryCategory";
import GalleryTrustBin from "./pages/gallery/gallery_trust_bin/GalleryTrustBin";
import Brand from "./pages/brand/Brand";
import BrandCreate from "./pages/brand/brand_create/BrandCreate";
import BrandEdit from "./pages/brand/brand_edit/BrandEdit";
import Category from "./pages/category/Category";
import CategoryEdit from "./pages/category/category_edit/CategoryEdit";
import SubCategory from "./pages/sub_category/SubCategory";
import SubCategoryCreate from "./pages/sub_category/sub_category_create/SubCategoryCreate";
import SubCategoryEdit from "./pages/sub_category/sub_category_edit/SubCategoryEdit";
import Color from "./pages/colors/Color";
import ColorCreate from "./pages/colors/color_create/ColorCreate";
import ColorEdit from "./pages/colors/color_edit/ColorEdit";
import Size from "./pages/size/Size";
import SizeCreate from "./pages/size/size_create/SizeCreate";
import SizeEdit from "./pages/size/size_edit/SizeEdit";
import SizeNumber from "./pages/size_number/SizeNumber";
import SizeNumberCreate from "./pages/size_number/size_number_create/SizeNumberCreate";
import SizeNumberEdit from "./pages/size_number/size_number_edit/SizeNumberEdit";
import Weight from "./pages/weight/Weight";
import WeightCreate from "./pages/weight/weight_create/WeightCreate";
import WeightEdit from "./pages/weight/weight_edit/WeightEdit";
import Product from "./pages/product/Product";
import ProductCreate from "./pages/product/product_create/ProductCreate";

const routes = [
  // {
  //   path: "/",
  //   element: <App />,
  // },
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/brands",
        element: <Brand />,
      },
      {
        path: "/brand-create",
        element: <BrandCreate />,
      },
      {
        path: "/brand-edit/:id",
        element: <BrandEdit />,
      },
      {
        path: "/categories",
        element: <Category />,
      },
      {
        path: "/category-create",
        element: <CategoryCreate />,
      },
      {
        path: "/category-edit/:id",
        element: <CategoryEdit />,
      },
      {
        path: "/sub-categories",
        element: <SubCategory />,
      },
      {
        path: "/sub-category-create",
        element: <SubCategoryCreate />,
      },
      {
        path: "/sub-category-edit/:id",
        element: <SubCategoryEdit />,
      },
      {
        path: "/colors",
        element: <Color />,
      },
      {
        path: "/color-create",
        element: <ColorCreate />,
      },
      {
        path: "/color-edit/:id",
        element: <ColorEdit />,
      },
      {
        path: "/sizes",
        element: <Size />,
      },
      {
        path: "/size-create",
        element: <SizeCreate />,
      },
      {
        path: "/size-edit/:id",
        element: <SizeEdit />,
      },
      {
        path: "/size-numbers",
        element: <SizeNumber />,
      },
      {
        path: "/size-number-create",
        element: <SizeNumberCreate />,
      },
      {
        path: "/size-number-edit/:id",
        element: <SizeNumberEdit />,
      },
      {
        path: "/weights",
        element: <Weight />,
      },
      {
        path: "/weight-create",
        element: <WeightCreate />,
      },
      {
        path: "/weight-edit/:id",
        element: <WeightEdit />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/product-create",
        element: <ProductCreate />,
      },
      {
        path: "/gallery-category",
        element: <GalleryCategory />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/gallery-trust-bin",
        element: <GalleryTrustBin />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
export default router;
