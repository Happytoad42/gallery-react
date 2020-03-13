import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducer'
import App from './App';

const initialState = {
    images: [],
    currentPage: 1,
    activeImage: null,
    loading: false
}

const globalStore = createStore(
    reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={globalStore}>
        <App />
    </Provider>, 
document.getElementById('root'));