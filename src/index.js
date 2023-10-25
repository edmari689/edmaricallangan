import React from 'react';
import ReactDOM from 'react-dom/client';
//stylesheets
import './looks/pageContent.css';
//import './looks/demo.css';
import './looks/navbar.css'; //https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/
import './looks/photostyle.css';
//import 'bootstrap/dist/css/bootstrap.min.css'; //https://react-bootstrap.github.io/docs/getting-started/introduction

import './looks/soundplayer.css';
import './looks/playerprogressbar.css';

import App from './App';
import { BrowserRouter  } from 'react-router-dom';

// IMPORTANT: Update and refine BrowserRouter with basename to land homepage instead of error page
// https://github.com/gitname/react-gh-pages/issues/3

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals