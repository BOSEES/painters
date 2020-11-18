import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthServiece from './service/auth_service';


const authService = new AuthServiece;
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);