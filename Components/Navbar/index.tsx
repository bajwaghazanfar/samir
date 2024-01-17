"use client";

import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import logo from "../../public/logo.png";
import { motion, AnimatePresence } from "framer-motion";
export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-auto pt-5 pb-5 pr-5 bg-transparent">
      <div className="w-full h-auto flex items-center justify-between p-5 relative z-50 ">
        <img src="/logo.png" className="w-[200px]" />
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Hamburger size={30} color={`${open ? "white" : "black"}`} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ height: "0px" }}
              animate={{ height: "100vh" }}
              exit={{ height: "0px" }}
              transition={{ ease: "easeInOut", duration: 0.7 }}
              className={`fixed top-0 left-0 w-full h-screen bg-white text-white  z-20`}
            ></motion.div>
            <motion.div
              initial={{ height: "0px", display: "hidden" }}
              animate={{ height: "100vh", display: "flex" }}
              exit={{ height: "0px" }}
              transition={{ ease: "easeInOut", duration: 0.7, delay: 0.2 }}
              className="fixed top-0 left-0 w-full h-screen bg-black text-white z-30"
            >
              <div className="w-full h-full flex flex-col p-10 justify-evenly">
                <div className="w-full h-auto py-5 flex justify-end">
                  <h2 className="text-white  font-extrabold text-4xl cursor-pointer">
                    Home
                  </h2>
                </div>

                <div className="w-full h-auto py-5 flex justify-end">
                  <h2 className="text-white font-extrabold text-4xl cursor-pointer">
                    About
                  </h2>
                </div>

                <div className="w-full h-auto py-5 flex justify-end">
                  <h2 className="text-white  font-extrabold text-4xl cursor-pointer">
                    Projects
                  </h2>
                </div>

                <div className="w-full h-auto py-5 flex justify-end">
                  <h2 className="text-white  font-extrabold text-4xl cursor-pointer">
                    Contact Us
                  </h2>
                </div>

                <div className="w-full h-auto py-5 flex justify-end">
                  <h2 className="text-white  font-extrabold text-4xl cursor-pointer">
                    Services We Offer
                  </h2>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
