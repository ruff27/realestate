import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RentBuy from './pages/RentBuy';
import Sell from './pages/Sell';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<RentBuy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/rentbuy" element={<RentBuy />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
export default App;