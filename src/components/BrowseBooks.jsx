import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const BrowseBooks = () => { // Define the BrowseBooks functional component
  const books = useSelector(state => state.books); // Access the booklist from Redux state
  const { category } = useParams(); // Extract the category parameter from the URL
  const [search, setSearch] = useState(''); // Create a state variable for search input which is empty in the initial stage

  const filtered = books.filter(book => { // Filter books based on category and search input
    return (
      (!category || book.category === category) &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||   // Check if the title includes the search text (case-insensitive)
       book.author.toLowerCase().includes(search.toLowerCase()))  // OR check if the author's name includes the search text
    );
  });

  return (
    <div>
      <h1>Browse Books</h1>
      <input type="text" placeholder="Search by title or author" value={search} onChange={e => setSearch(e.target.value)} />
      <ul> {/* Display the filtered list of books */}
        {filtered.map(book => (
          <li key={book.id}>
            {book.title} by {book.author} - <Link to={`/book/${book.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;