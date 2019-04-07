export const GET_USER_REQUEST = 'GET_USERS_REQUEST';
export const GET_USER_RESPONSE = 'GET_USERS_RESPONSE';
export const GET_USER_ERROR = 'GET_USERS_ERROR';

export default {
    getUsers: (username) => ({type: GET_USER_REQUEST, username}),
    getUsersResponse: (user) => ({type: GET_USER_RESPONSE, user})

};