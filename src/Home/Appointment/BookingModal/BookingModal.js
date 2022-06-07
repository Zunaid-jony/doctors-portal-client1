import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import useAuth from './../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({openBooking, handleBookingClose,Booking,date, setBookingSuccess }) => {
    const {name,time,price} =Booking;
    const {user} = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    
   const [bookingInfo, setBookingInfo] = useState({initialInfo})

   const handleOnBlur = e => {
     const field = e.target.name;
     const value = e.target.value;   
     const newInfo = {...bookingInfo};
     newInfo[field] = value;
    console.log(newInfo);
     setBookingInfo(newInfo) 

   }

    const handleBookSubmit = e =>{
        alert('submitting');
        //collect data
        const appointment ={
          ...bookingInfo,
          price,
          time,
          serviceName: name,
          date: date.toLocaleDateString()
        }

          //send to the server
          fetch('https://ancient-island-03613.herokuapp.com/appointments', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data)
            if(data.insertedId){
              setBookingSuccess(true);
              handleBookingClose();

            }
          })

        console.log(appointment)
        //collect data
        //set to server
        
        e.preventDefault();
    }
    
  
    return (
        <Modal
        keepMounted
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
   <form onSubmit={handleBookSubmit}>
        <TextField
          disabled
          sx={{width: '90%', m:1}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
        <TextField
          sx={{width: '90%', m:1}}
          id="outlined-size-small"
          name="patientName"
          onBlur={handleOnBlur}
          defaultValue= {user.displayName}
          size="small"
        />
        <TextField
          sx={{width: '90%', m:1}}
          id="outlined-size-small"
          name="email"
          onBlur={handleOnBlur}
          defaultValue= {user.email}
          size="small"
        />
        <TextField
          sx={{width: '90%', m:1}}
          id="outlined-size-small"
          name="phone"
          onBlur={handleOnBlur}
          defaultValue= 'Phone Number'
          size="small"
        />
        <TextField
          sx={{width: '90%', m:1}}
          id="outlined-size-small"
          defaultValue= {date}
          size="small"
        />
         <Button  type='submit' sx={{mb:1}} variant="contained" style={{backgroundColor:'#5CE7ED'}} > SUBMIT</Button>

        </form>
        </Box>
      </Modal>
    );
};

export default BookingModal;