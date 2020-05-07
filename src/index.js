import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { searchReducer } from './reducers/searchReducer';
import { BrowserRouter as Router } from 'react-router-dom';
import { saveState, loadState } from './utils/localStorage';
import _ from 'lodash';

const persistedState = loadState();
const store = createStore(searchReducer, persistedState, applyMiddleware(thunk));

store.subscribe(_.throttle(() => {
  saveState({
    food: store.getState().food,
    error: store.getState().error,
    loading: store.getState().loading,
    limit: store.getState().limit
  })
}, 1000));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><Router><App /></Router></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
