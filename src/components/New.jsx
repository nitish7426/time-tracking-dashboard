import React from "react";

const New = () => {
  const newText = [
    {
      heading: "Hydrogen VS Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      heading: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      heading: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <section className="p-4 bg-neutral-4 text-white">
      <h2 className="text-3xl font-bold text-primary-1">New</h2>
      <div className="divide-y divide-neutral-3">
        {newText.map((value, i) => (
          <div className="py-4 space-y-2" key={i}>
            <a href="" className="font-bold hover:text-primary-1">
              {value.heading}
            </a>
            <p className="text-neutral-2 text-sm">{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default New;
