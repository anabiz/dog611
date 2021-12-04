import React, { useState } from 'react';
import { Button,TextField,useMediaQuery, makeStyles, Box,useTheme, Grid } from '@material-ui/core';

const Footer = () => {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const isXsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();

    

  return (
    <div >
         <main>
            <Box style={{ backgroundColor: "#363030",minHeight:"200px" }}>
                <Grid container direction= {isSmDown ? 'column-reverse' : null}>
                    <Grid item xs={12} md={6}>
                        <Box py={2} style={{ textAlign:"center"}}>
                            <Box mx={8} style={{ textAlign:"left", border:"1px solid #4C3932"}}>
                                <h1 
                                   className={classes.text}
                                >
                                    SUBSCRIBE TO OUR NEWSLETTER
                                </h1>
                                <h1
                                    className={classes.text1}
                                >
                                    Sign up with your email address to receive news and updates
                                </h1>
                               
                               
                            </Box> 
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                       <Box my={4} style={{border:"1px solid #4C3932"}}>
                            <img 
                               style={{float: !isSmDown ? "right" :"none"}}
                               className={classes.pageImg}
                            ></img>
                       </Box>
                    </Grid>
                </Grid>
            </Box>
        </main>     
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
    textcontainer:{
    },
    text:{
        fontSize:"24px",
        color:"#FFFFFF",
        width:"100%",
        lineHeight:"25px",
        fontFamily: 'Montserrat',

    },
    text1:{
        fontSize: "18px", 
        color: "#FFFFFF", 
        fontWeight: 500,
        fontFamily: 'Montserrat',
    },
  

    '@media screen and (max-width: 624px)': {
        text:{
            fontSize:"18px",
        },
        text1:{
            fontSize: "14px", 
            fontWeight: 500,
        },
     
    }


}))



export default Footer;
