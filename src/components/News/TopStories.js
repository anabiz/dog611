import React from 'react';
import { Grid,Box, Typography,useMediaQuery,useTheme,Button,makeStyles } from '@material-ui/core';
import TopStoryImg from '../../assets/top-story-img.png'



const TopStories = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isXsDown  = useMediaQuery(theme.breakpoints.down('xs'));
    const isMdDown = useMediaQuery(theme.breakpoints.down('md')); 

    const hanleReadMore =()=>{

    }

  return (
    <div 
        style={{
            backgroundColor: '#FAFAFA',
            minHeight: "300px", 
            width:"100%"
        }}
    >
        <Box 
            width= {!isMdDown || isXsDown ? "80%" : "100%"} 
            style={{
                margin:"20px auto"
            }}
        >
            <Typography 
                className={classes.headtext}
            >
                TOP STORIES
            </Typography>
            <Grid container spacing={2}>
                <Grid md={3} xs={6} item>
                    <Box>
                        <img 
                           style={{width: isXsDown ? "100%" : "200px",height: isXsDown ? "170px" : "180px"}}
                           src={TopStoryImg}>
                        </img>
                        <Typography
                            style={{
                               width: isXsDown ? "100%" : "200px"              
                            }}
                        >
                            We hosted a virtual panel session with industry experts.
                        </Typography>
                        <Button 
                            style={{
                                width: isXsDown ? "100%" : "120px", 
                                marginTop:"20px",
                                border:"1px solid",
                                borderRadius:"5px",
                                backgroundColor:"#FFFFFF",
                                color:"#4C3932",
                                height:"30px",
                            }}
                            type='submit' 
                            onClick={hanleReadMore} 
                            loading
                        >
                            Read more
                        </Button>
                    </Box>
                </Grid>
                <Grid xs={6} md={4} item>
                    <Box> 
                        <Box>
                            <img 
                                style={{
                                   width:  "90%",
                                   height: isXsDown ? "170px" : "200px",
                                }}
                               src={TopStoryImg}
                            >
                            </img>
                        </Box> 
                        <Box
                           style={{
                               position:"relative",
                               top:"-65px",
                               width:"90%",
                               backgroundColor:"rgba(0, 0, 0, 0.72)",
                           }}
                        >
                            <Typography
                                style={{
                                    width:"90%",
                                    color:"#FFFFFF",
                                    fontFamily:"Poppins",
                                }}
                            >
                                We hosted a virtual panel session with industry experts.
                            </Typography>
                            <Button 
                                style={{
                                    width: isXsDown ? "100%" : "120px", 
                                    marginTop:"20px",
                                    border:"1px solid",
                                    borderRadius:"5px",
                                    backgroundColor:"#FFFFFF",
                                    color:"#4C3932",
                                    height:"30px",
                                }}
                                type='submit' 
                                onClick={hanleReadMore} 
                                loading
                            >
                                Read more
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6}  md={3} item>
                    <Box> 
                        <Box>
                            <img 
                                style={{
                                   width: isXsDown ? "100%" : "200px",
                                   height: isXsDown ? "170px" : "180px"
                                }}
                               src={TopStoryImg}
                            >
                            </img>
                        </Box> 
                        <Box>
                            <Typography
                                style={{
                                   width:isXsDown ? "100%" : "200px"              
                                }}
                            >
                                We hosted a virtual panel session with industry experts.
                            </Typography>
                            <Button 
                                style={{
                                    width: isXsDown ? "100%" : "120px", 
                                    marginTop:"20px",
                                    border:"1px solid",
                                    borderRadius:"5px",
                                    backgroundColor:"#FFFFFF",
                                    color:"#4C3932",
                                    height:"30px",
                                }}
                                type='submit' 
                                onClick={hanleReadMore} 
                                loading
                            >
                                Read more
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={6} md={2} item>
                    <Box
                       style={{
                           backgroundColor:"#E5E5E5"
                        }}
                    >
                        <img 
                           style={{
                               width: "100%",
                               height: isXsDown ? "170px" : "180px"
                            }}
                           src={TopStoryImg}
                        >
                        </img>
                        <Typography>
                            We hosted a virtual panel session with industry experts.
                        </Typography>
                        <Button 
                            style={{
                                width: isXsDown ? "100%" : "120px", 
                                marginTop:"20px",
                                border:"1px solid",
                                borderRadius:"5px",
                                backgroundColor:"#FFFFFF",
                                color:"#4C3932",
                                height:"30px",
                            }} 
                            type='submit' 
                            onClick={hanleReadMore} 
                            loading
                        >
                            Read more
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>

    </div >
  );
};

const topStories = [
    {
        img:"",
        title:"",
    }
]

const useStyles = makeStyles((theme) => ({
  
    headtext:{
        fontSize:"24px",
        margin:"12px 0px", 
        marginTop:"12px",
        color:"#4C3932",
        lineHeight:"25px",
        fontWeight: 600,
        fontFamily: 'Montserrat',
    },
}))

export default TopStories;