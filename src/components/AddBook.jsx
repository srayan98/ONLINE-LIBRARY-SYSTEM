import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Importing useDispatch to dispatch Redux actions
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for redirecting users after form submission
import { addBook } from '../utils/booksSlice';
import "./AddBook.css"

const AddBook = () => {
  const [form, setForm] = useState({ title: '', author: '', description: '', rating: '', category: '' });  // Setting up state to track form fields like title, author.
  const [error, setError] = useState(''); // State to store and show error messages if form validation fails
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });   // Function to update form state when input fields change
  // Update the field being edited
  const handleSubmit = e => { // Function to handle form submission
    e.preventDefault(); // Prevent default form submission behavior
    if (Object.values(form).some(v => !v)) {  // Check if any form field is empty
      setError('All fields are required'); // Show error message
      return;
    }
    dispatch(addBook({ ...form, rating: parseInt(form.rating) })); // Dispatch the addBook action with form data (convert rating to number)
    navigate('/books');   // Navigate to the books list page after successful submission
  };

  return ( // JSX to render the form on the page
    <form className="add-book-container" onSubmit={handleSubmit}>
      <h2>Add a Book</h2>
      <br /><br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <br /><br /><br />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
      <br /><br /><br />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <br /><br /><br />
      <input name="rating" type="number" placeholder="Rating" value={form.rating} onChange={handleChange} />
      <br /><br /><br />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <br /><br /><br />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;