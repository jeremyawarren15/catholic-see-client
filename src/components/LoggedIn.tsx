import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function LoggedIn() {
  const { name, logOut } = useContext(UserContext);
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="google.com" className="nav-link text-light" title="Manage">{name}</a>
      </li>
      <li className="nav-item">
        <button type="button" onClick={() => logOut()} className="nav-link btn btn-link text-light">Logout</button>
      </li>
    </ul>
  );
}

export default LoggedIn;
