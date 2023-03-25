import React, { useState } from "react";
import { arrow } from "../assets";

const Accordian = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li>
      <div onClick={() => setIsOpen(!isOpen)}>
        <p>{text}</p>
        <img src={arrow} alt="" />
      </div>
      {isOpen && { children }}
    </li>
  );
};

export default Accordian;
