import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./routes/App.jsx";
import reportWebVitals from './reportWebVitals';
// Import Google Analytics
import ReactGA from 'react-ga';
const TRACKING_ID = "G-X3DY82NWV8"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.event({
  category: 'User',
  action: 'Created an Account'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tab="home"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
