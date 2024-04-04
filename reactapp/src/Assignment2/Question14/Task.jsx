import React from "react";
import "./Task.css";

function Task({ index, element, updateTask }) {
  return (
    <>
      <div id="taskid">
        <p>{element.task}</p>
        <button id="btnid" onClick={() => updateTask(index)}>
          {element.button}
        </button>
      </div>
    </>
  );
}
export default Task;
