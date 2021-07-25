import React from 'react';
import appPaths from '../utilities/appPaths';
import SidebarLink from './SidebarLink';

const AdorationNav = () => (
  <>
    <SidebarLink href={appPaths.claimed} linkText="Claimed Hours" />
    <SidebarLink href={appPaths.available} linkText="Available Hours" />
    <SidebarLink href={appPaths.requests} linkText="Substitution Requests" />
  </>
);

export default AdorationNav;
