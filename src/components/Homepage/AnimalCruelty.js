import React, { useState } from 'react';
import { Typography, Container,CardMedia,useMediaQuery, makeStyles, Box,useTheme, Grid, Hidden, ListItem } from '@material-ui/core';
import backArrow from '../../assets/arrowb.png';
import forwardArrow from '../../assets/arrowf.png'

const AnimalCruelty = () => {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const isXsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();
    

  return (
    <div >
        <section>
            <Box style={{backgroundColor:"#100F0F"}}>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <Box  
                            mx={10} 
                            my={isXsDown ? 2 : 10} 
                            className={classes.textcontainer}
                        >
                            <Typography 
                                className={classes.text}
                            >
                                ANIMAL CRUELTY
                            </Typography>
                            <Typography
                                className={classes.text1}
                            >
                                Combating the danger posed by animal cruelty is an unending process until cruelty against these lovely (Graphic videos)
                            </Typography>
                        </Box>                          
                    </Grid>
                    <Grid item xs={12} md={8} container> 
                        <Grid 
                            item
                            xs={12}
                            md
                            container
                            backgroundColor="#100F0F" 
                            style={{
                               overflow:'hidden',
                               height:"100%"
                            }}
                        >
                            {!isXsDown && 
                            <Box 
                                className={classes.navigationArrow}
                            >
                                <img 
                                   style={{maxWidth:"50px", maxHeight:"50px"}}
                                   src={forwardArrow}
                               ></img>
                                <img 
                                   style={{maxWidth:"50px", maxHeight:"50px"}}
                                   src={backArrow}
                                ></img>
                            </Box>
                            }
                            <Grid
                               style={{overflow: isXsDown ? "scroll" : "hide"}}
                               className={classes.cardVideo}
                               item
                               xs={12} 
                               md={3}
                               direction= "row"
                            >
                                {vedios.map((item)=>(
                                    <CardMedia
                                        style={{
                                            margin:`${isXsDown ? "5% 0px 0px 0px" : "35% 6px 0px 6px"}`
                                        }}
                                        height="60%"
                                        component="iframe"
                                        image={item.link}
                                    />
                                ))}
                            </Grid>
                           
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </section>      
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
        lineHeight:"40px",
        fontFamily: 'Montserrat',
    },
    text1:{
        fontSize: "18px", 
        color: "#FFFFFF", 
        fontWeight: 500,
        fontFamily: 'Montserrat',
    },
    cardVideo:{
        display:"flex",
        maxHeight:"500px",
    },
    navigationArrow:{
        position:"absolute",
        right:"5%",
        margin:"15px auto",
        MaxWidth:"30px",
        maxHeight:"50px",
        display:"flex",
    },

    '@media screen and (max-width: 624px)': {
        text:{
            fontSize:"18px",
        },
        text1:{
            fontSize: "14px", 
            fontWeight: 500,
        },
        cardVideo:{
            flexDirection:"column"
        },
    }
}))

const vedios = [
    {
        link:'https://www.loom.com/embed/47e817b739cd40b3b0a6bfed35243dd0'
    },
    {
        link:'https://www.youtube.com/embed/watch?v=Ha8HKtD_NWQ&list=RDHa8HKtD_NWQ&start_radio=1'
    },
    {
        link:'https://www.loom.com/embed/fe563f3b315b4a5da5d071e883edc49e'
    },
    {
        link:"https://www.loom.com/embed/cad3704aa61e40c3a49012571ccd609f"
    },
    {
        link:'https://www.youtube.com/embed/watch?v=Ha8HKtD_NWQ&list=RDHa8HKtD_NWQ&start_radio=1'
    },
    {
        link:'https://www.youtube.com/embed/watch?v=Ha8HKtD_NWQ&list=RDHa8HKtD_NWQ&start_radio=1'
    },
]



export default AnimalCruelty;
