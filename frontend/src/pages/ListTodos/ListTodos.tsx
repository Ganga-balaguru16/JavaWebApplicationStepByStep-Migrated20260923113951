import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Todo {
  name: string;
  category: string;
}

const ListTodos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [name, setName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const fetchTodos = async () => {
    try {
      const response = await axios.get<Todo[]>('/list-todos.do');
      setTodos(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to load todos.');
    }
  };

  const fetchUserName = async () => {
    try {
      const response = await axios.get<{ name: string }>('/login.do?format=json');
      setName(response.data.name);
    } catch (error) {
      setName('');
    }
  };

  const handleDelete = async (todo: Todo) => {
    const confirmDelete = window.confirm(`Delete todo "${todo.name}"?`);
    if (!confirmDelete) return;

    try {
      await axios.get(
        `/delete-todo.do?todo=${encodeURIComponent(todo.name)}&category=${encodeURIComponent(todo.category)}`
      );
      await fetchTodos();
    } catch (error) {
      setErrorMessage('Failed to delete todo.');
    }
  };

  useEffect(() => {
    fetchUserName();
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>Welcome {name}</h1>

      <table className="table table-striped">
        <caption>Your Todos are</caption>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.name}</td>
              <td>{todo.category}</td>
              <td>
                <a
                  href={`/delete-todo.do?todo=${encodeURIComponent(todo.name)}&category=${encodeURIComponent(todo.category)}`}
                  className="btn btn-danger"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(todo);
                  }}
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        <span style={{ color: 'red' }}>{errorMessage}</span>
      </p>

      <a className="btn btn-success" href="/add-todo.do">
        Add New Todo
      </a>
    </div>
  );
};

export default ListTodos;