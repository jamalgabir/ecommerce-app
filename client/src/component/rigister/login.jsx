import React from 'react';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
//import { Link } from 'react-router-dom';
import { login } from '../../redux/apiCalls';
import './login.css';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
 import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from '@mui/material';
import { userReuest } from '../../requestMethod';



const Login = () => {
  const[ m,setM ]= useState("");
  const [input, setInput] = useState({});
 // const {isFetching,currentUser} = useSelector((state)=>state.user);
  const dispatch = useDispatch()

  function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
  const handlechange = (e) =>{

    setInput(prev=>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const theme = createTheme();

  const handleClick = async (e) =>{
    e.preventDefault();
    try{
      if(!input.username||!input.password)
      return setM("pleas enter username and password")
      const user = await userReuest.post("/login",input)
      login(dispatch,input)

    }catch(error){
      setM(error.response.data.message)
      // console.log(error.response.data.message)

    }
    

    
  }
  //console.log(input)
  return (

    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" aria-disabled="false" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleClick} noValidate sx={{ mt: 1 }}>
          <TextField
          onChange={handlechange}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="username"
            autoComplete="email"
            autoFocus
          />
          <TextField
          onChange={handlechange}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {
            m&&<Alert severity="error">{m}</Alert>

          }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>
  // <div className='login-container'>
  //     <div className='login-wrapper'>
  //       <h1>Login</h1>
  //       <form className='login-form'>
  //           <input className='input1' onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='Email'/>
  //           <input className='input2' onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='password'/>
  //           <button onClick={handleClick} disabled={isFetching} className='login-btn'>LogIn</button>
  //           {error&&<span className='wrong-btn'>Something wrong!</span>}
  //           <p> DO NOT REMEMBER THE PASSWORD ?</p>
  //           <Link to="/register">
  //           <p> CREATE A NEW ACCOUNT </p>
  //           </Link>
            
  //       </form>
  //     </div>

  // </div>
  );
};

export default Login;
