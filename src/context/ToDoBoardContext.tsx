import { createContext, useContext, ReactNode, useState } from "react";
// import { ToDoBoard } from "../components/ToDoBoard";

type ToDoBoardProviderProps = {
  children: ReactNode;
};
// type ToDoList = {
//. toDoItem: string;
//   id: number;
//   quantity: number;
// };
type ToDoBoardContext = {
  toDoList: Array<string>;
  addToDo: (newToDo: string) => void;
  addBoardLocationRef: (newLocation: string) => void;
};

const ToDoBoardContext = createContext({} as ToDoBoardContext);

export function useToDoBoard() {
  return useContext(ToDoBoardContext);
}

export function ToDoBoardProvider({ children }: ToDoBoardProviderProps) {
  const [toDoList, setToDoList] = useState(["TODO: example_#1"]);

  function addToDo(newToDo: string) {
    setToDoList((currItems) => {
      if (newToDo) {
        return [...currItems, newToDo];
      }
    });
  }

  function addBoardLocationRef() {}

  return (
    <ToDoBoardContext.Provider
      value={{
        toDoList,
        addToDo,
        addBoardLocationRef,
      }}
    >
      {children}
      {/* <ToDoBoard isOpen={isOpen} /> */}
    </ToDoBoardContext.Provider>
  );
}
