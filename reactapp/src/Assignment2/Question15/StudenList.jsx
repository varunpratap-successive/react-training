//Question15
// Create a functional component named StudentList that displays a list of student names..
// Define an array of student names as a constant within the component.
// Use the useMemo hook to memoize the list of student names.
// Render the list of student names on the screen.
// Include a button that, when clicked, appends a new student name to the list.

import React, { useState, useMemo } from "react";

function StudenList() {
  const studentNames = ["Kohli", "Dhoni", "Rohit"];

  const [nameArr, setNameArr] = useState(studentNames);
  const [newdata, setNewdata] = useState("");
  const AddName = () => {
    setNameArr([...nameArr, newdata]);
    setNewdata("");
  };
  const rendernames = useMemo(() => nameArr, [nameArr]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setNewdata(e.target.value)}
      />
      <button onClick={AddName}>AddName</button>
      <div>
        {" "}
        {rendernames.map((element,index) => {
          return (<p key={index}>{element}</p>
          
          );
        })}
      </div>
    </div>
  );
}

export default StudenList;
