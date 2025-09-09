import { Box, Button, Container, TextField, Typography ,Link} from '@mui/material'
import axios from 'axios';
import React, { use, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  var[input,setInput]=useState({})
  var baseurl = import.meta.env.VITE_API_BASE_URL 
  var Navigate = useNavigate()

    const inputHandler = (e)=>{
        console.log(e.target.value);
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input);
    };
    const addHandler = ()=>{
      console.log("clicked")
      axios.post(`${baseurl}/api`,input)
      .then((res)=>{
        console.log(res)
        alert(res.data.message);
        navigate('/')

      })
      .catch((err)=>{
        console.log(err)
      })
    }
  return (
    <div>
      <Container maxWidth = "sm">
       <Box 
       sx = {{
            Padding:4,
            // paddingLeft:6,
            backgrondColor:"white",
            justifyContent:'center',
            alignItems:'center',

            borderRadius:2,
            margin:3,
            boxShadow:3,
            width:500,
            height:500
            }}>
              <br /><br /><br />
      <Typography variant='h4'color="secondary">Join Helping Hands</Typography><br/>
      "The best way to find yourself is to lose yourself in the service of others."<br/><br/>
      <TextField   label="Full Name" variant="outlined" name="name" onChange={inputHandler}/><br /><br />
      <TextField   label="Email" variant="outlined" name="email"onChange={inputHandler}/><br /><br />
      <TextField  label="Password" variant="outlined" name="password" onChange={inputHandler}/><br /><br />
    <TextField  label="Confirm Password" variant="outlined" name="confirmpassword" onChange={inputHandler}/><br /><br />
      <Button  onClick={addHandler} variant="contained" color="secondary">SignUp</Button>
 <Typography variant='body2'
    align='center'
    sx={{marginTop:"1rem",color:"text.secondary"}}>
    Already a user?{""}
    <Link href = '/'underline = "hover" color = "primary">
        Login here
    </Link>
    </Typography>

      </Box>
      </Container>
    </div>
  )
}//test

export default Signup