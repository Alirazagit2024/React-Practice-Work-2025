import React from "react";

const Section = (props) => {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 w-full max-w-screen-xl">
      <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl text-center py-10 md:py-16">
        <h3 className="text-[#23A6F0] text-sm sm:text-base md:text-lg font-bold">
          Welcome
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight sm:leading-snug md:leading-normal mt-4">
          {props.title1} <br /> {props.title2}
        </h1>
        <p className="text-white mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
          {props.content}
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 sm:mt-8 mx-4">
          <button className="bg-[#35A6F0] text-white cursor-pointer font-bold px-6 py-3 md:px-8 md:py-4 rounded border border-white transition-all duration-300 hover:bg-white hover:text-black hover:border-black sm:w-auto">
            {props.btn1}
          </button>
          <button className="border border-[#35A6F0] cursor-pointer text-blue-400 px-6 py-3 md:px-8 md:py-4 rounded transition-all duration-300 hover:bg-[#35A6F0] hover:text-white hover:border-white sm:w-auto">
            {props.btn2}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section;
