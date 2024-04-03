//Question14
// create a component that displays a list of tasks.
// Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed.
// Use the useCallback hook to create dynamic callback functions for each task.
// Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.

import React, { useCallback, useState } from "react";
import Task from "./Task";

const taskArray = [
  { task: "Task1", color: "green", button: "Complete " },
  { task: "Task2", color: "green", button: "Complete " },
  { task: "Task3", color: "green", button: "Complete " },
  { task: "Task4", color: "green", button: "Complete " },
];

function Tasks() {
  const [taskDone, setTaskDone] = useState(taskArray);
  const updateTask = useCallback(
    (index) => {
      const newArray = [...taskDone];
      newArray[index].button = "Completed";
      newArray[index].color = "blue";
      setTaskDone(newArray);
    },
    [taskDone]
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {taskDone.map((element, index) =>( <Task key={index} index={index} element={element} updateTask={updateTask} />
      ))}
    </div>
  );
}
export default Tasks;
