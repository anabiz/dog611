import React, { useState } from 'react';
import { Button,TextField,useMediaQuery, makeStyles, Box,useTheme, Grid } from '@material-ui/core';
import instagram from '../../assets/instagram.png';
import twiter from '../../assets/twiter.png';
import facebook from '../../assets/facebook.png';


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
                <Grid container>
                    <Grid item xs={12} md={3} >
                        <Box my={6} mx={8} style={{ textAlign: isXsDown || isSmDown ? "center" : "left"}}>
                            <h1
                                className={classes.text1}
                            >
                                DOG611 Iis a Dog Advocacy Group payments are processed through a private network of computers linked through a shared ledgde. Business opportuniti.
                            </h1>
                        </Box> 
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box my={6} style={{ textAlign: isXsDown || isSmDown ? "center" : "left"}}>
                            <h1 
                                className={classes.text}
                            >
                                SERVICES
                            </h1>
                            <h1
                                className={classes.text1}
                            >
                                Dog Protection
                            </h1>
                        </Box> 
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box my={6} style={{textAlign: isXsDown || isSmDown ? "center" : "left"}}>
                            <h1 
                                className={classes.text}
                            >
                                COMPANY
                            </h1>
                            <h1
                                className={classes.text1}
                            >
                                Contact
                            </h1>
                        </Box> 
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Box my={6} style={{ textAlign: isXsDown || isSmDown ? "center" : "left"}}>
                            <h1 
                                className={classes.text}
                            >
                                CONNECT
                            </h1>
                            <h1
                                className={classes.text1}
                            >
                                Saveoursouls611@gmail.com
                            </h1>
                            <h1
                                className={classes.text1}
                            >
                                +1(773)647-4911
                            </h1>
                               
                            <Box style={{width:"100%"}}>
                                <img src={facebook}>
                                </img>
                                <img style={{marginLeft:"12px"}} src={twiter}>
                                </img>
                                <img style={{marginLeft:"12px"}} src={instagram}>
                                </img>  
                            </Box>
                        </Box> 
                    </Grid>
                    <Box mx={4} my={4} style={{display:"flex", width:"100%"}}>
                        <hr 
                            style={{ border: "none",height: "1px", width:"35%",border:"1px solid #FFFFFF",float:"left"}}
                        ></hr>
                        <p 
                            style={{color:"#ffffff",marginTop:"0px"}}
                        >
                            {`© DOG611. All simple rights observed.`}
                        </p>
                        <hr 
                            style={{border: "none",height: "1px",width:"35%",border:"1px solid #FFFFFF"}}
                        ></hr>
                    </Box>
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
        fontSize:"18px",
        color:"#FFFFFF",
        width:"100%",
        lineHeight:"25px",
        fontWeight: 700,
        fontFamily: 'Montserrat',

    },
    text1:{
        fontSize: "14px", 
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
