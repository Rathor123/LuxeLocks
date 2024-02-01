import reducer from "../reducer/reducer";
import { Link } from "react-router-dom";
import icons from "../assets/icons/icons";
import { useContext, useReducer, useState } from "react";
import { MyContext } from "../context/MyContext";

function ProductCard({ value }) {
  const user = useContext(MyContext);
  const [cartproduct, setcartproduct] = useState([]);

  const AddedProduct = (val) => {
    user.dispatch({ type: "ADDTOCARD" });
    setcartproduct();
    console.log(cartproduct);
  };

  return (
    <>
      <div className="flex items-center flex-col p-5 my-10 border-2 border-gray-400">
        <Link
          to={"ProductDetailPage"}
          state={{ from: value }}
          className=" felx items-center justify-center"
        >
          <div className="relative">
            <img
              src={value.thumbnail}
              className="h-[252px] w-[250px] max-sm:h-[100px] max-sm:w-[100px]"
              alt="product image"
            />
            <p className="absolute bottom-2 text-[10px] bg-black text-white p-1 rounded right-0 opacity-80 max-sm:hidden">
              {value.discountPercentage}&nbsp;%
            </p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-bold h-8 my-2 max-sm:text-[15px]">
              {value.title.slice(0, 10)}
            </p>
            <p className="text-gray-800 max-sm:text-[13px]">
              {value.description.slice(0, 25)}..
            </p>
            <div className="flex my-1 items-center gap-2">
              <span className="text-[12px] flex items-center flex-row gap-2 rounded p-1 bg-green-500 text-white">
                {<icons.filledStar className="text-white" />}
                {value.rating}
              </span>
              <span className="text-[10px] gap-1 items-center flex">
                {
                  <icons.check className="text-cyan-600 text-[12px] bg-white  rounded" />
                }
                {`
            ${value.stock}
             Verified Reviews`}
              </span>
            </div>
            <div className="flex gap-5 text-[18px] max-sm:text-[13px]">
              <div className="line-through ">{`₹${value.price}`}</div>
              <div className="font-bold">{`₹${value.price}`}</div>
            </div>
          </div>
        </Link>
        <button
          className="bg-black text-white font-bold w-full p-2 text-[20px] rounded max-sm:text-[10px]"
          onClick={() => AddedProduct(value)}
        >
          ADD TO Card
        </button>
      </div>
    </>
  );
}

export default ProductCard;
