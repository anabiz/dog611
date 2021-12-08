import React from 'react';
import NavBar from '../components/NavBar/Nav';
import { landingPageLinkList } from '../utils/NavLinkList';
import Subscription from '../components/Homepage/Subscription';
import Footer from '../components/Homepage/Footer'
import ContactForm from '../components/Contact/ContactForm'


const HomePage = () => { 

  return (
    <div style={{backgroundColor: '#FAFAFA',minHeight: "100vh"}}>
        <NavBar menu={landingPageLinkList}/>
        <ContactForm />
        <Subscription />
        <Footer />
    </div >
  );
};

export default HomePage;
