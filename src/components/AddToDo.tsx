import { useState } from "react";
import { useToDoBoard } from "../context/ToDoBoardContext";
import "./todo.css";

// import { ToDoItem } from "./ToDoItem";

// type AddToDoProps = {
//   isOpen: boolean;
// };

export const AddToDo = () => {
  // { isOpen }: AddToDoProps

  const { addToDo } = useToDoBoard();

  const [newToDo, setNewToDo] = useState("");

  const addToDoToContext = () => {
    addToDo(newToDo);
  };

  return (
    <div className="todo-box">
      <h3>Add a New To Do Item</h3>

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
