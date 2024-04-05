import React, { useState } from "react";

import ThemeMode from "./ThemeMode";
import ThemeContext from "./ThemeContext";

function ThemeApp() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeMode />
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeApp;
