//Question3
// Create a component with controlled input field and a button. When the user enters a specific value into the input (e.g., "show"),
//  a new component should be rendered below the input, displaying a message. Otherwise, nothing should be displayed.

import { useState } from "react";
import ShowComponent from "./ShowComponent";

const InputBox = () => {
  const [state, setState] = useState("");
  const [isClick, setIsClick] = useState(false);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter show"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button
        onClick={() => {
          setIsClick(!isClick);
          if (isClick) {
            setState("");
          }
        }}
      >
        Enter
      </button>
      {isClick && state === "show" ? <ShowComponent /> :null}
    </div>
  );
};

export default InputBox;
