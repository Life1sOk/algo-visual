import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ActionContextProvider } from './context/action.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActionContextProvider>
      <App />
    </ActionContextProvider>
  </React.StrictMode>
);