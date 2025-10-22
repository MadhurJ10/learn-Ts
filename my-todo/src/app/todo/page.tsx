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



  return (
    <div>
      <Todolist />
      <Todoinput todos={todos} setTodos={setTodos} />
      
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
