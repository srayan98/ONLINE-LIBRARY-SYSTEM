import { createSlice } from '@reduxjs/toolkit'; // Importing the createSlice function from Redux Toolkit to create a reducer slice
import { nanoid } from 'nanoid'; // Importing nanoid to generate unique IDs for new books

const initialState = [ // Defining the initial list of books as the starting state
  { id: '1', title: '1984', author: 'George Orwell', description: `The novel portrays a chilling vision of a totalitarian future where the government, led by the enigmatic "Big Brother," exercises absolute control over every aspect of citizens' lives.`, rating: 5, category: 'Sci-Fi' },
  { id: '2', title: 'Cosmos', author: 'Carl Sagan', description: 'The book traces the 15 billion years of cosmic evolution, from the Big Bang to the emergence of life and consciousness, highlighting the interconnectedness of science and human history.', rating: 4, category: 'Non-Fiction' },
  { id: '3', title: 'And Then There Were None', author: 'Agatha Cristie', description: 'This is the story of ten strangers, each lured to Indian Island by a mysterious host. Once his guests have arrived, the host accuses each person of murder.', rating: 4, category: 'Fiction'},
];

const booksSlice = createSlice({ // Creating a Redux slice for books
  name: 'books',
  initialState, // Setting the initial state using the array
  reducers: { // Defining the reducer functions
    addBook: (state, action) => {
      state.push({ id: nanoid(), ...action.payload }); // Push a new book into the state with a unique ID and the payload data
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;