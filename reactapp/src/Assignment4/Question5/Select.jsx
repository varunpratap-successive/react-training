//Question5
// Construct a select dropdown menu with multiple options.
//  Control the selected option using state. When an option is selected, display a message showing the selected value.

import React, { useState } from "react";

const Select=()=>{
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
      <h2>Select an Option:</h2>
      <select value={selectedOption} onChange={(e)=>setSelectedOption(e.target.value)}>
        <option value="">Choose an option</option>
        <option value="virat">Virat</option>
        <option value="dhoni">Dhoni</option>
        <option value="rohit">Rohit</option>
        <option value="sachin">Sachin</option>
      </select>
      {selectedOption && <p>{selectedOption}</p>}
    </div>
  );
}

export default Select;
