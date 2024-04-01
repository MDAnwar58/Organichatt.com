import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoListOutline } from "react-icons/io5";
import { LineOutlined } from "@ant-design/icons";
import { IoHome } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { BiSolidOffer } from "react-icons/bi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { GrFormView } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoOptionsOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

const ShoppingCartIcon = ({ className }: { className?: string }) => {
  return <HiOutlineShoppingCart className={className} />;
};
const FavoriteIcon = ({ className }: { className?: string }) => {
  return <MdFavoriteBorder className={className} />;
};
const SearchIcon = ({ className }: { className?: string }) => {
  return <IoSearch className={className} />;
};
const ThreeLineManuIcon = ({ className }: { className?: string }) => {
  return <IoListOutline className={className} />;
};
const SingleLineManuIcon = ({ className }: { className?: string }) => {
  return <LineOutlined className={className} />;
};
const HomeIcon = ({ className }: { className?: string }) => {
  return <IoHome className={className} />;
};
const LayoutGrid = ({ className }: { className?: string }) => {
  return <LuLayoutGrid className={className} />;
};
const OfferIcon = ({ className }: { className?: string }) => {
  return <BiSolidOffer className={className} />;
};

const ShoppingBagIcon = ({ className }: { className?: string }) => {
  return <LiaShoppingBagSolid className={className} />;
};
const ViewfinderIcon = ({ className }: { className?: string }) => {
  return <HiOutlineViewfinderCircle className={className} />;
};
const RxCrossIcon = ({ className }: { className?: string }) => {
  return <RxCross1 className={className} />;
};
const GrFormViewIcon = ({ className }: { className?: string }) => {
  return <GrFormView className={className} />;
};
const ArrowBackIcon = ({ className }: { className?: string }) => {
  return <IoIosArrowBack className={className} />;
};
const ArrowForwardIcon = ({ className }: { className?: string }) => {
  return <IoIosArrowForward className={className} />;
};
const OptionsOutlineIcon = ({ className }: { className?: string }) => {
  return <IoOptionsOutline className={className} />;
};
const PlusIcon = ({ className }: { className?: string }) => {
  return <GoPlus className={className} />;
};
const MinusIcon = ({ className }: { className?: string }) => {
  return <FiMinus className={className} />;
};

export {
  ShoppingCartIcon,
  FavoriteIcon,
  SearchIcon,
  ThreeLineManuIcon,
  SingleLineManuIcon,
  HomeIcon,
  LayoutGrid,
  OfferIcon,
  ShoppingBagIcon,
  ViewfinderIcon,
  RxCrossIcon,
  GrFormViewIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
  OptionsOutlineIcon,
  PlusIcon,
  MinusIcon,
};
