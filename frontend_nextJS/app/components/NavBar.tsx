"use client"; // Enable client-side interactivity

import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Adjust the path as needed

function NavBar() {
  const { isLoggedIn, onLogout } = useContext(AuthContext); // Access auth state

  return (
    <nav>
      <ul className="container flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/listings">Browse Listings</Link>
        </li>
        {isLoggedIn ? ( // Conditional rendering based on login status
          <>
            <li>
              <Link href="/create-listing">Add Item</Link>
            </li>
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
