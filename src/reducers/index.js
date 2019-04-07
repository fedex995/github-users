import { combineReducers } from 'redux';
import ui from './ui';
import user from './user';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

const history = createBrowserHistory();

const rootReducer = combineReducers({
    ui,
    user,
    router: connectRouter(history)
});

export default rootReducer