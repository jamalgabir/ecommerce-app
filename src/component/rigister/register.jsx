import React from 'react';
import './register.css';
import { useState } from 'react';
import { puplicReuest } from '../../requestMethod';
import {useNavigate} from 'react-router-dom';
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
import Loader from './loader';
import { Alert } from '@mui/material';
import { useEffect } from 'react';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Jamal.Dev
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
 
  const [data, setData] = useState({})
  const [Loading,setLoading] = useState(false);
  const [message,setMessage] = useState('');
  const [successful,setSuccessful] = useState('error');
  const [disable,setDisable] = useState(true);
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setData((preiv)=>{
       return {...preiv, [event.target.name]:event.target.value}
    })
    
  };
  //console.log(data)
  const boxCheck = (e)=>{
    if(e.target.checked){
     return console.log("Yes")
    }
    console.log("No")
  }

  useEffect(()=>{
     const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!data.firstName||!data.lastName|!data.password||!data.email||!data.email.match(mailformat)){
      return setDisable(true)
    }
      setDisable(false)
  },[data.firstName,data.lastName,data.email,data.password]);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      if(!data.firstName||!data.lastName||!data.email||!data.password){
        return setMessage("Please fill in all fields !")
      }
      setLoading(true);
      const post = await puplicReuest.post('/register',data)
      setLoading(false);
      setMessage(post.data.message)
      setSuccessful('success')
      setTimeout(()=>navigate('/login'),3000)

    }catch(error){
      setLoading(false)
      setSuccessful('error')
      setMessage(error.response.data.message)
    }
    
  }

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
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>handleChange(e)}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={(e)=>handleChange(e)}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={(e)=>handleChange(e)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                onChange={(e)=>handleChange(e)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                {message&&<Alert severity={successful}>{message}</Alert>}

              </Grid>
              <Grid item xs={12}>
                <FormControlLabel 
                  control={<Checkbox onClick={(e)=>boxCheck(e)} value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            {Loading?<Loader/>:<Button
              type="submit"
              fullWidth
              disabled={disable}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>}
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};




// const Register = () => {
//     const [message,setMessage] = useState('');
//     const [data, setData] = useState({});
//     const [color,setColor] = useState('red');
//     const navigate = useNavigate();

//     const handleChange = (e) =>{
//        setData(prev=>{
//            return {...prev,[e.target.name]: e.target.value}
//        })
//     }
//     const handleRegister = async (e) =>{

//         e.preventDefault()
//         try{
//             if(!data.username||!data.email||!data.password|| !data.phone ||
//             data.password !== data.confirm)
//             return setMessage("Wrong Deatails!!")
//             const user = await puplicReuest.post('/register',data)
//             setColor('green')
//             setMessage(user.data.message)
//             //setTimeout(()=>navigate('/'),3000)


//         }catch(error){
//             setMessage(error.response.data.message)
//             console.log(error.response.data)
//         }
        
        
        
       
        
//     }

//   return (
//   <div className='reg-container'>
//       <div className='reg-wrapper'>
//           <h1 className='reg-title'>CREATE AN ACCOUNT</h1>
//           <form className='reg-form'>
              
//               <input type='text' onChange={handleChange} name='username' placeholder='username'/>              
//               <input type='email' onChange={handleChange} name='email' placeholder='email'/>
//               <input type='number' name='phone' onChange={handleChange} placeholder="phone number"/>
//               <input type='password' onChange={handleChange} name='password' placeholder='password'/>
//               <input type='password' name='confirm' onChange={handleChange} placeholder='Confirm password'/>
//               <span>
//                   By Creating account I processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
//               </span>
//               <p style={{color:color}}>{message&&message}</p>
//               <button onClick={handleRegister} className='reg-btn'>Create Account</button>
//           </form>

//       </div>
    
//   </div>
//   );
// };

//export default Register;
