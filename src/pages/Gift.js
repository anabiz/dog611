import React from 'react';
import NavBar from '../components/NavBar/Nav';
import { landingPageLinkList } from '../utils/NavLinkList';
import Subscription from '../components/Homepage/Subscription';
import Footer from '../components/Homepage/Footer'
import GiftForm from '../components/Gift/GiftForm'
import { Box,useMediaQuery,useTheme,makeStyles } from '@material-ui/core';
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
        border:"1px solid red",
        backgroundColor:"rgba(164, 222, 249, 0.68)",
        maxWidth:"200px",
        minHeight:"200px",
        // float:"right"
    },

    '@media screen and (max-width: 624px)': {
  
    }
}))

export default HomePage;
