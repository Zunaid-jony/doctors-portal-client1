import { Button, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import React,{useState} from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    // messeage 
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e =>{
        setEmail(e.target.value);

    }
    const handleAdminSubmit = e =>{
        const user = { email}
        fetch('https://ancient-island-03613.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            if(data.modifiedCount){
                setEmail('')
                setSuccess(true);

                console.log(data);
            }
        })

        e.preventDefault(user)
    }
    return (
        <div>
            <h1>Make Admin </h1>
            <form onSubmit={handleAdminSubmit}>
            <TextField  
            label="Email"
            sx={{width: '30%', m: 1,mt:1.5}}
            type='email'
            onBlur={handleOnBlur}
            variant="standard" />
            <Button    sx={{width: '15%', mt: 3}} type='submit' variant='contained'>Make Admin</Button>

            </form>
           { success ?.email && <Alert severity="success">User Crate a success </Alert>}

        </div>
    );
};

export default MakeAdmin;