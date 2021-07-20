import React from 'react';
import { NavLink } from 'react-router-dom';
import LoggedOut from './LoggedOut';

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-primary border-bottom mb-3">
        <div className="container">
          <a href="google.com" className="navbar-brand text-light">ParishManager</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
            <LoggedOut />
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <a href="google.com" className="nav-link text-light">Parishes</a>
              </li>
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link text-light">Adoration</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
