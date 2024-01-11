import Image from "next/image";
import { Navbar } from "../../Components/Navbar";

export default function Home() {
  return (
    <main className="bg-stone-100 w-full h-auto ">
      <Navbar />
      <div className="w-full h-screen flex flex-col gap-5 bg-stone-100">
        <div className="w-full  flex items-center justify-start p-1 lg:w-4/5 lg:p-10">
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
        <div className="w-full h-auto flex-col justify-center items-center bg-[#28282B] p-5">
          <div className="w-full h-auto flex flex-col border-2 border-solid border-stone-100 border-t-0 border-l-0 border-r-0 pt-10 pb-10 lg:flex-row">
            <div className="w-full h-auto flex justify-start lg:w-3/5 ">
              <h1 className="text-xl uppercase tracking-wider  text-stone-200 font-bold lg:text-3xl 3xl:text-5xl ">
                Our passion is crafting digital experiences that trancend the
                ordinary,
                <span className="text-stone-400">
                  ignite emotions and inspire action.
                </span>
              </h1>
            </div>
            <div className="hidden w-full h-auto lg:flex relative items-center justify-end">
              <div className="w-fit h-fit relative ">
                <img
                  src="https://i.pinimg.com/originals/66/b8/4b/66b84bfa33720323a222f34a0f764d91.gif"
                  className="w-[190px] h-[190px] rounded-xl object-cover  lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px]     shadow-[-30px_30px _0px_0px_rgba(0,0,0,0.3)]"
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
          </div>
          <div className="w-full h-auto flex flex-wrap lg:flex lg:flex-nowrap pt-10 pb-10">
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
          </div>

          <div></div>
        </div>
      </div>
    </main>
  );
}
