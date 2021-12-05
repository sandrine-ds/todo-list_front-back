import React, { useState, useEffect, useRef } from "react";
import { TTodo } from "../../TTodo";
import addTodo from "./functions/addTodo";
import updateTodo from "./functions/updateTodos";
import { ITodoForm } from "./ITodoForm";
import "./todoForm.scss";

const TodoForm: React.FC<ITodoForm> = ({ edit, setNeedReload, setEdit }) => {
  const [input, setInput] = useState<TTodo>(
    edit ? edit : { _id: null, text: "" }
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [input]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, text: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    if (input._id) {
      updateTodo(input);
      console.log(input);
      if (setEdit) setEdit({ _id: null, text: "" });
    } else {
      addTodo(input);
    }
    setNeedReload(true);

    setInput({ ...input, text: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input
            type="text"
            placeholder="Update a todo"
            value={input.text}
            name="text"
            className="form-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="form-button edit">Update a todo</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input.text}
            name="text"
            className="form-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="form-button">Add todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
