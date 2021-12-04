import React from 'react';
import {
  AppBar,
  Toolbar,
  makeStyles,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import DrawerComponent from './Drawer';
import { landingPageLinkList } from '../../utils/NavLinkList'
import logo from 'assets/logo.png';
import Auth from 'utils/Auth';

const NavBar = ({ menu }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleLogout = () => {
    Auth.logOut();
  };

  return (
    <AppBar position='static' className={classes.root} elevation={1}>
      <Toolbar>
        <Link to="/">
          <img src={logo} alt='logo' style={{marginTop:"12px"}}/>
        </Link>
        {isMobile ? (
          <DrawerComponent menu={landingPageLinkList} logout={handleLogout} />
        ) : (
          <div className={classes.navlinks}>
            {menu?.map((item) => {
              return (
                !item.islink ?
                  <Link
                    to={item.link}
                    className={classes.link}
                    style={{ ...item.style }}
                  >
                    {item.title}
                  </Link>
                  :
                  <a
                    href={item.link}
                    className={classes.link}
                    style={{ ...item.style }}
                  >
                    {item.title}
                  </a>

              );
            })}
            <Link
              to={'/'}
              className={classes.link}
              onClick={handleLogout}
            >
              Logout
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;

const useStyles = makeStyles({
  root: {
      height:"60px",
    backgroundColor: '#363030',
    display: 'flex',
    '& .MuiToolbar-root': {
      justifyContent: 'space-between'
    }
  },

  navlinks: {
    marginLeft: 25,
    display: 'flex'
  },

  link: {
    fontFamily: 'Ubuntu',
    fontSize: '14px',
    color: '#FFFFFF',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    fontWeight: 400
  }
});
