// Create a functional component named TaskList that accepts an array of task names as a prop.
// Use the map function to render each task name as a list item.
// Import and render the TaskList component in the App component with an array of tasks.



import React from "react";

function TaskList({taskArray}) {
  
  return (
    <>
      {taskArray.map((element) => (
        <div key={element}>{element}</div>
      ))}
    </>
  );
}

export default TaskList;
