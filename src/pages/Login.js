import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function Login() {
  return (
    <Container>
      <Box textAlign="center" sx={{ marginTop: 5 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>Login</Typography>
        <TextField label="Email or Phone" variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
        <TextField label="Password" type="password" variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#2B7B8C', marginBottom: 2 }}>
          Login
        </Button>
        <Typography variant="body2">Don't have an account? Sign up <a href="/signup">here</a></Typography>
      </Box>
    </Container>
  );
}

export default Login;