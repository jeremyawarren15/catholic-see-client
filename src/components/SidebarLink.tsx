import React from 'react';

type SideBarLinkProps = {
  linkText:string,
  active:boolean
}

function SidebarLink({ linkText, active }:SideBarLinkProps) {
  return (
    <li className="nav-item">
      <a href="google.com" className={`nav-link ${active ? 'active' : ''}`}>{linkText}</a>
    </li>
  );
}

export default SidebarLink;
