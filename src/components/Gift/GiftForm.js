import React, { useState } from 'react';
import { 
    FormControl,
    FormControlLabel,
    Typography,
    Button,
    useMediaQuery,
    makeStyles, 
    Box,
    useTheme, 
    Grid, 
    Hidden, 
    TextField, 
    FormLabel, 
    RadioGroup, 
    Radio 
} from '@material-ui/core';


const initialFormValue = {
    amount :"",
    giftingOption:"",
    name:"",
    address:"",
    country:"",
    State:"",
    postalCode:"",
    phone:"",
    email:"",
    cardHolder:"",
    cardNumber:"",
    cardExpirationMonth:"",
    cardExpirationYear:"",
    cvv:""
}

const GiftForm = () => {
    const theme = useTheme();
    const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
    const isXsDown = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();

    const [values, setValues] = useState(initialFormValue);

    const handleChange=({ target: { name, value} })=>{
        setValues((prev) => ({ ...prev, [name]: value }));
    }
    const handleSubmit=()=>{

    }

  return (
    <div style={{backgroundColor: '#FFFFFF',minHeight: "300px"}}>
      <form className={classes.root} style={{maxWidth:isXsDown ? "95%" : "70%",}}>
        <Typography 
            className={classes.text}
        >
            GIFT FORM
        </Typography>
        <Typography
            className={classes.text1}
        >
            Fill out the form below to support our mission
        </Typography>
        <Box style={{backgroundColor:"#FFFFFF"}}>
            <Grid spacing={2} container>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='Enter the amount' 
                        name='amount' 
                        onVolumeChangeCapture={values.amount}
                        onChange={handleChange}
                    >    
                    </TextField>
                </Grid>
                <Grid xs={12} item>
                    <FormControl>
                        <FormLabel>Choose gifting option</FormLabel>
                        <RadioGroup
                            name="giftingOption"
                            value={values.giftingOption}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="monthly" control={<Radio/>} label="Monthly" />
                            <FormControlLabel value="one time" control={<Radio/>} label="One-time" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='First and Last Name' 
                        name='name' 
                        value={values.name}
                        onChange={handleChange}
                    >    
                    </TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='Address' 
                        name='address' 
                        value={values.address}
                        onChange={handleChange}
                    >    
                    </TextField>
                </Grid>
                <Grid xs={12} item container spacing={2} >
                    <Grid xs={6} item>
                        <TextField
                            variant='filled' 
                            fullWidth 
                            label='Country' 
                            name='country' 
                            value={values.country}
                            onChange={handleChange}
                        >    
                        </TextField>
                    </Grid>
                    <Grid xs={6} item>
                        <TextField
                            variant='filled' 
                            fullWidth 
                            label='State' 
                            name='state' 
                            value={values.state}
                            onChange={handleChange}
                        >    
                        </TextField>
                    </Grid>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='Postal Code' 
                        name='postalCode' 
                        value={values.postalCode}
                        onChange={handleChange}
                    >    
                    </TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='Phone Number' 
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
                        variant='filled' 
                        fullWidth 
                        label='Card Holder(s) Name' 
                        name='cardHolder' 
                        value={values.cardHolder}
                        onChange={handleChange}
                    >    
                    </TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        variant='filled' 
                        fullWidth 
                        label='Credit Card Number' 
                        name='cardNumber' 
                        value={values.cardNumber}
                        onChange={handleChange}
                    >    
                    </TextField>
                </Grid>

                <Grid xs={12} item>
                    <FormLabel>
                       Credit Card Expiration
                    </FormLabel>
                </Grid>
                <Grid xs={12} item container spacing={2} >
                    <Grid xs={4} item>
                        <TextField
                            variant='filled' 
                            fullWidth 
                            label='Month' 
                            name='cardExpirationMonth' 
                            value={values.cardExpirationMonth}
                            onChange={handleChange}
                        >    
                        </TextField>
                    </Grid>
                    <Grid xs={4} item>
                        <TextField
                            variant='filled' 
                            fullWidth 
                            label='Year' 
                            name='cardExpirationYear' 
                            value={values.cardExpirationYear}
                            onChange={handleChange}
                        >    
                        </TextField>
                    </Grid>
                    <Grid xs={4} item >
                        <TextField
                            variant='filled' 
                            fullWidth 
                            label='CVV' 
                            name='cvv' 
                            value={values.cvv}
                            onChange={handleChange}
                        >    
                        </TextField>
                    </Grid>
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


export default GiftForm;
