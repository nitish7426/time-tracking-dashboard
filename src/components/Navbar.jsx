import React, { useState } from "react";
import {
  arrow,
  calendar,
  close,
  logo,
  menu,
  planning,
  reminders,
  todo,
} from "../assets";
import Sidebar, { companyLinks, featureLinks } from "./Sidebar";

export const navLinks = {
  Features: [
    {
      id: 1,
      icon: todo,
      text: "todo list",
    },
    {
      id: 2,
      icon: calendar,
      text: "calendar",
    },
    {
      id: 3,
      icon: reminders,
      text: "reminders",
    },
    {
      id: 4,
      icon: planning,
      text: "planning",
    },
  ],
  company: [
    {
      id: 1,
      text: "history",
    },
    {
      id: 2,
      text: "our team",
    },
    {
      id: 3,
      text: "blog",
    },
  ],
  careers: "",
  about: "",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between md:justify-start px-4 h-20 md:px-6 lg:px-8">
      <a href="">
        <img className="" src={logo} alt="" />
      </a>

      <ul className="md:flex space-x-8 text-neutral-2 capitalize ml-16 hidden ">
        <li className="relative group">
          <p className="flex items-center gap-2 hover:text-neutral-3 ">
            <span>Features</span>
            <img src={arrow} alt="" />
          </p>
          {/* drop */}
          <ul className="space-y-4 absolute p-4 rounded-xl hidden group-hover:block right-0 w-40 shadow-xl border bg-white">
            {featureLinks.map((link) => (
              <li key={link.id}>
                <a className="flex items-center gap-4" href="">
                  <img className="h-5" src={link.icon} alt="" />
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </li>
        {/* company */}
        <li className="relative group">
          <p className="flex items-center gap-2 hover:text-neutral-3 ">
            <span>Company</span>
            <img src={arrow} alt="" />
          </p>
          <ul className="space-y-4 absolute p-4 rounded-xl hidden group-hover:block right-0 w-40 shadow-xl border bg-white">
            {companyLinks.map((link) => (
              <li key={link.id}>
                <a className="" href="">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <a href="">careers</a>
        </li>
        <li>
          <a href="">about</a>
        </li>
      </ul>
      <a className="md:block ml-auto px-6 text-center hidden" href="">
        Login
      </a>
      <a
        className="text-neutral-3 border border-neutral-3 py-2 px-6 rounded-xl  text-center md:block hidden"
        href=""
      >
        Register
      </a>

      {/* hamburger icon */}
      <button className="z-20 md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? close : menu} alt="" />
      </button>

      {/* sidebar */}
      {isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
