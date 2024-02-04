"use client";
import Image from "next/image";
import DottedButton from "../../../Components/Button/Button";
import { Navbar } from "../../../Components/Navbar";

import Footer from "../../../Components/Footer/Footer";
import { motion } from "framer-motion";
import RevealText from "../../../Components/RevealText/RevealText";
import Subheading from "../../../Components/Subheading/Subheading";
import ContactForm from "../../../Components/ContactForm";

const Work = () => {
  return (
    <>
      <main className=" w-full h-auto lg:pl-[50px] lg:pr-[50px]">
        <div className="w-full h-full flex flex-col lg:py-10 mt-10 lg:mt-0">
          <div className="w-full  flex flex-col items-center justify-start  lg:w-full lg:flex-row lg:gap-8">
            <div className="w-full h-full lg:w-1/2 lg:h-full flex-col flex justify-evenly gap-6">
              <RevealText
                lines={[
                  "Stay Ahead Of",
                  "The Curve With",
                  "Our Forward Thinking",
                ]}
              />
              <div className="w-full flex items-center flex-col justify-center h-full gap-10 lg:w-4/5 lg:items-start  lg:justify-start ">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8, type: "tween" }}
                  className="w-full flex flex-col justify-center items-center h-full gap-5 lg:items-start lg:justify-start"
                >
                  <p className=" px-3 lg:text-lg text-gray-500 tracking-normal text-center  text-sm lg:text-left dark:text-gray-300">
                    We make it downright impractical for businesses not to
                    capitalise on their true profit potential through the likes
                    of social media, content creation and paid advertising. Our
                    mission is crystal clear: to help your business create,
                    convert and most importantly <b>monetise</b> attention.
                  </p>
                  <DottedButton
                    animation={false}
                    inViewportView={false}
                    id="#Services"
                  >
                    <p className="w-auto flex gap-2 ">
                      Find Out More
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
                </motion.div>
              </div>
            </div>
            <div className=" h-[80vh] hidden lg:block lg:flex- gap-5 lg:w-1/2 lg:gap-2  relative">
              <div className="w-full   h-full flex justify-center items-center ">
                <img className="w-full h-auto rounded-lg " src="/p4.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center flex-col p-5 pt-10 lg:p-0 lg:py-10 gap-10">
          <div className="w-full h-full flex flex-col gap-5 lg:flex-row lg:justify-start lg:items-start">
            <div className="w-full h-full flex flex-col justify-center  items-center gap-5 lg:flex-row lg:w-1/2 lg:justify-start lg:items-start">
              <Subheading
                text={[
                  { text: "Generate A", underlined: false },
                  { text: "Spine-Chilling ROI", underlined: true },
                  { text: "With Out Of The Box Ideas", underlined: false },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center flex-wrap p-5 pt-10 lg:p-0 lg:py-10 gap-10">
          <div className="w-full h-auto flex flex-col lg:flex-row lg:flex-wrap   justify-around items-start">
            {/* Case Studies */}
            <a href="/casestudy/sportband">
              <motion.div
                className="w-full h-auto  flex-col lg:w-[600px]  flex gap-5 cursor-pointer lg:py-5 3xl:w-[800px]"
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
                  <h1 className="text-xl font-extrabold lg:text-3xl">
                    E-commerce Trailblazer: Active Cores Success Unleashes
                    Six-Figure Triumph
                  </h1>
                  <p className="text-sm font-normal text-black lg:text-lg">
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
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};
export default Work;
