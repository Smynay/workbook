import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

export default function App() {
  const [todos, setTodos] = useState([
    // { id: 1, title: 'First todo', completed: false },
    // { id: 2, title: 'Second todo', completed: true },
  ]);
  const [todoTitle, setTodoTitle] = useState('');

  const handlerClick = () => console.log('click');

  useEffect(() => {
    const raw = localStorage.getItem('todos') || [];
    setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    document.addEventListener('click', handlerClick);
    localStorage.setItem('todos', JSON.stringify(todos));
    return () => {
      document.removeEventListener('click', handlerClick);
    };
  }, [todos]);

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false,
        },
      ]);
      setTodoTitle('');
    }
  };

  return (
    <div className="container">
      <h1>Todo app</h1>

      <div className="input-field">
        <input
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
          onKeyPress={addTodo}
        />
        <label>Todo name</label>
      </div>

      <TodoList todos={todos} />
    </div>
  );
}
