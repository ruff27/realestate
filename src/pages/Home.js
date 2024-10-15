import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Typography, Container, Box, Button, Paper, TextField, List, ListItem, ListItemText,
  useTheme, useMediaQuery, Snackbar, Alert, Dialog, DialogTitle, DialogContent, DialogActions,
  Slider, MenuItem, ToggleButton, ToggleButtonGroup
} from '@mui/material';
import dhakaLocations from '../components/DhakaLocations';

const API_KEY = 'AIzaSyAWaLpMqsy9pSUbTlkiqm9VxO8v-71w8A8';

function generateProperties(count, forRent = false) {
  return Array(count).fill().map((_, index) => {
    const location = dhakaLocations[index % dhakaLocations.length];
    return {
      id: index + 1,
      title: `${['Luxurious', 'Modern', 'Spacious', 'Cozy', 'Elegant', 'Charming', 'Stylish'][index % 7]} ${['Apartment', 'House', 'Condo', 'Penthouse', 'Villa', 'Duplex', 'Loft'][index % 7]} in ${location}`,
      price: forRent 
        ? Math.floor(Math.random() * (100000 - 10000) + 10000) 
        : Math.floor(Math.random() * (100000000 - 5000000) + 5000000),
      type: ['apartment', 'house', 'condo', 'penthouse', 'villa', 'duplex', 'loft'][index % 7],
      location: location,
      bedrooms: Math.floor(Math.random() * 5) + 1,
      bathrooms: Math.floor(Math.random() * 4) + 1,
      area: Math.floor(Math.random() * (5000 - 500) + 500),
      lat: 23.8103 + (Math.random() - 0.5) * 0.1,
      lng: 90.4125 + (Math.random() - 0.5) * 0.1,
      image: "/images/p1.avif",
      forRent: forRent
    };
  });
}

const allProperties = [
  ...generateProperties(50, false),  // 50 properties for sale
  ...generateProperties(50, true)    // 50 properties for rent
];

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchInput, setSearchInput] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [bedrooms, setBedrooms] = useState([1, 5]);
  const [bathrooms, setBathrooms] = useState([1, 4]);
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const [error, setError] = useState(null);
  const [map, setMap] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const mapRef = useRef(null);
  const [rentOrBuy, setRentOrBuy] = useState('buy');
  const searchSectionRef = useRef(null);

  const loadGoogleMapsScript = useCallback(() => {
    if (window.google) {
      initMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    loadGoogleMapsScript();
  }, [loadGoogleMapsScript]);

  useEffect(() => {
    filterProperties();
  }, [propertyType, bedrooms, bathrooms, rentOrBuy]);

  const initMap = () => {
    if (!mapRef.current) return;

    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center: { lat: 23.8103, lng: 90.4125 },
      zoom: 12,
    });

    setMap(mapInstance);

    allProperties.forEach(property => {
      const marker = new window.google.maps.Marker({
        position: { lat: property.lat, lng: property.lng },
        map: mapInstance,
        title: property.title,
      });

      marker.addListener('click', () => {
        setSelectedProperty(property);
        setOpenDialog(true);
      });
    });
  };

  const filterProperties = () => {
    let filtered = allProperties.filter(property => property.forRent === (rentOrBuy === 'rent'));

    if (propertyType) {
      filtered = filtered.filter(property => property.type === propertyType);
    }

    filtered = filtered.filter(property => 
      property.bedrooms >= bedrooms[0] && property.bedrooms <= bedrooms[1] &&
      property.bathrooms >= bathrooms[0] && property.bathrooms <= bathrooms[1]
    );

    setFilteredProperties(filtered);
  };

  const handleSearch = () => {
    if (!searchInput.trim()) {
      setError("Please enter a location to search.");
      return;
    }

    const property = filteredProperties.find(p => p.location && p.location.toLowerCase().includes(searchInput.toLowerCase()));
    if (property && map) {
      map.setCenter({ lat: property.lat, lng: property.lng });
      map.setZoom(15);
      setSelectedProperty(property);
      setOpenDialog(true);
    } else {
      setError("Couldn't find the location. Please try a different search.");
    }
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleBedroomChange = (event, newValue) => {
    setBedrooms(newValue);
  };

  const handleBathroomChange = (event, newValue) => {
    setBathrooms(newValue);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProperty(null);
  };

  const handleRentOrBuyChange = (event, newValue) => {
    if (newValue !== null) {
      setRentOrBuy(newValue);
    }
  };

  const handleStartSearch = () => {
    searchSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/p1.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: { xs: '60vh', sm: '70vh', md: '80vh' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <Container maxWidth="md">
            <Typography 
              variant={isMobile ? "h4" : "h2"} 
              component="h1" 
              gutterBottom 
              align="center" 
              sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              Find Your Dream Property
            </Typography>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button variant="contained" color="primary" size="large" onClick={handleStartSearch}>
                Start Your Search
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Search and Map Section */}
        <Box ref={searchSectionRef} sx={{ py: { xs: 4, sm: 6, md: 8 }, bgcolor: 'background.paper' }}>
          <Container>
            <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
              Search for Properties
            </Typography>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2, mb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <ToggleButtonGroup
                  color="primary"
                  value={rentOrBuy}
                  exclusive
                  onChange={handleRentOrBuyChange}
                >
                  <ToggleButton value="buy">Buy</ToggleButton>
                  <ToggleButton value="rent">Rent</ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Search for a location in Dhaka"
                  variant="outlined"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button onClick={handleSearch} variant="contained" sx={{ mt: 1 }}>Search</Button>
              </Box>

              <TextField
                select
                fullWidth
                label="Property Type"
                value={propertyType}
                onChange={handlePropertyTypeChange}
                variant="outlined"
                sx={{ mb: 2 }}
              >
                <MenuItem value="">All Types</MenuItem>
                <MenuItem value="house">House</MenuItem>
                <MenuItem value="apartment">Apartment</MenuItem>
                <MenuItem value="condo">Condo</MenuItem>
                <MenuItem value="penthouse">Penthouse</MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="loft">Loft</MenuItem>
              </TextField>

              <Typography gutterBottom>Bedrooms: {bedrooms[0]} - {bedrooms[1]}</Typography>
              <Slider
                value={bedrooms}
                onChange={handleBedroomChange}
                valueLabelDisplay="auto"
                min={1}
                max={5}
                sx={{ mb: 2 }}
              />

              <Typography gutterBottom>Bathrooms: {bathrooms[0]} - {bathrooms[1]}</Typography>
              <Slider
                value={bathrooms}
                onChange={handleBathroomChange}
                valueLabelDisplay="auto"
                min={1}
                max={4}
                sx={{ mb: 2 }}
              />
            </Paper>
            
            {/* Google Map */}
            <Box sx={{ height: 400, width: '100%' }} ref={mapRef} />
          </Container>
        </Box>
      </Box>

      {/* Property Details Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        {selectedProperty && (
          <>
            <DialogTitle>{selectedProperty.title}</DialogTitle>
            <DialogContent>
              <img src={selectedProperty.image} alt={selectedProperty.title} style={{width: '100%', marginBottom: '1rem'}} />
              <Typography variant="body1">
                Price: {selectedProperty.price.toLocaleString()} BDT
                {selectedProperty.forRent ? '/month' : ''}
              </Typography>
              <Typography variant="body1">Type: {selectedProperty.type.charAt(0).toUpperCase() + selectedProperty.type.slice(1)}</Typography>
              <Typography variant="body1">Location: {selectedProperty.location}</Typography>
              <Typography variant="body1">Bedrooms: {selectedProperty.bedrooms}</Typography>
              <Typography variant="body1">Bathrooms: {selectedProperty.bathrooms}</Typography>
              <Typography variant="body1">Area: {selectedProperty.area} sq ft</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Error Snackbar */}
      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Home;