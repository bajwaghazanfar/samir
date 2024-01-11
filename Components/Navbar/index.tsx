"use client";

import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import logo from "../../public/logo.png";
export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-auto pt-5 pb-5 pr-5 bg-transparent">
      <div className="w-5/5 h-auto  items-center justify-between hidden lg:flex">
        <div className="w-full   flex items-center justify-start lg:pl-10">
          <img src="/logo.png" />
        </div>
        <div className="w-full h-auto flex items-center justify-end">
          <li className="list-none">
            <p className="text-white border-solid border-2 border-black rounded-full p-2 cursor-pointer">
              <Hamburger size={30} color="black" />
            </p>
          </li>
        </div>
      </div>
      <div className="w-full h-auto flex items-center justify-between p-2 lg:hidden">
        <img src="/logo.png" className="w-[200px]" />
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Hamburger size={30} color="white" />
        </button>
      </div>
      <div
        className={`w-full h-screen absolute z-10 ${
          open ? "flex" : "hidden"
        } flex-col bg-black  lg:hidden `}
      >
        <div className="w-full h-full flex flex-col justify-evenly items-end p-5">
          <li className="list-none">
            <h3 className="text-white text-2xl">Home</h3>
          </li>
          <li className="list-none">
            <h3 className="text-white text-2xl">About Us</h3>
          </li>
          <li className="list-none">
            <h3 className="text-white text-2xl">Products</h3>
          </li>
          <li className="list-none">
            <h3 className="text-white text-2xl">Contact Us</h3>
          </li>
        </div>
      </div>
    </div>
  );
};
