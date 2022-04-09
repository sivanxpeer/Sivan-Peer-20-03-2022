import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './redux/reducers';

import App from './App';
import './index.css';

// import promiseMiddleware from 'redux-promise';
// import {defaultState} from "./redux/reducers/"

// const store = createStore(reducers, {}, applyMiddleware(promiseMiddleware))
// const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

//anothe way:
export const store = createStore(Reducer, {}, applyMiddleware(thunk))
console.log(store.getState().mainPage)
// const store = createStore(Reducer,)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

