import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom for navigation
import "./NotFound.css"

const NotFound = () => ( // Define a functional component named NotFound
  // Return JSX that renders when the page is not found
  <div className="notfound-container"> 
    <h2>404 - Page Not Found</h2>
    <Link to="/">Return Home</Link>
  </div>
);

export default NotFound;