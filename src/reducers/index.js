import { combineReducers } from 'redux';
import ui from './ui';
import user from './user';
import repos from './repos';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

const history = createBrowserHistory();

const rootReducer = combineReducers({
    ui,
    user,
    repos,
    router: connectRouter(history)
});

export default rootReducer