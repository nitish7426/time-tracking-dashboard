import React from "react";
import { gaming, laptop, retro } from "../assets/images";

const Featured = () => {
  const featured = [
    {
      id: "01",
      heading: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
      image: retro,
    },
    {
      id: "02",
      heading: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
      image: laptop,
    },
    {
      id: "03",
      heading: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
      image: gaming,
    },
  ];
  return (
    <section className=" py-12 flex flex-col gap-6 md:flex-row">
      {featured.map(({ id, image, heading, text }) => (
        <div key={id} className="flex gap-4">
          <img className="w-20" src={image} alt="" />
          <div className="space-y-1">
            <p className="text-2xl font-extrabold text-neutral-2">{id}</p>
            <p className="font-bold text-neutral-4">{heading}</p>
            <p className="text-neutral-3 text-sm">{text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Featured;
