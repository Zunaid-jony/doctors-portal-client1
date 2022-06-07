import React from 'react';
import './Services.css'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Service from './../Home/Service/Service';
import Fluoride from '../../assets/images/fluoride.png'
import Cavity from '../../assets/images/cavity.png'
import Whitening from '../../assets/images/whitening.png'

const services =[
    {
        name: 'Fluoride Treatment',
        description:'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities. These in-office treatments may take the ',
        img: Fluoride,
    },
    {
        name: 'Cavity Filling',
        description:'If you have  symptoms  , you might have pain in your teeth or . Cavity pain  depends on the extent of your cavity . Regardless if your cavity symptoms are mild or severe, you ought to visit your dentist as you are likely to need a filling.',
        img: Cavity,
    },
    {
        name: 'Teeth Whitening',
        description:'Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.',
        img: Whitening ,
    },
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{ fontWeight: 'bold' , m: 3,  color: '#26c6da' }} variant="h6" component="div">
            OUR SERVICE
        
        </Typography>
        <Typography sx={{ fontWeight: 'bold' , m: 4 }} variant="h4" component="div">
            Service We Provide
        
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         {
             services.map( service => <Service
             
             key={service.name}
             service={service}
             ></Service>)
         }
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;