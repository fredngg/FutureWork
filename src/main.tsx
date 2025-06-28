import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ONLY ONE ROUTER HERE
import { HashRouter as Router } from 'react-router-dom'; // This is the ONLY router you should import and use

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* This is the ONLY place you should render a Router component */}
    <Router>
      <App />
    </Router>
  </StrictMode>
);