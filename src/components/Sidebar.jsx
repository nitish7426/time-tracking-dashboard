import React, { useState } from "react";
import { arrow, calendar, planning, reminders, todo } from "../assets";
import { navLinks } from "./Navbar";
export const featureLinks = [
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
];
export const companyLinks = [
  { id: 1, text: "history" },
  { id: 2, text: "our team" },
  { id: 3, text: "blog" },
];
const Sidebar = ({ setIsOpen }) => {
  const [fIsOpen, setFIsOpen] = useState(false);
  const [cIsOpen, setCIsOpen] = useState(false);
  return (
    <div
      className="inset-0 bg-black/40 absolute"
      onClick={() => setIsOpen(false)}
    >
      <aside
        className="h-full bg-white flex flex-col items-start py-12 px-6 max-w-[15rem] ml-auto text-neutral-2 capitalize space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="space-y-4">
          <li>
            <p
              className="flex items-center gap-4"
              onClick={() => setFIsOpen(!fIsOpen)}
            >
              <span>Features</span>
              <img
                className={`${fIsOpen && "rotate-180"}`}
                src={arrow}
                alt=""
              />
            </p>
            {fIsOpen && (
              <ul className="space-y-4 ml-4 mt-4">
                {featureLinks.map((link) => (
                  <li key={link.id}>
                    <a className="flex items-center gap-4" href="">
                      <img className="h-5" src={link.icon} alt="" />
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          {/* company */}
          <li>
            <p
              className="flex items-center gap-4"
              onClick={() => setCIsOpen(!cIsOpen)}
            >
              <span>Company</span>
              <img
                className={`${cIsOpen && "rotate-180"}`}
                src={arrow}
                alt=""
              />
            </p>
            {cIsOpen && (
              <ul className="ml-4 space-y-4 mt-4">
                {companyLinks.map((link) => (
                  <li key={link.id}>
                    <a className="" href="">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <a href="">careers</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
        </ul>
        <a className="block w-full px-6 text-center" href="">
          Login
        </a>
        <a
          className="text-neutral-3 border border-neutral-3 py-2 px-6 rounded-xl w-full text-center block"
          href=""
        >
          Register
        </a>
      </aside>
    </div>
  );
};

export default Sidebar;
