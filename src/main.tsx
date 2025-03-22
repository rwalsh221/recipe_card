import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './assets/css/reset.css';
import './assets/css/variable.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
