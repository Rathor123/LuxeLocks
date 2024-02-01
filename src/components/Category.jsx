import React, { useState } from "react";

function Category({ product }) {
  const [hover, setHover] = useState(false);

  return (
    <li
      key={product.key}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`cursor-pointer hover:w-40 w-40 transition-all duration-100 ease-in-out   ${
        hover ? "bg-white text-black" : "bg-black "
      }`}
    >
      {product.tile}
      <ul
        className={`flex flex-col bg-white ${
          hover ? "block" : "hidden"
        } text-black my-2 z-10  w-full`}
      >
        {product.allproducts.map((pro, index) => {
          return (
            <li
              key={index}
              className="block font-normaltext-14 z-10 px-5 py-1 bg-white"
            >
              {pro}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default Category;
