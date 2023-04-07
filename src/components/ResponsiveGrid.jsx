import React from "react";

const ResponsiveGrid = ({ children }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5 md:gap-6">
      {children}
    </div>
  );
};

export default ResponsiveGrid;
