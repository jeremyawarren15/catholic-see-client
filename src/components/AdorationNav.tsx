import {
  List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import { AccessAlarm, Feedback } from '@material-ui/icons';
import ListIcon from '@material-ui/icons/List';
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
        <ListIcon />
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
        <AccessAlarm />
      </ListItemIcon>
      <ListItemText primary="Available Hours" />
    </ListItem>
    <ListItem button component={NavLink} to={appPaths.requests}>
      <ListItemIcon>
        <Feedback />
      </ListItemIcon>
      <ListItemText primary="Sub Requests" />
    </ListItem>
  </List>
);

export default AdorationNav;
