import { createContext, useContext, ReactNode, useState } from "react";
// import { ToDoBoard } from "../components/ToDoBoard";

type ToDoBoardProviderProps = {
  children: ReactNode;
};
// type ToDoList = {
// toDoItem: string;
//   id: number;
//   quantity: number;
// };
type ToDoBoardContext = {
  // getToDoLocation: string;
  toDoList: Array<string>;
  addToDo: (newToDo: string) => void;
  addBoardLocationRef: (newLocation: string) => void;
  // toDoList: Array<string>;
  // toDoList: ToDoItem[];
  //. toDoQuantity: number;
  // openToDo: () => void;
  // closeToDo: () => void;
  // getItemQuantity: (id: number) => number;
  // decreaseToDoQuantity: (id: number) => void;
  // removeFromToDo: (id: number) => void;
};

const ToDoBoardContext = createContext({} as ToDoBoardContext);

export function useToDoBoard() {
  return useContext(ToDoBoardContext);
}

export function ToDoBoardProvider({ children }: ToDoBoardProviderProps) {

  // const getToDoLocation = "item status hard coded";
  const [toDoList, setToDoList] = useState(["TODO: example_#1"]);

  function addToDo(newToDo: string) {
    setToDoList((currItems) => {
      // if (toDoList.find((item) => item.id === id) == null) {
      //   return [...currItems, { id, quantity: 1 }];
      // } else
      if (newToDo) {
        return [...currItems, newToDo];
        // return [...currItems, newToDo];
      }
    });
  }

  function addBoardLocationRef() {
    
  }

  return (
    <ToDoBoardContext.Provider
      value={{
        // getToDoLocation,
        toDoList,
        addToDo,
        addBoardLocationRef,
        // decreaseToDoQuantity,
        // removeFromToDo,
        // openToDo,
        // closeToDo,
        // ToDoQuantity,
      }}
    >
      {children}
      {/* <ToDoBoard isOpen={isOpen} /> */}
    </ToDoBoardContext.Provider>
  );
}

// * ___________________________
// * ___________________________
// * ___________________________
// const [isOpen, setIsOpen] = useState(false);
// const [toDoList, setToDoList] = useLocalStorage<ToDoItem[]>(
//   "shopping-ToDo",
//   []
// );
// const openToDo = () => {
//   setIsOpen(true);
// };
// function getItemQuantity(id: number) {
//   return toDoList.find((item) => item.id === id)?.quantity || 0;
// }
// function removeFromToDo(id: number) {
//   setToDoList((currItems) => {
//     return currItems.filter((item) => item.id !== id);
//   });
// }

//*_____return _
