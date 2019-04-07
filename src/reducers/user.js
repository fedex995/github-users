import {GET_USER_RESPONSE} from "../actions";

const initialState = {};

const user = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_RESPONSE: return {...action.user};
        default: return state;
    }
};

export default user;