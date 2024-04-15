//Question12
//Create a reusable Button component in React that accepts props for different styles (e.g., primary, secondary, danger)
// and click handlers. Demonstrate how to use this component in a sample application.

import React, { useState } from "react";
import ButtonComp from "./ButtonComp";
const ButtonApp = () => {
  const [count, setCount] = useState(0);

  const increasecount = () => {
    setCount(count + 1);
  };
  const decreasecount = () => {
    setCount(count - 1);
  };
  const multiplycount = () => {
    setCount(count * 2);
  };
  return (
    <div>
      <p> {count}</p>
      <ButtonComp
        buttonName="Primary(to increase current count by 1)"
        buttonhandler={increasecount}
      />
      <ButtonComp
        buttonName="Secondary(to decrease current count by 1)"
        buttonhandler={decreasecount}
      />
      <ButtonComp
        buttonName="Danger(to multiply current count by 2)"
        buttonhandler={multiplycount}
      />
    </div>
  );
};

export default ButtonApp;
