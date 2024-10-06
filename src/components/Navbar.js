import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2B7B8C' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src="/images/logo.png" alt="Logo" style={{ height: '40px', marginRight: '15px' }} />
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Real Estate Platform
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/" sx={{ color: '#EFF9FE' }}>Home</Button>
          <Button color="inherit" component={Link} to="/rentbuy" sx={{ color: '#EFF9FE' }}>Rent/Buy</Button>
          <Button color="inherit" component={Link} to="/sell" sx={{ color: '#EFF9FE' }}>Sell</Button>
          <Button color="inherit" component={Link} to="/login" sx={{ color: '#EFF9FE' }}>Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
