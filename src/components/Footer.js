import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#2B7B8C', color: 'white', padding: 2, textAlign: 'center', marginTop: 3 }}>
      <Typography variant="body2">&copy; 2024 Real Estate Platform. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;
