import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <BookingProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </BookingProvider>
  </BrowserRouter>
);
