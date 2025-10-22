'use client';

import { useState } from "react";
import Todoinput from "../components/Todoinput";
import Todolist from "../components/Todolist";

interface Todo {
  id: number;
  msg: string;
  hehe?: boolean
}

const Page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function submitt(text: string): void {
    const newTodo = { id: Date.now(), msg: text , };
    setTodos([...todos, newTodo]);
    console.log([...todos, newTodo]);
  }

  return (
    <div>
      <Todolist />
      <Todoinput />
      
      <button onClick={() => submitt('hehehehe')}>Add Todo</button>

      {/* Display todos */}
      {todos.map(({ id, msg }) => (
        <div key={id} className="my-2 p-2 border rounded">
          <h1>ID: {id}</h1>
          <h2>Message: {msg}</h2>
        </div>
      ))}
    </div>
  );
};

export default Page;
