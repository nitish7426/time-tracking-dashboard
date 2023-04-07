import React from "react";
import down from "../assets/icon-down.svg";
import up from "../assets/icon-up.svg";

const Card2 = ({ type, icon, count, isDown, percent }) => {
  return (
    <div className=" bg-light-card-bg dark:bg-dark-card-bg p-6 space-y-4 rounded-md font-bold">
      <div className="flex items-center justify-between">
        <p className="text-sm text-light-text-1 dark:text-dark-text-1">
          {type}
        </p>
        <img src={icon} alt="" />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-2xl ">{count}</p>
        <p
          className={`text-xs flex items-center gap-1 ${
            isDown ? "text-primary-2" : "text-primary-1"
          }`}
        >
          <img src={isDown ? down : up} alt="" />
          {percent}
        </p>
      </div>
    </div>
  );
};

export default Card2;
