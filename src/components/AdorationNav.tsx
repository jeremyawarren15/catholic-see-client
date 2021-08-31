import {
  Divider,
  List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import { AccessAlarm, Feedback, Settings } from '@material-ui/icons';
import ListIcon from '@material-ui/icons/List';
import React from 'react';
import { NavLink } from 'react-router-dom';
import appPaths from '../utilities/appPaths';

type Props = {
  handleActionCallback: () => void
}

const AdorationNav = ({ handleActionCallback }: Props) => (
  <List>
    <ListItem
      button
      component={NavLink}
      to={appPaths.claimed}
      onClick={() => handleActionCallback()}
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
      onClick={() => handleActionCallback()}
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
    <Divider />
    <ListItem button component={NavLink} to={appPaths.settings}>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </List>
);

export default AdorationNav;
