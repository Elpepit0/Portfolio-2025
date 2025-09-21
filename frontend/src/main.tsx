import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CursorProvider } from './context/CursorContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PayPalScriptProvider options={{ clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID || 'test', currency: 'EUR' }}>
      <CursorProvider>
        <App />
      </CursorProvider>
    </PayPalScriptProvider>
  </React.StrictMode>,
);
