import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Chip, Button } from '@mui/material';
import PropertyCard from '../components/PropertyCard';
import properties from '../data/propertyData';
import { filterProperties } from '../services/propertyService'; // Import the filtering function

const propertyTypes = ['All', 'Apartment', 'House', 'Studio', 'Condo'];

function RentBuy() {
  // States for filters
  const [selectedType, setSelectedType] = useState('All');
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');

  // State to store the filtered properties
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Use effect to filter properties when selectedType changes
  useEffect(() => {
    handleSearch();
  }, [selectedType]);

  // Function to handle type filter selection
  const handleTypeFilter = (type) => {
    setSelectedType(type);
  };

  // Function to handle search and filter properties
  const handleSearch = () => {
    const filters = {
      type: selectedType,
      location,
      bedrooms,
      bathrooms,
      priceMin,
      priceMax,
    };

    const filtered = filterProperties(properties, filters);
    setFilteredProperties(filtered);
  };

  return (
    <Container sx={{ marginTop: 5, bgcolor: '#EFF9FE' }}>
      <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold', color: '#0B1F23' }}>
        Properties for Rent
      </Typography>

      {/* Property Type Filter */}
      <Box sx={{ marginBottom: 3 }}>
        {propertyTypes.map((type) => (
          <Chip
            key={type}
            label={type}
            clickable
            onClick={() => handleTypeFilter(type)}
            sx={{
              marginRight: 1,
              backgroundColor: selectedType === type ? '#0B1F23' : '#BFBBB8',
              color: selectedType === type ? '#fff' : '#0B1F23',
            }}
          />
        ))}
      </Box>

      {/* Search Filters */}
      <Box sx={{ marginBottom: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              variant="outlined"
              placeholder="Enter location"
              InputLabelProps={{ style: { color: '#0B1F23' } }}
            />
          </Grid>
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
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#2B7B8C', color: '#EFF9FE', marginTop: 2 }}
              fullWidth
              onClick={handleSearch}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Display Filtered Properties */}
      <Grid container spacing={4}>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Grid item xs={12} sm={6} md={4} key={property.id}>
              <PropertyCard property={property} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ marginTop: 3, textAlign: 'center', color: '#0B1F23' }}>
            No properties found. Please adjust your search criteria.
          </Typography>
        )}
      </Grid>
    </Container>
  );
}

export default RentBuy;
