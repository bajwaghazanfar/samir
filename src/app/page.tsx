"use client";
import Image from "next/image";
import DottedButton from "../../Components/Button/Button";
import { Navbar } from "../../Components/Navbar";
import ShuffleHero, {
  ShuffleGrid,
} from "../../Components/SquarePhotoGrid/SquarePhotoGrid";
import CountUp from "react-countup";
import { animate, color, motion, useInView } from "framer-motion";
import Footer from "../../Components/Footer/Footer";
import RevealText from "../../Components/RevealText/RevealText";
import Subheading from "../../Components/Subheading/Subheading";
import Countup from "../../Components/Countup/Countup";
import { useEffect, useRef } from "react";
import ContactForm from "../../Components/ContactForm";

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

  const childVariantsWithDelay = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariantsWithDelay = {
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

  return (
    <>
      <main className=" w-full h-auto lg:pl-[50px] lg:pr-[50px] ">
        <Navbar />
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
            <motion.div
              variants={containerVariantsWithDelay}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className=" h-full hidden lg:block lg:flex- gap-5 lg:w-1/2 lg:gap-2  bg-white overflow-hidden "
            >
              <motion.div
                variants={childVariantsWithDelay}
                transition={{ delay: 1.2 }}
                className="w-full h-full flex"
              >
                <div className="w-1/2 h-full  ">
                  <video
                    src="/video2.mp4"
                    muted
                    autoPlay
                    loop
                    className=" w-full h-full rounded-tl-full"
                  />
                </div>
                <div className="w-1/2 h-auto bg-gray-100 dark:bg-slate-900 flex flex-col p-5  gap-7 ">
                  <h1 className="text-8xl">
                    <Countup number={10} />
                    m+
                  </h1>
                  <p>
                    Social media impressions gained through paid and organic
                    marketing methods done for our clients
                  </p>
                  <DottedButton
                    animation={false}
                    inViewportView={false}
                    id="#Services"
                  >
                    <p className="w-auto flex gap-2 ">
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
              </motion.div>

              <motion.div
                variants={childVariantsWithDelay}
                transition={{ delay: 1.5 }}
                className="w-full h-auto flex justify-center items-center mt-5"
              >
                <video
                  src="/video.mp4"
                  muted
                  autoPlay
                  loop
                  className="w-full h-[200px] rounded-md object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center flex-col p-5 pt-10 lg:p-0 lg:py-10 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-full flex flex-col gap-5 lg:flex-row lg:justify-center"
          >
            <Subheading
              text={[
                { text: "Generate A", underlined: false },
                { text: "Spine-Chilling ROI", underlined: true },
                { text: "With Out Of The Box Ideas", underlined: false },
              ]}
            />
            <div className="w-full h-full flex flex-col justify-center  items-center gap-5 lg:flex-row ">
              <div className="w-auto h-auto   p-5  rounded-md">
                <p className="text-md text-black  font-light tracking-wide ">
                  Here’s the truth that nobody shares – there’s a proven formula
                  for value-based virality. However, without tailored systems
                  for your brand, all of those fancy strategies will most likely
                  fall short, and that’s where we step in.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-full flex flex-col gap-5 "
            id="Services"
          >
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.763 9.51a2.25 2.25 0 0 1 3.828-1.351.75.75 0 0 0 1.06-1.06 3.75 3.75 0 0 0-6.38 2.252c-.033.307 0 .595.032.822l.154 1.077H8.25a.75.75 0 0 0 0 1.5h.421l.138.964a3.75 3.75 0 0 1-.358 2.208l-.122.242a.75.75 0 0 0 .908 1.047l1.539-.512a1.5 1.5 0 0 1 .948 0l.655.218a3 3 0 0 0 2.29-.163l.666-.333a.75.75 0 1 0-.67-1.342l-.667.333a1.5 1.5 0 0 1-1.145.082l-.654-.218a3 3 0 0 0-1.898 0l-.06.02a5.25 5.25 0 0 0 .053-1.794l-.108-.752H12a.75.75 0 0 0 0-1.5H9.972l-.184-1.29a1.863 1.863 0 0 1-.025-.45Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div className="stat-title">
                  Total Revenue Generate For Clients
                </div>
                <div className="stat-value text-accent">
                  £<Countup number={295000} />
                </div>
              </div>

              <div className="stat">
                <div className="stat-figure text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-8 h-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title">Website Visitors</div>
                <div className="stat-value text-accent">
                  <Countup number={500000} />+
                </div>
              </div>

              <div className="stat">
                <div className="stat-figure text-accent">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                </div>
                <div className="stat-title">Followers Gained For Clients</div>
                <div className="stat-value text-accent">
                  <Countup number={700000} />+
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* New section Services */}
        <Subheading
          text={[
            { text: "Our 4 Pillars ", underlined: false },
            { text: "For a ", underlined: false },
            { text: "Successful Brand", underlined: true },
          ]}
        />
        {/* Section 1 */}
        <div className="w-full h-auto flex flex-col items-center justify-center ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-auto flex flex-col-reverse items-center justify-center lg:flex-row"
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
                  In today’s digital age, content is not just king – it’s the
                  cornerstone of successful brand communication. Engaging and
                  high-quality content is vital for every brand, regardless of
                  industry or size. By investing in content creation, brands can
                  enjoy the increased visibility, engagement, customer loyalty,
                  and ultimately, a{" "}
                  <span className="italic">stronger market presence</span>.
                </p>
                <DottedButton animation={true} inViewportView={true}>
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
                Paid Advertising
              </h1>
              <div className="w-full h-auto flex justify-start items-start flex-col gap-3">
                <p className="text-sm lg:text-base text-gray-500">
                  In the competitive market of today’s digital age, paid
                  advertising stands as a shortcut past all of the noise,
                  ultimately giving your brand the spotlight. Paid advertising
                  propels your message directly into the view of your target
                  audience with precision and speed. Imagine being able to
                  target the <span className="italic">exact</span> type of
                  consumer your brand requires – and imagine doing it
                  consistently around the clock.
                </p>
                <DottedButton animation={true} inViewportView={true}>
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
        <div className="w-full h-auto flex flex-col items-center justify-center ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-auto flex flex-col items-center justify-center lg:flex-row-reverse"
          >
            <motion.div
              variants={childVariants}
              className="w-full h-auto flex p-5 gap-5 flex-col items-start justify-start lg:w-1/2 lg:p-10"
            >
              <h1 className="text-3xl font-semibold lg:text-[40px] 2xl:text-[60px] text-left leading-none">
                Website Development
              </h1>
              <div className="w-full h-auto flex justify-start items-start flex-col gap-3">
                <p className="text-sm lg:text-base text-gray-500">
                  A brand’s website is its digital storefront, and is{" "}
                  <span className="italic">vital</span> for making a lasting
                  first impression. Effective website development ensures a
                  seamless and engaging user experience that reflects the
                  brand’s quality and values. When integrated with strategic
                  content creation as well as paid advertising, it becomes a
                  potent hub for business growth, illuminating your brand’s
                  offering at the click of a button.
                </p>
                <DottedButton animation={true} inViewportView={true}>
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
                E-Commerce Transitions
              </h1>
              <div className="w-full h-auto flex justify-start items-start flex-col gap-3">
                <p className="text-sm lg:text-base text-gray-500">
                  This isn’t something we offer to every client, but it’s what
                  makes a brand go from 6 figures in monthly revenue to 7. We’ve
                  had years of experience managing e-commerce brands in a range
                  of different niches, so we’re confident when we say we could
                  have you set up in no time, and the results would speak for
                  themselves. If that’s something you think your business needs,
                  schedule a call with our founder and CEO Samir using the form
                  at the bottom of the page.
                </p>
                <DottedButton animation={true} inViewportView={true}>
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

        <Subheading
          text={[
            {
              text: "We're Ready To Boost  Your Brand Awareness & Generate",
              underlined: false,
            },
            { text: "New Business", underlined: true },
            { text: "For You", underlined: false },
          ]}
        />
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-full flex flex-col gap-5 lg:flex-row lg:justify-center py-10"
        >
          <Subheading
            text={[
              { text: "Don’t Just Take", underlined: false },
              { text: "Our", underlined: true },
              {
                text: "Word For It. Take Word From The People We’ve Worked With:",
                underlined: false,
              },
            ]}
          />
          <div className="w-full h-full flex flex-col justify-center  items-center gap-5 lg:flex-row ">
            <div className="w-auto h-auto   p-5  rounded-md">
              <p className="text-md text-black  font-light tracking-wide ">
                Here’s where it gets interesting. We’ve provided a detailed
                breakdown of what we can offer your business, now it’s time for
                us to show you that we can consistently achieve these results.
                We’ve worked with brands from a range of different fields, from
                entertainment venues, e-commerce brands and privately–owned
                companies, performing exceptionally well each time.
              </p>
            </div>
          </div>
        </motion.div>

        <DottedButton animation={false} inViewportView={false} id="#Services">
          <p className=" text-white flex gap-5 text-xl">
            Swipe to view all testimonials
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              animate={{
                x: "20px",
              }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </motion.svg>
          </p>
        </DottedButton>

        <div className="carousel carousel-center w-full p-4 space-x-4 ">
          <div className="carousel-item   rounded-lg shadow-lg p-3">
            <div
              className={`lg:w-[600px] lg:h-[600px] w-[400px] h-[400px] flex    rounded-md justify-start items-start flex-col   `}
            >
              <div className="w-full h-auto flex flex-col p-2 bg-white rounded-lg">
                <div className="flex items-center mb-2">
                  <h1 className="text-xl font-extrabold text-black">
                    Samir Baloushi
                  </h1>
                </div>
                <p className="text-black mb-2">Cloud Media</p>
                <div className=" p-3 rounded-md">
                  <h2 className="font-light text-xl text-black tracking-normal">
                    <span className="text-4xl text-black">"</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                    <span className="text-4xl text-black">"</span>
                  </h2>
                </div>
              </div>

              <div className="w-full h-full overflow-hidden rounded-md">
                <img
                  src="/bg-city.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="carousel-item   rounded-lg shadow-lg p-3">
            <div
              className={`lg:w-[600px] lg:h-[600px] w-[400px] h-[400px] flex    rounded-md justify-start items-start flex-col   `}
            >
              <div className="w-full h-auto flex flex-col p-2 bg-white rounded-lg">
                <div className="flex items-center mb-2">
                  <h1 className="text-xl font-extrabold text-black">
                    Samir Baloushi
                  </h1>
                </div>
                <p className="text-black mb-2">Cloud Media</p>
                <div className=" p-3 rounded-md">
                  <h2 className="font-light text-xl text-black tracking-normal">
                    <span className="text-4xl text-black">"</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                    <span className="text-4xl text-black">"</span>
                  </h2>
                </div>
              </div>

              <div className="w-full h-full overflow-hidden rounded-md">
                <img
                  src="/bg-city.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="carousel-item   rounded-lg shadow-lg p-3">
            <div
              className={`lg:w-[600px] lg:h-[600px] w-[400px] h-[400px] flex    rounded-md justify-start items-start flex-col   `}
            >
              <div className="w-full h-auto flex flex-col p-2 bg-white rounded-lg">
                <div className="flex items-center mb-2">
                  <h1 className="text-xl font-extrabold text-black">
                    Samir Baloushi
                  </h1>
                </div>
                <p className="text-black mb-2">Cloud Media</p>
                <div className=" p-3 rounded-md">
                  <h2 className="font-light text-xl text-black tracking-normal">
                    <span className="text-4xl text-black">"</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                    <span className="text-4xl text-black">"</span>
                  </h2>
                </div>
              </div>

              <div className="w-full h-full overflow-hidden rounded-md">
                <img
                  src="/bg-city.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End of testimonials */}

        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
