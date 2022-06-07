import { Card, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Alert from '@mui/material/Alert';

import React,{useState} from 'react';
import Booking from '../Booking/Booking';



const bookings = [
    {  
      id: 1,
      name: 'Teeth Orthodonics',
      time: '08.00 AM- 09.00 AM',
      space: 10, 
    },
    {  
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM- 10.00 AM',
        space: 8, 
      },
      {  
        id: 3,
        name: 'Teeth Cleaning',
        time: '08.00 AM- 09.30 AM',
        space: 11, 
      },
      {  
        id: 4,
        name: 'Cavity Protection',
        time: '08.00 AM- 09.00 AM',
        space: 3, 
      },
      {  
        id: 5,
        name: 'Pediatric Dental',
        time: '05.00 AM- 08.00 AM',
        space: 10, 
      },
      {  
        id: 6,
        name: 'Oral Surgery',
        time: '06.00 PM- 09.00 PM',
        space: 3, 
      },
]

const AvailableAppointmentHome = ({date}) => {
  //const [bookingSuccess,setBookingSuccess]= useState(false)
    return (
        <Container className='date-color'>
            
           <Typography variant='h4'  sx={{color:'#5CE7ED', mb: 2, fontWeight: 600 , py:3, mt:4}}>
                         AvailableAppoint
            
             
            </Typography>
            
           <Grid container spacing={2}>
           {
                       bookings.map( booking=> <Booking
                       
                       key={booking.id}
                       booking={booking}
                       date={date}
                    //    setBookingSuccess={setBookingSuccess}

                       ></Booking>)
          }
               

           </Grid>
        </Container>
    );
};

export default AvailableAppointmentHome;