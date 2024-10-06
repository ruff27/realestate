import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RentBuy from './pages/RentBuy';
import Sell from './pages/Sell';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/rentbuy" element={<RentBuy />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
