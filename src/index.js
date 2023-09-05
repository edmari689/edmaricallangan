import React from 'react';
import ReactDOM from 'react-dom/client';
//stylesheets
import './looks/pageContent.css';
//import './looks/demo.css';
import './looks/navbar.css'; //https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/
import './looks/photostyle.css';

import App from './App';
import { BrowserRouter  } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals