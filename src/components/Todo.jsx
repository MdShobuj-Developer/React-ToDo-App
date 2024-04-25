import React from "react";
import { FaTrashCan } from "react-icons/fa6";
function Todo(props) {
  const { title, desc, id } = props;
  const handleClick = (id) => {
    props.onRemoveItem(id);
  };

  return (
    <div className="todo">
      <div>
        <h3>{title}</h3>
        <i
          onClick={() => {
            handleClick(id);
          }}
        >
          <FaTrashCan />
        </i>
      </div>
      <p>{desc}</p>
    </div>
  );
}

export default Todo;
