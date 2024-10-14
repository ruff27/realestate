import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#EFF9FE', // Background Colour
    },
    primary: {
      main: '#2B7B8C', // Main Colour (button, icon, highlight)
    },
    grey: {
      main: '#BFBBB8', // Grey (inactive colour)
    },
    text: {
      primary: '#0B1F23', // Black (Font colour)
    },
    secondary: {
      main: '#8FBFBF', // Others (try not to use this colour)
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Optional customization for button appearance
          textTransform: 'none', // Keeps text without uppercase transformation
        },
      },
    },
  },
});

export default theme;
