import React, { useState } from 'react';
import { Typography, Button,TextField,useMediaQuery, makeStyles, Box,useTheme, Grid, Hidden, ListItem } from '@material-ui/core';
import dogPic from '../../assets/dog-img3.png';
import { newsLetter } from '../../services/email';

const initialFormValue = {
    fullName:"",
    email:""
}

const Subscription = () => {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const isXsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();

    const [values, setValues] = useState(initialFormValue);

    const handleChange=({ target: { name, value} })=>{
        setValues((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit= async()=>{
        const resp = await newsLetter(values);   
    }
    

  return (
    <div >
         <main>
            <Box style={{ minHeight:"300px",backgroundColor: "#100F0F" }}>
                <Grid container direction= {isSmDown ? 'column-reverse' : null}>
                    <Grid item xs={12} md={8}>
                        <Box py={12} className={classes.textholder} style={{ textAlign:"center",height:"100%", backgroundColor: "#4C3932"}}>
                            <Box mx={8} style={{ width:"70%", textAlign:"left", border:"1px solid #4C3932"}}>
                                <h1 
                                   className={classes.text}
                                >
                                    SUBSCRIBE TO OUR NEWSLETTER
                                </h1>
                                <h1
                                    className={classes.text1}
                                >
                                    Sign up with your email address to receive news and updates
                                </h1>
                                                     
                                <TextField 
                                    variant='filled' 
                                    fullWidth 
                                    label='Full name' 
                                    name='fullName' 
                                    value={values.fullName}
                                    style={{width:isXsDown ? "100%" : "70%", margin:"20px 0px 0px 0px"}}
                                    onChange={handleChange} 
                                />
                                <TextField
                                    variant='filled' 
                                    fullWidth label='E-mail' 
                                    name='email' 
                                    value={values.email}
                                    style={{width:isXsDown ? "100%" : "70%", margin:"20px 0px 0px 0px"}}
                                    onChange={handleChange} 
                                />
                                <Button 
                                    color='primary' 
                                    style={{width:isXsDown ? "100%" : "70%", margin:"20px 0px 0px 0px"}} 
                                    type='submit' 
                                    onClick={handleSubmit} 
                                    loading
                                >
                                    SUBSCRIBE
                                </Button>
                            </Box> 
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                       <Box  style={{backgroundImage: `url(${dogPic})`}}  className={classes.sectionImg}>
    
                       </Box>
                    </Grid>
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
        fontSize:"24px",
        color:"#FFFFFF",
        width:"100%",
        lineHeight:"25px",
        fontFamily: 'Montserrat',
    },
    text1:{
        fontSize: "18px", 
        color: "#FFFFFF", 
        fontWeight: 500,
        fontFamily: 'Montserrat',
    },

    sectionImg:{
        clipPath: "polygon(20% 0,100% 0, 100% 100%, 0 100%,0 100%)",
        position:"relative",
        right:"40%",
        width:"140%",
        height:"100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    textholder:{
        clipPath: "polygon(100% 0,80% 100%, 0 100%, 0 0)",
    },

    '@media screen and (max-width: 624px)': {
        text:{
            fontSize:"18px",
        },
        text1:{
            fontSize: "14px", 
            fontWeight: 500,
        },
        sectionImg:{
            clipPath: "polygon(0 0,100% 0, 100% 100%, 0 75%,0 100%)",
            position:"relative",
            top:"80px",
            // bottom:"30%",
            height:"200px",
            right:"0%",
            width:"100%",  
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        },
        textholder:{
            clipPath: "polygon(0 0,100% 15%, 100% 100%, 0 100%)",
        },
    }

}))



export default Subscription;
