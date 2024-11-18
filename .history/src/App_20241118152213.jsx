import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from "../components/Countries";
import Details from "../components/Details";
const App = () => (
  <BrowserRouter basename="/world-kingdoms">
    <Routes>
      <Route path="/" element={<Countries />} />
      <Route path="countries" element={<Countries />}>
        <Route path=":cca2" element={<Details />} /> {/* Nested route for details */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;