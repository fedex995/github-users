export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_RESPONSE = 'GET_USERS_RESPONSE';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export default {
    getUsers: (filter) => ({type: GET_USERS_REQUEST, filter})

};