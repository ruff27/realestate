import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for sending password reset link goes here
    console.log('Password reset link sent to:', email);
    setSubmitted(true);
  };

  return (
    <Container>
      <Box textAlign="center" sx={{ marginTop: 5 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>Forgot Password</Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Enter your email to receive a password reset link.
        </Typography>
        {submitted ? (
          <Alert severity="success" sx={{ marginBottom: 2 }}>
            Password reset link has been sent to {email}.
          </Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField 
              label="Email or Phone" 
              variant="outlined" 
              fullWidth 
              sx={{ marginBottom: 2 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              type="submit" 
              variant="contained" 
              fullWidth 
              sx={{ backgroundColor: '#2B7B8C', marginBottom: 2 }}
            >
              Send Reset Link
            </Button>
          </form>
        )}
      </Box>
    </Container>
  );
}

export default ForgotPassword;
