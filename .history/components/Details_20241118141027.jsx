import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch('https://restcountries.com/v3.1/name/kingdom');
      const data = await response.json();
      setCountries(data);
    };
    fetchCountries();
  }, []);

  const handleSelect = (cca2, countryData) => {
    navigate(`/countries/${cca2}`, { state: { country: countryData } });
  };

  return (
    <div>
      <h1>Select a Country</h1>
      <select className="dropdown" onChange={(e) => handleSelect(e.target.value, countries.find(c => c.cca2 === e.target.value))}>
        <option value="">Select a Kingdom</option>
        {countries.map(country => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Countries;
