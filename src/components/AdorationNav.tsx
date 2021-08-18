import {
  List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import React from 'react';
import { NavLink } from 'react-router-dom';
import appPaths from '../utilities/appPaths';

const AdorationNav = ({ handleActionCallback }) => (
  <List>
    <ListItem
      button
      component={NavLink}
      to={appPaths.claimed}
      onClick={(e) => handleActionCallback()}
    >
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Claimed Hours" />
    </ListItem>
    <ListItem
      button
      component={NavLink}
      to={appPaths.available}
      onClick={(e) => handleActionCallback()}
    >
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
