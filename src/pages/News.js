import React from 'react';
import NavBar from '../components/NavBar/Nav';
import { landingPageLinkList } from '../utils/NavLinkList';
import Subscription from '../components/Homepage/Subscription';
import Footer from '../components/Homepage/Footer';
import TopStories from '../components/News/TopStories';
import MoreStories from '../components/News/MoreStories';
import Search from '../components/News/Search';



const News = () => { 

  return (
    <div style={{backgroundColor: '#FAFAFA',minHeight: "100vh"}}>
        <NavBar menu={landingPageLinkList}/>
        <Search />
        <TopStories />
        <MoreStories />
        <Subscription />
        <Footer />
    </div >
  );
};

export default News;
