import { AddToDo } from "./AddToDo";
import { ToDoItems } from "./ToDoItems";
import "./todo.css";

// type ToDoBoardProps = {
//   isOpen: boolean;
// };
// { isOpen }: ToDoBoardProps

export const ToDoBoard = () => {
  // const { closeCart, cartItems } = useToDoBoard();
  return (
    <div className="container">
      <h1>Welcome to the To-Do Action Board</h1>
      <AddToDo />
      <ToDoItems />
    </div>
  );
};
