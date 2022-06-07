import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../src/assets/images/doctor.png'
import bg from '../../../src/assets/images/appointment.png'
import { Button, Typography } from '@mui/material';

 const AppoingmentBg ={
     background:`url(${bg})`,
     backgroundColor:'rgba(45,58,74, 0.4)',
     backgroundBlendMode: 'darken, luminosity',
     marginTop: 160
 }
const AppointmentBenar = () => {
    return (
        <Box style={AppoingmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img src={doctor} 
                style={{width: 400, marginTop: '-110px'}}
                ></img>
                
            
            </Grid>
           
           <Grid item xs={12} md={6} sx={{ display: 'flex',
           justifyContent: 'flex-start',
           textAlign:'left',
           alignItems: 'center'
           
           }}>
             <Box >
                <Typography variant='h6' sx={{mb:4}} style={{color:'#5CE7ED'}}>
                    Appointment

                </Typography>
                <Typography sx={{mb:4}} variant='h4' style={{color:'white'}}> 
                Make an Appointment
                    Tody

                </Typography>
                <Typography sx={{mr:4 ,mb: 2}} variant='h6' style={{color:'white', fontSize: 14 , fontWeight: 300}}>
                Doctors Offering Best Healthcare Solution To Patients From All Over the World. We Globally Connect Patient To the Doctors 
                Doctors Offering Best Healthcare Solution To Patients From 

                </Typography>
                <Button  variant="contained" style={{backgroundColor:'#5CE7ED'}} > Lone more</Button>
        
             </Box>
            </Grid>
        
        
      </Grid>
    </Box>
    );
};

export default AppointmentBenar;