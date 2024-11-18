import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from "../../components/Countries";
import Details from "../../components/Details";

const App = () => (
  <BrowserRouter basename="world-kingdoms">
    <Routes>
      <Route path="/" element={<Countries />}>
        <Route path="countries/:cca2" element={<Details />} />
      </Route>
      <Route path="/countries" element={<Countries />} />
    </Routes>
  </BrowserRouter>
);

export default App;
