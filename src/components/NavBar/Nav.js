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
import GiftImg from 'assets/gift-img.png';


const NavBar = ({ menu }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));



  return (
    <AppBar position='static' className={classes.root} elevation={1}>
      <Toolbar>
        <Link to="/">
          <img src={logo} alt='logo' style={{marginTop:"1px",height:"45px"}}/>
        </Link>
        {isMobile ? (
          <DrawerComponent menu={landingPageLinkList} />
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
              to={'/gift'}
              className={classes.link1}
            >
              <img src={GiftImg}>
              </img>
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
      height:"50px",
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
  },
  link1: {
    fontFamily: 'Ubuntu',
    fontSize: '14px',
    color: '#FFFFFF',
    textDecoration: 'none',
    padding: '0.1rem 0.5rem',
    fontWeight: 400,
    height:"75%",
    backgroundColor:"#FAA864"
  }

});
