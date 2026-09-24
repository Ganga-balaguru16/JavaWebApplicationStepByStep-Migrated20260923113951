import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      <Helmet>
        <title>Todos</title>
        <link rel="stylesheet" href="webjars/bootstrap/3.3.6/css/bootstrap.min.css" />
        <style>{`
          .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 60px;
            background-color: #f5f5f5;
          }
        `}</style>
      </Helmet>

      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              aria-expanded={isNavOpen}
              onClick={toggleNav}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              Todos
            </Link>
          </div>

          <div className={`collapse navbar-collapse ${isNavOpen ? 'in' : ''}`}>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="app-root">
        {/* Application content goes here */}
      </div>
    </>
  );
};

export default Header;