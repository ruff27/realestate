// New Navbar.js (components/Navbar.js)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Container, Box, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Login as LoginIcon, PersonAdd as PersonAddIcon, Search as SearchIcon, Sell as SellIcon } from '@mui/icons-material';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Login', icon: <LoginIcon />, path: '/login' },
    { text: 'Signup', icon: <PersonAddIcon />, path: '/signup' },
    { text: 'Rent/Buy', icon: <SearchIcon />, path: '/rentbuy' },
    { text: 'Sell', icon: <SellIcon />, path: '/sell' },
  ];

  const drawer = (
    <Box onClick={() => setDrawerOpen(false)} sx={{ width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} component={Link} to={item.path}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            RealEstate
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;