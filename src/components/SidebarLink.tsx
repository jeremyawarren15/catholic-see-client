import React from 'react';
import { NavLink } from 'react-router-dom';

type SideBarLinkProps = {
  linkText:string,
  href:string
}

const SidebarLink = ({
  linkText, href,
}:SideBarLinkProps) => (
  <li className="nav-item">
    <NavLink exact to={href} activeClassName="active" className="nav-link">{linkText}</NavLink>
  </li>
);

export default SidebarLink;
