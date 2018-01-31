// React imports
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

// Redux imports
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';

// Custom imports
import LoggerMiddleware from './redux/Logger.middleware';
import AllReducers from './redux/AllReducers';
import App from './components/App';
import './style/index.scss';

// Extensão Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Configurando Redux Store
const store = createStore(
    AllReducers,
    composeEnhancers(
        applyMiddleware(ReduxThunk, LoggerMiddleware)
    )
);

// Aplicando a Redux Store e o Router à aplicação
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();