import React from 'react';
import ReactDOM from 'react-dom';
// import ReactGA from "react-ga4";
import GA4React from "ga-4-react";

import { Provider } from 'react-redux';
import store from './redux/store';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import Reducer from './redux/reducers';

import App from './App';
import './index.css';


// ReactGA.initialize("G-D6R3JSHHX1");
const ga4react = new GA4React("G-D6R3JSHHX1");
ga4react.initialize().then().catch()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

try {
  setTimeout(_ => {
    const ga4react = new GA4React("G-XXXXXXXXXX");
    ga4react.initialize().catch(err => console.error(err));
  }, 4000);
} catch (err) {
      console.error(err);
}
