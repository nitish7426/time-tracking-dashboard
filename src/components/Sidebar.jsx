import React from "react";
import { navLinks } from "./Navbar";

const Sidebar = ({ setIsOpen }) => {
  return (
    <div
      className="absolute inset-0 bg-black/40"
      onClick={() => setIsOpen(false)}
    >
      <aside
        className="w-60 flex flex-col bg-white h-full ml-auto justify-center px-6 space-y-6 capitalize text-lg text-neutral-4"
        onClick={(e) => e.stopPropagation()}
      >
        {navLinks.map((value) => (
          <a key={value} href="">
            {value}
          </a>
        ))}
      </aside>
    </div>
  );
};

export default Sidebar;
