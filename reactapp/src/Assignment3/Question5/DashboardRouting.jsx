//Question5->
// Extend the application to include nested routes for a more complex user interface.
// Create a new section of your application (e.g., a Dashboard) with multiple sub-pages (e.g., Dashboard, Profile, Settings).
// Implement nested routing within this section using nested routes.
// Add navigation links to switch between the sub-pages within the Dashboard section.
// Customize the content displayed on each sub-page.

import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authenticate from "./Authenticate";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";
import Login from "./Login";

export const MyContext = createContext();

function DashBoardRouting() {
  const [auth, setAuth] = useState({ username: "", password: "" });

  return (
    <MyContext.Provider value={{ auth, setAuth }}>
      <Router>
        <Routes>
          <Route element={<Authenticate />}>
            <Route path="/" element={<Dashboard />}>
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/settings" element={<Settings />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default DashBoardRouting;
