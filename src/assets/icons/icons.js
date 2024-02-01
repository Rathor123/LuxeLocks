import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const icons = {
  filledStar: FaStar,
  plainStar: CiStar,
  shoppingBag: RiShoppingBag2Line,
  leftArrow: IoIosArrowBack,
  rightArrow: IoIosArrowForward,
  check: FaCircleCheck,
  phone: CiPhone,
  email: MdOutlineEmail,
  instagram: FaInstagram,
  facebook: AiOutlineFacebook,
  search: CiSearch,
  user: IoPersonOutline,
  cart: LuShoppingCart,
  hamburger: RxHamburgerMenu,
  downarrow: IoIosArrowDown,
  uparrow: IoIosArrowUp,
};
export const iconStyle = "text-white font-bold text-[30px] max-sm:text-[20px]";
export default icons;
