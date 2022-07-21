import { AddToDo } from "./AddToDo";
import { ToDoItems } from "./ToDoItems";
import "./todo.css";

export const ToDoBoard = () => {
  //

  return (
    <div className="container">
      <h1>
        <code>Welcome to the To-Do Action Board</code>
      </h1>
      <AddToDo />
      <ToDoItems />
    </div>
  );
};
