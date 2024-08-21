import React from "react";
import theme from "../assets/theme_pattern.svg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import arrow from "../assets/arrow_icon.svg";

function Latestwork() {
  return (
    <div
      id="Portfolio"
      className="flex flex-col gap-20 justify-center items-center pt-20"
    >
      <div className="relative ">
        <h1 className="md:text-7xl text-5xl font-abc relative z-40 ">My latest work</h1>
        <img className="absolute md:w-44 w-24 left-56 md:left-72 top-6 z-30" src={theme} alt="" />
      </div>
      <div className="md:flex gap-9">
        <div className="mb-7 md:mb-0 cursor-pointer transition-transform hover:scale-110 hover:border-pink-600 hover:border-4 rounded-lg duration-200 ease-linear delay-75">
          <a
            href="https://superlative-cascaron-abb1bf.netlify.app/"
            target="_blank"
          >
            <img className="w-80 h-60 rounded-lg" src={project1} alt="" />
          </a>
        </div>
        <div className="mb-7 md:mb-0 cursor-pointer transition-transform hover:scale-110 hover:border-pink-600 hover:border-4 rounded-lg duration-200 ease-linear delay-75">
          <a href="https://geminiapp123.netlify.app/" target="_blank">
            <img className="w-80 h-60 rounded-lg" src={project3} alt="" />
          </a>
        </div>
        <div className="cursor-pointer transition-transform hover:scale-110 hover:border-pink-600 hover:border-4 rounded-lg duration-200 ease-linear delay-75">
          <a href="https://weatherprediction123.netlify.app/" target="_blank">
            <img className="w-80 h-60 rounded-lg" src={project2} alt="" />
          </a>
        </div>
      </div>
      <div className="hover:scale-x-115">
        <a href="https://github.com/Akankshasingh256742" target="_blank">
          <button className="border-2 rounded-3xl flex justify-center items-center gap-2 px-7 py-2 group transition-all duration-300 ease-in-out hover:scale-x-110">
            <p className="text-lg group-hover:-translate-x-1 duration-300 ease-in-out">Show more </p>
            <img width={"20px"} className="group-hover:translate-x-1 duration-300 ease-in-out" src={arrow} alt="" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Latestwork;
