import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import './index.css';

import setupContext from 'contexts/setupContext';
import { apiSetup } from 'servises/handlerApi';

//console.log('index.js', apiSetup);

ReactDOM.createRoot(document.getElementById('root')).render(
  //  <React.StrictMode>
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <setupContext.Provider value={apiSetup}>
      <App />
    </setupContext.Provider>
  </BrowserRouter>
  //  </React.StrictMode>
);
