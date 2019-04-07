import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from "./reducers";
import users from "./middlewares/users";

const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    reducer,
    undefined,
    compose(applyMiddleware(thunk, logger, middleware, users))
);

export default {store, history};