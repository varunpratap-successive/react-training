//Question3
// create pages: Home and About.
// Implement routing using React Router DOM.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import DisplayPage from "./DisplayPage";
import Error from "./Error";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default Main;
