// src/components/Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.module.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => navigate(-1)}>Back</button>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
