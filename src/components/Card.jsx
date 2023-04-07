import React from "react";
import down from "../assets/icon-down.svg";
import up from "../assets/icon-up.svg";

const Card = ({ count, icon, type, today, username, isDown }) => {
  return (
    <div className="flex flex-col items-center text-center bg-light-card-bg dark:bg-dark-card-bg p-6 space-y-4 rounded-md">
      <div className="flex items-center gap-2">
        <img src={icon} alt="" />
        <p className="text-sm text-light-text-1 dark:text-dark-text-1 font-bold">
          {username}
        </p>
      </div>
      <p className="text-5xl font-bold">{count}</p>
      <p className="uppercase text-light-text-1 dark:text-dark-text-1 tracking-[0.35em] text-xs">
        {type}
      </p>

      <p
        className={`flex items-center text-sm font-bold gap-2 ${
          isDown ? "text-primary-2" : "text-primary-1"
        }`}
      >
        <img src={isDown ? down : up} alt="" /> {today}
      </p>
    </div>
  );
};

export default Card;
