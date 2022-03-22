import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";



function ThemeToggle() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button className="NavItem" onClick={toggleTheme}>
      Dark Mode
    </button>
  );
};

export default ThemeToggle;


