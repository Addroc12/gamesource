import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// redux setup
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {Route,BrowserRouter} from 'react-router-dom'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducer,composeEnhancer(applyMiddleware(thunk))
);


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
