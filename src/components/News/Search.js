import React from 'react';
import { Grid,Box, Typography,useMediaQuery,useTheme,Button } from '@material-ui/core';
import {
    createStyles,
    fade,
    Theme,
    makeStyles,
  } from '@material-ui/core/styles';
  import SearchIcon from '@material-ui/icons/Search';

const Search = () => { 
    const theme = useTheme();
    const isXsDown  = useMediaQuery(theme.breakpoints.down('xs'));
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const classes = useStyles();

  return (
    <div style={{backgroundColor: '#FFFFFF',height: "150px", width:"100%", alignItems:"center"}}>
        <Box height="100%" style={{border:"1px solid #FFFFFF"}}>
            <Typography 
                className={classes.headtext}
            >
                Search for stories
            </Typography>
            <div 
                className={classes.search}
                style={{
                  width:isXsDown ? "90%" : "40%",
                  height:"30px",
                  margin:"0 auto", 
                  display:"flex",
                  border: "1px solid #4C3932",
                  borderRadius:"5px",
                }}
            >
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <input
                    style={{width:isXsDown ? "60%" : "80%",outline:"none", border:"none"}}
                >
                </input>

                <button
                    style={{
                         backgroundColor:"#4C3932",
                         width: isXsDown ? "35%" : "15%",
                         color:"#FAA864"
                    }}
                >
                    SEARCH
                </button>
            </div>
        </Box>
        
    </div>
  );
};

export default Search;


const useStyles = makeStyles((theme) =>
    createStyles({
        headtext:{
            fontSize:"38px",
            margin:"15px auto",
            marginTop:"26px",
            color:"#4C3932",
            lineHeight:"25px",
            fontWeight: 400,
            fontFamily: 'Montserrat',
            textAlign:"center"
        },
      search: {
        backgroundColor: fade(theme.palette.common.white, 0.15),

        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 1.5),
        height: '100%',
        position: 'relative',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'center',
      },
    
    
    })
  );
  
