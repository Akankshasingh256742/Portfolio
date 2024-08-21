import React from "react";
import theme from "../assets/theme_pattern.svg";
import picture from "../assets/picture.png";

function About() {
  return (
    <div id="About" className="flex flex-col justify-center items-center pt-28">
      <div className="relative ">
        <h1 className="md:text-7xl text-5xl font-abc relative z-40 ">About me</h1>
        <img className="absolute md:w-44 w-20 left-36 top-7 z-30" src={theme} alt="" />
      </div>
      <div className="flex  py-14 gap-16">
        <div className="md:block hidden">
          <img
            className="border rounded-2xl h-height1 w-width2"
            src={picture}
            alt=""
          />
        </div>
        <div className="">
          <div className="md:text-lg font-abc2">
            <p className="md:w-width3 w-width4 ml-10 md:ml-0">
              I am a dedicated frontend developer from Bangalore, India, with 2
              years of experience in building responsive and user-centric web
              applications. Currently, I work at Cognizant, where I've been
              involved in creating seamless digital experiences for clients
              across various industries. My passion lies in bringing designs to
              life with clean, efficient code, ensuring that every project I
              work on is both visually appealing and highly functional.
            </p>
            <div className="flex items-center font-abc my-5 gap-2 md:gap-6 cursor-pointer transition-transform hover:scale-105 duration-200 ease-linear delay-75">
              <p className="md:text-2xl text-base ml-12 md:ml-0 w-24 md:w-40">HTML & CSS</p>
              <hr className="md:w-96 w-64 border-0 h-2 rounded-2xl bg-custom-gradient" />
            </div>
            <div className="flex items-center font-abc my-5 gap-2  md:gap-6 cursor-pointer transition-transform hover:scale-105 duration-200 ease-linear delay-75">
              <p className="md:text-2xl text-base ml-12 md:ml-0 w-24 md:w-40">Tailwind</p>
              <hr className="md:w-80 w-44 border-0 h-2 rounded-2xl bg-custom-gradient" />
            </div>
            <div className="flex items-center font-abc my-5 gap-2  md:gap-6 cursor-pointer transition-transform hover:scale-105 duration-200 ease-linear delay-75">
              <p className="md:text-2xl text-base ml-12 md:ml-0 w-24 md:w-40">React</p>
              <hr className="md:w-96 w-64 border-0 h-2 rounded-2xl bg-custom-gradient" />
            </div>
            <div className="flex items-center font-abc my-5 gap-2 md:gap-6 cursor-pointer transition-transform hover:scale-105 duration-200 ease-linear delay-75">
              <p className="md:text-2xl text-base ml-12 md:ml-0 w-24 md:w-40">Javascript</p>
              <hr className="md:w-96 w-64 border-0 h-2 rounded-2xl bg-custom-gradient" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-12 md:gap-40">
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer transition-transform hover:scale-110 duration-200 ease-linear delay-75">
            <p className="text-4xl bg-custom-gradient text-transparent bg-clip-text font-abc2 font-bold">2+</p>
            <p className="font-abc">YEARS OF EXPERIENCE</p>
        </div>
        <div className="w-1 rounded-xl h-20 bg-white"></div>
        <div className="flex flex-col justify-center items-center gap-1 cursor-pointer transition-transform hover:scale-110 duration-200 ease-linear delay-75">
            <p  className="text-4xl bg-custom-gradient text-transparent bg-clip-text font-abc2 font-bold">5+</p>
            <p className="font-abc">Projects Completed</p>
        </div>
      </div>
    </div>
  );
}

export default About;
