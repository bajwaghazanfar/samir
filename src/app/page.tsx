"use client";
import Image from "next/image";
import DottedButton from "../../Components/Button/Button";
import { Navbar } from "../../Components/Navbar";
import ShuffleHero, {
  ShuffleGrid,
} from "../../Components/SquarePhotoGrid/SquarePhotoGrid";
import CountUp from "react-countup";
import { color, motion } from "framer-motion";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Adjust the stagger duration as needed
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const randomColorGenerator = (): string => {
    const colors: string[] = [
      "navy",
      "violet",
      "slate",
      "gray",
      "sky",
      "amber",
      "emerald",
      "cyan",
      "blue",
      "indigo",
    ];
    var item = colors[Math.floor(Math.random() * colors.length)];

    return `${item}`;
  };
  return (
    <>
      <main className=" w-full h-auto lg:pl-[50px] lg:pr-[50px]">
        <Navbar />
        <div className="w-full h-full flex flex-col lg:py-10">
          <div className="w-full  flex flex-col items-center justify-start  lg:w-full lg:flex-row lg:gap-8">
            <div className="w-full h-full lg:w-1/2 lg:h-full flex-col flex justify-evenly gap-6">
              <h1 className="text-5xl text-center   font-semibold tracking-normal dark:text-white  lg:text-[60px] xl:text-[80px] 2xl:text-[130px] 3xl:text-[180px]  lg:text-left  ">
                Stay ahead of the curve with our forward thinking
              </h1>
              <div className="w-full flex items-center flex-col justify-center h-full gap-10 lg:w-4/5 lg:items-start  lg:justify-start ">
                <div className="w-4/5 flex flex-col justify-between h-full ">
                  <p className=" lg:text-lg text-gray-500 tracking-normal text-center  text-sm lg:text-left dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
                </div>
                <DottedButton>
                  <p className="flex w-auto text-black gap-5">
                    Find out more
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
            <div className=" h-full hidden lg:block lg:flex- gap-5 lg:w-1/2 lg:gap-2  relative">
              <div className="w-fit justify-evenly h-full flex   gap-2 relative ">
                <div className="w-1/2 h-full  relative">
                  <video
                    src="/video2.mp4"
                    muted
                    autoPlay
                    loop
                    className=" w-full h-full rounded-tl-full"
                  />
                </div>
                <div className="w-1/2 h-full bg-gray-100 dark:bg-slate-900 flex flex-col p-5  gap-7 relative">
                  <h1 className="text-8xl">210+</h1>
                  <p>
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation
                  </p>
                  <DottedButton>
                    <p className="w-auto flex gap-2 dark:text-black">
                      Learn More
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
              <div className="w-full h-auto flex justify-center items-center mt-5">
                <video
                  src="/video.mp4"
                  muted
                  autoPlay
                  loop
                  className="w-full h-[200px] rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center flex-col p-5 pt-10 lg:p-0 lg:py-10 gap-10">
          <div className="w-full h-full flex flex-col gap-5 lg:flex-row lg:justify-center">
            <div className="w-full h-full flex flex-col justify-center  items-center gap-5 lg:flex-row ">
              <h1 className="text-3xl  font-bold leading-none tracking-tight lg:text-5xl lg:w-full ">
                Provide the best services with {"   "}
                <span className="underline underline-offset-3 decoration-8 decoration-violet-200">
                  out of the box
                </span>
                {"   "}ideas
              </h1>
            </div>
            <div className="w-full h-full flex flex-col justify-center  items-center gap-5 lg:flex-row ">
              <div className="w-auto h-auto  bg-violet-200 p-5 rounded-xl">
                <p className="text-sm text-black text-pretty tracking-wide ">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-5 lg:flex-row lg:justify-center">
            <div className="w-full  h-full bg-abstract  flex flex-col justify-center items-center gap-2 p-10 rounded-2xl lg:w-5/12">
              <CountUp start={0} end={4} delay={0}>
                {({ countUpRef }) => (
                  <div className="w-full flex h-full text-center items-center justify-center">
                    <h1 className="text-3xl  font-bold lg:text-5xl lg:w-full  text-white text-center">
                      <span
                        className="text-3xl  font-bold lg:text-5xl lg:w-full  text-white text-center"
                        ref={countUpRef}
                      />
                      <span className="text-3xl  font-bold lg:text-5xl lg:w-full  text-white text-center">
                        +
                      </span>
                    </h1>
                  </div>
                )}
              </CountUp>
              <p className="text-lg text-gray-200">Years Of Experience</p>
            </div>
            <div className="w-full  h-full bg-abstract  flex flex-col justify-center items-center gap-2 p-10 rounded-2xl lg:w-5/12">
              <CountUp start={0} end={4} delay={0}>
                {({ countUpRef }) => (
                  <div className="w-full flex h-full text-center items-center justify-center">
                    <h1 className="text-3xl  font-bold lg:text-5xl lg:w-full  text-white text-center">
                      <span
                        className="text-3xl  font-bold lg:text-5xl lg:w-full  text-white text-center"
                        ref={countUpRef}
                      />
                      <span className="text-3xl  font-bold lg:text-5xl lg:w-full  text-white text-center">
                        +
                      </span>
                    </h1>
                  </div>
                )}
              </CountUp>
              <p className="text-lg text-gray-200">Years Of Experience</p>
            </div>
            <div className="w-full  h-full bg-abstract  flex flex-col justify-center items-center gap-2 p-10 rounded-2xl lg:w-5/12">
              <CountUp start={0} end={4} delay={0}>
                {({ countUpRef }) => (
                  <div className="w-full flex h-full text-center items-center justify-center">
                    <h1 className="text-3xl  font-bold lg:text-5xl lg:w-full  text-white text-center">
                      <span
                        className="text-3xl  font-bold lg:text-5xl lg:w-full  text-white text-center"
                        ref={countUpRef}
                      />
                      <span className="text-3xl  font-bold lg:text-5xl lg:w-full  text-white text-center">
                        +
                      </span>
                    </h1>
                  </div>
                )}
              </CountUp>
              <p className="text-lg text-gray-200">Years Of Experience</p>
            </div>
            <div className="w-full  h-full bg-abstract  flex flex-col justify-center items-center gap-2 p-10 rounded-2xl lg:w-5/12">
              <CountUp start={0} end={4} delay={0}>
                {({ countUpRef }) => (
                  <div className="w-full flex h-full text-center items-center justify-center">
                    <h1 className="text-3xl  font-bold lg:text-5xl lg:w-full  text-white text-center">
                      <span
                        className="text-3xl  font-bold lg:text-5xl lg:w-full  text-white text-center"
                        ref={countUpRef}
                      />
                      <span className="text-3xl  font-bold lg:text-5xl lg:w-full  text-white text-center">
                        +
                      </span>
                    </h1>
                  </div>
                )}
              </CountUp>
              <p className="text-lg text-gray-200">Years Of Experience</p>
            </div>
          </div>
        </div>
        {/* New section Services */}
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
        {/* Section 1 */}
        <div className="w-full h-auto flex flex-col items-center justify-center ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-auto flex flex-col items-center justify-center lg:flex-row"
          >
            <motion.div
              variants={childVariants}
              className="w-full relative h-auto flex p-5 gap-5 flex-col items-center justify-center lg:w-1/3 lg:justify-end lg:items-end"
            >
              <img
                src="/p2.jpg"
                className="w-full h-auto rounded-m object-cover shadow-2xl"
              />
            </motion.div>
            <motion.div
              variants={childVariants}
              className="w-full h-auto flex p-5 gap-5 flex-col items-start justify-start lg:w-1/2 lg:p-10"
            >
              <h1 className="text-3xl font-semibold lg:text-[40px] 2xl:text-[60px] text-left leading-none">
                Content Creation
              </h1>
              <div className="w-full h-auto flex justify-start items-start flex-col gap-3">
                <p className="text-sm lg:text-base text-gray-500">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse
                </p>
                <DottedButton>
                  <p>Explore</p>
                </DottedButton>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-center ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-auto flex flex-col items-center justify-center lg:flex-row"
          >
            <motion.div
              variants={childVariants}
              className="w-full h-auto flex p-5 gap-5 flex-col items-start justify-start lg:w-1/2 lg:p-10"
            >
              <h1 className="text-3xl font-semibold lg:text-[40px] 2xl:text-[60px] text-left leading-none">
                Content Creation
              </h1>
              <div className="w-full h-auto flex justify-start items-start flex-col gap-3">
                <p className="text-sm lg:text-base text-gray-500">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse
                </p>
                <DottedButton>
                  <p>Explore</p>
                </DottedButton>
              </div>
            </motion.div>
            <motion.div
              variants={childVariants}
              className="w-full relative h-auto flex p-5 gap-5 flex-col items-center justify-center lg:w-1/3 lg:justify-end lg:items-end"
            >
              <img
                src="/p2.jpg"
                className="w-full h-auto rounded-m object-cover shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
        {/* <div className="w-full  flex justify-start items-start  bg-abstract_wide p-10  rounded-xl h-screen">
        <div className="w-full h-auto flex py-5">
          <h1 className="text-3xl  text-white font-extrabold leading-none tracking-tight lg:text-5xl lg:w-full text-center">
            Transforming Businesses, one at a time
          </h1>
        </div>
        <div></div>
      </div> */}

        <div className="w-full h-auto flex justify-center items-center flex-col p-5 pt-10 lg:p-0 lg:py-10 gap-10">
          <div className="w-full h-full flex flex-col gap-5 lg:flex-row lg:justify-start lg:items-start">
            <div className="w-full h-full flex flex-col justify-center  items-center gap-5 lg:flex-row lg:w-1/2 lg:justify-start lg:items-start">
              <h1 className="text-3xl  font-semibold lg:text-3xl lg:w-full   text-black ">
                Weve developed
                <span className=" ml-2 mr-2 underline underline-offset-3 decoration-8 decoration-violet-200">
                  specific use cases
                </span>
                where our approach and expertise truly helps businesses to
                <span className="ml-2 mr-2 underline underline-offset-3 decoration-8 decoration-violet-200">
                  excel
                </span>
              </h1>
            </div>
          </div>
        </div>
        {/* Start of Carousel  */}
        <div className="carousel w-full rounded-2xl">
          <div id="slide1" className="carousel-item relative w-full">
            <video src="/video.mp4" autoPlay loop muted className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <video src="/video4.mp4" autoPlay loop muted className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* End of carousel */}
        {/* Start of testimonials  */}
        <div className="w-full h-auto flex justify-center items-center flex-col p-5 pt-10 lg:p-0 lg:py-10 gap-10">
          <div className="w-full h-full flex flex-col gap-5 lg:flex-row lg:justify-start lg:items-start">
            <div className="w-full h-full flex flex-col justify-center  items-center gap-5 lg:flex-row-  lg:w-1/2 lg:justify-start lg:items-start">
              <h1 className="text-3xl  font-semibold lg:text-3xl lg:w-full lg:text-left   text-black flex gap-2">
                Dont just take our
                <span className="underline underline-offset-3 decoration-8 decoration-violet-200">
                  word
                </span>
                for it.
              </h1>
            </div>
          </div>
        </div>

        <div className="carousel carousel-center w-full p-4 space-x-4 rounded-box">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item shadow-xl rounded-box">
            <div
              className={`w-[300px] flex p-3   rounded-box justify-between flex-col bg-violet-100`}
            >
              <h2 className=" font-light text-2xl  tracking-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </h2>
              <div className="w-full h-auto flex flex-col ">
                <h1 className=" text-xl font-extrabold">Samir Baloushi</h1>
                <p>Cloud Media</p>
              </div>
            </div>
          </div>
          <div className="carousel-item shadow-xl rounded-box">
            <div
              className={`w-[300px] flex p-3   rounded-box justify-between flex-col bg-violet-100`}
            >
              <h2 className=" font-light text-2xl  tracking-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </h2>
              <div className="w-full h-auto flex flex-col ">
                <h1 className=" text-xl font-extrabold">Samir Baloushi</h1>
                <p>Cloud Media</p>
              </div>
            </div>
          </div>
          <div className="carousel-item shadow-xl rounded-box">
            <div
              className={`w-[300px] flex p-3   rounded-box justify-between flex-col bg-violet-100`}
            >
              <h2 className=" font-light text-2xl  tracking-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </h2>
              <div className="w-full h-auto flex flex-col ">
                <h1 className=" text-xl font-extrabold">Samir Baloushi</h1>
                <p>Cloud Media</p>
              </div>
            </div>
          </div>
          <div className="carousel-item shadow-xl rounded-box">
            <div
              className={`w-[300px] flex p-3   rounded-box justify-between flex-col bg-violet-100`}
            >
              <h2 className=" font-light text-2xl  tracking-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </h2>
              <div className="w-full h-auto flex flex-col ">
                <h1 className=" text-xl font-extrabold">Samir Baloushi</h1>
                <p>Cloud Media</p>
              </div>
            </div>
          </div>
          <div className="carousel-item shadow-xl rounded-box">
            <div
              className={`w-[300px] flex p-3   rounded-box justify-between flex-col bg-violet-100`}
            >
              <h2 className=" font-light text-2xl  tracking-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </h2>
              <div className="w-full h-auto flex flex-col ">
                <h1 className=" text-xl font-extrabold">Samir Baloushi</h1>
                <p>Cloud Media</p>
              </div>
            </div>
          </div>
          <div className="carousel-item shadow-xl rounded-box">
            <div
              className={`w-[300px] flex p-3   rounded-box justify-between flex-col bg-violet-100`}
            >
              <h2 className=" font-light text-2xl  tracking-normal">
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </h2>
              <div className="w-full h-auto flex flex-col ">
                <h1 className=" text-xl font-extrabold">Samir Baloushi</h1>
                <p>Cloud Media</p>
              </div>
            </div>
          </div>
          <div className="carousel-item shadow-xl rounded-box">
            <div
              className={`w-[300px] flex p-3   rounded-box justify-between flex-col bg-violet-100`}
            >
              <h2 className=" font-light text-2xl  tracking-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </h2>
              <div className="w-full h-auto flex flex-col ">
                <h1 className=" text-xl font-extrabold">Samir Baloushi</h1>
                <p>Cloud Media</p>
              </div>
            </div>
          </div>
        </div>
        {/* End of testimonials */}

        {/* Start of contact form */}
        <div className="w-full h-auto flex justify-center items-center flex-col p-5 pt-10 lg:p-0 lg:py-10 gap-10">
          <div className="w-full h-full flex flex-col gap-5 lg:flex-row lg:justify-start lg:items-start">
            <div className="w-full h-full flex flex-col justify-center  items-center gap-5 lg:flex-row-  lg:w-1/2 lg:justify-start lg:items-start">
              <h1 className="text-3xl  font-semibold lg:text-3xl lg:w-full lg:text-left   text-black">
                Looking to take your business to the
                <span className="underline underline-offset-3 decoration-8 decoration-violet-200">
                  next level?
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-start justify-start flex-col lg:flex-row p-5 pt-10 lg:p-0 lg:py-10">
          <div className="w-full lg:w-1/2 h-full flex flex-col py-5 gap-3">
            <div>
              <h4 className="uppercase   font-extrabold lg:text-xl lg:w-full lg:text-left   text-violet-500">
                Schedule your call with Samir
              </h4>
              <h3 className="text-2xl  font-bold lg:text-3xl lg:w-full lg:text-left   text-black">
                Free 15 minute demo call
              </h3>
            </div>
            <p className="text-sm text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p className="text-sm text-gray-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h4 className="uppercase   font-extrabold lg:text-xl lg:w-full lg:text-left   text-violet-500">
              This audit call is perfect for:
            </h4>
            {/* Start of ticks */}
            <div className="w-full flex justify-start items-start gap-5">
              <div className="w-auto flex h-full justify-start items-start  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-violet-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-auto h-auto flex justify-start items-start">
                <p className="text-gray-500 text-sm">
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            {/* Tick 2 */}
            <div className="w-full flex justify-start items-start gap-5">
              <div className="w-auto flex h-full justify-start items-start  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-violet-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-auto h-auto flex justify-start items-start">
                <p className="text-gray-500 text-sm">
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            {/* Tick 3 */}
            <div className="w-full flex justify-start items-start gap-5">
              <div className="w-auto flex h-full justify-start items-start  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-violet-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-auto h-auto flex justify-start items-start">
                <p className="text-gray-500 text-sm">
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            {/* Tick 4 */}
            <div className="w-full flex justify-start items-start gap-5">
              <div className="w-auto flex h-full justify-start items-start  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-violet-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-auto h-auto flex justify-start items-start">
                <p className="text-gray-500 text-sm">
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
            {/* Tick 5 */}
            <div className="w-full flex justify-start items-start gap-5">
              <div className="w-auto flex h-full justify-start items-start  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-violet-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="w-auto h-auto flex justify-start items-start">
                <p className="text-gray-500 text-sm">
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:w-1/2 flex items-center justify-start">
            <iframe
              src="https://calendly.com/samirbaloushi/1-on-1-meeting"
              className=" flex-grow w-full h-screen"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
