import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/name/kingdom')
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSelect = (event) => {
    const selectedCountry = countries.find(
      (country) => country.cca2 === event.target.value
    );
    if (selectedCountry) {
      navigate(`/countries/${selectedCountry.cca2}`, {
        state: { country: selectedCountry },
      });
    }
  };

  return (
    <div>
      <h1>World Kingdoms</h1>
      <select onChange={handleSelect} defaultValue="">
        <option value="" disabled>
          Select a Kingdom
        </option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
      <Outlet /> {/* Outlet for rendering the nested route (Details) */}
    </div>
  );
};

export default Countries;
