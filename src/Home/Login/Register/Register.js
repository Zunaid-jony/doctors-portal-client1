import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import userEvent from '@testing-library/user-event';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../../assets/images/login2.png'
import useAuth from './../../../hooks/useAuth';
const Register = () => {
    const [loginData,setLoginData] = useState({});
    const history = useNavigate()
    const { user, registerUser,isLoading, authError} = useAuth();
    

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value)

        const newLoginData = {...loginData};
        newLoginData[field] =value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2)
        {
            alert('Your password did not match')
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        // alert('hello')
        e.preventDefault();
    }
    return (
        <Container>
         <Grid container spacing={2} >
            <Grid sx={{mt: 14}} item xs={8} md={6}>
            <Typography variant="body1" gutterBottom>
               Register
          </Typography>
     {!isLoading && <form onSubmit={handleLoginSubmit}>
          <TextField 
                sx={{width: '75%', m: 1}}
                name='name'
                onBlur={handleOnBlur}
              
                id="standard-basic" 
                label="Your Name"
                variant="standard" />
          <TextField 
                sx={{width: '75%', m: 1}}
                name='email'
                onBlur={handleOnBlur}
                type='email'
                id="standard-basic" 
                label="Your Email"
                variant="standard" />
          <TextField 
               sx={{width: '75%', m: 1}}
               name='password'
               onBlur={handleOnBlur}
                id="standard-basic" 
                label="Your Password"
                type='password'
                variant="standard" />
          <TextField 
               sx={{width: '75%', m: 1}}
               name='password2'
               onBlur={handleOnBlur}
                id="standard-basic" 
                label=" ReType password"
                type='password'
                variant="standard" />
                

                
                <Button
                variant="contained"
                 sx={{width: '75%', m: 2}}
                 style={{backgroundColor:'#5CE7ED'}}
                 type='submit'

                 >Register</Button>
                 <Link to='/login'
                style={{textDecoration: 'none'}}
                >
                     <Button variant='text'>
                      Already User? Please Login Now
                    </Button>
                </Link>
                

          </form>}

          {
             isLoading  &&  <CircularProgress />
          }
          {
              user?.email && <Alert severity="success">User Crate a success </Alert>
          }
          {
              authError &&   <Alert severity="error">{authError}</Alert>
          }
              
            </Grid>
            <Grid item xs={4} md={6}>
                <img style={{width: '100%'}} src={login}></img>
                
            </Grid>
           
         </Grid>
        </Container>
    );
};

export default Register;