import {GET_REPOS_REQUEST, GET_REPOS_RESPONSE} from "../actions";

/*
    Save the repos of the selected user
 */
const initialState = [];

const ui = (state = initialState, action) => {
    switch(action.type) {
        case GET_REPOS_REQUEST: return [];
        case GET_REPOS_RESPONSE: return [...action.repos];
        default: return state;

    }
};

export default ui;