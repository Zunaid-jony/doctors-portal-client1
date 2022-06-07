import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Alert from '@mui/material/Alert';
import React,{useState} from 'react';
import Booking from '../Booking/Booking';
import './AvailableAppointment.css'

import Footer from './../../../Footer/Footer';


const bookings = [
    {  
      id: 1,
      name: 'Teeth Orthodonics',
      time: '08.00 AM- 09.00 AM',
      space: 10,
      price: 40, 
    },
    {  
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM- 10.00 AM',
        space: 8, 
        price: 50,
      },
      {  
        id: 3,
        name: 'Teeth Cleaning',
        time: '08.00 AM- 09.30 AM',
        space: 11,
        price: 60, 
      },
      {  
        id: 4,
        name: 'Cavity Protection',
        time: '08.00 AM- 09.00 AM',
        space: 3, 
        price: 20,
      },
      {  
        id: 5,
        name: 'Pediatric Dental',
        time: '05.00 AM- 08.00 AM',
        space: 10, 
        price: 48,
      },
      {  
        id: 6,
        name: 'Oral Surgery',
        time: '06.00 PM- 09.00 PM',
        space: 3, 
        price: 140,
      }
]

const AvailableAppointment = ({date}) => {
  const [bookingSuccess,setBookingSuccess]= useState(false)
    return (
        <div>
          <Container className='date-color'>
           <Typography variant='h4'  sx={{color:'#5CE7ED', mb: 2, fontWeight: 600 , py:3, mt:4}}>
           Available Appointment {date.toDateString()}
            {setBookingSuccess && <Alert severity="success"> Booking successFully</Alert>} 
             
            </Typography>
           <Grid container spacing={2}>
           {
                       bookings.map( booking=> <Booking
                       
                       key={booking.id}
                       booking={booking}
                       date={date}
                       setBookingSuccess={setBookingSuccess}

                       ></Booking>)
          }
               

           </Grid>
        </Container>
        <Footer></Footer>

        </div>
        
    );
};

export default AvailableAppointment;