import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => ( //returning a navigation bar in the header section with links to each page
  <nav>
    <Link to="/">Home</Link> | <Link to="/books">Browse Books</Link> | <Link to="/add">Add Book</Link>
  </nav>
);

export default Header;