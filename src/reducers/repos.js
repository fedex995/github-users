import {GET_REPOS_REQUEST, GET_REPOS_RESPONSE} from "../actions";

const initialState = [];

const ui = (state = initialState, action) => {
    switch(action.type) {
        case GET_REPOS_REQUEST: return [];
        case GET_REPOS_RESPONSE: return [...action.repos];
        default: return state;

    }
};

export default ui;