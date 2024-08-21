import React, { useState } from 'react'
import logo from "../assets/logo.svg";

function Option() {
    const [active, setactive] = useState(1);
  return (
    <ul className={`flex:col md:flex  font-abc`}>
            <li
              className={`relative text-2xl md:text-base mb-4 md:mb-0 md:w-20   cursor-pointer flex-col ${
                active == 1
                  ? "md:transition-transform md:-translate-y-3 duration-200 ease-linear"
                  : ""
              }`}
              onClick={() => setactive(1)}
            >
              <a href="#home">
                Home
                {active == 1 ? (
                  <img
                    className="hidden md:block absolute md:w-20 md:-left-10 md:-top-0"
                    src={logo}
                  ></img>
                ) : (
                  <div></div>
                )}
              </a>{" "}
            </li>
            <li
              className={`relative text-2xl md:text-base mb-5 md:mb-0 md:w-20 cursor-pointer flex-col mr-3 md:${
                active == 2
                  ? "md:transition-transform md:-translate-y-3 duration-200 ease-linear"
                  : ""
              }`}
              onClick={() => setactive(2)}
            >
              <a href="#About">
                About Me
                {active == 2 ? (
                  <img
                    className="hidden md:block absolute w-20 -left-10 -top-0"
                    src={logo}
                  ></img>
                ) : (
                  <div></div>
                )}
              </a>
            </li>
            <li
              className={`relative text-2xl md:text-base mb-5 md:mb-0 md:w-20 cursor-pointer flex-col md:${
                active == 3
                  ? "md:transition-transform md:-translate-y-3 duration-200 ease-linear"
                  : ""
              }`}
              onClick={() => setactive(3)}
            >
              <a href="#Portfolio">
                Portfolio
                {active == 3 ? (
                  <img
                    className="hidden md:block absolute w-20 -left-10 -top-0"
                    src={logo}
                  ></img>
                ) : (
                  <div></div>
                )}
              </a>
            </li>
            <li
              className={`relative text-2xl md:text-base mb-5 md:mb-0 md:w-20 cursor-pointer flex-col md:${
                active == 4
                  ? "md:transition-transform md:-translate-y-3 duration-200 ease-linear"
                  : ""
              }`}
              onClick={() => setactive(4)}
            >
              <a href="#Contact">
                Contact
                {active == 4 ? (
                  <img
                    className="hidden md:block absolute w-20 -left-10 -top-0"
                    src={logo}
                  ></img>
                ) : (
                  <div></div>
                )}
              </a>
            </li>
          </ul>
  )
}

export default Option