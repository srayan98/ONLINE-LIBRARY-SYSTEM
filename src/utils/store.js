import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';

const store = configureStore({  // Create a Redux store using configureStore
  // Define the reducer that will handle the "books" part of the state
  reducer: {
    books: booksReducer, // Assign booksReducer to manage 'books' state
  },
});
export default store;