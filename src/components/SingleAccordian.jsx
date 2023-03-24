import React, { useState } from "react";
import { arrow_icon } from "../assets";

const SingleAccordian = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className="cursor-pointer py-4 select-none"
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-center justify-between">
        <h2 className={`text-text-1 ${isActive && "font-bold"}`}>{question}</h2>
        <img
          className={`${
            isActive && "rotate-180"
          } transition-transform duration-150`}
          src={arrow_icon}
          alt=""
        />
      </div>
      {isActive && <p className="text-text-2 pt-2 max-w-sm">{answer}</p>}
    </div>
  );
};

export default SingleAccordian;
