import React from "react";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import New from "./components/New";

const App = () => {
  return (
    <div className="min-h-screen px-4 md:px-12 md:py-8 lg:py-10 lg:px-20">
      <Navbar />
      <div className="grid md:grid-cols-3 gap-6">
        <Hero />
        <New />
      </div>
      <Featured />
    </div>
  );
};

export default App;
