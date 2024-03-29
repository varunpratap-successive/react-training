// Create a functional component named Button that accepts props for text and color.
// Style the button using inline styles or CSS classes based on the color prop.
// Import and render the Button component in the App component with different text and color props.

import React from "react";

function Button(props) {
  const colorStyle = {
    color: props.textcolor,
    border: "2px solid black",
    padding: "6px",
  };
  return <button style={colorStyle}> {props.text} </button>;
}

export default Button;
