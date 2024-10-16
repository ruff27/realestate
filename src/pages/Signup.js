import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Snackbar } from '@mui/material';
import { Auth } from 'aws-amplify';

function Signup() {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setSnackbarMessage("Passwords do not match");
      setSnackbarOpen(true);
      return;
    }

    try {
      const signUpResponse = await Auth.signUp({
        username: emailOrPhone, // using email or phone as username
        password,
        attributes: {
          name, // optional
          email: emailOrPhone, // required if you're using email
        }
      });
      console.log('Signup successful:', signUpResponse);
      setSnackbarMessage("Signup successful! Please check your email for verification.");
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error signing up:', error);
      setSnackbarMessage(error.message);
      setSnackbarOpen(true);
    }
  };

  return (
    <Container>
      <Box textAlign="center" sx={{ marginTop: 5 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>Sign Up</Typography>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email or Phone"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: '#2B7B8C', marginBottom: 2 }}
          onClick={handleSignup}
        >
          Sign Up
        </Button>
        <Snackbar
          open={snackbarOpen}
          onClose={() => setSnackbarOpen(false)}
          message={snackbarMessage}
          autoHideDuration={6000}
        />
      </Box>
    </Container>
  );
}

export default Signup;
