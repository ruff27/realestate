import React from 'react';
import { Container, Typography, Box, Button, Card, CardContent, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';

function Home() {
  return (
    <Container>
      <Box textAlign="center" sx={{ marginTop: 5 }}>
        <Typography variant="h3" sx={{ color: '#0B1F23', marginBottom: 2 }}>
          Welcome to Real Estate Platform
        </Typography>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#2B7B8C' }}>
          Get Started
        </Button>
      </Box>

      {/* Featured Properties Section */}
      <Typography variant="h4" sx={{ marginTop: 5, marginBottom: 2 }}>
        Featured Properties
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/images/p1.avif"
              alt="Property"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Apartment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Location: Dhaka <br /> Price: BDT 40,000/month
              </Typography>
              <Button size="small" sx={{ backgroundColor: '#2B7B8C', color: '#EFF9FE', marginTop: 2 }}>View Details</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
