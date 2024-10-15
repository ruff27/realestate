import React, { useState, useEffect } from 'react';
import { 
  Typography, Container, Box, Button, Grid, Paper, Card, CardContent, 
  CardMedia, CardActions, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import dhakaLocations from '../components/DhakaLocations';

function generateProperties(count, sold = false) {
  return Array(count).fill().map((_, index) => ({
    id: index + 1,
    title: `${['Luxurious', 'Modern', 'Spacious', 'Cozy', 'Elegant', 'Charming', 'Stylish'][index % 7]} ${['Apartment', 'House', 'Condo', 'Penthouse', 'Villa', 'Duplex', 'Loft'][index % 7]} in ${dhakaLocations[index % dhakaLocations.length]}`,
    price: Math.floor(Math.random() * (100000000 - 5000000) + 5000000),
    type: ['apartment', 'house', 'condo', 'penthouse', 'villa', 'duplex', 'loft'][index % 7],
    location: dhakaLocations[index % dhakaLocations.length],
    bedrooms: Math.floor(Math.random() * 5) + 1,
    bathrooms: Math.floor(Math.random() * 4) + 1,
    area: Math.floor(Math.random() * (5000 - 500) + 500),
    image: "/images/p1.avif",
    isSold: sold // Mark the property as sold or unsold
  }));
}

const soldProperties = generateProperties(20, true); // 20 sold properties

function Sold() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

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
            variant="h2"
            component="h1"
            gutterBottom 
            color="primary"
            align="center"
          >
            Properties Sold
          </Typography>

          <Grid container spacing={2}>
            {soldProperties.map((property) => (
              <Grid item xs={12} sm={6} md={4} key={property.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', opacity: 0.9 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/p1.avif"
                    alt={property.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="div">{property.title}</Typography>
                    <Typography variant="body2" color="text.secondary">SOLD FOR: {property.price.toLocaleString()} BDT</Typography>
                    <Typography variant="body2" color="text.secondary">Location: {property.location}</Typography>
                    <Typography variant="body2" color="text.secondary">Bedrooms: {property.bedrooms}</Typography>
                    <Typography variant="body2" color="text.secondary">Bathrooms: {property.bathrooms}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" startIcon={<HomeIcon />} onClick={() => handleOpenDialog(property)}>View Details</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {soldProperties.length === 0 && (
            <Typography variant="h6" align="center" sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
              No sold properties found.
            </Typography>
          )}
        </Paper>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        {selectedProperty && (
          <>
            <DialogTitle>{selectedProperty.title}</DialogTitle>
            <DialogContent>
              <img src="/images/p1.avif" alt={selectedProperty.title} style={{width: '100%', marginBottom: '1rem'}} />
              <Typography variant="body1">SOLD FOR: {selectedProperty.price.toLocaleString()} BDT</Typography>
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

export default Sold;
