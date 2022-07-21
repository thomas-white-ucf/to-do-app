import { useState } from "react";
import { useToDoBoard } from "../context/ToDoBoardContext";
import "./todo.css";

export const AddToDo = () => {
  const { addToDo } = useToDoBoard();

  const [newToDo, setNewToDo] = useState("");

  const addToDoToContext = () => {
    // check to see newToDo has an input
    if (newToDo.charAt(0)) {
      addToDo(newToDo);
    }
    setNewToDo("");
  };

  return (
    <div className="todo-box">
      <h2>Add a New To Do Item</h2>

      <div>
        <input
          type="text"
          placeholder="Start typing..."
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <br />
        <button onClick={addToDoToContext}>Add Todo</button>
      </div>
    </div>
  );
};
