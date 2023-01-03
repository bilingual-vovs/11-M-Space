import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Components/App';

import { Provider } from 'react-redux';
import { reducer } from "./Reducer.js"
import { createStore } from "redux"

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
