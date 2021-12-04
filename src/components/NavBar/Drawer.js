import React, { useState } from 'react';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';

const DrawerComponent = ({ menu, logout }) => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {menu?.map((item) => {
            return (
              <ListItem
                onClick={() => setOpenDrawer(false)}
                selected={item.link === location.pathname}
              >
                <ListItemText>
                  <Link to={item.link} className={classes.link}>
                    {item.title}
                  </Link>
                </ListItemText>
              </ListItem>
            );
          })}

          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to={'/'} className={classes.link} onClick={logout}>
                Logout
              </Link>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon color="#FFFFF"/>
      </IconButton>
    </>
  );
};
export default DrawerComponent;

const useStyles = makeStyles(() => ({
  link: {
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    color: '#393A4A',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    fontWeight: 400
  },
  icon:{
    color:"#FFFFF"
  }
}));
