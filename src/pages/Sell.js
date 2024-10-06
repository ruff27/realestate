import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function Sell() {
  return (
    <Container>
      <Box textAlign="center" sx={{ marginTop: 5 }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>Sell Your Property</Typography>
        <TextField label="Property Title" variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
        <TextField label="Location" variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
        <TextField label="Price" variant="outlined" fullWidth sx={{ marginBottom: 2 }} />
        <TextField label="Description" variant="outlined" multiline rows={4} fullWidth sx={{ marginBottom: 2 }} />
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#2B7B8C', marginBottom: 2 }}>
          Submit Listing
        </Button>
      </Box>
    </Container>
  );
}

export default Sell;
