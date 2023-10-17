import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NotificationList from './Ch-06/NotificationList';
import Counter from "./Ch_07/Counter"
import TextInputWithFocusButton from "./Ch_07/TextInputWithFocusButton"
import MeasureExample from './Ch_07/MeasureExample';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NotificationList /> */}
    {/* <Counter/> */}
    {/* <TextInputWithFocusButton/> */}
    <MeasureExample/>
  </React.StrictMode>,

);
