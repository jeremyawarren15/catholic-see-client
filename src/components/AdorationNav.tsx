import React from 'react';
import urls from '../utilities/urlResolver';
import SidebarLink from './SidebarLink';

const AdorationNav = () => (
  <>
    <SidebarLink href={urls.claimed} linkText="Claimed Hours" />
    <SidebarLink href={urls.available} linkText="Available Hours" />
    <SidebarLink href={urls.requests} linkText="Substitution Requests" />
  </>
);

export default AdorationNav;
