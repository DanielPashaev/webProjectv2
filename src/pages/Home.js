// Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = ({ listings = [] }) => {
  return (
    <div>
      <section className="hero">
        <div>
          <h1>Reduce Food Waste, Share What You Can!</h1>
          <p>
            Join us in making the world a better place by donating or requesting
            food today.
          </p>
          <Link to="/listings" className="btn">
            Browse Listings
          </Link>
        </div>
      </section>
      <div className="container">
        <h2>Available Items</h2>
        <div className="listings-grid">
          {listings.map((item) => (
            <div key={item.id} className="listing-card">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="listing-image"
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
