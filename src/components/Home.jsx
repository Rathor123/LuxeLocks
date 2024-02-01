import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import banner from "../assets/banner.webp";
import Carousel from "./Carousel";
import Shop from "./Shop";
import { skinProduct } from "../assets/offers";
import { hairHurdles } from "../assets/offers";
import { Ingredients } from "../assets/offers";
import { categories } from "../assets/offers";
function Home({ searchedProdeuct }) {
  const [store, setStore] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=${searchedProdeuct}&skip=5`)
      .then((responce) => setStore(responce.data.products))
      .catch((error) => console.log(error));
  }, [searchedProdeuct]);

  if (searchedProdeuct) {
    return (
      <div className="flex justify-around  gap-10 my-8  flex-wrap relative  max-sm:gap-2 w-full bg-no-repeat">
        {store &&
          store.map((value) => {
            return <ProductCard key={value.id} value={value} />;
          })}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <img src={banner} alt="banner" />
      <div className="headingStyle max-sm:text-[12px]">⚡ Flash Deals ⚡</div>
      <Carousel category={categories[0]} />
      <div className="headingStyle max-sm:text-[12px]">
        Hot Picks & New Drops
      </div>
      <div className="flex gap-5">
        <button className="bg-black text-white rounded-3xl p-2 text-[20px] max-sm:text-[12px]">
          🤩 Trending 🤩
        </button>
        <button className=" rounded-3xl p-2 text-[20px] bg-gray-400 max-sm:text-[12px]">
          ✨ New Launches ✨
        </button>
      </div>
      <Carousel category={categories[1]} />
      <p className="headingStyle max-sm:text-[14px]">🔥 Best Sellers 🔥 </p>
      <Carousel category={categories[2]} />
      <p className="headingStyle max-sm:text-[14px]">Shop By Concern </p>
      <div className="">
        <h2 className="bg-black text-white  inline-block p-2 rounded-e-lg max-sm:text-[10px]">
          Skin Woes
        </h2>
        <Shop product={skinProduct} />
        <h2 className="bg-black text-white  inline-block p-2 rounded-e-lg max-sm:text-[10px]">
          Hair Hurdles
        </h2>
        <Shop product={hairHurdles} />
      </div>
      <p className="headingStyle max-sm:text-[12px]">watchs </p>
      <Carousel category={categories[3]} />
      <p className="headingStyle max-sm:text-[12px] ">Ingredients </p>

      <Shop product={Ingredients} />
    </div>
  );
}

export default Home;
