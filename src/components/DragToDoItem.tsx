import { useState } from "react";
// import { useToDoBoard } from "../context/ToDoBoardContext";
import "./todo.css";

type DragToDoItemProps = {
  task: string;
};

export function DragToDoItem({ task = "default" }: DragToDoItemProps) {
  //

  //! The content of the target box
  const [content, setContent] = useState<string>(task);

  const [dropLocation, setDropLocation] = useState("ToDoColumn");

  // const { addBoardLocationRef } = useToDoBoard();
  // const [draggingToDo, setDraggingToDo] = useState("");
  // const addToDoToContext = () => {
  //   addBoardLocationRef(draggingToDo);
  // };
  //

  //
  // This function will be triggered when you start dragging
  const dragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: string
  ) => {
    event.dataTransfer.setData("text", data);
  };

  // This function will be triggered when dropping
  const dropToDoHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDropLocation("ToDoColumn");
    const data = event.dataTransfer.getData("text");
    setContent(data);
    //! T
    // setMoveData(data);
  };
  const dropInProgressHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDropLocation("InProgressColumn");
    const data = event.dataTransfer.getData("text");
    setContent(data);
    //! T
    // setMoveData(data);
  };
  const dropDoneHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDropLocation("DoneColumn");
    const data = event.dataTransfer.getData("text");
    setContent(data);
    //! T
    // setMoveData(data);
  };

  // This makes the third box become droppable
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="container-flex container">
      {dropLocation === "ToDoColumn" ? (
        <div
          className="box-styles box1"
          draggable={true}
          onDragOver={allowDrop}
          onDrop={dropToDoHandler}
          onDragStart={(event) => dragStartHandler(event, content)}
          // onDragStart={(event) => dragStartHandler(event, "box 1")}
        >
          {/* {isDropped.intoDoColumn && content} */}
          {/* {dropLocation === "ToDoColumn" && content} */}
          {content}
        </div>
      ) : (
        <div
          className="box-styles box-empty"
          draggable={true}
          onDragOver={allowDrop}
          onDrop={dropToDoHandler}
          onDragStart={(event) => dragStartHandler(event, content)}
          // onDragStart={(event) => dragStartHandler(event, "box 1")}
        >
          {/* {isDropped.intoDoColumn && content} */}
          {/* {dropLocation === "ToDoColumn" && content} */}
          {/* {content} */}
        </div>
      )}

      {dropLocation === "InProgressColumn" ? (
        <div
          className="box-styles box2"
          draggable={true}
          onDragOver={allowDrop}
          onDrop={dropInProgressHandler}
          onDragStart={(event) => dragStartHandler(event, content)}
          // onDragStart={(event) => dragStartHandler(event, "box 2")}
        >
          {content}
        </div>
      ) : (
        <div
          className="box-styles box-empty"
          draggable={true}
          onDragOver={allowDrop}
          onDrop={dropInProgressHandler}
          onDragStart={(event) => dragStartHandler(event, content)}
          // onDragStart={(event) => dragStartHandler(event, "box 2")}
        ></div>
      )}

      {dropLocation === "DoneColumn" ? (
        <div
          className="box-styles box3"
          draggable={true}
          onDragOver={allowDrop}
          onDrop={dropDoneHandler}
          onDragStart={(event) => dragStartHandler(event, content)}
        >
          {content}
        </div>
      ) : (
        <div
          className="box-styles box-empty"
          draggable={true}
          onDragOver={allowDrop}
          onDrop={dropDoneHandler}
          onDragStart={(event) => dragStartHandler(event, content)}
        ></div>
      )}
    </div>
  );
}
