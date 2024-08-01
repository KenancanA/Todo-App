import React, { useState } from "react";
import "../css/App.css";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const deleteInput = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 9999999),
      content: newTodo,
    };
    onCreateTodo(request);
    deleteInput();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createTodo();
    }
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={handleKeyPress}
        className="todo-input"
        type="text"
        placeholder="Todo Giriniz."
      />
      <button onClick={createTodo} className="todo-create-button">
        TODO
      </button>
    </div>
  );
}

export default TodoCreate;
