import React from 'react';
import { createRoot } from 'react-dom/client';// Importing createRoot to render the React app into the DOM
import { Provider } from 'react-redux'; // Importing Provider to connect the Redux store
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import store from './utils/store';

const container = document.getElementById('root'); // Rendering the React app into the root container
const root = createRoot(container);
root.render( // Wrapping the app with Redux Provider so all components can access the store
  <Provider store={store}> 
    <Router>   {/*Wrapping with Router so that router based navigaion can be utilised*/}
      <App />
    </Router>
  </Provider>
);