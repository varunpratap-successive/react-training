import React from "react";

function Weather(props) {
  const message =
    props.temperature > 25
      ? "Its Sunny Today"
      : props.temperature < 10
      ? "Its cold today"
      : "temperaure not in correct range";
  return <div>{message}</div>;
}

export default Weather;
