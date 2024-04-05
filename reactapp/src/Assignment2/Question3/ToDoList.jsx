//Question3
// Create a functional component called ToDoList.
// Use the useState hook to manage a state variable named todos, initialized as an empty array.
// Render a list of todos using the map function.
// Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
// Use the useState hook to manage the state of each todo item (completed or not).

import React, { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();
  const userinput = (event) => {
    setTodo(event.target.value);
  };
  const addtodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };
  const deletetodo = (element) => {
    let newtodos = todos.filter((todoelement) => {
      //we can also use splice here
      return todoelement !== element;
    });
    setTodos(newtodos);
    setTodo("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type your todo here"
        value={todo}
        onChange={userinput}
      />
      <button onClick={addtodo}>Add todo</button>
      <div>
        {todos.map((element) => {
          return (
            <>
              <div>{element}</div>
              <input type="checkbox" />
              <button onClick={() => deletetodo(element)}>Delete</button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoList;
