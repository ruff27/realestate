import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import PropertyCard from '../components/PropertyCard';

const propertyData = [
];

function Home() {
  return (
    <Container>
      <Box textAlign="center" sx={{ marginTop: 5 }}>
        <Typography variant="h3" sx={{ color: '#0B1F23', marginBottom: 2 }}>
          Welcome to Real Estate Platform
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ marginTop: 5, marginBottom: 2 }}>
        Featured Properties
      </Typography>
      <Grid container spacing={2}>
        {propertyData.map((property, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;