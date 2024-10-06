import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Real Estate Platform
      </Typography>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/rentbuy">
          <ListItemText primary="Rent/Buy" />
        </ListItem>
        <ListItem button component={Link} to="/sell">
          <ListItemText primary="Sell" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#2B7B8C' }}>
        <Toolbar>
          {/* Logo and Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src="/images/logo.png" alt="Logo" style={{ height: '40px', marginRight: '15px' }} />
            <Typography variant="h6" noWrap component={Link} to="/" sx={{ color: '#EFF9FE', textDecoration: 'none' }}>
              Real Estate Platform
            </Typography>
          </Box>

          {/* Menu for larger screens */}
          <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1 }}>
            <Button component={Link} to="/" sx={{ color: '#EFF9FE' }}>
              Home
            </Button>
            <Button component={Link} to="/rentbuy" sx={{ color: '#EFF9FE' }}>
              Rent/Buy
            </Button>
            <Button component={Link} to="/sell" sx={{ color: '#EFF9FE' }}>
              Sell
            </Button>
          </Box>

          {/* Login button */}
          <Button component={Link} to="/login" sx={{ color: '#EFF9FE', marginLeft: 'auto' }}>
            Login
          </Button>

          {/* Hamburger menu for mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Navbar;
