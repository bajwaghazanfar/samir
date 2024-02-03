"use client";

import { useState } from "react";

import DottedButton from "../Button/Button";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="navbar bg-base-100 w-full xl:pr-[50px] xl:pl-[50px]">
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
              <a href="/">Home</a>
            </li>
            <li>
              <a>Case Studies</a>
              <ul className="p-2">
                <li>
                  <a href="/work">All case studies</a>
                </li>
                <li>
                  <a href="/casestudy/sportband">Active core</a>
                </li>
              </ul>
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
        <DottedButton
          animation={false}
          inViewportView={false}
          id="#ContactForm"
        >
          <p className="w-auto flex gap-2 ">
            Book a call
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        </DottedButton>
      </div>
    </div>
  );
};
