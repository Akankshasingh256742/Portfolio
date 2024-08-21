import React from "react";
import Form from "./Form";
import theme from "../assets/theme_pattern.svg";
import mail from "../assets/mail_icon.svg";
import location from "../assets/location_icon.svg";
import phone from "../assets/call_icon.svg"

function Getintouch() {
  return (
    <div id="Contact" className="md:flex md:flex-col md:gap-14 pt-20">
    <div className="relative ml-28 md:ml-80 mb-10 md:mb-0">
      <h1 className="md:text-7xl text-5xl font-abc relative z-40 ">Get in touch</h1>
      <img className="absolute md:w-44 w-20 left-48 md:left-56 top-6 z-30" src={theme} alt="" />
      </div>
      <div className="md:flex gap-12 ">
        <div className="flex w-width4 flex-col gap-8 mx-6 md:mx-0">
          <div>
            <h1 className="md:text-5xl text-2xl font-bold bg-custom-gradient text-transparent bg-clip-text">
              Let's Talk
            </h1>
          </div>
          <div>
            <p className="">
              I'm currently avaliable to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>
          </div>
          <div className="flex gap-5 cursor-pointer transition-transform hover:scale-105 duration-200 ease-linear delay-75">
            <img src={mail} alt="" />
            <p>Akankshasinghmas@gmail.com</p>
          </div>
          <div className="flex gap-5 cursor-pointer transition-transform hover:scale-105 duration-200 ease-linear delay-75">
            <img src={phone} alt="" />
            <p>7667709682</p>
          </div>
          <div className="flex gap-5 cursor-pointer transition-transform hover:scale-105 duration-200 ease-linear delay-75">
            <img src={location} alt="" />
            <p>Bangalore,India</p>
          </div>
        </div>
        <div className="mt-14 md:mt-0">
          <Form></Form>
        </div>
      </div>
    </div>
  );
}

export default Getintouch;
