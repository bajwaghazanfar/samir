"use client";
import Image from "next/image";
import DottedButton from "../../../../Components/Button/Button";
import { Navbar } from "../../../../Components/Navbar";

import Footer from "../../../../Components/Footer/Footer";
import { motion } from "framer-motion";

const ActiveCore = () => {
  return (
    <>
      <main className=" w-full h-auto ">
        <div className=" w-full h-auto lg:pl-[50px] lg:pr-[50px]">
          {" "}
          <Navbar />
        </div>

        <div className="w-full h-full flex flex-col ">
          <div
            className="relative w-full h-screen bg-center bg-cover"
            style={{ backgroundImage: "url(/bg-city.jpg)" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0   bg-stone-900 opacity-50"></div>

            {/* Your content goes here */}
            <div className="absolute inset-0 flex items-center justify-center ">
              <div className="w-full h-[100%] flex flex-col items-center justify-evenly lg:w-[90%]">
                <div className="w-full h-auto flex-col justify-center items-center  flex gap-5 ">
                  <div className="w-auto h-auto flex gap-3 justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-white font-semibold text-sm underline">
                      2 minute read
                    </p>
                  </div>
                  <div className="w-full h-auto flex justify-center items-center">
                    <h4 className="text-white font-extrabold text-xl">
                      Featured Project
                    </h4>
                  </div>
                </div>
                <div className="w-full h-auto flex justify-center items-center gap-3 lg:w-3/4">
                  <h1 className="text-3xl text-center text-white   font-semibold   leading-snug tracking-normal dark:text-white  lg:text-[60px] xl:text-[60px] 2xl:text-[100px] 3xl:text-[180px]    ">
                    E-commerce Trailblazer: Active Cores Success Unleashes
                    Six-Figure Triumph
                  </h1>
                </div>
                <div className="w-full h-auto flex justify-center items-center gap-3 lg:w-2/4">
                  <p className="text-center text-white text-xl lg:text-xl">
                    T3 Collingwood, located at 36-52 Wellington Street,
                    Collingwood in Melbourne, is the citys tallest timber hybrid
                    office building and the first application of Hines T3
                    concept in Australia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-auto pl-[20px] pr-[20px] lg:pl-[50px] lg:pr-[50px] ">
          <div className="w-full h-auto flex flex-col justify-center items-center">
            <div className="w-full h-auto lg:w-1/2 pt-10">
              <p className="text-black text-lg font-light  tracking-wide">
                T3 Collingwood, located at 36-52 Wellington Street, Collingwood
                in Melbourne, is the citys tallest timber hybrid office building
                and the first application of Hines T3 concept in Australia.{" "}
                <br />
                <br />
                The building has 15 levels, with nine of these levels featuring
                a cross-laminated timber (CLT) structure. In comparison to
                conventional concrete and steel construction methods, CLT offers
                construction time efficiencies, is lighter in building weight,
                and reduces whole-of-life carbon emissions. <br />
                <br />
                Once operational, T3 Collingwood is targeting a 6 Star Green
                Star rating, a 5.5 Star NABERS energy performance rating, and
                net zero Climate Active certified operations. The project was
                delivered by a multidisciplinary AECOM team, providing
                Environmentally Sustainable Design services, as well as
                structural, civil, facades, mechanical, electrical, hydraulics,
                fire protection, acoustics, and audio-visual services.
              </p>
              {/* Subheading start */}
              <div className="w-full h-auto flex justify-center items-center flex-col  py-10 lg:p-0 lg:py-10">
                <div className="w-full h-full flex flex-col gap-5 lg:flex-row justify-start items-start">
                  <h1 className="text-3xl  underline underline-offset-3 decoration-8 decoration-violet-200 font-semibold lg:text-3xl lg:w-full text-left   text-black">
                    The meat of Activecore
                  </h1>
                </div>
              </div>
              {/* Subheading end */}

              <p className="text-black text-lg font-light  tracking-wide">
                T3 Collingwood, located at 36-52 Wellington Street, Collingwood
                in Melbourne, is the city’s tallest timber hybrid office
                building and the first application of Hines’ T3 concept in
                Australia. <br />
                <br />
                The building has 15 levels, with nine of these levels featuring
                a cross-laminated timber (CLT) structure. In comparison to
                conventional concrete and steel construction methods, CLT offers
                construction time efficiencies, is lighter in building weight,
                and reduces whole-of-life carbon emissions. <br />
                <br />
                Once operational, T3 Collingwood is targeting a 6 Star Green
                Star rating, a 5.5 Star NABERS energy performance rating, and
                net zero Climate Active certified operations. The project was
                delivered by a multidisciplinary AECOM team, providing
                Environmentally Sustainable Design services, as well as
                structural, civil, facades, mechanical, electrical, hydraulics,
                fire protection, acoustics, and audio-visual services.
              </p>

              {/* Subheading start */}
              <div className="w-full h-auto flex justify-center items-center flex-col  py-10 lg:p-0 lg:py-10">
                <div className="w-full h-full flex flex-col gap-5 lg:flex-row justify-start items-start">
                  <h1 className="text-3xl  underline underline-offset-3 decoration-8 decoration-violet-200 font-semibold lg:text-3xl lg:w-full text-left   text-black">
                    The pros
                  </h1>
                </div>
              </div>
              {/* Subheading end */}

              <p className="text-black text-lg font-light  tracking-wide">
                T3 Collingwood, located at 36-52 Wellington Street, Collingwood
                in Melbourne, is the city’s tallest timber hybrid office
                building and the first application of Hines’ T3 concept in
                Australia. <br />
                <br />
                The building has 15 levels, with nine of these levels featuring
                a cross-laminated timber (CLT) structure. In comparison to
                conventional concrete and steel construction methods, CLT offers
                construction time efficiencies, is lighter in building weight,
                and reduces whole-of-life carbon emissions.
              </p>
              <Image
                src="/p7.jpg"
                alt="Image"
                width={0}
                height={0}
                layout="responsive"
                className="w-full h-auto py-5 rounded-lg"
                style={{ borderRadius: "1rem" }} // You can adjust the '1rem' value to your desired border radius
              />
              <p className="text-black text-lg font-light  tracking-wide">
                The building has 15 levels, with nine of these levels featuring
                a cross-laminated timber (CLT) structure. In comparison to
                conventional concrete and steel construction methods, CLT offers
                construction time efficiencies, is lighter in building weight,
                and reduces whole-of-life carbon emissions.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default ActiveCore;
