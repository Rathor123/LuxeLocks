import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import icons, { iconStyle } from "../assets/icons/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel({ category }) {
  const [CategoryProducts, allCategoryProducts] = useState(null);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((responce) => allCategoryProducts(responce.data.products))
      .catch((error) => console.log(error));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="">
      <div className="flex w-full relative">
        <icons.leftArrow
          className={`absolute text-[30px] cursor-pointer text-black left-7 top-52 z-10`}
        />
        <icons.rightArrow
          className={`absolute text-[30px] text-black cursor-pointer right-7 top-52 z-10`}
        />
        {/* <Slider {...settings}> */}
        <div className="flex items-center gap-5 flex-wrap justify-center">
          {CategoryProducts &&
            CategoryProducts.slice(0, 4).map((value) => {
              return <ProductCard value={value} key={value.id} />;
            })}
          {/* </Slider> */}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
