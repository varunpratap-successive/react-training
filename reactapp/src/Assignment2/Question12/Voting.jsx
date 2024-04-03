//Question12
// Create a simple voting application using the useReducer hook.
// Set up a reducer to manage the votes for different options.
// Create buttons representing voting options.
// Use the useReducer hook to access the votes state and dispatch actions.
// Allow users to vote for their preferred options.
// Display the current vote count for each option

import React, { useReducer } from "react";

function Voting() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      default:
        return state;
    }
  };
  const initialState = { count: 0 };
  const [stateVirat, dispatch1] = useReducer(reducer, initialState);
  const [stateRohit, dispatch2] = useReducer(reducer, initialState);
  const [stateDhoni, dispatch3] = useReducer(reducer, initialState);
  return (
    <div>
      <p>ViratCount: {stateVirat.count}</p>
      <button onClick={() => dispatch1({ type: "INCREMENT" })}>
        Increment Vote for Virat
      </button>
      <p>Rohitcount: {stateRohit.count}</p>
      <button onClick={() => dispatch2({ type: "INCREMENT" })}>
        Increment Vote for Rohit
      </button>
      <p>DhoniCount: {stateDhoni.count}</p>
      <button onClick={() => dispatch3({ type: "INCREMENT" })}>
        Increment Vote for Dhoni
      </button>
     </div>
  );
}

export default Voting;
