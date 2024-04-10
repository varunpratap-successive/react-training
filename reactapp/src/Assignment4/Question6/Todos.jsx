//Question6->
// Build a simple todo list component with
// a text input for adding new tasks and a list to display them. Use controlled components to handle the input and update the list of tasks.

import React, { useState } from "react";

const Todos = () => {
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
};

export default Todos;
