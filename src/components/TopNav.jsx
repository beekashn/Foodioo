import React, { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckDelivery, TbHelp } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { motion } from "framer-motion";

const logoVariant = {
  initial: { y: "-10vh" },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring", // Use a spring animation for a bouncy effect
      stiffness: 100, // Adjust stiffness for the desired bounciness
    },
  },
};

const TopNav = ({ searchQuery, handleSearchInput, handleSearch }) => {
  const [sideNav, setSideNav] = useState(false);
  const handleSearchButtonClick = () => {
    handleSearch();
    handleSearchInput("");
  };

  return (
    <div className="max-w-[1520px] sticky top-0 z-[99999] p-3 mx-auto flex justify-between items-center bg-[#f4f4f4] shadow-xl">
      <div className="flex items-center justify-center space-x-4">
        <div className="cursor-pointer" onClick={() => setSideNav(!sideNav)}>
          <AiOutlineMenuFold
            className="transition-all duration-300 hover:scale-110 hover:text-orange-600 active:scale-90 hover:rotate-180"
            size={25}
          />
        </div>
        <a href="/">
          <motion.h1
            variants={logoVariant}
            initial="initial"
            animate="animate"
            className="textShadowSmall font-bold cursor-pointer px-2 text-xl md:text-2xl lg:text-3xl"
          >
            F
            <span className="text-[#ff4646] font-medium text-2xl hover:text-[#5245ff]">
              oo
            </span>
            di
            <span className="text-[#5245ff] font-medium text-2xl hover:text-[#ff4646]">
              oo
            </span>
          </motion.h1>
        </a>
        <div className="hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full px-3 py-2 text-bold">
            Free
          </p>
          <p className="p-2 font-bold">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-300 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[300px]">
        <input
          value={searchQuery}
          onChange={(event) => handleSearchInput(event.target.value)}
          type="text"
          placeholder="Search for Food...."
          className="bg-transparent w-full px-2 py-1 outline-none"
        />
        <button
          onClick={handleSearchButtonClick}
          className=" p-2 border-none hover:text-orange-600 hover:scale-110 active:scale-90 duration-300"
        >
          <a href="#meal">
            <AiOutlineSearch size={20} />
          </a>
        </button>
      </div>
      <button className="bg-orange-700 text-white font-semibold hidden md:flex items-center py-2 border-none rounded-full">
        <BsFillCartFill />
        <span className="px-1">Cart</span>
      </button>
      {sideNav ? (
        <div
          onClick={() => setSideNav(!sideNav)}
          className="w-full h-screen bg-black/60 fixed top-0 left-0 z-10"
        ></div>
      ) : (
        ""
      )}
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 transition-all duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 transition-all duration-300"
        }
      >
        <AiOutlineClose
          className="absolute top-4 right-4 cursor-pointer transition-all duration-300 hover:scale-110 hover:text-orange-600 active:scale-90 hover:rotate-180"
          onClick={() => setSideNav(!sideNav)}
          size={20}
        />
        <div className="px-4 py-2">
          <h1 className="textShadowSmall font-bold cursor-pointer px-2 text-xl md:text-2xl lg:text-3xl">
            F
            <span className="text-[#ff4646] font-medium text-2xl hover:text-[#5245ff]">
              oo
            </span>
            di
            <span className="text-[#5245ff] font-medium text-2xl hover:text-[#ff4646]">
              oo
            </span>
          </h1>
        </div>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex items-center">
              <BsPerson className="mr-4 text-white bg-orange-600 rounded-full" />
              <span className="hover:bg-blue-700 hover:px-4 hover:text-white rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                My Account
              </span>
            </li>
            <li className="text-xl py-4 flex items-center">
              <TbTruckDelivery className="mr-4 text-white bg-orange-600 rounded-full" />
              <span className="hover:bg-blue-700 hover:px-4 hover:text-white rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                Delivery
              </span>
            </li>
            <li className="text-xl py-4 flex items-center">
              <MdFavoriteBorder className="mr-4 text-white bg-orange-600 rounded-full" />
              <span className="hover:bg-blue-700 hover:px-4 hover:text-white rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                Favourite
              </span>
            </li>
            <li className="text-xl py-4 flex items-center">
              <FaGoogleWallet className="mr-4 text-white bg-orange-600 rounded-full" />
              <span className="hover:bg-blue-700 hover:px-4 hover:text-white rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                My Wallet
              </span>
            </li>
            <li className="text-xl py-4 flex items-center">
              <TbHelp className="mr-4 text-white bg-orange-600 rounded-full" />
              <span className="hover:bg-blue-700 hover:px-4 hover:text-white rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                Help
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
