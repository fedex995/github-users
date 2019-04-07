import {GET_REPOS_REQUEST, GET_REPOS_RESPONSE, GET_USER_ERROR, GET_USER_REQUEST, GET_USER_RESPONSE} from "../actions";

/*
    This reducer handles all flags for UI states (loaders, error messages, etc).
 */

const initialState = {
    loadingUser: false,
    loadingRepos: false,
    userNotFound: false,
    showUserInfo: false
};

const ui = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_REQUEST: return {...state, loadingUser: true, userNotFound: false};
        case GET_USER_RESPONSE: return {...state, loadingUser: false, showUserInfo: true};
        // TODO distinguish between different type of errors.
        case GET_USER_ERROR: return {...state, loadingUser: false, userNotFound: true};

        case GET_REPOS_REQUEST: return {...state, loadingRepos: true};
        case GET_REPOS_RESPONSE: return {...state, loadingRepos: false};
        default: return state;

    }
};

export default ui;