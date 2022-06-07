import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CardMedia from '@mui/material/CardMedia';

const Service = (props) => {
    const {name, img,description} = props.service;
    return (
        <Grid item xs={2} sm={4} md={4} >
            <Card sx={{ minWidth: 275  ,boxShadow: 0,border: 0   }}>
      <CardContent>
      <CardMedia
        component="img"
        height="194"
        image={img}
        style={{width: 'auto', height:'80px', margin:'0 auto'}}
        alt="Paella dish"
      />
        <Typography variant="h5" component="div">
        
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <h1>{name}</h1> 
        </Typography>
        <Typography variant="body2">
         {description }
        </Typography>
      </CardContent>
      
    </Card>
             
        </Grid>
    );
};

export default Service;