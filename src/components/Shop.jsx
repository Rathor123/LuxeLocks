import React from "react";
import ShopImg from "./ShopImg";
function Shop({ product }) {
  return (
    <div className="flex my-10 items-center justify-around w-full max-sm:overflow-scroll max-sm:my-4">
      {product.map((img, index) => (
        <ShopImg img={img} key={index} />
      ))}
    </div>
  );
}

export default Shop;
