import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, ThemeProvider, createTheme, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2B7B8C',
    },
    background: {
      default: '#EFF9FE',
      paper: '#EFF9FE',
    },
    text: {
      primary: '#0B1F23',
      secondary: '#BFBBB8',
    },
  },
});

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Buy', path: '/buy' },
    { text: 'Rent', path: '/rent' },
    { text: 'Sold', path: '/sold' },
  ];

  const drawer = (
    <Box
      sx={{
        height: '100%',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: theme.spacing(2),
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: theme.palette.primary.main }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            component={Link} 
            to={item.path} 
            key={item.text}
            onClick={handleDrawerToggle}
            sx={{
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
              },
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Logo and Name */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="/images/logo.png" alt="Logo" style={{ height: '40px', marginRight: '15px' }} />
              <LogoText variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', display: { xs: 'none', sm: 'block' } }}>
                Real Estate Platform
              </LogoText>
            </Box>

            {/* Navigation Items */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {navItems.map((item) => (
                  <NavButton
                    key={item.text}
                    component={Link}
                    to={item.path}
                  >
                    {item.text}
                  </NavButton>
                ))}
              </Box>
            )}

            {/* Login Button and Mobile Menu */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <NavButton component={Link} to="/login" sx={{ ml: 2 }}>
                Login
              </NavButton>

              {isMobile && (
                <IconButton
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 1, color: theme.palette.primary.main }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </StyledAppBar>

        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: '100%' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;