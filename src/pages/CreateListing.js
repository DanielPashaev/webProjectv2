// CreateListing.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateListing = ({ addListing }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    quantity: "",
    expirationDate: "",
    location: "",
    contactInfo: "",
    imageSrc: "", // New field for image source
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addListing(formData); // Add new listing with image source
    setFormData({
      title: "",
      description: "",
      quantity: "",
      expirationDate: "",
      location: "",
      contactInfo: "",
      imageSrc: "",
    });
    navigate("/listings"); // Redirect to listings page after adding
  };

  return (
    <div className="create-listing">
      <h2>Create a New Food Listing</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Quantity (e.g., kg, pieces):
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Expiration Date:
          <input
            type="date"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Information:
          <input
            type="text"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="imageSrc"
            value={formData.imageSrc}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
          />
        </label>
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
};

export default CreateListing;
