"use client";
import Image from "next/image";
import DottedButton from "../../../../Components/Button/Button";
import { Navbar } from "../../../../Components/Navbar";

import Footer from "../../../../Components/Footer/Footer";
import { motion } from "framer-motion";
import Subheading from "../../../../Components/Subheading/Subheading";
import ContactForm from "../../../../Components/ContactForm";

const ActiveCore = () => {
  return (
    <>
      <main className=" w-full h-auto ">
        <div className=" w-full h-auto lg:pl-[50px] lg:pr-[50px]"></div>

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
                  <h1 className="text-3xl text-center text-white   font-semibold   leading-snug tracking-normal dark:text-white  lg:text-[60px] xl:text-[60px] 2xl:text-[100px]   ">
                    Crafting a Winning Marketing Strategy For A B2C Fitness
                    Brand
                  </h1>
                </div>
                <div className="w-full h-auto flex justify-center items-center gap-3 lg:w-2/4">
                  <p className="text-center text-white text-xl lg:text-xl">
                    Note: *The subject of this case study is under a strict NDA,
                    so the information we disclose may be fairly generic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-auto pl-[20px] pr-[20px] lg:pl-[50px] lg:pr-[50px] ">
          <div className="w-full h-auto flex flex-col justify-center items-center">
            <div className="w-full h-auto lg:w-1/2 pt-10">
              <Subheading
                text={[{ text: "Introduction:", underlined: true }]}
              />
              <p className="text-black text-lg font-light  tracking-wide">
                In the bustling world of e-commerce, our team of media buyers,
                copywriters and content planners worked closely with the owner
                of a B2C fitness brand based in the United States during 2023.
                We acted as their entire marketing department, launching and
                managing paid advertising campaigns along with their organic
                social media posts.
              </p>
              <Subheading
                text={[{ text: "The Challenge:", underlined: true }]}
              />

              <p className="text-black text-lg font-light  tracking-wide">
                This brand emerged in a competitive landscape, therefore scaling
                the company to new heights would entail having to be unique in
                our approach and style in marketing, all whilst ensuring we have
                the correct budget allocation due to the fact that this client
                was working with rather large budgets.
              </p>

              <Subheading
                text={[
                  { text: "Differentiation Through Data:", underlined: true },
                ]}
              />

              <p className="text-black text-lg font-light  tracking-wide">
                Precise Targeting: We meticulously analysed data and competitors
                to identify their ideal customers. By understanding their
                audience's pain points and desires, we crafted laser-focused
                campaigns.
                <br />
                <br />
                Tailored Messaging: Rather than promoting product features, we
                addressed their audience's concerns and aspirations. We aimed to
                centre the message of our advertisements around the beauty of
                the product: it was portable, easy to carry and easy to use,
                amongst other things.
              </p>
              <Subheading
                text={[{ text: "Creative Campaigns:", underlined: true }]}
              />

              <p className="text-black text-lg font-light  tracking-wide">
                Compelling Visuals: We collaborated with talented content
                creators to produce visually stunning and emotionally engaging
                content. These visuals showcased the brand as a lifestyle choice
                rather than an impulse purchase, which resulted in really
                propelling the business forward.
                <br />
                <br />
                Emotional Connection: Our team understood the importance of
                building an emotional bond with their audience. We crafted
                stories and narratives that went beyond selling a product;
                rather we sold a vision of a better life.
              </p>
              <Subheading
                text={[{ text: "Testing and Optimization:", underlined: true }]}
              />
              <p className="text-black text-lg font-light  tracking-wide">
                A/B Testing: During the first month of our work with this client
                we rigorously tested various ad creatives, audience segments,
                and call-to-action buttons (CTA’s). This data-driven approach
                allowed us to fine-tune their campaigns continuously.
                <br />
                <br />
                Budget Allocation: We skilfully managed the advertising budget
                which was set for us, focusing on the most effective channels
                and campaigns after a week of testing different strategies.
              </p>
              <Subheading
                text={[{ text: "Standout Performance:", underlined: true }]}
              />
              <p className="text-black text-lg font-light  tracking-wide">
                Impressive Metrics: Within the first month and a half of our
                partnership with this client, we achieved over 4 million video
                views and 73,797 clicks with an ad spend of £23,284.52. Their
                Click-Through Rate (CTR) exceeded industry standards, and the
                purchase return on ad spend (ROAS) averaged 3.17, indicating a
                healthy return on their investment in us.
                <br />
                <br />
                Brand Identity: The client successfully established itself as
                more than just a product; it became a lifestyle choice that
                resonated with a broad audience seeking a healthier, more
                convenient way of living.
              </p>

              <Subheading text={[{ text: "Conclusion:", underlined: true }]} />
              <p className="text-black text-lg font-light  tracking-wide">
                This success story is a testament to our data-driven,
                customer-centric marketing approach. By using data insights to
                create compelling campaigns, building emotional connections with
                their audience, and continually optimizing their strategies, our
                client managed to carve a unique space in the fitness market.
                What sets them apart is not just what they sell, but how we sold
                it for them - an approach rooted in understanding their
                audience's needs and aspirations.
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
            </div>
          </div>
        </div>

        <div className=" w-full h-auto lg:pl-[50px] lg:pr-[50px] ">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default ActiveCore;
