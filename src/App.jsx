import React from "react";
import ellipsis from "./assets/icon-ellipsis.svg";
import exercise from "./assets/icon-exercise.svg";
import play from "./assets/icon-play.svg";
import self_care from "./assets/icon-self-care.svg";
import social from "./assets/icon-social.svg";
import study from "./assets/icon-study.svg";
import work from "./assets/icon-work.svg";
import jeremy from "./assets/image-jeremy.png";

const App = () => {
  const gridItems = [
    {
      id: 1,
      heading: "Work",
      time: 32,
      lastWeek: 36,
      icon: work,
      color: "bg-primary-2",
    },
    {
      id: 2,
      heading: "Play",
      time: 10,
      lastWeek: 8,
      icon: play,
      color: "bg-primary-3",
    },
    {
      id: 3,
      heading: "Study",
      time: 4,
      lastWeek: 7,
      icon: study,
      color: "bg-primary-4",
    },
    {
      id: 4,
      heading: "Exercise",
      time: 4,
      lastWeek: 5,
      icon: exercise,
      color: "bg-primary-5",
    },
    {
      id: 5,
      heading: "Social",
      time: 5,
      lastWeek: 10,
      icon: social,
      color: "bg-primary-6",
    },
    {
      id: 6,
      heading: "Self Care",
      time: 2,
      lastWeek: "2",
      icon: self_care,
      color: "bg-primary-7",
    },
  ];
  return (
    <div className="bg-neutral-1 flex flex-col text-white px-6 py-12 gap-6 items-center lg:items-stretch lg:grid lg:grid-cols-4 min-h-screen sm:px-6 md:px-10 lg:px-12 xl:px-16">
      <User />

      {gridItems.map((value) => (
        <Card key={value.id} {...value} />
      ))}
    </div>
  );
};

export default App;

const Card = ({ heading, time, icon, lastWeek, color }) => {
  return (
    <div className={`${color} rounded-xl overflow-hidden max-w-lg w-full`}>
      <img className="ml-auto h-16 mr-4 -mt-2 -mb-6" src={icon} alt="" />
      <div className="bg-neutral-2 p-4 md:p-5 lg:p-6 rounded-t-xl relative z-10 h-full space-y-2 lg:space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="font-medium">{heading}</h2>
          <img src={ellipsis} alt="" />
        </div>
        <div className="flex items-center justify-between md:items-start md:justify-center md:gap-2 md:flex-col">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
            {time}hrs
          </p>
          <p className="text-sm text-neutral-4">Last Week - {lastWeek}hrs</p>
        </div>
      </div>
    </div>
  );
};

const User = () => {
  return (
    <div className="bg-neutral-2 rounded-xl lg:row-span-2 flex flex-col max-w-lg w-full">
      <div className="flex bg-primary-1 p-6 rounded-xl gap-4 items-center grow lg:flex-col lg:items-start">
        <img
          className="h-12 w-12 lg:h-20 lg:w-20 border-2 rounded-full"
          src={jeremy}
          alt=""
        />
        <div>
          <p className="text-sm text-neutral-4">Report for</p>
          <p className="text-lg font-light sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Jeremy Robson
          </p>
        </div>
      </div>
      <div className="flex py-4 px-4 lg:gap-4 justify-evenly text-neutral-3 md:flex-col">
        <a className="hover:text-white" href="">
          Daily
        </a>
        <a className="text-white" href="">
          Weekly
        </a>
        <a className="hover:text-white" href="">
          Monthly
        </a>
      </div>
    </div>
  );
};
