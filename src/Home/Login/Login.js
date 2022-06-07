import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import userEvent from '@testing-library/user-event';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import React, { useState } from 'react';
import { Link, useLocation , useNavigate} from 'react-router-dom';
import login from '../../../src/assets/images/login2.png'
import useAuth from './../../hooks/useAuth';

const Login = () => {
     const [loginData,setLoginData] = useState({});
     const { user, registerUser,isLoading, authError, loginUser, signInWithGoogle} = useAuth();

     let location = useLocation();
     const history = useNavigate();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value)

        const newLoginData = {...loginData};
        newLoginData[field] =value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e =>{
       loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn =() =>{
        signInWithGoogle(location, history)
    }
    return (
        <Container>
         <Grid container spacing={2} >
            <Grid sx={{mt: 14}} item xs={8} md={6}>
            <Typography variant="body1" gutterBottom>
               Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
          <TextField 
                sx={{width: '75%', m: 1}}
                name='email'
                onBlur={handleOnChange}
                id="standard-basic" 
                label="Your Email"
                variant="standard" />
          <TextField 
               sx={{width: '75%', m: 1}}
               name='password'
               onBlur={handleOnChange}
                id="standard-basic" 
                label="Your Password"
                type='password'
                variant="standard" />
                

                
                <Button
                variant="contained"
                 sx={{width: '75%', m: 2}}
                 style={{backgroundColor:'#5CE7ED'}}
                 type='submit'

                 >Login</Button>
                 <Link to='/register'
                style={{textDecoration: 'none'}}
                >
                     <Button variant='text'>
                      New User? Please Register Now
                    </Button>
                </Link>
                

          </form>

          <p>---------------------------------------</p>
          <Button onClick={handleGoogleSignIn} variant='contained'>Google Sign In </Button>

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

export default Login;