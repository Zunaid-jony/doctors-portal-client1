import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import chair from '../../../src/assets/images/chair.png'
import bg from '../../../src/assets/images/bg.png'
import { Button, Typography } from '@mui/material';
import { border, Container } from '@mui/system';
const bannerBg ={
    background:`url(${bg})`,
  
}
const verticalCenter = {
    display:'flex',
    height: 400,
    alignItems: 'center',
    
}

const Banner = () => {
    return (
     <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{...verticalCenter,textAlign: 'left'}} md={6}>
         <Box>
            <Typography variant='h3'>
                Your New Smile <br></br>
                Starts Hare
            </Typography>
            <Typography variant='h6' sx={{my: 3,fontSize: 13, color:'gray',fontWeight:300}}>
            Both doctor's appointment and doctor appointment are acceptable for describing a medical visit. In the first case the 's, instead of showing possession, is actually showing association; appointments of this nature are associated with doctors
            </Typography>
            <Button  variant="contained" style={{backgroundColor:'#5CE7ED'}} > Get Appointment</Button>
         </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{width:'520px', marginLeft:'90px'}} src={chair}></img>
         
        </Grid>
       
      </Grid>
    </Container>
    );
};

export default Banner;