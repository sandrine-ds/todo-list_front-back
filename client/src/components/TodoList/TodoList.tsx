import React, { useState } from "react";
import { TTodo } from "../TTodo";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { fetchData } from "./TodoForm/functions/fetchData";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [needReload, setNeedReload] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  React.useEffect(() => {
    if (needReload) {
      fetchData(setTodos, setIsLoading);
      setNeedReload(!needReload);
    }
  }, [needReload]);

  if (isLoading) {
    return <div>Is Loading</div>;
  }

  const completeTodo = (id: number | null) => {
    let updatedTodos = todos.map((todo) => {
      if (todo._id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the plan for today ?</h1>
      <TodoForm setNeedReload={setNeedReload} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        setNeedReload={setNeedReload}
      />
    </>
  );
};

export default TodoList;
