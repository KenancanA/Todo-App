import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../css/App.css";
import { FaCheck } from "react-icons/fa";

//? Videoda yapmazsa her todoya checkbox koy.
function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;
  const [ediTable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  };

  return (
    <div className="todo-main">
      <div>
        {ediTable ? (
          <input
            vlaue={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input, new-todo"
            type="text"
          />
        ) : (
          content
        )}
      </div>

      <div
        className="todo-icons"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="todo-icons2"
          style={{ marginRight: "10px", marginTop: "2.3px" }}
        >
          <IoIosRemoveCircle onClick={removeTodo} />
        </div>

        {ediTable ? (
          <div className="todo-icons2">
            <FaCheck style={{ marginTop: "2.1px" }} onClick={updateTodo} />
          </div>
        ) : (
          <div className="todo-icons2">
            <FaEdit onClick={() => setEditable(true)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
