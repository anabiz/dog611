import React, { useState } from 'react';
import { Typography, Container,useMediaQuery, makeStyles, Box,useTheme, Grid, Hidden } from '@material-ui/core';
import NavBar from '../components/NavBar/Nav';
import { landingPageLinkList } from '../utils/NavLinkList';
import bgImg from '../assets/bg-img.png';
import pet1 from '../assets/pet1.png';
import pet2 from '../assets/pet2.png';
import AnimalCruelty from '../components/Homepage/AnimalCruelty';
import Subscription from '../components/Homepage/Subscription';
import Footer from '../components/Homepage/Footer'


const HomePage = () => {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const isXsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();

  return (
    <div style={{backgroundColor: '#FAFAFA',minHeight: "100vh"}}>
        <NavBar menu={landingPageLinkList}/>
        <main>
            <Box style={{ backgroundColor: "#4C3932",minHeight:"300px" }}>
                <Grid container direction= {isSmDown ? 'column-reverse' : null}>
                    <Grid item xs={12} md={6}>
                        <Box py={4} style={{ textAlign:"center"}}>
                            <Box mx={8} style={{ textAlign:"left", border:"1px solid #4C3932"}}>
                                <hr style={{width:"200px",border:"1px solid #FFFFFF",float:"left"}}></hr>
                                <h1 
                                   className={classes.headtext}
                                >
                                    DOG611
                                </h1>
                                <h1
                                    className={classes.headtext1}
                                >
                                    We are dedicated to alleviate suffering meted out to dogs by people.
                                </h1>
                            </Box>                          
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                       <Box my={4} style={{border:"1px solid #4C3932"}}>
                            <img 
                               src={bgImg} 
                               style={{float: !isSmDown ? "right" :"none"}}
                               className={classes.pageImg}
                            ></img>
                       </Box>
                    </Grid>
                </Grid>
            </Box>
        </main>
        <section style={{ margin:"0px auto"}}>
            <Box style={{backgroundColor:"#FFFFFF"}}>
                <Grid container >
                    <Grid item xs={12} md={6}>
                        <Box mx={20} my={10} className={classes.textcontainer}>
                            <Typography 
                              my={8}
                              className={classes.text}
                            >
                                WHO WE ARE
                            </Typography>
                            <Typography
                                className={classes.text1}
                            >
                                We are an advocacy group addressing the subject of animal cruelty. We are drawing the attention of experts and dominating the mainstream media across the globe day after day. In Africa as a whole and Nigeria in particular, many cases of animal cruelty, especially against dogs, have been reported.                                 
                            </Typography>
                        </Box>                          
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box 
                            my={6} 
                            mx={!isSmDown && !isMdDown ? 20 : 1} 
                            mb={4} 
                            display="flex" 
                            justifyContent="center"
                        >
                            <img 
                               src={pet2} 
                               alt="pet dog"
                               className={classes.pageImg1}
                            ></img>
                       </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box style={{backgroundColor:"#E5E5E5"}}>
                <Grid container direction= {isSmDown ? 'column-reverse' : null}>
                    <Grid item xs={12} md={6} >
                        <Box  
                            my={6}
                            mx={!isSmDown && !isMdDown ? 20 : 1} 
                            mb={4} 
                            display="flex" 
                            justifyContent="center" 
                            minWidth="300px"
                        >
                            <img 
                               src={pet1} 
                               alt="dog"
                               className={classes.pageImg1}
                            ></img>
                       </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                            <Box  
                                mx={20} 
                                my={10} 
                                className={classes.textcontainer}
                            >
                                <Typography 
                                   className={classes.text}
                                >
                                   WHAT WE DO
                                </Typography>
                                <Typography
                                    className={classes.text1}
                                >
                                Combating the danger posed by animal cruelty is an unending process until cruelty against these lovely earthlings is completely accomplished. Every member of society including the government and non-governmental organizations (NGOs), and most especially animal lovers have a significant role to play. The time to act is now                                </Typography>
                            </Box>                          
                    </Grid>
                </Grid>
            </Box> 
        </section>
        <AnimalCruelty />
        <Subscription />
        <Footer />
    </div >
  );
};

const useStyles = makeStyles((theme) => ({
    textcontainer:{
    },
    text:{
        fontSize:"36px",
        color:"#4C3932",
        width:"100%",
        lineHeight:"102px",
        fontFamily: 'Montserrat',
    },
    text1:{
        fontSize: "18px", 
        color: "#2A2121", 
        fontWeight: 500,
        fontFamily: 'Montserrat',
    },
    headtext:{
        fontSize:"56px",
        color:"#FFFFFF",
        width:"100%",
        fontFamily: 'Montserrat',
    },
    headtext1:{
        fontSize: "38px", 
        color: "#FFFFFF", 
        fontWeight: 500,
        fontFamily: 'Montserrat',
    },
    pageImg:{
       width:"700px",
    },
    pageImg1:{
        width:"500px",
    },


    '@media screen and (max-width: 1024px)': {
        textcontainer:{
            margin:"0px 0px 0px 0px",
            textAlign:"center",
            margin:"10px auto"
         },
      
        headtext:{
            fontSize:"36px",
            color:"#FFFFFF",
            width:"100%"
        },
        headtext1:{
            fontSize: "18px", 
            color: "#FFFFFF", 
            fontWeight: 500,
        },
        pageImg:{
            width:"400px",
        },
        pageImg1:{
            width:"100%",
        },
    },
    '@media screen and (max-width: 624px)': {
        pageImg:{
            width:"100%",
            float:"none",
        },
        text:{
            fontSize:"28px",
            color:"#4C3932",
        },
        text1:{
            fontSize: "14px", 
            color: "#2A2121", 
            fontWeight: 500,
        },
    }


}))




export default HomePage;
