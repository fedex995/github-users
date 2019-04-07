import {GET_USER_REQUEST} from "../actions";
import settings from "../settings";
import actions from "../actions";
import {push} from "connected-react-router";

const usersMiddleware = ({ dispatch, getState }) => next => action => {
    next(action);
    if (action.type === GET_USER_REQUEST) {
        fetch(settings.githubURL + action.username).then(res => res.json()).then(user => {
            console.log(user);
            dispatch(actions.getUsersResponse(user));
            dispatch(push("/user"))
        })
    }
};

export default usersMiddleware;
