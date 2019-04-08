import {GET_USER_RESPONSE} from "../actions";

/*
    Save the user's previous searches.
 */

//TODO use redux-persist to persist the whole state
const initialState = localStorage["history"] ? JSON.parse(localStorage["history"]) : {
    allIds: [],
    byId: {}
};

const history = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_RESPONSE:
            const newState = {
                // Check if the username is already present in the history list.
                allIds: state.allIds.indexOf(action.user.login) === -1 ? [action.user.login].concat(state.allIds) : state.allIds,
                byId: {
                    ...state.byId,
                    [action.user.login]: {
                        ...action.user,
                        visited: state.byId[action.user.login] ? state.byId[action.user.login].visited + 1 : 1,
                        visited_at: Date.now()
                    }
                }
            };
            // TODO handle pagination or limit the amount of users saved in history.
            newState.allIds.sort((a, b) => newState.byId[a].visited_at < newState.byId[b].visited_at ? 1 : -1);
            localStorage["history"] = JSON.stringify(newState);
            return newState;
        default: return state;
    }
};

export default history;