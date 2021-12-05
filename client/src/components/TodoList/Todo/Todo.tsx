import React, { useState } from "react";
import { TTodo } from "../../TTodo";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "../TodoForm/TodoForm";
import { ITodo } from "./ITodo";
import "./todo.scss";
import removeTodo from "../TodoForm/functions/removeTodo";

const Todo: React.FC<ITodo> = ({ todos, completeTodo, setNeedReload }) => {
  const [edit, setEdit] = useState<TTodo>({
    _id: null,
    text: "",
  });

  const handleRemove = (id: number) => {
    removeTodo(id);
    setNeedReload(true);
  };

  if (edit._id) {
    return (
      <TodoForm edit={edit} setNeedReload={setNeedReload} setEdit={setEdit} />
    );
  }
  return (
    <>
      {todos.map((todo: TTodo, index: number) => {
        return (
          <div
            key={index}
            className={todo.isComplete ? "todo-row complete" : "todo-row"}
          >
            <div key={todo._id} onClick={() => completeTodo(todo._id)}>
              {todo.text}
            </div>
            <div className="todo-icons">
              <RiCloseCircleLine
                onClick={() => handleRemove(todo._id!)}
                className="todo-icons-delete"
              />
              <TiEdit
                onClick={() => setEdit({ _id: todo._id, text: todo.text })}
                className="todo-icons-edit"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
