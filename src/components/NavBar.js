// NavBar.js
import React from "react";
import { Link } from "react-router-dom";

function NavBar({ isLoggedIn, onLogout }) {
  return (
    <nav>
      <ul className="container flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/listings">Browse Listings</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/CreateListing">Add Item</Link>
            </li>
            <li>
              <Link to="/" onClick={onLogout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
