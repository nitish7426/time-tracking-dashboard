import React from "react";
import { hero_desktop, hero_mobile } from "./assets";
import Clients from "./components/Clients";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="md:flex items-center md:px-12 lg:px-20 2xl:px-28 justify-between">
        <img className="md:hidden" src={hero_mobile} alt="" />
        <img
          className="hidden md:block order-2 md:order-1 w-full max-w-lg"
          src={hero_desktop}
          alt=""
        />

        <div className="px-5 py-12 text-center md:text-start w-full max-w-lg md:space-y-6">
          <h1 className="text-[2.1rem] font-bold md:text-5xl lg:text-6xl 2xl:text-7xl">
            Make remote work
          </h1>
          <p className="text-neutral-2 mt-2">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <a
            href=""
            className="px-6 py-3 hover:bg-opacity-90 transition-colors bg-neutral-3 text-white rounded-xl block w-fit mx-auto mt-6 md:mx-0"
          >
            Learn more
          </a>
          <Clients />
        </div>
      </section>
    </div>
  );
};

export default App;
