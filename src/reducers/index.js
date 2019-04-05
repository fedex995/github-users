import { combineReducers } from 'redux';
import ui from './ui';
import users from './users';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

const history = createBrowserHistory();

const rootReducer = combineReducers({
    ui,
    users,
    router: connectRouter(history)
});

export default rootReducer