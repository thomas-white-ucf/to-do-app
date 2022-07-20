import { useToDoBoard } from "../context/ToDoBoardContext";
import { DragToDoItem } from "./DragToDoItem";

// type ToDoItemsProps = {
// id: number;
// name: string;
// };
// { id, name }: ToDoItemsProps

export function ToDoItems() {
  const {
    toDoList,
    // increaseCartQuantity,
    // decreaseCartQuantity,
    // removeFromCart,
  } = useToDoBoard();

  // const quantity = getItemQuantity(id);

  return (
    <>
      <section>
        {/* <h4>To-do-Item List</h4> */}
        {/* {toDoList.map((todo) => (
          <div key={todo}>{todo}</div>
        ))} */}
        <div className="column-headers">
          <h2>To Do:</h2>
          <h2>In Progress:</h2>
          <h2>Done:</h2>
        </div>
        {toDoList.map((todo) => (
          <DragToDoItem task={todo} key={todo} />
        ))}
        {/* <DragToDoItem /> */}
      </section>
    </>
  );
}
