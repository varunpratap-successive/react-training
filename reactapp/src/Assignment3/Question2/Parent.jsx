//Question2
// Extend the previous application to demonstrate the use of nested contexts.
// Create a new context to manage user preferences (e.g., theme preference).
// Modify the parent component to provide both the authentication and preferences contexts.
// Create a child component that consumes both contexts.
// Allow the user to change their theme preference (light/dark) using a button in the child component.
// Display the theme preference in the UI and adjust the component's styling accordingly.

import { createContext, useState } from "react";
import Child from "./Child";
import "./styles.css";

export const AuthContext2 = createContext(false);

const initialPreference = {
  theme: "light",
};

export const ThemeContext = createContext(initialPreference);

function Parent(){
  const [isLogin, setIsLogin] = useState(false);
  const [prefernce, setPrefernce] = useState(initialPreference);

  return (
    <AuthContext2.Provider value={{ isLogin, setIsLogin }}>
      <ThemeContext.Provider value={{ prefernce, setPrefernce }}>
        <Child />
      </ThemeContext.Provider>
    </AuthContext2.Provider>
  );
};

export default Parent;
