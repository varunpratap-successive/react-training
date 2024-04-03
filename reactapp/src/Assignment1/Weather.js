// Create a functional component named Weather that accepts a prop called temperature (a number).
// Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
// Import and render the Weather component in the App component with different temperature values.
import React from "react";

function Weather({ temperature }) {
  const message =
    temperature > 25
      ? "Its Sunny Today"
      : temperature < 10
      ? "Its cold today"
      : "temperaure not in correct range";
  return <div>{message}</div>;
}

export default Weather;
