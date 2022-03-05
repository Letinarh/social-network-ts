import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {State} from './Redux/State'


ReactDOM.render(
  <React.StrictMode>
    <App State={State}/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
