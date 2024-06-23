import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store/store';
import { Provider } from "react-redux";

// Create a root element for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React application
root.render(
  <React.StrictMode>
    {/* Provide the Redux store to the entire app */}
    <Provider store={store}>
      <App />
  
    </Provider>
  </React.StrictMode>
);

// Measure and report web vitals for performance tracking
reportWebVitals();
