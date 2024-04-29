//Question2>
// .Extend Question 1 to include error handling. If a lazy-loaded component fails to load, display a user-friendly error message to the user instead of
// crashing the application. Implement this using the ErrorBoundary component.
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
const LazyAbout = React.lazy(() => import("./About"));

const RoutingHome = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<div>Loading About Page..</div>}>
              <LazyAbout />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default RoutingHome;
