import React from "react";

const ButtonComp = ({ buttonName, buttonhandler }) => {
  return (
    <div>
      <button onClick={buttonhandler}>{buttonName}</button>
    </div>
  );
};

export default ButtonComp;
