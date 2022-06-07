import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({booking,date,setBookingSuccess}) => {
    const {name,space,time,price} =booking;

    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true); 
    const handleBookingClose = () => setBookingOpen(false);
    return (
        
        <>
        <Grid item xs={12} sm={6} md={4}>
            
            <Paper elevation={3} >
            <Typography variant='h5'  sx={{color:'#5CE7ED', fontWeight: 600 , py:3, mt:4}}>
              {name}
           </Typography>
            <Typography variant='h6'>
              {time}
           </Typography>
           <Typography variant='h6'>
              Price $ {price} 
           </Typography>
            <Typography variant='caption'>
              {space} SPACES AVAILABLE
           </Typography>
          
    
           
                 
           <h4>{space}</h4>  
           <Button onClick={handleBookingOpen} sx={{mb:1}} variant="contained" style={{backgroundColor:'#5CE7ED'}} > BOOK APPOINTMENT</Button>
           </Paper>    
                 
       </Grid>
       <BookingModal
       date={date}
       Booking={booking}
        openBooking={openBooking}
       handleBookingClose={handleBookingClose}
       setBookingSuccess={setBookingSuccess}
    
       >

       </BookingModal>
        </>
    );
};

export default Booking;