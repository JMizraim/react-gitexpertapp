import React from 'react';
import {createRoot} from 'react-dom/client';
import {GiftExpertApp} from './GifExpertApp';
import './index.css';
import 'animate.css';


  
  const container = document.getElementById('root');
  const root = createRoot(container);

  root.render(<GiftExpertApp/ >)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals