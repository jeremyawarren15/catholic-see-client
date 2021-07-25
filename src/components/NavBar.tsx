import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import appPaths from '../utilities/appPaths';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function NavBar() {
  const { token } = useContext(UserContext);

  const renderLoginButtons = () => {
    if (!token) {
      return (<LoggedOut />);
    }

    return <LoggedIn />;
  };

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-primary border-bottom mb-3">
        <div className="container">
          <NavLink exact to={appPaths.home} activeClassName="active" className="navbar-brand text-light">ParishManager</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
            {renderLoginButtons()}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
