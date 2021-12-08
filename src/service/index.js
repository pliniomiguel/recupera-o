import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/home.js';
import reportWebVitals from '../reportWebVitals';
import Styled from '../pages/styled';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Styled />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
