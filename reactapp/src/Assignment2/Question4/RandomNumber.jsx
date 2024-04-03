//Question4
// Create a functional component called RandomNumberGenerator.
// Use the useState hook to manage a state variable named randomNumber, initialized to a random number between 1 and 100.
// Render the current value of randomNumber.
// Add a button that generates a new random number and updates the state when clicked.

import React, { useState } from "react";

function RandomNumber() {
  const [randomnum, setRandomnum] = useState("5");
  const generateRandom = () => {
    setRandomnum(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <div>
      <button onClick={generateRandom}>GenerateRandomNum</button>
      <p>{randomnum}</p>
    </div>
  );
}

export default RandomNumber;
