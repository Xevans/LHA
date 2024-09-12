import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { PublisherProvider } from './contexts/publisher.context';
import { YearProvider } from './contexts/yearContext.context';
import { DecadeProvider } from './contexts/decadeContext.context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PublisherProvider>
      <YearProvider>
        <DecadeProvider>
          <BrowserRouter>         
            <App />
          </BrowserRouter>
        </DecadeProvider>
      </YearProvider>
    </PublisherProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
