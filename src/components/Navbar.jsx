import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import icons from "../assets/icons/icons";
import { iconStyle } from "../assets/icons/icons";
import offer from "../assets/offers";
import { dropdownproducts } from "../assets/offers";
import Category from "./Category";
import { BrowserRouter, Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";
function Navbar({ searchedProdeuct, setsearchedProdeuct }) {
  const [index, setindex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = index >= offer.length - 1 ? 0 : index + 1;
      setindex(newIndex);
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);
  const addedproductcount = useContext(MyContext);

  const [isSideBar, setIsSideBar] = useState(false);
  const [dropDown, setdropDown] = useState(false);
  return (
    <>
      <div className="text-center font-bold max-sm:text-8px h-6">
        {offer[index]}
      </div>

      <nav className="w-full  bg-[#000] z-50 sticky top-0">
        <div className=" flex items-center h-24 justify-around max-sm:flex-col">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[150px] max-sm:w-[80px]" />
          </Link>
          <form className="flex items-center h-2/4 w-2/5  rounded max-sm:w-4/5 max-sm:h-6 border-gray-600 border-2">
            <input
              type="text"
              value={searchedProdeuct}
              onChange={(e) => setsearchedProdeuct(e.target.value)}
              className="text-white p-2 w-full bg-black outline-none max-sm:h-[12px]"
            />
            <button className="">
              <icons.search className={`${iconStyle} `} />
            </button>
          </form>
          <div className="flex">
            <div className="hidden float-start max-sm:block absolute left-5">
              <icons.hamburger
                className={`${iconStyle} cursor-pointer`}
                onClick={() => setIsSideBar(!isSideBar)}
              />
            </div>
            <div
              className={`${
                isSideBar ? "block" : "hidden"
              } z-10 bg-white w-full absolute left-0 lg:hidden`}
            >
              <button onClick={() => setIsSideBar(false)}>
                {<icons.email />}{" "}
              </button>
              <ul className="bg-black text-white w-full flex justify-around font-semibold z-10 flex-col ">
                {dropdownproducts.map((product, index) => {
                  return (
                    <li
                      key={product.key}
                      className={`cursor-pointer `}
                      onClick={() => setdropDown(!dropDown)}
                    >
                      {product.tile}
                      <ul
                        className={`flex flex-col bg-white text-black my-2 z-10  w-full`}
                      >
                        {product.allproducts.map((pro, index) => {
                          return (
                            <li
                              key={index}
                              className={`${
                                dropDown ? "block" : "hidden"
                              } block font-normaltext-14 z-10 px-5 py-1 bg-white`}
                            >
                              {pro}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex gap-5">
              <button className={iconStyle}>
                <icons.user className="" />
              </button>
              <button className="text-white text-[10px]">
                {addedproductcount.state > 0 ? addedproductcount.state : null}
                <icons.cart className={iconStyle} />
              </button>
            </div>
          </div>
        </div>
        <ul className="bg-black text-white h-7 w-full flex justify-around font-semibold max-sm:hidden">
          {dropdownproducts.map((product, index) => {
            return (
              <Category
                product={product}
                className="sm:none "
                key={product.key}
              />
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
