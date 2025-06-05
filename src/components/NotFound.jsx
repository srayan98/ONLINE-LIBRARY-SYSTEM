import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom for navigation

const NotFound = () => ( // Define a functional component named NotFound
  // Return JSX that renders when the page is not found
  <div> 
    <h2>404 - Page Not Found</h2>
    <Link to="/">Return Home</Link>
  </div>
);

export default NotFound;