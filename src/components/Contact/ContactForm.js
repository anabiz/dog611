import React, { useState,useEffect } from 'react';
import { Typography,Button,Container,useMediaQuery, makeStyles, Box,useTheme, Grid, Hidden, TextField } from '@material-ui/core';
import {contactUs} from '../../services/email';
import { Controller, useForm, } from "react-hook-form";
import { toast } from 'react-hot-toast';


const ContactForm = () => {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const isXsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();
    const { register, control, formState: { errors }, handleSubmit, reset } = useForm();
    const formRules = { required: "This field is required" };


    const [loading, setLoading] = useState(false);


    const handleSubmitForm= async(values)=>{
        setLoading(true)
        const resp = await contactUs(values); 
        if(resp.status === 200){
            toast.success('Form submitted, thank you!', {
                duration: 10000
            });
            reset();
        }else{
            toast.error('An error occured, please try again', {
                duration: 10000
            });
        } 
        setLoading(false)
    }

  return (
    <div style={{backgroundColor: '#FFFFFF',minHeight: "300px"}}>
    <form 
        className={classes.root} 
        style={{maxWidth:isXsDown ? "95%" : "70%",}}
        onSubmit={handleSubmit(handleSubmitForm)}
    >
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
                        error={!!errors.firstName}
                        helperText={errors.firstName?.message}
                        {...(register("firstName", formRules))}
                    >    
                    </TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='Last name' 
                        error={!!errors.lastName}
                        helperText={errors.lastName?.message}
                        {...(register("lastName", formRules))}
                    >    
                    </TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='Phone' 
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                        {...(register("phone", {
                            ...formRules,
                            validate: {
                              isNaN: value => !isNaN(value) || "This should be numbers"
                            }
                        }))}
                    >    
                    </TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='Email' 
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        {...(register("email", {
                            ...formRules,
                            pattern: {
                              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              message: 'Provide a valid email address'
                            }
                        }))}
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
                        error={!!errors.message}
                        helperText={errors.message?.message}
                        {...(register("message", formRules))}
                    >    
                    </TextField>
                </Grid>
                
                <Grid>
                    
                </Grid>
                <Button 
                    color='primary' 
                    style={{width:isXsDown ? "100%" : "15%", margin:"20px 8px"}} 
                    type='submit' 
                    // onClick={handleSubmit} 
                    loading
                >
                    {loading ? "SUBMITTING" : "SUBMIT" }
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
