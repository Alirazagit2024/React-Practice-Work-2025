import React from "react";

export default function Cards() {
  return (
    <div className="lg:mt-14 flex flex-wrap justify-center gap-6 md:gap-5 lg:gap-7 my-8 px-4 sm:px-6">
      {/* Card 1 */}
      <div className="md:w-[328px] h-[292px] p-6 sm:p-8 bg-white flex flex-col justify-center gap-5 shadow-lg shadow-slate-300/20 hover:shadow-none cursor-pointer">
        <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-lg"></div>
        <h2 className="font-bold text-[#252B42]">Training Courses</h2>
        <div className="h-[2px] w-[50px] bg-[#E74040]"></div>
        <p className="text-[#737373] text-sm tracking-wide">
          The gradual accumulation of information about atomic and small-scale behaviour...
        </p>
      </div>

      {/* Card 2 */}
      <div className="md:w-[328px] h-[292px] p-6 sm:p-8 bg-white flex flex-col justify-center gap-5 shadow-lg shadow-slate-300/20 hover:shadow-none cursor-pointer">
        <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded-lg"></div>
        <h2 className="font-bold text-[#252B42]">2,769 Online Courses</h2>
        <div className="h-[2px] w-[50px] bg-[#E74040]"></div>
        <p className="text-[#737373] text-sm tracking-wide">
          The gradual accumulation of information about atomic and small-scale behaviour...
        </p>
      </div>

      {/* Card 3 */}
      <div className="md:w-[328px] h-[292px] p-6 sm:p-8 bg-[#23A6F0] flex flex-col justify-center gap-5 shadow-lg shadow-slate-300/20 hover:shadow-none cursor-pointer">
        <div className="w-[70px] h-[76px] bg-white rounded-lg"></div>
        <h2 className="font-bold text-white">Training Courses</h2>
        <div className="h-[2px] w-[50px] bg-[#E74040]"></div>
        <p className="text-white text-sm tracking-wide">
          The gradual accumulation of information about atomic and small-scale behaviour...
        </p>
      </div>
    </div>
  );
}
