import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Importing hook from react-redux to access Redux store state
import "./BookDetails.css"

const BookDetails = () => {
  const { id } = useParams(); // useParams hook gets the 'id' from the URL
  const navigate = useNavigate();  // useNavigate hook lets us navigate to other routes
  const book = useSelector(state => state.books.find(b => b.id === id)); // useSelector retrieves the book with matching id from the Redux store

  if (!book) return <p>Book not found.</p>; // If no book is found with that id, show a "Book not found" message

  return ( // If the book is found, return its details
    <div className="details-container">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating}</p>
      <button className="back-button" onClick={() => navigate('/books')}>Back to Browse</button> {/* Button to go back to the Browse Books page when clicked*/}
    </div>
  );
};

export default BookDetails;