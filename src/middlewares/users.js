import {GET_REPOS_REQUEST, GET_USER_REQUEST} from "../actions";
import settings from "../settings";
import actions from "../actions";
import {push} from "connected-react-router";
import {get} from "../utils/http";

/*
    User middleware, in charge of making the requests to github API and
    dispatching the action to the reducers.
 */
const usersMiddleware = ({ dispatch, getState }) => next => action => {
    next(action);
    if (action.type === GET_USER_REQUEST) {
        get(settings.githubURL + action.username).then(user => {
            console.log(user);
            dispatch(actions.getUserResponse(user));
            dispatch(actions.getReposRequest(user.repos_url));
            dispatch(push("/user"))
        }).catch(err => dispatch(actions.getUserError(err)))
    }

    if (action.type === GET_REPOS_REQUEST) {
        //TODO manage the possibility of pagination for reports
        get(action.reposUrl).then(repos => {
            dispatch(actions.getReposResponse(repos));
        }).catch(err => dispatch(actions.getReposError(err)));
    }
};

export default usersMiddleware;
