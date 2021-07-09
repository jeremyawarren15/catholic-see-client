import React from 'react';
import LoggedIn from './LoggedIn';

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-dark border-bottom mb-3">
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
            <LoggedIn />
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <a href="google.com" className="nav-link text-light">Parishes</a>
              </li>
              <li className="nav-item">
                <a href="google.com" className="nav-link text-light">Adoration</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
