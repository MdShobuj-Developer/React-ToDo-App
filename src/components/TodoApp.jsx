import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CollectTodo from "./CollectTodo";
import Todos from "./Todos";

//get todo data form localStorage
const getLocalStorage = () => {
  let data = localStorage.getItem("todoData");
  if (data) {
    return (data = JSON.parse(localStorage.getItem("todoData")));
  } else {
    return [];
  }
};

//rendering todo app
function TodoApp() {
  const [todoData, setTodoData] = useState(getLocalStorage());

  //set todo data in todoData state for form data
  const todos = (todo) => {
    const id = uuidv4();
    setTodoData((preveTodos) => {
      return [...preveTodos, { id: id, todo }];
    });
  };

  //delete todo data
  const handleRemoveTodo = (id) => {
    const filterTodos = todoData.filter((todo) => todo.id !== id);
    setTodoData(filterTodos);
  };

  //set todo data in localStorage
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <div className="container">
      <h1>ToDo App</h1>
      <CollectTodo todos={todos} />
      <Todos todos={todoData} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

export default TodoApp;
