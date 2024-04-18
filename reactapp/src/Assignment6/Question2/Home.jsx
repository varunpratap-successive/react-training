import React from "react";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
const Home = () => {
  return (
    <ErrorBoundary fallback={<div>Error occured</div>}>
      <div>
        This is Home Page
        <Link to="/about">About</Link>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
