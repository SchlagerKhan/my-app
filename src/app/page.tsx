"use client";

import React, { useState } from 'react';

interface Todo {
  text: string;
  complete: boolean;
}

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() !== '') {
      const newTodo: Todo = { text, complete: false };
      setTodos([...todos, newTodo]);
      setText('');
    }
  };

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-app">
      <input className="todo-input" value={text} onChange={e => setText(e.target.value)} onKeyPress={handleKeyPress} />
      <button className="add-todo-btn" onClick={addTodo}>Add Todo</button>
      {todos.map((todo, index) => (
        <div className="todo-item" key={index}>
          <span className={todo.complete ? 'todo-text completed' : 'todo-text'}>
            {todo.text}
          </span>
          <button className="toggle-todo-btn" onClick={() => toggleTodo(index)}>
            {todo.complete ? 'Incomplete' : 'Complete'}
          </button>
        </div>
      ))}
    </div>
  );
}