import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1); // Correct, update state in an event handler
  };
  const decrementCounter = () => {
    setCount(count - 1); // Correct, update state in an event handler
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
  );
}

export default Counter;
