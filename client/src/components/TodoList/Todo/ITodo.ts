import { TTodo } from "../../TTodo";

export interface ITodo {
    todos: TTodo[];
    completeTodo: (id: number | null) => void;
    removeTodo: (id: number | null) => void;
    updateTodo: (id: number| null, newValue: TTodo) => void;
  }