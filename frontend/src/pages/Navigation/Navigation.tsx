import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('list-todos.do')) {
      setActive('todos');
    } else if (path === '/') {
      setActive('home');
    }
  }, []);

  return (
    <nav className="navbar navbar-default">
      <a href="/" className="navbar-brand">Brand</a>

      <ul className="nav navbar-nav">
        <li className={active === 'home' ? 'active' : ''}>
          <a href="/">Home</a>
        </li>
        <li className={active === 'todos' ? 'active' : ''}>
          <a href="/list-todos.do">Todos</a>
        </li>
        <li>
          <a href="http://www.in28minutes.com">In28Minutes</a>
        </li>
      </ul>

      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="/logout.do">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;