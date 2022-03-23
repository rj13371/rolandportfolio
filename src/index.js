import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import './bootstrap.min.css';

ReactDOM.render(

  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById('root')
);

