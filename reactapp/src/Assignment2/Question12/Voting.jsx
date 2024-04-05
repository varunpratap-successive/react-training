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
      case "INCREMENTVIRAT":
        return { ...state, viratcount: state.viratcount + 1 };
      case "INCREMENTROHIT":
        return { ...state, rohitcount: state.rohitcount + 1 };
      case "INCREMENTDHONI":
        return { ...state, dhonicount: state.dhonicount + 1 };
      default:
        return state;
    }
  };
  const initialState = { viratcount: 0, rohitcount: 0, dhonicount: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>ViratCount: {state.viratcount}</p>
      <button onClick={() => dispatch({ type: "INCREMENTVIRAT" })}>
        Increment Vote for Virat
      </button>
      <p>Rohitcount: {state.rohitcount}</p>
      <button onClick={() => dispatch({ type: "INCREMENTROHIT" })}>
        Increment Vote for Rohit
      </button>
      <p>DhoniCount: {state.dhonicount}</p>
      <button onClick={() => dispatch({ type: "INCREMENTDHONI" })}>
        Increment Vote for Dhoni
      </button>
    </div>
  );
}

export default Voting;
