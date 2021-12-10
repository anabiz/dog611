import React, { useState,useEffect } from 'react';
import { Typography,Button,Container,useMediaQuery, makeStyles, Box,useTheme, Grid, Hidden, TextField } from '@material-ui/core';
import {contactUs} from '../../services/email'

const initialFormValue = {
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    message:""
}

const ContactForm = () => {
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
         const resp = await contactUs(values);   
    }

  return (
    <div style={{backgroundColor: '#FFFFFF',minHeight: "300px"}}>
      <form className={classes.root} style={{maxWidth:isXsDown ? "95%" : "70%",}}>
        <Typography 
            className={classes.text}
        >
            CONTACT
        </Typography>
        <Typography
            className={classes.text1}
        >
            Fill out the form below and we get in touch soon.
        </Typography>
        <Box style={{backgroundColor:"#FFFFFF"}}>
            <Grid spacing={2} container>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='First name' 
                        name='firstName' 
                        value={values.firstName}
                        onChange={handleChange}
                    >    
                    </TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='Last name' 
                        name='lastName' 
                        value={values.lastName}
                        onChange={handleChange}
                    >    
                    </TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='Phone' 
                        name='phone' 
                        value={values.phone}
                        onChange={handleChange}
                    >    
                    </TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='Email' 
                        name='email' 
                        value={values.email}
                        onChange={handleChange}
                    >    
                    </TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        multiline
                        rows={4}
                        variant='filled' 
                        fullWidth 
                        label='Message' 
                        name='message' 
                        value={values.message}
                        onChange={handleChange}
                    >    
                    </TextField>
                </Grid>
                
                <Grid>
                    
                </Grid>
                <Button 
                    color='primary' 
                    style={{width:isXsDown ? "100%" : "15%", margin:"20px 8px"}} 
                    type='submit' 
                    onClick={handleSubmit} 
                    loading
                >
                    SUBMIT
                </Button>
            </Grid>
        </Box>
      </form>
    </div >
  );
};

const useStyles = makeStyles((theme) => ({
    root:{
        '& .MuiInputBase-input': {
        },
        maxWidth:"80%",
        margin:"0px auto",
        backgroundColor: '#FFFFFF',
    },
    text:{
        fontSize:"36px",
        fontFamily:"Montserrat",
        fontWeight:"700",
        margin:"12px 0px"
    },
    text1:{
        fontSize:"24px",
        fontFamily:"Montserrat",
        fontWeight:"500",
        // margin:"1px 0px"
    },
}))


export default ContactForm;
