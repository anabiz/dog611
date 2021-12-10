import { Grid,Box, Typography,useMediaQuery,useTheme,Button,makeStyles } from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import dog1 from '../../assets/dog1.png';
import dog2 from '../../assets/dog2.png';
import dog3 from '../../assets/dog3.png';


const MoreStories = () => { 
    const classes = useStyles();
    const theme = useTheme();
    const isXsDown  = useMediaQuery(theme.breakpoints.down('xs'));
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));


    const hanleLoadMore=()=>{

    }


  return (
    <div style={{backgroundColor: '#FFFFFF',minHeight: "300px", width:"100%"}}>
        <Box width= {!isMdDown || isXsDown ? "80%" : "100%"} style={{margin:"20px auto",border:"1px solid #FFFFFF"}}>
            <Typography 
                className={classes.headtext}
            >
                MORE STORIES
            </Typography>
            {blogData.map((item)=>(
                <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                   <Box style={{width:"100%"}}>
                        <img 
                           style={{width: isXsDown ? "100%" : "350px",height: isXsDown ? "170px" : "240px"}}
                           src={item.img}>
                        </img>
                   </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box>
                        <Typography>
                            {item.category}
                        </Typography>
                        <Typography
                            className={classes.text1}
                        >
                            {item.title}
                        </Typography>
                        <hr style={{width:"20%", float:"left"}}></hr>
                        <br></br>
                        <Typography>
                            {item.synopsis}
                        </Typography>
                        <Typography 
                           className={classes.auto}
                        >
                            {item.author}
                        </Typography>
                        <Typography
                            className={classes.date}
                        >
                           {item.date}
                        </Typography>
                    </Box>
                </Grid>
                <hr style={{width:"95%",marginBottom:"30px",color:"#E5E5E5"}}></hr>
            </Grid>
            ))}
            <Box width="100%" style={{textAlign:"center",marginTop:"20px"}}>
                <Button 
                    color='#FFFFFF' 
                    style={{width: isXsDown ? "100%" : "20%", margin:"20px auto",border:"1px solid",borderRadius:"5px"}} 
                    type='submit' 
                    onClick={hanleLoadMore} 
                    loading
                >
                    LOAD MORE STORIES
                </Button>
            </Box>
            
        </Box>
        
    </div >
  );
};

const blogData=[
    {
        img: `${dog1}`,
        category:"Event",
        title:"We hosted a virtual panel session with industry experts in the Animal advocacy group",
        author: "Chigozie Paul",
        date: "December 3, 2021",
        synopsis:"We hosted a virtual panel session with industry experts in the Agrotechirtual panel session with industry experirtual panel session with industry experts in the Agrotech.... <Link>Read more</Link>"
    },
    {
        img: `${dog2}`,
        category:"Event",
        title:"We hosted a virtual panel session with industry experts in the Animal advocacy group",
        author: "Chigozie Paul",
        date: "December 3, 2021",
        synopsis:"We hosted a virtual panel session with industry experts in the Agrotechirtual panel session with industry experirtual panel session with industry experts in the Agrotech.... <Link>Read more</Link>"
    },
    {
        img: `${dog3}`,
        category:"Event",
        title:"We hosted a virtual panel session with industry experts in the Animal advocacy group",
        author: "Chigozie Paul",
        date: "December 3, 2021",
        synopsis:"We hosted a virtual panel session with industry experts in the Agrotechirtual panel session with industry experirtual panel session with industry experts in the Agrotech.... <Link>Read more</Link>"
    },
]


const useStyles = makeStyles((theme) => ({
    textcontainer:{
    },
    headtext:{
        fontSize:"24px",
        margin:"12px auto", 
        marginTop:"12px",
        color:"#4C3932",
        lineHeight:"25px",
        fontWeight: 600,
        fontFamily: 'Montserrat',

    },
    auto:{
        margin:"12px 0px",
    },
    date:{
        color:"#7C7C7C",
        margin:"12px 0px",
    },
    text1:{
        fontSize: "20px",
        marginTop:"12px", 
        color: "#7C7C7C", 
        fontWeight: 400,
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


export default MoreStories;
