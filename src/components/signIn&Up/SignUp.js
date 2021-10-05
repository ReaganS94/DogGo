import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


import {useState, useEffect} from 'react'
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'; 


function Copyright(props) {
  return (
    <Typography color="#2E2E2E" align="center" margin="1rem auto" {...props}>
      {'Copyright © '}
      <Link color="#2E2E2E">  {/* we can include href to link to our website once it is deployed */}
        DogGo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp() {


  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [about, setAbout] = useState("");
  const [city, setCity] = useState("");

  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username, 
      password,
      email,
      phoneNumber,
      about,
      city
    };

    axios
      .post("https://dry-temple-96625.herokuapp.com/users", newUser)
      .then((res) => {
        setUserId(res.data.data._id)
      });

    setUsername("");
    setPassword("");
    setEmail("");
    setPhoneNumber("");
    setAbout("");
    setCity(""); 

    alert("Your profile is registered.");
  };

  if (userId) return <Redirect to={`/userprofile/${userId}`} />

  return (
    <>
      <Container component="main" maxWidth="xs" style={{height:"100vh"}} > 
        <CssBaseline />
        <Box
          style={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar style={{backgroundColor: "#DC3C4D", marginTop: "2rem"}}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} style={{marginTop: "2rem"}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="city"
                  city="city"
                  required
                  fullWidth
                  id="city"
                  label="city"
                  autoFocus
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="phoneNumber"
                  phoneNumber="phoneNumber"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="phoneNumber"
                  autoFocus
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField  variant="outlined"
                   placeholder="Write awesome things about yourself"
                   multiline
                   rows={5}
                   rowsMax={10}
                   fullWidth
                   columnsMax={10}
                   value={about}
                   onChange={(e) => setAbout(e.target.value)}
                    />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" style={{color:"#3699E2"}} />}
                  label="I have read and accept terms and conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained" 
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item color="#2E2E2E" align="center" margin="1rem auto">
                <Link to="/signin" style={{color: "#3699E2",  fontFamily: "Gidole-Regular"}}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright  style={{marginBottom:"1rem"}}/>
     </Container>
  </>
)}; 