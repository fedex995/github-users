import {GET_USER_REQUEST} from "../actions";
import settings from "../settings";
import actions from "../actions";

const usersMiddleware = ({ dispatch, getState }) => next => action => {
    next(action);
    if (action.type === GET_USER_REQUEST) {
        fetch(settings.githubURL + action.username).then(res => res.json()).then(user => {
            console.log(user);
            dispatch(actions.getUsersResponse(user));
        })
    }
};

export default usersMiddleware;
