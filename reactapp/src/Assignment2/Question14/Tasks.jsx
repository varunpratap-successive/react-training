//Question14
// create a component that displays a list of tasks.
// Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed.
// Use the useCallback hook to create dynamic callback functions for each task.
// Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.

import React, { useCallback, useState } from "react";
import Task from "./Task";
import './Task.css'

const taskArray = [
  { task: "Task1",  complete:false},
  { task: "Task2", complete:false },
  { task: "Task3",  complete:false},
  { task: "Task4",  complete:false},
];

function Tasks() {
  const [taskDone, setTaskDone] = useState(taskArray);
  const updateTask = useCallback(
    (index) => {
      const newArray = [...taskDone];
      newArray[index].complete =true;
      setTaskDone(newArray);
    },
    [taskDone]
  );

  return (
    <div id="tasksid" >
      {taskDone.map((element, index) =>( <Task key={index} index={index} element={element} updateTask={updateTask} />
      ))}
    </div>
  );
}
export default Tasks;
