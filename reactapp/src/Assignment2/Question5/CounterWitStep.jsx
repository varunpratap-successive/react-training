//Question5
// Create a functional component called CounterWithStep.
// Use the useState hook to manage a state variable named count initialized to 0.
// Render the current value of count in a <p> element.
// Add two buttons, one for incrementing the count and another for decrementing it.
// Add an input field where the user can specify a step value.
// Update the count using the specified step value when the buttons are clicked.

import React, { useState } from "react";

function CounterWitStep() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);

  const setStepfunc = (event) => {
    setStep(Number(event.target.value));
  };
  const increment = () => {
    console.log(count);
    setCount(count + step);
    console.log(count);
  };
  const decrement = () => {
    console.log(count);
    setCount(count - step);
    console.log(count);
  };
  const clearfunc = () => {
    setCount(1);
    setStep(1);
  };
  return (
    <div>
      <input type="text" value={step} onChange={setStepfunc} />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={clearfunc}>clear</button>
      <p>{count}</p>
    </div>
  );
}

export default CounterWitStep;
