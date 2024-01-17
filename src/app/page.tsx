import Image from "next/image";
import DottedButton from "../../Components/Button/Button";
import { Navbar } from "../../Components/Navbar";
import ShuffleHero, {
  ShuffleGrid,
} from "../../Components/SquarePhotoGrid/SquarePhotoGrid";

export default function Home() {
  return (
    <main className="bg-stone-100 w-full h-auto ">
      <Navbar />
      <div className="w-full h-screen flex flex-col gap-5 bg-stone-100">
        <div className="w-full  flex flex-col items-center justify-start p-1 lg:w-4/5 lg:p-10 lg:items-start">
          <h1 className="text-5xl text-center font-thin lg:text-[90px] xl:text-[110px] 2xl:text-[130px] 3xl:text-[180px]  lg:text-left  ">
            We are a <span className="font-bold"> creative digital agency</span>
          </h1>
        </div>
        <div className="w-[99%] h-auto flex flex-wrap gap-3  justify-center items-center  lg:p-10 lg:flex-nowrap">
          <div className="w-fit h-fit relative ">
            <img
              src="/p4.jpg"
              className="w-[190px] h-[190px] rounded-xl object-cover shadow-2xl lg:w-[600px] lg:h-[400px]"
            />
            <div className="absolute inset-0 flex items-end  justify-end p-5">
              <div>
                <p className="text-white bg-slate-500 px-2 py-1 rounded-xl">
                  By Samir
                </p>
              </div>
            </div>
          </div>
          <div className="w-fit h-fit relative ">
            <img
              src="/p4.jpg"
              className="w-[190px] h-[190px] rounded-xl object-cover shadow-2xl lg:w-[600px] lg:h-[400px]"
            />
            <div className="absolute inset-0 flex items-end  justify-end p-5">
              <div>
                <p className="text-white bg-slate-500 px-2 py-1 rounded-xl">
                  By Samir
                </p>
              </div>
            </div>
          </div>
          <div className="w-fit h-fit relative ">
            <img
              src="/p4.jpg"
              className="w-[190px] h-[190px] rounded-xl object-cover shadow-2xl lg:w-[600px] lg:h-[400px]"
            />
            <div className="absolute inset-0 flex items-end  justify-end p-5">
              <div>
                <p className="text-white bg-slate-500 px-2 py-1 rounded-xl">
                  By Samir
                </p>
              </div>
            </div>
          </div>
          <div className="w-fit h-fit relative ">
            <img
              src="/p4.jpg"
              className="w-[190px] h-[190px] rounded-xl object-cover shadow-2xl lg:w-[600px] lg:h-[400px]"
            />
            <div className="absolute inset-0 flex items-end  justify-end p-5">
              <div>
                <p className="text-white bg-slate-500 px-2 py-1 rounded-xl">
                  By Samir
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* End of hero */}

        {/*  */}
        <div className="w-full h-auto flex-col justify-center items-center  bg-stone-100">
          <div className="w-full h-auto flex flex-col border-2 border-solid border-stone-100 border-t-0 border-l-0 border-r-0 pt-10 pb-10 lg:flex-row">
            <div className="w-full  h-auto flex p-5 gap-5 flex-col items-center justify-center  lg:w-11/12 lg:p-10 ">
              <h4 className="font-bold tracking-wide uppercase text-xl text-center">
                Services
              </h4>
              <h1 className="text-3xl font-thin lg:text-[40px]  2xl:text-[60px]  text-center leading-none ">
                Our Services
              </h1>
              <p className="text-sm lg:text-base text-center">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse "Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse "Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse
              </p>
            </div>
          </div>

          <div className="w-full h-auto flex flex-col items-center justify-center ">
            <div className="w-full h-auto flex flex-col items-center justify-center pt-10 pb-10 lg:flex-row lg:w-5/5  ">
              <div className="w-full  h-auto flex p-5 gap-5 flex-col items-start justify-start  lg:w-1/2 lg:p-10 ">
                <h1 className="text-3xl font-semibold lg:text-[40px]  2xl:text-[60px]  text-left leading-none ">
                  Brand Management
                </h1>
                <div className="w-full h-auto flex justify-start items-start  flex-col gap-3">
                  <p className="text-sm lg:text-base">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse
                  </p>
                  <DottedButton text="Read More"></DottedButton>
                </div>
              </div>
              <div className="w-full h-auto flex p-5 gap-5 flex-col items-center justify-center  lg:w-1/2 lg:p-10 ">
                <ShuffleHero />
              </div>
            </div>
          </div>

          <div className="w-full h-auto flex flex-col items-center justify-center ">
            <div className="w-full h-auto flex flex-col items-center justify-center pt-10 pb-10 lg:flex-row-reverse  ">
              <div className="w-full  h-auto flex p-5 gap-5 flex-col items-start justify-start  lg:w-1/2 lg:p-10 ">
                <h1 className="text-3xl font-semibold lg:text-[40px]  2xl:text-[60px]  text-left leading-none ">
                  Content Creation
                </h1>
                <div className="w-full h-auto flex justify-start items-start  flex-col gap-3">
                  <p className="text-sm lg:text-base text-gray-500">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse
                  </p>
                  <DottedButton text="Read More"></DottedButton>
                </div>
              </div>
              <div className="w-full h-auto flex p-5 gap-5 flex-col items-center justify-center  lg:w-1/2 lg:p-10 ">
                <img
                  src="/p4.jpg"
                  className="w-full h-auto rounded-m object-cover shadow-2xl lg:w-[600px] lg:h-[400px] 2xl:w-[800px] 2xl:h-[600px]"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-auto flex flex-col items-center justify-center ">
            <div className="w-full h-auto flex flex-col items-center justify-center pt-10 pb-10 lg:flex-row   ">
              <div className="w-full  h-auto flex p-5 gap-5 flex-col items-start justify-start  lg:w-1/2 lg:p-10 ">
                <h1 className="text-3xl font-semibold lg:text-[40px]  2xl:text-[60px]  text-left leading-none ">
                  Lead Distribution
                </h1>
                <div className="w-full h-auto flex justify-start items-start  flex-col gap-3">
                  <p className="text-sm lg:text-base text-gray-500">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse
                  </p>
                  <DottedButton text="Read More"></DottedButton>
                </div>
              </div>
              <div className="w-full h-auto flex p-5 gap-5 flex-col items-center justify-center  lg:w-1/2 lg:p-10 ">
                <img
                  src="/p4.jpg"
                  className="w-full h-auto rounded-m object-cover shadow-2xl lg:w-[600px] lg:h-[400px] 2xl:w-[800px] 2xl:h-[600px]"
                />
              </div>
            </div>
          </div>

          {/* <div className="w-full h-auto flex flex-wrap lg:flex lg:flex-nowrap pt-10 pb-10">
            <div className="w-full h-auto flex flex-col justify-start items-start">
              <h1 className="text-white text-2xl font-extrabold lg:text-5xl">
                500+
              </h1>
              <p className="text-white font-medium lg:xl">Projects Completed</p>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-start">
              <h1 className="text-white text-2xl font-extrabold lg:text-5xl">
                95%
              </h1>
              <p className="text-white font-medium lg:xl">
                Client Satisfaction
              </p>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-start">
              <h1 className="text-white text-2xl font-extrabold lg:text-5xl">
                15+
              </h1>
              <p className="text-white font-medium lg:xl">
                Years of Experience
              </p>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-start">
              <h1 className="text-white text-2xl font-extrabold lg:text-5xl">
                £325M+
              </h1>
              <p className="text-white font-medium lg:xl">Total Profit</p>
            </div>
          </div> */}

          <div></div>
        </div>
      </div>
    </main>
  );
}
