import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from '../components/Countries'; // Updated to point to components outside src
import Details from '../components/Details'; // Updated similarly

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:cca2" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
