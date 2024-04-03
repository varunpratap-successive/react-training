//Question9
// Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeMode() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          backgroundColor: theme === "dark" ? "yellow" : "red",
          border: "2px solid black",
          width: "80px",
          color: theme === "dark" ? "red" : "black",
        }}
      >
        {" "}
        theme is changing
      </div>
      <button
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme === "dark" ? "white" : "black",
        }}
        onClick={toggleTheme}
      >
        Switch Theme
      </button>
    </>
  );
}

export default ThemeMode;
