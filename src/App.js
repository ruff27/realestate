import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Sold from './pages/Sold';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B7B8C', // Main color for buttons, icons, highlights
    },
    secondary: {
      main: '#8FBFBF', // Other color (use sparingly)
    },
    background: {
      default: '#EFF9FE', // Background color
      paper: '#FFFFFF',   // For paper-like surfaces
    },
    text: {
      primary: '#0B1F23', // Main font color
      secondary: '#BFBBB8', // Grey for inactive elements
    },
    grey: {
      500: '#BFBBB8', // Grey for inactive elements
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#8FBFBF', // Secondary color on hover
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh', // Ensure the Box takes at least the full viewport height
          }}
        >
          <Navbar />
          <Box
            component="main"
            sx={{
              flexGrow: 1, // Allow the main content to grow and push the footer down
              py: 3, // Add some padding to the top and bottom
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/sold" element={<Sold />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;