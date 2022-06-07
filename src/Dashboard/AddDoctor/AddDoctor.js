import { Button, Input, TextField } from '@mui/material';
import React,{useState} from 'react';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage]= useState(null);
    //massage dekhabo 
    const [success, setSuccess] = useState(false);

    const handleSubmit = e =>{
        e.preventDefault();        // preventDefault atar kaj hocche j reload hobe 
        if(!image){
            return;
        }
        // a vabe data patha te hoi
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        fetch('https://ancient-island-03613.herokuapp.com/doctors',{
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if(data.insertedId){
                setSuccess('Add Doctor added successfully')
                console.log('doctor added successfully')
            }

            // console.log('Success:', data);
        })
        .catch(error => {
            console.log('Error:', error);
        })

        
    }
    return (
        <div>
            <h3>Add A Doctor</h3>
            <form onSubmit={handleSubmit}>

                <TextField
                 sx={{width: '40%'}}
                 label='Name'
                 type='name'
                 required
                 onChange={ e => setName(e.target.value)}
                 variant='standard'
                ></TextField>
                <br></br>
                <TextField
                 sx={{width: '40%'}}
                 label='Email'
                 type='email'
                 required
                 onChange={ e => setEmail(e.target.value)}
                 variant='standard'
                ></TextField>
                <br>
                </br>
                <Input 
                 sx={{width: '40%',m:2}}
                  accept="image/*" 
                  type="file" 
                  onChange={e => setImage(e.target.files[0])}
                  
                  />
                <br>
                </br>
                    <Button    sx={{width: '20%', mr:28}} variant="contained" type='submit' >
                    <CreateNewFolderIcon sx={{ mr:2}}></CreateNewFolderIcon>   Add Doctor
                </Button>
            </form>
            {success && <p style={{color:'green'}}>{success}</p>}
        </div>
    );
};

export default AddDoctor;