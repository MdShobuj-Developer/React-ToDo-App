import React from "react";

import Todo from "./Todo";

function Todos(props) {
  return (
    <div className="todoContainer">
      {props.todos.map((e) => {
        return (
          <Todo
            key={e.id}
            id={e.id}
            title={e.todo.title}
            desc={e.todo.desc}
            onRemoveItem={props.onRemoveTodo}
          />
        );
      })}
    </div>
  );
}

export default Todos;
