import React, { useState } from "react";
import Switch from "./Switch";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    let theme = localStorage.getItem("theme");
    return theme ? theme : "dark";
  });

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");

    localStorage.setItem("theme", "light");
  }

  return (
    <header className="py-8 flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="space-y-1">
        <h1 className="font-bold text-xl md:text-2xl">
          Social Media Dashboard
        </h1>
        <p className="text-light-text-1 dark:text-dark-text-1 text-sm font-bold">
          Total Followers:23,004
        </p>
      </div>
      <hr className="border-white/20 md:hidden" />
      <div className="flex gap-4 items-center justify-between md:justify-start text-sm">
        <p className="text-light-text-1 dark:text-dark-text-1 font-bold">
          Dark Mode
        </p>
        <Switch
          checked={theme == "light"}
          onChange={() => setTheme(theme == "light" ? "dark" : "light")}
        />
      </div>
    </header>
  );
};

export default Header;
