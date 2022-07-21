import { useToDoBoard } from "../context/ToDoBoardContext";
import { DragToDoItem } from "./DragToDoItem";

export function ToDoItems() {
  const { toDoList } = useToDoBoard();

  return (
    <>
      <section>
        <div className="column-headers">
          <h2>To Do:</h2>
          <h2>In Progress:</h2>
          <h2>Done:</h2>
        </div>
        {toDoList.map((todo) => (
          <DragToDoItem task={todo} key={todo} />
        ))}
      </section>
    </>
  );
}
