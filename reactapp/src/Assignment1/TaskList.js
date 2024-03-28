import React from "react";

function TaskList(props) {
  return (
    <>
      {props.taskArray.map((element) => (
        <div key={element}>{element}</div>
      ))}
    </>
  );
}

export default TaskList;
