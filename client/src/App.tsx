import React from "react";
import "./App.scss";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
