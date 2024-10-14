import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Button, Chip, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import PropertyCard from '../components/PropertyCard';

// Sample properties list
const properties = [
  {
    id: 1,
    type: 'Apartment',
    location: 'Gulshan, Dhaka',
    price: '106083',
    bedrooms: 3,
    bathrooms: 2,
    image: '/images/p1.avif',
  },
  {
    id: 2,
    type: 'House',
    location: 'Banani, Dhaka',
    price: '62560',
    bedrooms: 5,
    bathrooms: 4,
    image: '/images/p1.avif',
  },
  {
    id: 3,
    type: 'Studio',
    location: 'Dhanmondi, Dhaka',
    price: '42741',
    bedrooms: 1,
    bathrooms: 1,
    image: '/images/p1.avif',
  },
  {
    id: 4,
    type: 'Condo',
    location: 'Uttara, Dhaka',
    price: '40004',
    bedrooms: 2,
    bathrooms: 2,
    image: '/images/p1.avif',
  },
  // Add more properties as needed
];

// Property types for filter chips
const propertyTypes = ['All', 'Apartment', 'House', 'Studio', 'Condo'];

function RentBuy() {
  const [selectedType, setSelectedType] = useState('All');
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');

  // Handle the filter by property type
  const handleTypeFilter = (type) => {
    setSelectedType(type);
  };

  // Filter properties based on filters and type
  const filteredProperties = properties.filter((property) => {
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const matchesLocation = location === '' || property.location.toLowerCase().includes(location.toLowerCase());
    const matchesBedrooms = bedrooms === '' || property.bedrooms === Number(bedrooms);
    const matchesBathrooms = bathrooms === '' || property.bathrooms === Number(bathrooms);
    const matchesPrice =
      (priceMin === '' || property.price >= priceMin) && (priceMax === '' || property.price <= priceMax);

    return matchesType && matchesLocation && matchesBedrooms && matchesBathrooms && matchesPrice;
  });

  return (
    <Container sx={{ marginTop: 5 }}>
      {/* Page Title */}
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
        Properties for Rent
      </Typography>

      {/* Property Type Filter Chips */}
      <Box sx={{ marginBottom: 3 }}>
        {propertyTypes.map((type) => (
          <Chip
            key={type}
            label={type}
            clickable
            onClick={() => handleTypeFilter(type)}
            sx={{
              marginRight: 1,
              backgroundColor: selectedType === type ? '#0B1F23' : 'default',
              color: selectedType === type ? '#fff' : 'default',
            }}
          />
        ))}
      </Box>

      {/* Filters Section */}
      <Box sx={{ marginBottom: 5, textAlign: 'center' }}>
        <Grid container spacing={3} justifyContent="center">
          {/* Location Filter */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              variant="outlined"
              placeholder="Enter location"
            />
          </Grid>

          {/* Bedrooms Filter */}
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel>Bedrooms</InputLabel>
              <Select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                label="Bedrooms"
              >
                <MenuItem value="">Any</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Bathrooms Filter */}
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <InputLabel>Bathrooms</InputLabel>
              <Select
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                label="Bathrooms"
              >
                <MenuItem value="">Any</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Price Range Filters */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Min Price (BDT)"
              type="number"
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value)}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Max Price (BDT)"
              type="number"
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value)}
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Button variant="contained" sx={{ backgroundColor: '#2B7B8C', color: '#EFF9FE', marginTop: 3 }}>
          Search
        </Button>
      </Box>

      {/* Property Listings */}
      <Grid container spacing={4}>
        {filteredProperties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RentBuy;
