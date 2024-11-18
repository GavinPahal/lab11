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
      <img
        src={country.flags?.png}
        alt={`Flag of ${country.name.common}`}
        style={{ width: '100px', height: 'auto' }}
      />
      <p>
        <strong>Kingdom of:</strong> {country.name.official}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
      </p>
      <p>
        <strong>Located in:</strong> {country.region} {country.subregion ? `- ${country.subregion}` : ''}
      </p>
    </div>
  );
};

export default Details;
