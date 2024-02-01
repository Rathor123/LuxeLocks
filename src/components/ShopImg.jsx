import React from "react";

export default function ShopImg({ img }) {
  return (
    <img
      src={img}
      className="h-40 p-3 hover:translate-y-[-3px] transition-all sm:h-30 max-sm:h-24"
      alt={img}
    />
  );
}
