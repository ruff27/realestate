import React, { useState, useEffect } from 'react';
import { 
  Typography, Container, Box, Button, Grid, Paper, Card, CardContent, 
  CardMedia, CardActions, TextField, MenuItem, useTheme, useMediaQuery,
  Dialog, DialogTitle, DialogContent, DialogActions, Slider
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import dhakaLocations from '../components/DhakaLocations';

function generateProperties(count) {
  return Array(count).fill().map((_, index) => ({
    id: index + 1,
    title: `${['Luxurious', 'Modern', 'Spacious', 'Cozy', 'Elegant', 'Charming', 'Stylish'][index % 7]} ${['Apartment', 'House', 'Condo', 'Penthouse', 'Villa', 'Duplex', 'Loft'][index % 7]} in ${dhakaLocations[index % dhakaLocations.length]}`,
    price: Math.floor(Math.random() * (100000000 - 5000000) + 5000000),
    type: ['apartment', 'house', 'condo', 'penthouse', 'villa', 'duplex', 'loft'][index % 7],
    location: dhakaLocations[index % dhakaLocations.length],
    bedrooms: Math.floor(Math.random() * 5) + 1,
    bathrooms: Math.floor(Math.random() * 4) + 1,
    area: Math.floor(Math.random() * (5000 - 500) + 500),
    image: "/images/p1.png"
  }));
}

const buyProperties = generateProperties(100);

function Buy() {
  const theme = useTheme();
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [propertyType, setPropertyType] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(buyProperties);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [bedrooms, setBedrooms] = useState([1, 5]);
  const [bathrooms, setBathrooms] = useState([1, 4]);

  useEffect(() => {
    filterProperties();
  }, [propertyType, bedrooms, bathrooms]);

  const filterProperties = () => {
    let filtered = buyProperties;

    if (propertyType) {
      filtered = filtered.filter(property => property.type === propertyType);
    }

    filtered = filtered.filter(property => 
      property.bedrooms >= bedrooms[0] && property.bedrooms <= bedrooms[1] &&
      property.bathrooms >= bathrooms[0] && property.bathrooms <= bathrooms[1]
    );

    setFilteredProperties(filtered);
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

  const handleOpenDialog = (property) => {
    setSelectedProperty(property);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: { xs: 2, sm: 3, md: 4 } }}>
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, backgroundColor: 'background.paper' }}>
          <Typography 
            variant={isSmallScreen ? "h4" : (isMediumScreen ? "h3" : "h2")} 
            component="h1" 
            gutterBottom 
            color="primary"
            align="center"
          >
            Properties for Sale
          </Typography>
          <Typography 
            variant={isSmallScreen ? "body1" : "h5"} 
            component="h2" 
            gutterBottom 
            color="text.secondary"
            align="center"
            sx={{ mb: { xs: 2, sm: 3, md: 4 } }}
          >
            Find your dream home
          </Typography>
          
          <Box sx={{ mb: { xs: 2, sm: 3, md: 4 } }}>
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
          </Box>
          
          <Grid container spacing={2}>
            {filteredProperties.map((property) => (
              <Grid item xs={12} sm={6} md={4} key={property.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height={isExtraSmallScreen ? "100" : "140"}
                    image="/images/p1.png"
                    alt={property.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant={isSmallScreen ? "h6" : "h5"} component="div">
                      {property.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {property.price.toLocaleString()} BDT
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Type: {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Location: {property.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Bedrooms: {property.bedrooms}, Bathrooms: {property.bathrooms}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" startIcon={<HomeIcon />} onClick={() => handleOpenDialog(property)}>View Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          {filteredProperties.length === 0 && (
            <Typography variant="h6" align="center" sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
              No properties found. Please try a different search.
            </Typography>
          )}
        </Paper>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        {selectedProperty && (
          <>
            <DialogTitle>{selectedProperty.title}</DialogTitle>
            <DialogContent>
              <img src="/images/p1.png" alt={selectedProperty.title} style={{width: '100%', marginBottom: '1rem'}} />
              <Typography variant="body1">Price: {selectedProperty.price.toLocaleString()} BDT</Typography>
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
    </Container>
  );
}

export default Buy;
