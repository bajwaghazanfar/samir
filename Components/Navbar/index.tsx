"use client";

import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import logo from "../../public/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Merriweather } from "next/font/google";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="navbar bg-base-100 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className=" w-fit" href="/">
          <img src="/logo.png" className="w-[180px]" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 relative z-[100]">
          <li>
            <details>
              <summary>Case Studies</summary>
              <ul className="p-2">
                <li>
                  <a href="/work">All case studies</a>
                </li>
                <li>
                  <a href="/casestudy/sportband">ActiveCore</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-violet-200 ">Book a Call</a>
      </div>
    </div>
  );
};
