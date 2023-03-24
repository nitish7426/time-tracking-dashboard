import React, { useState } from "react";
import {
  pattern_desktop,
  pattern_mobile,
  woman_mobile,
  woman_desktop,
} from "./assets/index";
import { faq } from "./constants";
import SingleAccordian from "./components/SingleAccordian";

const App = () => {
  const [activeIndex, setActiveIndex] = useState("");
  return (
    <section className="min-h-screen gradient px-6 flex items-center justify-center">
      {/* accordian */}
      <article className="bg-white rounded-2xl md:grid grid-cols-2 md:max-w-[900px] w-full mt-48 mb-32 md:m-0 md:items-center">
        <div className="relative">
          <div className="-mt-36 md:hidden">
            <img
              className="max-w-xs md:hidden mx-auto"
              src={woman_mobile}
              alt=""
            />
            <img
              className="max-w-xs w-full mx-auto -mt-24 md:hidden"
              src={pattern_mobile}
              alt=""
            />
          </div>
          {/* for desktop */}
          <div className="hidden md:block -ml-24">
            <img className="" src={woman_desktop} alt="" />
            <img
              className="absolute inset-y-0 -left-20"
              src={pattern_desktop}
              alt=""
            />
          </div>
        </div>
        {/* right */}
        <div className="px-6 py-12 space-y-4 md:mr-12">
          <h1 className="text-4xl md:text-5xl md:text-start font-bold text-center text-accordian-1">
            FAQ
          </h1>

          <div className="divide-y divide-divide border-b border-divide">
            {faq.map((value) => (
              <SingleAccordian
                key={value.id}
                index={value.id}
                question={value.question}
                answer={value.answer}
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default App;
