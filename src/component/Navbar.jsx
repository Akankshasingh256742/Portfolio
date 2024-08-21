import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";
import Option from "./Option";

function Navbar() {
  
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="flex justify-between  ml-5   md:gap-36 md:justify-center md:items-center">
      <div className="relative mt-5">
        <h1 className="relative z-40 text-5xl font-abc2 font-extrabold ">
          Akanksha
        </h1>
        <img
          className="absolute -top-6 left-2 z-30   w-width1"
          src={logo}
          alt=""
        />
      </div>

      <div className="absolute right-1 z-50 md:hidden md:pl-0">
        <div className="">
          <img
            onClick={() => setOpen((prev) => !prev)}
            src={menu_open}
            alt="Menu Open"
            className={`pt-5 ${open ? "hidden" : "block"}`}
          />
        </div>
        <div className={`h-height2 pl-2 pr-5 bg-color4  ${open ? "block" : "hidden"}`}>
          <img
            onClick={() => setOpen((prev) => !prev)}
            src={menu_close}
            alt="Menu Close"
            className="pt-5 mb-8 w-6"
          />
          <div >
              <Option />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Option />
      </div>
      <div>
        <Button
          style="hidden md:block transition-transform hover:scale-110 duration-200 ease-in-out delay-150"
          title="Connect with me"
        />
      </div>
    </div>
  );
}

export default Navbar;
