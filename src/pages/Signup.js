import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function Signup() {
  return (
    <Container>
      <Box textAlign="center" sx={{ marginTop: 5 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>Sign Up</Typography>
        <TextField label="Name" variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
        <TextField label="Email" variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
        <TextField label="Phone" variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
        <TextField label="Password" type="password" variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#2B7B8C', marginBottom: 2 }}>
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}

export default Signup;