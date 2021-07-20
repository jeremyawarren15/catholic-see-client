import React from 'react';
import SidebarLink from './SidebarLink';

const AdorationNav = () => (
  <>
    <SidebarLink href="/" linkText="Claimed Hours" />
    <SidebarLink href="/available" linkText="Available Hours" />
    <SidebarLink href="/requests" linkText="Substitution Requests" />
  </>
);

export default AdorationNav;
