import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      This is Home Page
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
