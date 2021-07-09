import React from 'react';

function LoggedOut() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="google.com" className="nav-link text-light">Register</a>
      </li>
      <li className="nav-item">
        <a href="google.com" className="nav-link text-light">Login</a>
      </li>
    </ul>
  );
}

export default LoggedOut;
