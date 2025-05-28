import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import ServiceDetailsPage from './pages/ServiceDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/services/:id" element={<ServiceDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;