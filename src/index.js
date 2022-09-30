import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from "react-ga4";
import { Provider } from 'react-redux';
import store from './redux/store';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import Reducer from './redux/reducers';

import App from './App';
import './index.css';


ReactGA.initialize("G-D6R3JSHHX1");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

