import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTodo: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append('todo', todo);
    formData.append('category', category);
    formData.append('add', 'Submit');

    try {
      const response = await fetch('/add-todo.do', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        credentials: 'include',
      });

      if (response.ok) {
        // After successful addition, redirect to the list page
        navigate('/list-todos.do');
      } else {
        console.error('Failed to add todo: ', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form: ', error);
    }
  };

  return (
    <div className="container">
      <h2>Your New Action Item:</h2>
      <form onSubmit={handleSubmit} method="POST" action="/add-todo.do">
        <fieldset className="form-group">
          <label htmlFor="todo">Description</label>
          <input
            id="todo"
            name="todo"
            type="text"
            className="form-control"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <br />
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
        </fieldset>
        <input
          name="add"
          type="submit"
          className="btn btn-success"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddTodo;