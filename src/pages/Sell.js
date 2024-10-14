import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField } from '@mui/material';

function Sell() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      image,
    });
  };

  return (
    <Container sx={{ marginTop: 5 }}>
      <Box sx={{ marginBottom: 5, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ marginBottom: 3, fontWeight: 'bold' }}>
          Sell Your Property
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Property Title */}
          <TextField
            fullWidth
            label="Property Title"
            variant="outlined"
            required
            sx={{ marginBottom: 2 }}
          />

          {/* Location */}
          <TextField
            fullWidth
            label="Location"
            variant="outlined"
            required
            sx={{ marginBottom: 2 }}
          />

          {/* Price */}
          <TextField
            fullWidth
            label="Price (BDT)"
            type="number"
            variant="outlined"
            required
            sx={{ marginBottom: 2 }}
          />

          {/* Property Description */}
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            required
            sx={{ marginBottom: 2 }}
          />

          {/* Image Upload */}
          <Button variant="contained" component="label" sx={{ marginBottom: 2 }}>
            Upload Image
            <input type="file" hidden onChange={handleImageChange} accept="image/*" />
          </Button>
          {image && <Typography sx={{ marginBottom: 2 }}>Selected Image: {image.name}</Typography>}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ backgroundColor: '#2B7B8C', color: '#EFF9FE' }}
          >
            Submit Listing
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Sell;