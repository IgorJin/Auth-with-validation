import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
  )

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

