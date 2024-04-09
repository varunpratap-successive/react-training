//Question4
// Enhance the previous application by adding protected routes that require authentication.
// Create a login page with a form that accepts a username and password.
// Implement authentication logic (e.g., hardcode a username and password for now).
// Secure the About page so that it can only be accessed by authenticated users.
// Redirect unauthenticated users to the login page.
// Display a message on the Home page welcoming the authenticated user

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import LoginPage from "./LoginPage";
import Error from "./Error";
import { useState } from "react";

function MainApp() {
  const [authuser, setAuthuser] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage
              authuser={authuser} //i can also use context instead of props
              setAuthuser={setAuthuser}
              username={username}
              setUsername={setUsername}
            />
          }
        >
          <Route path="/about" element={<About />}></Route>
          <Route path="/home" element={<Home username={username} />}></Route>
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default MainApp;
