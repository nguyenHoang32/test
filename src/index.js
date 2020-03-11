import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducer/allReducers';
import counterReducers from './reducer/counter';
import { Provider } from 'react-redux';
const store = createStore(
    counterReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
