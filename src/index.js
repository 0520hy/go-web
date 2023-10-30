import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './Ch_09/LandingPage'
import Button from './Ch_09/Button'
import EventPractice from './Ch_08/EventPractice';

ReactDOM.render(
  <React.StrictMode>
    <LandingPage/>
    <Button/>
    <EventPractice/>
  </React.StrictMode>,
  document.getElementById('root')
);
