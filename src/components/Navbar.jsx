import React, { useState } from "react";
import { menu, close, logo } from "../assets/images";
import Sidebar from "./Sidebar";

export const navLinks = ["home", "new", "popular", "trending", "categories"];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center h-20 justify-between">
      <a href="">
        <img className="h-6" src={logo} alt="" />
      </a>

      <ul className="md:flex items-center space-x-8 capitalize hidden text-neutral-3">
        {navLinks.map((link) => (
          <li key={link}>
            <a className="hover:text-primary-2 font-medium" href="">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? close : menu} alt="" />
      </button>

      {/* side bar */}
      {isOpen && <Sidebar setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
