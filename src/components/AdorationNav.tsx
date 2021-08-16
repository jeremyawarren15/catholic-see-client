import {
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import React from 'react';
import { NavLink } from 'react-router-dom';
import appPaths from '../utilities/appPaths';
import SidebarLink from './SidebarLink';

const AdorationNav = () => (
  <List>
    <ListItem button component={NavLink} to={appPaths.claimed}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Claimed Hours" />
    </ListItem>
    <ListItem button component={NavLink} to={appPaths.available}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Available Hours" />
    </ListItem>
    <ListItem button component={NavLink} to={appPaths.requests}>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Substitution Requests" />
    </ListItem>
  </List>
);

export default AdorationNav;
