import React from "react";
import { audiophile, databiz, maker, meet } from "../assets";

const Clients = () => {
  const clients = [databiz, audiophile, meet, maker];
  return (
    <div className="flex gap-4 items-center justify-center py-4 mt-8 w-full">
      {clients.map((value, i) => (
        <img key={i} className="w-28 h-6 object-contain" src={value} alt="" />
      ))}
    </div>
  );
};

export default Clients;
