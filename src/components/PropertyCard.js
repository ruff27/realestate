import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const Icon = styled('img')({
  width: 26, // Icon size
  height: 26,
  marginRight: 4, 
});

function PropertyCard({ property }) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={property.image}
        alt={property.location}
      />
      <CardContent sx={{ padding: 2 }}>
        {/* Location and Price */}
        <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold', mb: 0.5 }}>
          {property.location}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
          BDT {property.price} per month
        </Typography>

        {/* Property Type */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {property.type}
        </Typography>

        {/* Property Details */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <Icon src="/logo/bedroom.png" alt="Bedrooms" />
            <Typography variant="body2" color="text.secondary">
              {property.bedrooms}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Icon src="/logo/bathroom.png" alt="Bathrooms" />
            <Typography variant="body2" color="text.secondary">
              {property.bathrooms}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PropertyCard;
