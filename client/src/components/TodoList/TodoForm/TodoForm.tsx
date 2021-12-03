import React, { useState, useEffect, useRef } from "react";
import { TTodo } from "../../TTodo";
import addTodo from "./functions/addTodo";
import { ITodoForm } from "./ITodoForm";
import "./todoForm.scss";

const TodoForm: React.FC<ITodoForm> = ({ edit, onSubmit }) => {
  const [input, setInput] = useState<TTodo>(
    edit ? edit : { id: null, text: "" }
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      // console.log(`inputRef`, inputRef);
      inputRef.current.focus();
    }
  }, [input]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, text: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    addTodo(input);
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input.text,
    });
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
