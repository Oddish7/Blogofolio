import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/reset.scss'
import './styles/common.scss'

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { appStore } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Provider store={appStore}>
              <App />
      </Provider>

    </BrowserRouter>
  </React.StrictMode>
);

