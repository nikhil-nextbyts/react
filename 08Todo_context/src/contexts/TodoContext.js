 
/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";

export const Todocontext = createContext({
  todos: [
    {
      id: 1,
      msg: "Todo msg",
      complete: false,
    },
  ],
  addTodo: (msg) => {},
  updateTodo: (id, msg) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(Todocontext);
};

export const TodoProvider = Todocontext.Provider;
