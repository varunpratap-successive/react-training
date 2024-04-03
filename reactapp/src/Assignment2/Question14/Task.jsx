
import React from "react";

function Task({ index,element, updateTask}) {
  return (
    <>
      <div style={{display: "flex",
        flexDirection: "row",
        alignItems: "center",
        }} >
        <p>{element.task}</p>
        <button style={{
            color: element.color,
          }}
          onClick={() => updateTask(index)}
        >
          {element.button}
        </button>
      </div>
    </>
  );
}
export default Task;