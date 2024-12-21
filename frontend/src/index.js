import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css'; // Global styles

// Create a root element for rendering the React tree
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in the Redux Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);