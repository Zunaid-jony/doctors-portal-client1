import React from 'react';


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
//import footer from '../../src/assets/images/footer.png'

import Footers from './Footers';
// const FooterBg ={
//     background:`url(${footer})`,
//     backgroundColor:'rgba(45,58,74, 0.4)',
//     backgroundBlendMode: 'darken, luminosity',
//     marginTop: 160
// }



const foterItem =[
    {
        name: 'Doctors portal',
        name2: 'doctor@gmail.com',
        name3: 'Services',
        name4: 'Services',
        name5: '',
       
       
    },
    {
        name: 'Services',
        name2: 'doctor@gmail.com',
        name3: 'Services',
        name4: 'Services',
        name5: '',
       
     
    },
    {
        name: 'Our Address',
        name2: 'House-007, Dhaka',
        name3: ' Dhaka Bangladash',
        name4: 'House-007, Dhaka',
        name5: '',
       
      
    },
    
]

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{}}>
        <Container>
       
        <Typography sx={{ fontWeight: 'bold' , m: 4 }} variant="h4" component="div">
            
        
        </Typography> 
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
         {
             foterItem.map( foterItem => <Footers
             
             key={foterItem.name}
             foterItem={foterItem}
             ></Footers> )
         }
        </Grid>
        </Container>
        <Typography  component="div">
        © 2022 Developed by Jony
        </Typography>
      </Box>
    );
};

export default Footer;