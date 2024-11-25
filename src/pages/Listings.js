// Listings.js
import React from "react";
import { Link } from "react-router-dom";

const Listings = ({ listings }) => {
  return (
    <div className="container">
      <h2>Available Food Listings</h2>
      <div className="listings-grid">
        {listings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <img
              src={listing.imageSrc}
              alt={listing.title}
              className="listing-image"
            />
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            <Link to={`/details/${listing.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
