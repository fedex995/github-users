import {GET_USER_REQUEST, GET_USER_RESPONSE} from "../actions";

/*
    Save the user's previous searches.
 */

const initialState = [];

const history = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_RESPONSE: return state.concat([action.user]);
        default: return state;
    }
};

export default history;