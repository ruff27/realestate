import React from 'react';
import { Container, Typography, Box, Button, Card, CardContent, CardMedia, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import Grid from '@mui/material/Grid2';

function RentBuy() {
  const [location, setLocation] = React.useState('');
  const [propertyType, setPropertyType] = React.useState('');
  const [priceRange, setPriceRange] = React.useState('');

  const handleLocationChange = (event) => setLocation(event.target.value);
  const handlePropertyTypeChange = (event) => setPropertyType(event.target.value);
  const handlePriceRangeChange = (event) => setPriceRange(event.target.value);

  return (
    <Container sx={{ marginTop: 5 }}>
      {/* Filters Section */}
      <Box sx={{ marginBottom: 5, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
          Filter Properties
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid xs={12} sm={4} md={3}>
            <FormControl fullWidth>
              <InputLabel>Location</InputLabel>
              <Select
                value={location}
                onChange={handleLocationChange}
                label="Location"
              >
                <MenuItem value="basundhara">Basundhara, Dhaka</MenuItem>
                <MenuItem value="uttara">Uttara, Dhaka</MenuItem>
                <MenuItem value="mirpur">Mirpur, Dhaka</MenuItem>
                <MenuItem value="agrabad">Agrabad, Chattogram</MenuItem>
                <MenuItem value="gulshan">Gulshan, Dhaka</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid xs={12} sm={4} md={3}>
            <FormControl fullWidth>
              <InputLabel>Property Type</InputLabel>
              <Select
                value={propertyType}
                onChange={handlePropertyTypeChange}
                label="Property Type"
              >
                <MenuItem value="1-bed">1 Bed Apartment</MenuItem>
                <MenuItem value="2-bed">2 Bed Apartment</MenuItem>
                <MenuItem value="3-bed">3 Bed Apartment</MenuItem>
                <MenuItem value="house">House</MenuItem>
                <MenuItem value="land">Land</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid xs={12} sm={4} md={3}>
            <FormControl fullWidth>
              <InputLabel>Price Range (BDT)</InputLabel>
              <Select
                value={priceRange}
                onChange={handlePriceRangeChange}
                label="Price Range"
              >
                <MenuItem value="10000">Up to BDT 10,000</MenuItem>
                <MenuItem value="20000">BDT 20,000 - BDT 50,000</MenuItem>
                <MenuItem value="50000">Above BDT 50,000</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#2B7B8C', color: '#EFF9FE', marginTop: 3, paddingX: 4, paddingY: 1 }}
        >
          Search
        </Button>
      </Box>

      {/* Available Properties Section */}
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold', textAlign: 'center' }}>
          Available Properties
        </Typography>
        <Grid container spacing={4}>
          <Grid xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image="/images/p1.avif"
                alt="Property 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  1 Bed Apartment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: Basundhara, Dhaka <br /> Price: BDT 8000
                </Typography>
                <Button 
                  size="small" 
                  sx={{ backgroundColor: '#2B7B8C', color: '#EFF9FE', marginTop: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image="/images/p1.avif"
                alt="Property 2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  2 Bed Apartment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: Gulshan, Dhaka <br /> Price: BDT 16,000
                </Typography>
                <Button 
                  size="small" 
                  sx={{ backgroundColor: '#2B7B8C', color: '#EFF9FE', marginTop: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image="/images/p1.avif"
                alt="Property 3"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Land
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: Agrabad, Chattogram <br /> Price: BDT 15,00,000
                </Typography>
                <Button 
                  size="small" 
                  sx={{ backgroundColor: '#2B7B8C', color: '#EFF9FE', marginTop: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default RentBuy;
