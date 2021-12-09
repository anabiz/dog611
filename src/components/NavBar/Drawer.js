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
import GiftImg from 'assets/gift-img.png';
import MenuIcon from '@material-ui/icons/Menu';

const DrawerComponent = ({ menu }) => {
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
              <Link to={'/gift'} className={classes.link1}>
                <img src={GiftImg} style={{height:"20px"}}>
                </img>
              </Link>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.icon}
      >
        <MenuIcon className={classes.root} />
      </IconButton>
    </>
  );
};
export default DrawerComponent;

const useStyles = makeStyles(() => ({
  root:{
    color:"#FFFFFF",
  },
  link: {
    fontFamily: 'Ubuntu',
    fontSize: '16px',
    color: '#393A4A',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    fontWeight: 400
  },
  icon:{
    color:"#FFFFF",
    '& .MuiIconButton-root':{
      color:"#FFFFFF"
    },
  },
  link1: {
    fontSize: '14px',
    textDecoration: 'none',
    padding: '0.7rem 0.5rem',
    fontWeight: 400,
    height:"40px",
    backgroundColor:"#FAA864"
  }
}));
