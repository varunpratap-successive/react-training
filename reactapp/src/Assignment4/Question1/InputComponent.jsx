//Question1
// Create a React component with an input field. Implement it as a controlled component where the input value
// is controlled by the component's state. When the user types into the input field, the component's state should update accordingly.

import React, { useState } from "react";

const InputComponent = () => {
  const [input, setInput] = useState();
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input}
    </div>
  );
};

export default InputComponent;
