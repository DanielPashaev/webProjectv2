// ItemDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const ItemDetails = ({ listings }) => {
  const { id } = useParams();
  const item = listings.find((listing) => listing.id === parseInt(id));

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="item-details-container">
      <div className="item-details-card">
        <h2>{item.title}</h2>
        <img
          src={item.imageSrc}
          alt={item.title}
          className="item-details-image"
        />
        <p>
          <strong>Description:</strong> {item.description}
        </p>
        <p>
          <strong>Quantity:</strong> {item.quantity}
        </p>
        <p>
          <strong>Expires On:</strong> {item.expirationDate}
        </p>
        <p>
          <strong>Location:</strong> {item.location}
        </p>
        <p>
          <strong>Contact:</strong> {item.contactInfo}
        </p>
      </div>
    </div>
  );
};

export default ItemDetails;
