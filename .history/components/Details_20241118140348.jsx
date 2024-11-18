import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const { state } = useLocation();
  const { country } = state || {};

  if (!country) {
    return <p>Country data not available.</p>;
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>
        <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Subregion:</strong> {country.subregion || 'N/A'}
      </p>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        style={{ width: '150px', marginTop: '10px' }}
      />
    </div>
  );
};

export default Details;
