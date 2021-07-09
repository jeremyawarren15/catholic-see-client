import React from 'react';
import SidebarLink from './SidebarLink';

const AdorationNav = () => (
  <>
    <SidebarLink active={false} linkText="Claimed Hours" />
    <SidebarLink active linkText="Available Hours" />
    <SidebarLink active={false} linkText="Substitution Requests" />
  </>
);

export default AdorationNav;
