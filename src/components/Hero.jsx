import React from "react";
import { web3_desktop, web3_mobile } from "../assets/images";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="md:col-span-2">
      <img className="md:hidden" src={web3_mobile} alt="" />
      <img className="hidden md:flex" src={web3_desktop} alt="" />

      <div className="py-6 grid md:grid-cols-2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-4">
          The Bright Future of Web 3.0?
        </h1>

        <div className="">
          <p className="text-neutral-3 pb-6">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <Button text={"read more"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
