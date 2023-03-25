import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      className="py-2.5 px-5 hover:bg-primary-2/90 bg-primary-2 text-white tracking-[0.35em] font-medium uppercase  text-xs"
      onClick={onClick}
    >
      {text || "Your text"}
    </button>
  );
};

export default Button;
