import React, { useState } from "react";
import { TTodo } from "../TTodo";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList:React.FC =() => {

  const [todos, setTodos] = useState<TTodo[]>([]);
  const addTodo = (todo: TTodo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos: TTodo[] = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id: number | null) => {
    const removeArr = [...todos].filter((todo: TTodo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (id: number | null, newValue: TTodo) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev: TTodo[]) =>
      prev.map((item: TTodo) => (item.id === id ? newValue : item))
    );
  };

  const completeTodo = (id: number | null) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the plan for today ?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </>
  );
}

export default TodoList;
