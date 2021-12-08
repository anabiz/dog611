import React from 'react';
import NavBar from '../components/NavBar/Nav';
import { landingPageLinkList } from '../utils/NavLinkList';
import Subscription from '../components/Homepage/Subscription';
import Footer from '../components/Homepage/Footer'
import GiftForm from '../components/Gift/GiftForm'
import { Box,useMediaQuery,useTheme,makeStyles, Typography } from '@material-ui/core';
import BackImg from '../assets/backimage.png';
import BackImgMobile from '../assets/backimage-mobile.png';


const HomePage = () => { 
    const theme = useTheme();
    const isXsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();

  return (
    <div style={{backgroundColor: '#FAFAFA',minHeight: "100vh"}}>
        <NavBar menu={landingPageLinkList}/>
        <Box style={{backgroundImage: isXsDown ? `url(${BackImgMobile})` : `url(${BackImg})`, maxHeight:"450px", minHeight:"420px", backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover",textAlign:"right"}}>
           <Box className={classes.octagonBox}>
                <Typography
                    className={classes.text}
                >
                    With your gifts
                </Typography>
                <Box style={{width:"80%",margin:"0px auto"}}>
                    <Typography
                        className={classes.text1}
                    >
                        We are reaching out to vulnerable dogs ,providing treatment and a safe place for our dogs 
                    </Typography>
                </Box>
                
           </Box>
        </Box>
        <GiftForm />
        <Subscription />
        <Footer />
    </div >
  );
};


const useStyles = makeStyles((theme) => ({
    octagonBox:{
        backgroundColor:"rgba(164, 222, 249, 0.68)",
        maxWidth:"220px",
        minHeight:"220px",
        textAlign:"center",
        float:"right",
        margin:"5% 5% 0px 0px",
        clipPath: "polygon(29% 0, 71% 0, 100% 29%, 100% 71%, 71% 100%, 29% 100%, 0 71%, 0 29%)",    
    },
    text:{
        fontSize:"24px",
        marginTop:"20%",
        fontFamily:"Montserrat",
        fontWeight:"700",
        color:"#363030",
    },
    text1:{
        marginTop:"10px",
        fontSize:"16px",
        fontFamily:"Montserrat",
        fontWeight:"500",
        // lineHeight: "29px",
    },

    '@media screen and (max-width: 624px)': {
        text:{
            fontSize:"18px",
            marginTop:"20%",
        },
        text1:{
            marginTop:"10px",
            fontSize:"12px",
        },
        octagonBox:{
            maxWidth:"160px",
            minHeight:"160px",
        },
    }
}))

export default HomePage;
