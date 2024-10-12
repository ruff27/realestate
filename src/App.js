<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
=======
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box, Container, AppBar, Toolbar, Typography, Button, Card, CardContent, CardMedia, CardActions, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, InputBase, Chip, Stack, Grid } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Login as LoginIcon, PersonAdd as PersonAddIcon, Search as SearchIcon, Sell as SellIcon, Favorite as FavoriteIcon, Share as ShareIcon, LocationOn as LocationIcon, AttachMoney as PriceIcon } from '@mui/icons-material';
>>>>>>> ebe17b8 (design changed)
import Login from './pages/Login';
import Signup from './pages/Signup';
import RentBuy from './pages/RentBuy';
import Sell from './pages/Sell';
<<<<<<< HEAD
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rentbuy" element={<RentBuy />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
=======

const theme = createTheme({
  palette: {
    primary: { main: '#282c34' },
    secondary: { main: '#61dafb' },
    background: { default: '#f5f5f5' }
  },
  typography: { fontFamily: 'Roboto, Arial, sans-serif' },
});

const properties = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  type: ['Apartment', 'House', 'Studio', 'Condo'][i % 4],
  location: `${['Gulshan', 'Banani', 'Dhanmondi', 'Uttara', 'Mirpur'][i % 5]}, Dhaka`,
  price: `BDT ${(Math.random() * 100000 + 20000).toFixed(0)}/month`,
  image: '/images/p1.avif',
  description: 'Modern living space with great amenities and convenient location.',
}));

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
          {isMobile ? (
            <>
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
            </>
          ) : (
            <Box sx={{ display: 'flex' }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  component={Link}
                  to={item.path}
                  startIcon={item.icon}
                  sx={{ ml: 2 }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const PropertyCard = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
      <CardMedia component="img" height="200" image={property.image} alt={property.type} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">{property.type}</Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <LocationIcon fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary" ml={1}>{property.location}</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <PriceIcon fontSize="small" color="action" />
          <Typography variant="h6" color="primary" ml={1}>{property.price}</Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={() => setIsFavorite(!isFavorite)}>
          <FavoriteIcon color={isFavorite ? 'error' : 'action'} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>View Details</Button>
      </CardActions>
    </Card>
  );
};

const PropertyListings = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom={isMobile}>Featured Properties</Typography>
        <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', pb: 1 }}>
          <Chip label="All" color="primary" onClick={() => {}} />
          <Chip label="Apartment" onClick={() => {}} />
          <Chip label="House" onClick={() => {}} />
          <Chip label="Studio" onClick={() => {}} />
        </Stack>
      </Box>
      <Grid container spacing={3}>
        {properties.map((property) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={property.id}>
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const SearchBar = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontSize: isMobile ? '2rem' : '3rem' }}>
        Find Your Dream Home
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', maxWidth: 600, margin: 'auto', backgroundColor: 'white', borderRadius: 2, p: 1 }}>
        <InputBase 
          sx={{ ml: 1, flex: 1, mb: isMobile ? 1 : 0 }} 
          placeholder="Enter an address, neighborhood, city, or ZIP code" 
        />
        <Button 
          variant="contained" 
          startIcon={<SearchIcon />}
          fullWidth={isMobile}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

const HomePage = () => (
  <>
    <SearchBar />
    <PropertyListings />
  </>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/rentbuy" element={<RentBuy />} />
            <Route path="/sell" element={<Sell />} />
          </Routes>
        </Container>
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © 2023 RealEstate. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Router>
  </ThemeProvider>
);

export default App;
>>>>>>> ebe17b8 (design changed)
