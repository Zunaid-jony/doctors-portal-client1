import React from 'react';
import Grid from '@mui/material/Grid';



import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import CardMedia from '@mui/material/CardMedia';
import { Card } from '@mui/material';

const Footers = (props) => {
    const {name, name2,name3,name4} = props.foterItem;
    return (
        <Grid item xs={2} sm={4} md={4} >
            <Card sx={{ minWidth: 275  ,boxShadow: 0,border: 0   }}>
      <CardContent>
      <CardMedia
       
        height="194"
        
        style={{width: 'auto', height:'80px', margin:'0 auto'}}
        alt="Paella dish"
      />
        <Typography variant="h6" component="div">
        {name} 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {name2} 
      
        </Typography>
        <Typography variant="body2">
        {name3} 
         
        </Typography>
        <Typography variant="body2">
        {name4} 
         
        </Typography>
      </CardContent>
      
    </Card>
             
        </Grid>
    );
};

export default Footers;