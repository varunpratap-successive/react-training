import React from "react";
import { Link } from "react-router-dom";
function Home({ username, authuser }) {
  return (
    <div>
      <p>Entered Home</p>
      <p>{username.length > 0 ? `Welcome ${username}` : "b"}</p>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Home;
