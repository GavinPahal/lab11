import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const { state } = useLocation();
  const { country } = state || {};

  if (!country) {
    return <p>Country data not available.</p>;
  }

  return (
    <div className="details-container">
      <h2 className="country-name">{country.name.common}</h2>
      <img
        src={country.flags?.png}
        alt={`Flag of ${country.name.common}`}
        className="flag"
      />
      <p className="official-name">
      </p>
      <p className="capital">
        <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
      </p>
      <p className="location">
        <strong>Located in:</strong> {country.region} {country.subregion ? `- ${country.subregion}` : ''}
      </p>
    </div>
  );
};

export default Details;
