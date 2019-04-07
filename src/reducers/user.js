import {GET_USER_REQUEST, GET_USER_RESPONSE} from "../actions";

/*
    Save the info of the user found.
 */

const initialState = {};

const user = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_REQUEST: return {};
        case GET_USER_RESPONSE: return {...action.user};
        default: return state;
    }
};

export default user;