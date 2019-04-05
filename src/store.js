import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from "./reducers";

const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    reducer,
    undefined,
    compose(applyMiddleware(thunk, logger, middleware))
);

export default {store, history};