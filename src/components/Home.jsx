import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi']; // Defining an array of book categories to display on the home page
const popular = [ // Defining the list of books that would be showcased in the Homepage with their unique ids
  { id: '1', title: '1984' },
  { id: '2', title: 'Cosmos' },
  { id: '3', title: 'And then there were none'},
];

const Home = () => (
  <div className="home-container">
    <h1>Welcome to the Online Library</h1>
    <h2 className="categories">Categories</h2>
    <ul className="category">
      {categories.map(cat => ( //traversing through each of the categories and displaying it in the link form
        <li key={cat}><Link to={`/books/${cat}`}>{cat}</Link></li>
      ))}
    </ul>
    <h2 className="popular-books">Popular Books</h2>
    <ul className="book-card">
      {popular.map(book => (
        <li key={book.id}><Link to={`/book/${book.id}`}>{book.title}</Link></li> // Looping through each popular book and displaying it in the link form
      ))}
    </ul>
  </div>
);

export default Home;