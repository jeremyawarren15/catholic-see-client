import React from 'react';
import { NavLink } from 'react-router-dom';

function LoggedOut() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="google.com" className="nav-link text-light">Register</a>
      </li>
      <li className="nav-item">
        <NavLink exact to="/login" className="nav-link text-light">Login</NavLink>
      </li>
    </ul>
  );
}

export default LoggedOut;
