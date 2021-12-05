import React, { useState } from 'react';
import { Typography, Container,useMediaQuery, makeStyles, Box,useTheme, Grid, Hidden } from '@material-ui/core';
import NavBar from '../components/NavBar/Nav';
import { landingPageLinkList } from '../utils/NavLinkList';
import Subscription from '../components/Homepage/Subscription';
import Footer from '../components/Homepage/Footer'
import ContactForm from '../components/Contact/ContactForm'


const HomePage = () => {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const isXsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();

  return (
    <div style={{backgroundColor: '#FAFAFA',minHeight: "100vh"}}>
        <NavBar menu={landingPageLinkList}/>
        <ContactForm />
        <Subscription />
        <Footer />
    </div >
  );
};

const useStyles = makeStyles((theme) => ({


}))




export default HomePage;
