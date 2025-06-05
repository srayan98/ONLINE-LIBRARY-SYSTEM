import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import BrowseBooks from './components/BrowseBooks.jsx';
import BookDetails from './components/BookDetails.jsx';
import AddBook from './components/AddBook.jsx';
import NotFound from './components/NotFound.jsx';
import "./App.css"

const App = () => ( // Define the main App component using an arrow function
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BrowseBooks />} />
      <Route path="/books/:category" element={<BrowseBooks />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/add" element={<AddBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
