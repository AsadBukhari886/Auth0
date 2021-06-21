import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';
import Auth_provider_with_history from './auth/Auth_provider_with_history.jsx';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
  <Auth_provider_with_history>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth_provider_with_history>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
