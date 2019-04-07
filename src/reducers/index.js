import { combineReducers } from 'redux';
import ui from './ui';
import user from './user';
import repos from './repos';
import historyReducer from './history';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

const history = createBrowserHistory();

//TODO add i18n reducer for support with other languages
const rootReducer = combineReducers({
    ui,
    user,
    repos,
    history: historyReducer,
    router: connectRouter(history)
});

export default rootReducer