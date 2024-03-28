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
