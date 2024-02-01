import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import icons from "../assets/icons/icons";
import { offercode } from "../assets/offers";
import Questions from "./Questions";
import Carousel from "./Carousel";
import { categories } from "../assets/offers";
import CustomerReview from "./CustomerReview";
function ProductDetailPage() {
  const location = useLocation();
  const { from } = location.state;
  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    title,
    thumbnail,
    stock,
  } = from;
  const [img, setImg] = useState(thumbnail);
  const [currentImgStyle, setCurrentStyle] = useState(null);
  const [sty, setsty] = useState(null);
  const handleImg = (image, index) => {
    setImg(image);
    setCurrentStyle(index);
    setsty("bg-black w-10");
  };
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied to clipboard:", text);
    } catch (error) {
      alert("Error copying to clipboard:", error);
    }
  };
  const [imgindex, setImgIndex] = useState(0);
  useEffect(() => {
    const imgechange = setInterval(() => {
      const change = imgindex == images.length - 1 ? 0 : imgindex + 1;
      setImgIndex(change);
    }, 2000);
    return () => clearInterval(imgechange);
  }, [imgindex]);
  return (
    <div>
      <div className="flex flex-row my-16 justify-between mx-20 max-sm:flex-col max-sm:mx-9">
        <div className=" flex gap-2">
          <div className="flex gap-2 flex-col">
            {images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  className={`${
                    currentImgStyle === index ? "border-2 border-black" : null
                  } w-16 h-14 inline-block max-sm:h-10 max-sm:w-10[] max-sm:mx-[5px]`}
                  onClick={() => handleImg(image, index)}
                />
              );
            })}
          </div>
          <div>
            <img
              src={img}
              className="w-[400px] h-[400px] max-sm:w-[200px] max-sm:h-[250px]"
              alt=""
            />
          </div>
        </div>
        <div className="details flex flex-col  w-1/2  max-sm:w-full">
          <p className="text-2xl max-sm:text-[15px]">{title}</p>
          <div className="flex flex-row items-center my-3 gap-1">
            {<icons.filledStar className="text-yellow-600" />}
            {<icons.filledStar className="text-yellow-600" />}
            {<icons.filledStar className="text-yellow-600" />}
            <p className="font-bold max-sm:text-[12px]">{rating}</p>
            <p className="underline max-sm:text-[13px]">{stock}Reviews</p>
          </div>
          <div className="flex items-end gap-2 my-5 ">
            <p className="line-through text-[25px] font-medium max-sm:text-[18px]">
              ₹{price}.00{" "}
            </p>
            <p className="text-[25px] font-medium  max-sm:text-[18px]">
              ₹
              {price -
                Math.round((price * Math.round(discountPercentage)) / 100)}
              .00
            </p>
            <p className="text-red-500 font-bold text-[12px] max-sm:text-[10px]">
              Save {Math.round(discountPercentage)}%{" "}
              <span className="text-black">incl. of all taxes</span>
            </p>
          </div>
          <button className="bg-black text-white py-3 w-full font-semibold">
            ADD TO CARD{" "}
          </button>
          <div className="flex flex-col ">
            <h3 className="text-[17px] font-medium my-3 max-sm:text-[15px]">
              Available Offers
            </h3>
            {offercode.map((offers, index) => {
              return (
                <div key={index} className="flex justify-between my-3">
                  <p className="text-[13px] max-sm:text-[10px]">
                    {offers.name}
                  </p>
                  <p className="border-[1px] p-1 border-dashed border-black text-[10px] max-sm:text-[8px]">
                    {offers.offercode}
                  </p>
                  <p
                    onClick={() => copyToClipboard(offers.offercode)}
                    className="uppercase text-gray-400 font-medium cursor-pointer max-sm:text-[8px]"
                  >
                    {offers.copy}
                  </p>
                </div>
              );
            })}
          </div>
          <h3 className="text-[17px] font-medium my-3 max-sm:text-[14px]">
            Description
          </h3>
          <p className="text-[13px] max-sm:text-[8px]">{description}</p>
        </div>
      </div>

      <div className="flex items-center w-full my-14 h-[50%]  overflow-hidden  max-sm:flex-col">
        <div className="bg-black p-16  text-white w-[50%] max-sm:w-full max-sm:p-[10px]">
          <h2 className="text-[35px] my-5 max-sm:text-[18px]">
            See This Also{" "}
          </h2>
          <p className="text-[22px] text-justify max-sm:text-[12px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            voluptatem reiciendis quam necessitatibus explicabo labore,
            inventore expedita error ea obcaecati? Placeat cum eaque aliquam
            dolore?
          </p>
        </div>
        <div className="bg-gray-100 w-[60%] ">
          <img
            src={images[imgindex]}
            className="h-[390px] w-[750px] max-sm:h-[220px] max-sm:w-[220px]"
            alt="imge"
          />
        </div>
      </div>
      <div>
        <Questions
          question={"Full Tech Details"}
          answer={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipiscivoluptatem reiciendis quam necessitatibus explicabo labore, inventore expedita error ea obcaecati? "
          }
        />
        <Questions
          question={"Clinical Study Report"}
          answer={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipiscivoluptatem reiciendis quam necessitatibus explicabo labore, inventore expedita error ea obcaecati? "
          }
        />
      </div>
      <div className="flex justify-center w-full">
        {<Carousel category={category} />}
      </div>
      <CustomerReview />
    </div>
  );
}

export default ProductDetailPage;
