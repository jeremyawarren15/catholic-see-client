import React from 'react';

function LoggedIn() {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="google.com" className="nav-link text-light" title="Manage">Jeremy Warren</a>
      </li>
      <li className="nav-item">
        <form className="form-inline">
          <button type="submit" className="nav-link btn btn-link text-light">Logout</button>
        </form>
      </li>
    </ul>
  );
}

export default LoggedIn;
