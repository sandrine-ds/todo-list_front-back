import React, { useState } from "react";
import { TTodo } from "../../TTodo";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "../TodoForm/TodoForm";
import { ITodo } from "./ITodo";
import "./todo.scss"


const Todo: React.FC<ITodo> = ({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
}) => {
  const [edit, setEdit] = useState<TTodo>({
    id: null,
    text: "",
  });

  const submitUpdate = (value: TTodo) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, text: "" });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return (
    <>
      {todos.map((todo: TTodo, index: number) => (
        <div
          key={index}
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className="todo-icons">
            <RiCloseCircleLine
              onClick={() => removeTodo(todo.id)}
              className="todo-icons-delete"
            />
            <TiEdit
              onClick={() => setEdit({ id: todo.id, text: todo.text })}
              className="todo-icons-edit"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todo;
