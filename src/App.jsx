import React from "react";
import Header from "./components/Header";
import { overview, overviewToday } from "./constants";
import Card from "./components/Card";

import ResponsiveGrid from "./components/ResponsiveGrid";
import Card2 from "./components/Card2";

const App = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg text-light-text-2 dark:text-dark-text-2 min-h-screen px-6 space-y-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-12">
      <Header />

      <ResponsiveGrid>
        {overview.map((value) => (
          <Card key={value.id} {...value} />
        ))}
      </ResponsiveGrid>

      <h2 className="text-xl font-bold text-light-text-1 dark:text-dark-text-1">
        Overview - Today
      </h2>

      <ResponsiveGrid>
        {overviewToday.map((value) => (
          <Card2 key={value.id} {...value} />
        ))}
      </ResponsiveGrid>
    </div>
  );
};

export default App;
