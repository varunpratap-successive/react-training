import React from "react";

function Child({ callbackfunc, count, setCount }) {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(0)}>MakeZero</button>
      <button onClick={callbackfunc}>Increment</button>
    </div>
  );
}

export default Child;
