import React,{useState, useEffect} from 'react';
import useAuth from './../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Appointments = ({date,setDate}) => {
    const {user} = useAuth();
    const[appointments, setAppointments] = useState([]);
    useEffect(()=>{
        const url =`https://ancient-island-03613.herokuapp.com/appointments?mail=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url)
        .then(response => response.json())
        .then(data => setAppointments(data));

    },[date]);
    return (
        <div>
            <h1>Appointments {appointments.length}</h1>
            <TableContainer component={Paper}>
      <Table sx={{}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow className='table' style={{backgroundColor: 'aqua'}}>
            <TableCell  >NAME</TableCell>
            <TableCell align="right">TIME</TableCell>
            <TableCell align="right">SERVICE</TableCell>
            <TableCell align="right">ACTION</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow style={{ backgroundColor: 'rgb(96, 219, 219)',
              borderColor: '2px sandybrown',
              margin: '2px'}}
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right">{row.payment ? 'paid' : 
               <Link to={`/dashboard/payment/${row._id}`}><Button>pay</Button></Link>
              }</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;