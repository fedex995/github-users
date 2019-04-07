import {GET_USER_REQUEST, GET_USER_RESPONSE} from "../actions";

const initialState = {
    loadingUser: false,
    showUserInfo: false
};

const ui = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_REQUEST: return {...state, loadingUser: true};
        case GET_USER_RESPONSE: return {...state, loadingUser: false, showUserInfo: true};
        default: return state;

    }
};

export default ui;