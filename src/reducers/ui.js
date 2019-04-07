import {GET_REPOS_REQUEST, GET_REPOS_RESPONSE, GET_USER_REQUEST, GET_USER_RESPONSE} from "../actions";

const initialState = {
    loadingUser: false,
    loadingRepos: false,
    showUserInfo: false
};

const ui = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_REQUEST: return {...state, loadingUser: true};
        case GET_USER_RESPONSE: return {...state, loadingUser: false, showUserInfo: true};
        case GET_REPOS_REQUEST: return {...state, loadingRepos: true};
        case GET_REPOS_RESPONSE: return {...state, loadingRepos: false};
        default: return state;

    }
};

export default ui;