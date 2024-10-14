import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function PropertyCard({ property }) {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={property.image}
        alt={property.type}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {property.type}
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2" color="text.secondary">
            {property.location}
          </Typography>
        </Box>
        <Typography variant="h6" color="primary">
          BDT {property.price}/month
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="space-between" sx={{ padding: 2 }}>
        <Box>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Box>
        <Button variant="contained" sx={{ backgroundColor: '#0B1F23' }}>
          View Details
        </Button>
      </Box>
    </Card>
  );
}

export default PropertyCard;
