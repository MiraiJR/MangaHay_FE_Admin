import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './asset/style/constant.css'
import reportWebVitals from './reportWebVitals';
import { App } from './component/app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

reportWebVitals();
