"use client";

import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

export default function CreateListing() {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  // Redirect to login if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, router]); // Dependencies ensure it re-runs when either changes

  // Show nothing while redirecting
  if (!isLoggedIn) {
    return null;
  }

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    quantity: "",
    expirationDate: "",
    location: "",
    contactInfo: "",
    imageSrc: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/listings");
      } else {
        console.error("Error creating listing");
        alert("Failed to create listing.");
      }
    } catch (error) {
      console.error("Error creating listing:", error);
    }
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
            type="number"
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
            type="url"
            name="imageSrc"
            value={formData.imageSrc}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
}
