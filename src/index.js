import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import {ConnectedRouter} from "connected-react-router";
import './styles.css';

ReactDOM.render(
    <Provider store={store.store}>
        <ConnectedRouter history={store.history}>
            {Routes}
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root')
);
