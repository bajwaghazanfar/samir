"use client";
import Image from "next/image";
import DottedButton from "../../../Components/Button/Button";
import { Navbar } from "../../../Components/Navbar";

import Footer from "../../../Components/Footer/Footer";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <>
      <main className=" w-full h-auto lg:pl-[50px] lg:pr-[50px]">
        <Navbar />
        <div className="w-full h-full flex flex-col lg:py-10">
          <div className="w-full  flex flex-col items-center justify-start  lg:w-full lg:flex-row lg:gap-8">
            <div className="w-full h-full lg:w-1/2 lg:h-full flex-col flex justify-evenly gap-6">
              <h1 className="text-5xl text-center  font-semibold tracking-normal dark:text-white  lg:text-[60px] xl:text-[80px] 2xl:text-[130px] 3xl:text-[180px]  lg:text-left  ">
                Transforming businesses one video at a time
              </h1>
              <div className="w-full flex items-center flex-col justify-center h-full gap-10 lg:w-4/5 lg:items-start  lg:justify-start ">
                <div className="w-4/5 flex flex-col justify-between h-full ga-">
                  <p className=" lg:text-lg text-gray-500 tracking-normal text-center  text-sm lg:text-left dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
                <DottedButton>
                  <p className="flex w-auto text-black gap-5">
                    View Case Studies
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
            <div className=" h-[80vh] hidden lg:block lg:flex- gap-5 lg:w-1/2 lg:gap-2  relative">
              <div className="w-full   h-full flex justify-center items-center ">
                <div className="carousel carousel-center w-full h-full bg-neutral rounded-box p-5 gap-5">
                  <div className="carousel-item">
                    <img src="/p4.jpg" className="rounded-box" />
                  </div>
                  <div className="carousel-item">
                    <img src="/p4.jpg" className="rounded-box" />
                  </div>
                  <div className="carousel-item">
                    <img src="/p4.jpg" className="rounded-box" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center flex-col p-5 pt-10 lg:p-0 lg:py-10 gap-10">
          <div className="w-full h-full flex flex-col gap-5 lg:flex-row lg:justify-start lg:items-start">
            <div className="w-full h-full flex flex-col justify-center  items-center gap-5 lg:flex-row lg:w-1/2 lg:justify-start lg:items-start">
              <h1 className="text-3xl  font-semibold lg:text-3xl lg:w-full   text-black">
                Weve developed
                <span className="ml-2 mr-2 underline underline-offset-3 decoration-8 decoration-violet-200">
                  specific use cases
                </span>
                where our approach and expertise truly helps businesses to
                <span className=" ml-2 mr-2 underline underline-offset-3 decoration-8 decoration-violet-200">
                  excel
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center flex-wrap p-5 pt-10 lg:p-0 lg:py-10 gap-10">
          <div className="w-full h-auto flex flex-col lg:flex-row lg:flex-wrap   justify-around items-start">
            {/* Case Studies */}
            <a href="/casestudy/sportband">
              <motion.div
                className="w-full h-auto  flex-col lg:w-[600px]  flex gap-5 cursor-pointer lg:py-5"
                whileHover={{ scale: 0.9 }}
              >
                <Image
                  src="/p7.jpg"
                  alt="Image"
                  width={0}
                  height={0}
                  layout="responsive"
                  className="w-full h-auto"
                />
                <div className="w-full h-auto flex flex-col gap-6">
                  <h1 className="text-3xl font-extrabold ">
                    E-commerce Trailblazer: Active Cores Success Unleashes
                    Six-Figure Triumph
                  </h1>
                  <p className="text-lg font-normal text-black">
                    Delving into the realms of e-commerce, Active Core emerged
                    as a powerhouse brand, orchestrating a remarkable success
                    story that unfolded into a substantial six-figure revenue.
                    Pioneering innovative strategies and customer-centric
                    approaches, Active Core not only carved a niche in the
                    competitive market but also reshaped the landscape of online
                    retail.
                  </p>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Work;
